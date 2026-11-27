const shalawat = "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ";
const subhanallah = "سُبْحَانَ اللَّهِ";

function element(tag, text = "", attributes = {}) {
  const node = document.createElement(tag);
  node.textContent = text;
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  return node;
}

function validQuestion({ prompt, choices, answer, explanation }) {
  const filled = (text) => typeof text === "string" && Boolean(text.trim());
  return filled(prompt) && filled(explanation) && Array.isArray(choices) &&
    choices.length >= 2 && choices.every(filled) && new Set(choices).size === choices.length &&
    Number.isInteger(answer) && answer >= 0 && answer < choices.length;
}

function arabicVoice(synthesis) {
  return synthesis?.getVoices().find((voice) =>
    voice.localService === true && /^ar(?:[-_]|$)/iu.test(voice.lang));
}

export async function mountQuiz(container, { unit }) {
  const heading = element("h2", "Kuis pemahaman", { id: "quiz-title" });
  const loading = element("p", "Memuat kuis…", { role: "status" });
  container.setAttribute("aria-labelledby", heading.id);
  container.replaceChildren(heading, loading);

  let questions;
  try {
    const response = await fetch(new URL("./quiz.json", import.meta.url));
    if (!response.ok) throw new Error("Kuis belum dapat dibuka.");
    const data = await response.json();
    if (data.collectionId !== unit.collectionId || data.sourceSha256 !== unit.sourceSha256) {
      throw new Error("Sumber soal tidak sesuai.");
    }
    questions = data.units[unit.number];
    if (questions === undefined) {
      loading.textContent = "Soal untuk hadis ini sedang disiapkan.";
      return;
    }
    if (!Array.isArray(questions) || !questions.length || !questions.every(validQuestion)) {
      throw new Error("Format soal belum sesuai.");
    }
  } catch {
    loading.textContent = "Kuis belum bisa dimuat. Muat ulang halaman untuk mencoba lagi.";
    return;
  }

  const progress = element("p", "", { id: "quiz-progress", class: "small" });
  const audio = element("input", "", { id: "quiz-audio", type: "checkbox" });
  const audioLabel = element("label", "", { class: "quiz-option", for: audio.id });
  audioLabel.append(audio, "Nyalakan suara umpan balik");
  const audioStatus = element("p", "", { class: "small", id: "quiz-audio-status", role: "status" });
  audio.setAttribute("aria-describedby", audioStatus.id);
  const form = element("form", "", { id: "quiz-answer" });
  const fieldset = element("fieldset", "", { class: "quiz-question" });
  const questionText = element("legend", "", { id: "quiz-question" });
  const choices = element("div", "", { class: "quiz-choices" });
  fieldset.append(questionText, choices);
  const check = element("button", "Periksa jawaban", { id: "quiz-check", type: "submit" });
  form.append(fieldset, check);
  const feedback = element("p", "", { id: "quiz-feedback", role: "status" });
  const result = element("p", "", { id: "quiz-result", role: "status" });
  const next = element("button", "Soal berikutnya", { id: "quiz-next", type: "button" });
  const retry = element("button", "Ulangi kuis", { id: "quiz-retry", type: "button" });
  const synthesis = globalThis.speechSynthesis;
  let utterance;
  let index = 0;
  let score = 0;

  function stopAudio() {
    if (!utterance) return;
    utterance = undefined;
    synthesis.cancel();
  }

  function playFeedback(phrase) {
    if (!audio.checked) return;
    const voice = arabicVoice(synthesis);
    if (!voice || typeof globalThis.SpeechSynthesisUtterance !== "function") {
      audioStatus.textContent = "Suara Arab lokal belum tersedia. Umpan balik tetap tampil sebagai teks.";
      return;
    }
    stopAudio();
    audioStatus.textContent = "";
    const speech = new SpeechSynthesisUtterance(phrase);
    speech.voice = voice;
    speech.lang = voice.lang;
    speech.onend = () => {
      if (utterance === speech) utterance = undefined;
    };
    speech.onerror = () => {
      if (utterance !== speech) return;
      utterance = undefined;
      audioStatus.textContent = "Suara belum bisa diputar. Umpan balik tetap tampil sebagai teks.";
    };
    utterance = speech;
    try {
      synthesis.speak(speech);
    } catch {
      speech.onerror();
    }
  }

  function showQuestion({ focus = false } = {}) {
    const question = questions[index];
    progress.textContent = `Soal ${index + 1} dari ${questions.length}`;
    questionText.textContent = question.prompt;
    choices.replaceChildren(...question.choices.map((text, choice) => {
      const radio = element("input", "", { type: "radio", name: "choice", value: String(choice), required: "" });
      const label = element("label", "", { class: "quiz-option" });
      label.append(radio, text);
      return label;
    }));
    fieldset.disabled = false;
    check.disabled = false;
    feedback.replaceChildren();
    result.textContent = "";
    next.hidden = true;
    retry.hidden = true;
    if (focus) choices.querySelector("input").focus();
  }

  audio.addEventListener("change", () => {
    if (!audio.checked) stopAudio();
    audioStatus.textContent = audio.checked && !arabicVoice(synthesis)
      ? "Suara Arab lokal belum tersedia. Umpan balik tetap tampil sebagai teks."
      : "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (check.disabled) return;
    const choice = new FormData(form).get("choice");
    if (choice === null) return;
    const question = questions[index];
    const correct = Number(choice) === question.answer;
    if (correct) score++;
    fieldset.disabled = true;
    check.disabled = true;

    const phrase = correct ? shalawat : subhanallah;
    const arabic = element("span", phrase, { lang: "ar", dir: "rtl" });
    feedback.replaceChildren(arabic, ` ${correct ? "Tepat." : "Belum tepat."} ${question.explanation}`);
    if (index + 1 === questions.length) {
      result.textContent = `${score} dari ${questions.length} jawaban tepat.`;
      retry.hidden = false;
    } else {
      next.hidden = false;
    }
    playFeedback(phrase);
  });

  next.addEventListener("click", () => {
    index++;
    showQuestion({ focus: true });
  });
  retry.addEventListener("click", () => {
    stopAudio();
    index = 0;
    score = 0;
    showQuestion({ focus: true });
  });

  loading.replaceWith(audioLabel, audioStatus, progress, form, feedback, result, next, retry);
  showQuestion();
}
