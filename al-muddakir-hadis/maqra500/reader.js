"use strict";

const get = (id) => document.getElementById(id);
const formatNumber = (number) => String(number).padStart(3, "0");

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
    const requested = new URLSearchParams(location.search).get("hadis");
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
        unit.sourceId !== source.id || unit.sourceSha256 !== source.sha256) {
      throw new Error("Identitas catatan tidak cocok dengan daftar.");
    }
    showUnit(unit, source, id);
  } catch {
    get("load-error").textContent = "Catatan hadis belum bisa dimuat. Coba muat ulang halaman.";
    get("load-error").hidden = false;
    get("reload").hidden = false;
  } finally {
    get("loading-status").hidden = true;
  }
}

start();
