import {
  createSession, dueReviews, jakartaDay, materialKey, parseProgress, repeatSession,
} from "./learning.mjs";
import { createProgressStore } from "./progress.mjs";

const backupByteLimit = 1024 * 1024;
const reviewDateFormat = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
  timeZone: "UTC",
});

function dateLabel(day) {
  return reviewDateFormat.format(new Date(`${day}T00:00:00Z`));
}

function saveBackupFile(raw) {
  const url = URL.createObjectURL(new Blob([raw], { type: "application/json" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `maqra500-progres-${jakartaDay()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function newId() {
  if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) =>
    byte.toString(16).padStart(2, "0")).join("");
}

export function mountPractice(container, { unit, materials, onRecallChange }) {
  const current = materialKey({
    collectionId: unit.collectionId,
    number: unit.number,
    sourceSha256: unit.sourceSha256,
    arabicPages: unit.pdfPages,
  });
  const material = materials.find((item) => materialKey(item) === current);
  if (!material) throw new Error("Materi latihan tidak sesuai dengan hadis yang dibuka.");
  const store = createProgressStore(materials);

  container.innerHTML = `
    <h2>Hafalan dan murajaah</h2>
    <p>Baca sanad dan matan, lalu ulangi dari ingatan. Setelah target tercapai, pilih waktu untuk mengulang lagi.</p>
    <div class="practice-actions">
      <label for="practice-target">Target pengulangan
        <select id="practice-target">
          <option value="5">5 kali</option>
          <option value="10">10 kali</option>
        </select>
      </label>
      <button type="button" id="practice-start">Mulai latihan</button>
    </div>
    <div id="practice-session" hidden>
      <p id="practice-count" aria-live="polite"></p>
      <progress id="practice-meter" value="0" max="5" aria-label="Pengulangan bacaan"></progress>
      <p id="practice-recall-note" hidden>Coba baca dari ingatan. Tampilkan kembali teks Arab untuk mencocokkan bacaan.</p>
      <div class="practice-actions">
        <button type="button" id="practice-repeat">Sudah mengulang</button>
        <button type="button" id="practice-conceal" aria-pressed="false">Tutup teks Arab</button>
        <button type="button" id="practice-cancel">Batalkan latihan</button>
      </div>
      <fieldset id="practice-assessment">
        <legend>Nilai kelancaran sendiri</legend>
        <div class="practice-actions">
          <button type="button" id="practice-rate-repeat">Ulang hari ini</button>
          <button type="button" id="practice-rate-tomorrow">Ulang besok</button>
          <button type="button" id="practice-rate-three-days">Ulang 3 hari lagi</button>
        </div>
      </fieldset>
    </div>
    <p id="practice-status" role="status"></p>
    <p id="practice-error" role="alert" class="notice" hidden></p>
    <p id="practice-latest" hidden></p>
    <h3>Jadwal murajaah</h3>
    <p id="practice-due-empty">Memuat jadwal…</p>
    <ul id="practice-due-list" hidden></ul>
    <details class="practice-backup">
      <summary>Cadangan progres</summary>
      <p>Progres tersimpan di browser ini. Unduh cadangan untuk dipakai di perangkat lain.</p>
      <div class="practice-actions">
        <button type="button" id="practice-export">Unduh cadangan</button>
        <label for="practice-import">Pilih cadangan JSON
          <input id="practice-import" type="file" accept=".json,application/json">
        </label>
      </div>
      <div id="practice-import-preview" hidden>
        <p id="practice-import-summary"></p>
        <div class="practice-actions">
          <button type="button" id="practice-import-confirm">Gabungkan cadangan</button>
          <button type="button" id="practice-import-cancel">Batalkan impor</button>
        </div>
      </div>
    </details>
  `;
  const field = (id) => container.querySelector(`#practice-${id}`);
  const target = field("target");
  const active = field("session");
  const start = field("start");
  const repeat = field("repeat");
  const conceal = field("conceal");
  const cancel = field("cancel");
  const assessment = field("assessment");
  const importFile = field("import");
  const preview = field("import-preview");
  const confirmImport = field("import-confirm");
  let session;
  let concealed = false;
  let busy = false;
  let pendingBackup;
  let selectedFile = 0;
  let reading = 0;

  function showError(message) {
    field("error").textContent = message;
    field("error").hidden = !message;
  }

  function setConcealed(value) {
    concealed = value;
    conceal.textContent = concealed ? "Tampilkan teks Arab" : "Tutup teks Arab";
    conceal.setAttribute("aria-pressed", String(concealed));
    field("recall-note").hidden = !concealed;
    onRecallChange?.(concealed);
  }

  function renderSession() {
    active.hidden = session === undefined;
    start.disabled = busy || Boolean(session);
    target.disabled = busy || Boolean(session);
    repeat.disabled = busy || !session || session.repetitions >= session.target;
    conceal.disabled = busy || !session;
    cancel.disabled = busy || !session;
    assessment.disabled = busy || !session || session.repetitions < session.target;
    field("export").disabled = busy;
    importFile.disabled = busy;
    confirmImport.disabled = busy;
    field("import-cancel").disabled = busy;
    if (session) {
      field("count").textContent = `${session.repetitions} dari ${session.target} pengulangan`;
      field("meter").max = session.target;
      field("meter").value = session.repetitions;
    }
  }

  function renderSchedule(progress) {
    const latest = progress.sessions.reduce((newest, record) =>
      materialKey(record.material) === current &&
        (!newest || record.completedAt >= newest.completedAt) ? record : newest, null);
    const latestNote = field("latest");
    latestNote.hidden = !latest;
    latestNote.textContent = latest ? `Murajaah berikutnya ${dateLabel(latest.dueOn)}.` : "";

    const due = dueReviews(progress, materials);
    const list = field("due-list");
    list.replaceChildren(...due.map((item) => {
      const link = document.createElement("a");
      const number = String(item.material.number).padStart(3, "0");
      link.href = `?hadis=${number}`;
      link.textContent = `Hadis ${number} · ${dateLabel(item.dueOn)}`;
      const li = document.createElement("li");
      li.append(link);
      return li;
    }));
    field("due-empty").hidden = due.length > 0;
    field("due-empty").textContent = "Belum ada hadis yang jatuh tempo.";
    list.hidden = due.length === 0;
  }

  async function refresh() {
    const request = ++reading;
    try {
      const progress = await store.read();
      if (request === reading) renderSchedule(progress);
    } catch (error) {
      if (request === reading) {
        field("latest").hidden = true;
        field("due-list").hidden = true;
        field("due-empty").hidden = false;
        field("due-empty").textContent = "Jadwal murajaah belum bisa dibuka.";
        field("due-empty").title = error.message;
      }
    }
  }

  async function run(action) {
    if (busy) return;
    busy = true;
    showError("");
    field("status").textContent = "";
    renderSession();
    try {
      await action();
    } catch (error) {
      showError(error.message);
    } finally {
      busy = false;
      renderSession();
    }
  }

  start.addEventListener("click", () => {
    showError("");
    field("status").textContent = "";
    session = createSession(material, Number(target.value), { id: newId() });
    setConcealed(false);
    renderSession();
    repeat.focus();
  });
  repeat.addEventListener("click", () => {
    if (!session) return;
    session = repeatSession(session);
    renderSession();
    if (session.repetitions === session.target) field("rate-repeat").focus();
  });
  conceal.addEventListener("click", () => setConcealed(!concealed));
  cancel.addEventListener("click", () => {
    session = undefined;
    setConcealed(false);
    renderSession();
    start.focus();
  });

  for (const [button, rating] of [
    ["rate-repeat", "repeat"],
    ["rate-tomorrow", "tomorrow"],
    ["rate-three-days", "three_days"],
  ]) {
    field(button).addEventListener("click", () => run(async () => {
      if (!session || session.repetitions < session.target) return;
      const progress = await store.save(session, rating);
      reading += 1;
      renderSchedule(progress);
      session = undefined;
      setConcealed(false);
      field("status").textContent = "Latihan tersimpan.";
      void refresh();
    }));
  }

  field("export").addEventListener("click", () => run(async () => {
    saveBackupFile(await store.exportBackup());
  }));

  function clearBackup() {
    selectedFile += 1;
    pendingBackup = undefined;
    preview.hidden = true;
    importFile.value = "";
  }

  importFile.addEventListener("change", async () => {
    const file = importFile.files[0];
    clearBackup();
    showError("");
    if (!file) return;
    const selection = selectedFile;
    try {
      if (file.size > backupByteLimit) throw new Error("Ukuran cadangan melebihi 1 MiB.");
      const raw = await file.text();
      if (selection !== selectedFile) return;
      const content = parseProgress(raw, materials);
      pendingBackup = raw;
      field("import-summary").textContent =
        `Cadangan berisi ${content.sessions.length} sesi. Gabungkan dengan riwayat di browser ini?`;
      preview.hidden = false;
    } catch (error) {
      if (selection === selectedFile) showError(error.message);
    }
  });

  confirmImport.addEventListener("click", () => run(async () => {
    if (pendingBackup === undefined) return;
    const progress = await store.mergeBackup(pendingBackup);
    reading += 1;
    renderSchedule(progress);
    clearBackup();
    field("status").textContent = "Cadangan sudah digabungkan.";
    void refresh();
  }));
  field("import-cancel").addEventListener("click", clearBackup);

  const unsubscribe = store.subscribe(refresh);
  window.addEventListener("focus", refresh);
  renderSession();
  void refresh();
  return () => {
    unsubscribe();
    window.removeEventListener("focus", refresh);
    reading += 1;
  };
}
