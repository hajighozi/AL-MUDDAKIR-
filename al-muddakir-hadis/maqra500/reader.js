import { createMaterial } from "./learning.mjs";
import { mountPractice } from "./practice.mjs";
import { mountQuiz } from "./quiz.mjs";

const get = (id) => document.getElementById(id);
const formatNumber = (number) => String(number).padStart(3, "0");
const readingStages = ["arab", "terjemahan", "syarah"];
const stageLabels = { arab: "Arab", terjemahan: "Terjemahan", syarah: "Syarah" };
const stageButtons = [...document.querySelectorAll("[data-stage]")];
const bookmarkKey = "al-muddakir.maqra500.bookmark.v1";
let stage = "arab";

function showStage(nextStage) {
  stage = nextStage;
  for (const name of readingStages) get(`stage-${name}`).hidden = name !== stage;
  for (const button of stageButtons) {
    button.setAttribute("aria-pressed", String(button.dataset.stage === stage));
  }
  const next = readingStages[readingStages.indexOf(stage) + 1];
  get("next-stage").hidden = next === undefined;
  get("next-stage").textContent = next ? `Lanjut ke ${stageLabels[next].toLowerCase()}` : "";
}

function setRecall(concealed) {
  get("reading-content").hidden = concealed;
  get("recall-notice").hidden = !concealed;
  for (const button of stageButtons) button.disabled = concealed;
  showStage("arab");
}

function mountBookmark(unit, source, units) {
  const resume = get("resume-reading");
  function refresh() {
    resume.hidden = true;
    try {
      const saved = JSON.parse(localStorage.getItem(bookmarkKey) ?? "null");
      if (saved?.sourceSha256 !== source.sha256 || !readingStages.includes(saved.stage) ||
          !units.some(({ number }) => saved.number === number)) return;
      const id = formatNumber(saved.number);
      resume.href = `?hadis=${id}&bagian=${saved.stage}`;
      resume.textContent = `Lanjutkan hadis ${id} · ${stageLabels[saved.stage]}`;
      resume.hidden = false;
    } catch {
      // Reading remains available if the browser blocks local storage.
    }
  }
  get("save-reading").addEventListener("click", () => {
    try {
      localStorage.setItem(bookmarkKey, JSON.stringify({ sourceSha256: source.sha256, number: unit.number, stage }));
      get("bookmark-status").textContent = "Tempat baca disimpan di browser ini.";
      refresh();
    } catch {
      get("bookmark-status").textContent = "Tempat baca belum dapat disimpan di browser ini.";
    }
  });
  window.addEventListener("storage", (event) => {
    if (event.key === bookmarkKey || event.key === null) refresh();
  });
  refresh();
}

async function readJson(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

function showUnit(unit, source, id) {
  get("hadith-title").textContent = `Hadis ${id} · ${unit.title}`;
  get("hadith-reference").textContent = `${unit.collection} ${unit.reference.hadithNumber}`;
  get("hadith-chapter").textContent = `${unit.book} · ${unit.chapter}`;
  get("hadith-sanad").replaceChildren(...unit.arabic.sanadLines.map((line) => {
    const paragraph = document.createElement("p");
    paragraph.className = "arabic";
    paragraph.lang = "ar";
    paragraph.dir = "rtl";
    paragraph.textContent = line;
    return paragraph;
  }));
  get("hadith-matn").textContent = unit.arabic.matn;
  get("hadith-translation").textContent = unit.translation.text;
  get("study-notes").href = `notes/hadis-${id}.md`;
  get("sharh-status").textContent = unit.sharh ?? "Syarah Kitabpedia masih menunggu cuplikan yang dapat diperiksa.";
  get("source-location").textContent = `${source.fileName} · halaman ${unit.pdfPages.join(", ")} dari ${source.pageCount}`;
  get("source-hash").textContent = source.sha256;
  get("reference-notes").textContent = unit.reference.checkedAgainst;

  const reference = new URL(unit.reference.url);
  if (reference.protocol !== "https:") throw new Error("Rujukan harus menggunakan HTTPS.");
  get("reference-link").href = reference.href;
  get("hadith").hidden = false;
}

async function start() {
  try {
    const { source, units } = await readJson("catalog.json");
    const params = new URLSearchParams(location.search);
    const requested = params.get("hadis");
    const selected = requested === null ? units[0] : units.find(({ number }) => formatNumber(number) === requested);
    const links = units.map(({ number, title }) => {
      const id = formatNumber(number);
      const link = document.createElement("a");
      link.href = `?hadis=${id}`;
      link.textContent = id;
      link.setAttribute("aria-label", `Hadis ${id}, ${title}`);
      if (number === selected?.number) link.setAttribute("aria-current", "page");
      return link;
    });
    get("hadith-list").replaceChildren(...links);
    get("hadith-list").hidden = false;

    if (!selected) {
      get("load-error").textContent = "Nomor ini belum tersedia. Pilih hadis dari daftar.";
      get("load-error").hidden = false;
      return;
    }
    const id = formatNumber(selected.number);
    const unit = await readJson(`units/${id}.json`);
    if (unit.collectionId !== "MQ500" || unit.number !== selected.number ||
        unit.sourceId !== source.id || unit.sourceSha256 !== source.sha256 ||
        !Array.isArray(unit.pdfPages) || unit.pdfPages.length !== selected.pdfPages.length ||
        unit.pdfPages.some((page, index) => page !== selected.pdfPages[index])) {
      throw new Error("Identitas catatan tidak cocok dengan daftar.");
    }
    const materials = units.map(({ number, pdfPages }) => createMaterial(
      { collectionId: "MQ500", source }, { number, arabicPages: pdfPages },
    ));
    showUnit(unit, source, id);
    const initialStage = params.get("bagian");
    showStage(readingStages.includes(initialStage) ? initialStage : "arab");
    for (const button of stageButtons) {
      button.addEventListener("click", () => showStage(button.dataset.stage));
    }
    get("next-stage").addEventListener("click", () => {
      showStage(readingStages[readingStages.indexOf(stage) + 1]);
      stageButtons.find((button) => button.dataset.stage === stage).focus();
    });
    mountBookmark(unit, source, units);
    get("practice").hidden = false;
    get("quiz").hidden = false;
    mountPractice(get("practice"), { unit, materials, onRecallChange: setRecall });
    mountQuiz(get("quiz"), { unit });
  } catch {
    get("load-error").textContent = "Catatan hadis belum bisa dimuat. Coba muat ulang halaman.";
    get("load-error").hidden = false;
    get("reload").hidden = false;
  } finally {
    get("loading-status").hidden = true;
  }
}

start();
