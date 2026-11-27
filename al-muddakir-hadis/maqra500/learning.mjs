// Learning records are self-reports. This module never changes source approval.
export const STORAGE_KEY = "al-muddakir.learning.v1";
const SCHEMA_VERSION = "maqra-learning-0.1";
const TIME_ZONE = "Asia/Jakarta";
const MAX_BYTES = 1024 * 1024;
const MAX_SESSIONS = 2000;
const DAY_OFFSETS = Object.freeze({ repeat: 0, tomorrow: 1, three_days: 3 });
const MATERIAL_FIELDS = ["collectionId", "number", "sourceSha256", "arabicPages"];
const SESSION_FIELDS = ["sessionId", "material", "target", "repetitions", "startedAt"];
const RECORD_FIELDS = [...SESSION_FIELDS, "rating", "completedAt", "reviewedOn", "dueOn", "assessment"];
const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit",
});

function fail(message) { throw new Error(message); }
function exactKeys(value, keys, label) {
  if (!value || typeof value !== "object" || Array.isArray(value) ||
      Object.keys(value).length !== keys.length || keys.some((key) => !Object.hasOwn(value, key))) {
    fail(`${label} tidak sesuai format.`);
  }
}
function assertByteLimit(raw) {
  if (new TextEncoder().encode(raw).byteLength > MAX_BYTES) fail("Cadangan progres melebihi batas 1 MiB.");
}
function validDay(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/u.test(value) || Number(value.slice(0, 4)) < 1) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}
function instant(now = new Date()) {
  if (!(now instanceof Date) && typeof now !== "string") fail("Waktu sesi tidak valid.");
  if (typeof now === "string") {
    const parts = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/u.exec(now);
    if (!parts || !validDay(parts[1]) || Number(parts[2]) > 23 || Number(parts[3]) > 59 || Number(parts[4]) > 59) fail("Waktu sesi tidak valid.");
  }
  const value = new Date(now);
  if (!Number.isFinite(value.getTime()) || value.getUTCFullYear() < 1 || value.getUTCFullYear() > 9999) fail("Waktu sesi tidak valid.");
  return value;
}
function canonicalInstant(value) {
  if (typeof value !== "string" || instant(value).toISOString() !== value) fail("Waktu pada cadangan harus berupa ISO UTC yang lengkap.");
  return value;
}
function materialChecked(value) {
  exactKeys(value, MATERIAL_FIELDS, "Identitas materi");
  const maxNumber = value.collectionId === "MQ100" ? 100 : value.collectionId === "MQ500" ? 500 : null;
  if (!maxNumber || !Number.isInteger(value.number) || value.number < 1 || value.number > maxNumber ||
      typeof value.sourceSha256 !== "string" || !/^[a-f\d]{64}$/u.test(value.sourceSha256)) fail("Identitas program atau sumber materi tidak valid.");
  const pages = value.arabicPages;
  if (!Array.isArray(pages) || pages.length < 1 || pages.length > 300 ||
      pages.some((page, index) => !Number.isInteger(page) || page < 1 || page > 1_000_000 || (index > 0 && page <= pages[index - 1]))) {
    fail("Halaman Arab materi harus terurut dan tidak berulang.");
  }
  return { collectionId: value.collectionId, number: value.number, sourceSha256: value.sourceSha256, arabicPages: [...pages] };
}
function fingerprint(value) {
  return `${value.collectionId}:${value.number}:${value.sourceSha256}:${value.arabicPages.join(",")}`;
}
function registry(materials) {
  if (!Array.isArray(materials)) fail("Daftar materi patokan belum tersedia.");
  const result = new Map(), identities = new Set();
  for (const item of materials) {
    const checked = materialChecked(item), identity = `${checked.collectionId}:${checked.number}`;
    if (identities.has(identity)) fail("Daftar materi memuat identitas program dan nomor yang berulang.");
    identities.add(identity); result.set(fingerprint(checked), checked);
  }
  return result;
}
function boundMaterial(value, known) {
  const material = materialChecked(value);
  if (!known.has(fingerprint(material))) fail("Progres tidak sesuai program, nomor, sumber atau halaman Arab yang sedang digunakan.");
  return material;
}
function targetChecked(target) {
  if (target !== 5 && target !== 10) fail("Target pengulangan harus 5 atau 10 kali.");
  return target;
}
function sessionChecked(value, known) {
  exactKeys(value, SESSION_FIELDS, "Sesi latihan");
  if (typeof value.sessionId !== "string" || !/^[A-Za-z0-9][A-Za-z0-9._:-]{7,119}$/u.test(value.sessionId)) fail("Identitas sesi latihan tidak valid.");
  const material = known ? boundMaterial(value.material, known) : materialChecked(value.material);
  targetChecked(value.target);
  if (!Number.isInteger(value.repetitions) || value.repetitions < 0 || value.repetitions > 1000) fail("Jumlah pengulangan tidak valid.");
  canonicalInstant(value.startedAt);
  return { sessionId: value.sessionId, material, target: value.target, repetitions: value.repetitions, startedAt: value.startedAt };
}
function recordChecked(value, known) {
  exactKeys(value, RECORD_FIELDS, "Catatan latihan");
  const session = sessionChecked(Object.fromEntries(SESSION_FIELDS.map((key) => [key, value[key]])), known);
  if (session.repetitions < session.target) fail("Sesi belum memenuhi target pengulangan.");
  if (!Object.hasOwn(DAY_OFFSETS, value.rating) || value.assessment !== "self_reported") fail("Penilaian latihan harus berupa laporan diri yang valid.");
  canonicalInstant(value.completedAt);
  if (value.completedAt < session.startedAt) fail("Waktu selesai mendahului awal sesi.");
  if (!validDay(value.reviewedOn) || value.reviewedOn !== jakartaDay(value.completedAt)) fail("Tanggal latihan tidak sesuai waktu Asia/Jakarta.");
  if (!validDay(value.dueOn) || value.dueOn !== addDays(value.reviewedOn, DAY_OFFSETS[value.rating])) fail("Jadwal murajaah tidak sesuai penilaian latihan.");
  return { ...session, rating: value.rating, completedAt: value.completedAt, reviewedOn: value.reviewedOn, dueOn: value.dueOn, assessment: "self_reported" };
}
function progressChecked(value, known) {
  exactKeys(value, ["schemaVersion", "timeZone", "sessions"], "Progres latihan");
  if (value.schemaVersion !== SCHEMA_VERSION || value.timeZone !== TIME_ZONE || !Array.isArray(value.sessions)) fail("Versi atau zona waktu progres tidak sesuai.");
  if (value.sessions.length > MAX_SESSIONS) fail("Riwayat melebihi batas 2000 sesi; data tidak dipotong otomatis.");
  const ids = new Set();
  const sessions = value.sessions.map((item) => {
    const checked = recordChecked(item, known);
    if (ids.has(checked.sessionId)) fail("Cadangan memiliki identitas sesi berulang.");
    ids.add(checked.sessionId); return checked;
  });
  return { schemaVersion: SCHEMA_VERSION, timeZone: TIME_ZONE, sessions };
}

export function createMaterial(data, chapter) {
  return materialChecked({ collectionId: data.collectionId ?? "MQ100", number: chapter.number, sourceSha256: data.source.sha256, arabicPages: chapter.arabicPages });
}
export function materialKey(material) { return fingerprint(materialChecked(material)); }
export function emptyProgress() { return { schemaVersion: SCHEMA_VERSION, timeZone: TIME_ZONE, sessions: [] }; }
export function jakartaDay(now = new Date()) {
  const parts = Object.fromEntries(dayFormatter.formatToParts(instant(now)).map((part) => [part.type, part.value]));
  return `${parts.year.padStart(4, "0")}-${parts.month}-${parts.day}`;
}
export function addDays(day, days) {
  if (!validDay(day) || !Number.isInteger(days) || Math.abs(days) > 366000) fail("Tanggal atau selang hari tidak valid.");
  const value = new Date(`${day}T00:00:00.000Z`); value.setUTCDate(value.getUTCDate() + days);
  if (value.getUTCFullYear() < 1 || value.getUTCFullYear() > 9999) fail("Jadwal berada di luar rentang tanggal.");
  return value.toISOString().slice(0, 10);
}
export function parseProgress(raw, materials) {
  if (typeof raw !== "string") fail("Cadangan progres harus berupa teks JSON.");
  assertByteLimit(raw);
  let value;
  try { value = JSON.parse(raw); } catch { fail("Cadangan progres bukan JSON yang dapat dibaca."); }
  return progressChecked(value, registry(materials));
}
export function serializeProgress(progress, materials) {
  const raw = JSON.stringify(progressChecked(progress, registry(materials))) + "\n";
  assertByteLimit(raw); return raw;
}
export function createSession(material, target, { id, now = new Date() } = {}) {
  return sessionChecked({ sessionId: id, material, target, repetitions: 0, startedAt: instant(now).toISOString() });
}
export function repeatSession(session) {
  const checked = sessionChecked(session);
  return { ...checked, repetitions: Math.min(checked.target, checked.repetitions + 1) };
}
export function finishSession(progress, session, rating, { now = new Date(), materials } = {}) {
  const known = registry(materials), checked = progressChecked(progress, known), attempt = sessionChecked(session, known);
  if (!Object.hasOwn(DAY_OFFSETS, rating)) fail("Penilaian latihan tidak dikenal.");
  if (attempt.repetitions < attempt.target) fail("Selesaikan target pengulangan sebelum menyimpan penilaian.");
  const previous = checked.sessions.find((item) => item.sessionId === attempt.sessionId);
  if (previous) {
    const same = SESSION_FIELDS.every((key) => JSON.stringify(previous[key]) === JSON.stringify(attempt[key])) && previous.rating === rating;
    if (!same) fail("Identitas sesi sudah tersimpan dengan isi atau penilaian berbeda.");
    return progress;
  }
  if (checked.sessions.length >= MAX_SESSIONS) fail("Riwayat mencapai batas 2000 sesi; data tidak dipotong otomatis.");
  const completedAt = instant(now).toISOString(), reviewedOn = jakartaDay(completedAt);
  const record = recordChecked({ ...attempt, rating, completedAt, reviewedOn, dueOn: addDays(reviewedOn, DAY_OFFSETS[rating]), assessment: "self_reported" }, known);
  const result = { ...checked, sessions: [...checked.sessions, record] };
  assertByteLimit(JSON.stringify(result) + "\n"); return result;
}
export function dueReviews(progress, materials, { now = new Date() } = {}) {
  const checked = progressChecked(progress, registry(materials)), today = jakartaDay(now), latest = new Map();
  for (const record of checked.sessions) {
    const key = fingerprint(record.material), previous = latest.get(key);
    if (!previous || record.completedAt >= previous.completedAt) latest.set(key, record);
  }
  return [...latest.values()].filter((record) => record.dueOn <= today)
    .sort((a, b) => a.dueOn.localeCompare(b.dueOn) || a.material.collectionId.localeCompare(b.material.collectionId) || a.material.number - b.material.number)
    .map((record) => ({ material: materialChecked(record.material), lastSession: record, dueOn: record.dueOn }));
}
