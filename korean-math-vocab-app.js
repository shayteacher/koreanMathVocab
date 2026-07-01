// korean-math-vocab-app.js

(function () {
  const CARD_FLIP_DELAY = 500; // ms — prevents peeking at back of next card

  function shuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Deck queue holds indices into vocabData so repeated hard cards
  // still point back to the same underlying word.
  let deck = shuffle(vocabData.map((_, i) => i));
  let totalOriginal = deck.length;
  let currentIndex = null; // index into vocabData for the card on screen
  let isFlipped = false;
  let acceptingInput = false;

  const session = {
    startTime: Date.now(),
    endTime: null,
    totalSeen: 0,
    hard: [],
    ok: [],
    got: []
  };

  // ---- DOM refs ----
  const cardEl = document.getElementById("card");
  const frontWordEl = document.getElementById("frontWord");
  const backEnglishEl = document.getElementById("backEnglish");
  const backSentenceEl = document.getElementById("backSentence");
  const backTranslationEl = document.getElementById("backTranslation");
  const confidenceRow = document.getElementById("confidenceRow");
  const progressLabel = document.getElementById("progressLabel");
  const audioBtn = document.getElementById("audioBtn");

  const summaryEl = document.getElementById("summary");
  const statTime = document.getElementById("statTime");
  const statSeen = document.getElementById("statSeen");
  const statGot = document.getElementById("statGot");
  const statOk = document.getElementById("statOk");
  const statHard = document.getElementById("statHard");
  const shakyWordsEl = document.getElementById("shakyWords");
  const copyLogBtn = document.getElementById("copyLogBtn");
  const restartBtn = document.getElementById("restartBtn");
  const copyConfirm = document.getElementById("copyConfirm");

  function renderSentence(container, sentence) {
    container.innerHTML = "";
    sentence.slots.forEach((slot) => {
      const span = document.createElement("span");
      if (slot.type === "vocab") span.className = "vocab";
      else if (slot.type === "marker") span.className = "marker";
      span.textContent = slot.text;
      container.appendChild(span);
    });
  }

  function loadNextCard() {
    if (deck.length === 0) {
      showSummary();
      return;
    }

    currentIndex = deck.shift();
    const word = vocabData[currentIndex];

    isFlipped = false;
    cardEl.classList.remove("flipped");

    frontWordEl.textContent = word.korean;
    backEnglishEl.textContent = word.english;
    renderSentence(backSentenceEl, word.sentence);
    backTranslationEl.textContent = word.sentence.en;

    confidenceRow.classList.add("hidden");
    acceptingInput = true;

    progressLabel.textContent = `${session.totalSeen + 1} / ${totalOriginal}`;
  }

  function flipCard() {
    if (!acceptingInput) return;
    isFlipped = !isFlipped;
    cardEl.classList.toggle("flipped", isFlipped);
    confidenceRow.classList.toggle("hidden", !isFlipped);
  }

  function rateCard(rating) {
    if (!isFlipped || !acceptingInput) return;
    acceptingInput = false;

    const word = vocabData[currentIndex];
    session.totalSeen += 1;
    session[rating].push(word.korean);

    if (rating === "hard") {
      // Reinsert 3-5 cards later (or at end of deck if deck is shorter)
      const offset = 3 + Math.floor(Math.random() * 3); // 3,4,5
      const insertAt = Math.min(offset, deck.length);
      deck.splice(insertAt, 0, currentIndex);
    }

    setTimeout(loadNextCard, CARD_FLIP_DELAY);
  }

  function formatDuration(ms) {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  }

  function showSummary() {
    session.endTime = Date.now();

    document.querySelector(".card-stage").style.display = "none";
    confidenceRow.classList.add("hidden");
    document.getElementById("progressLabel").textContent = "";

    statTime.textContent = formatDuration(session.endTime - session.startTime);
    statSeen.textContent = session.totalSeen;
    statGot.textContent = session.got.length;
    statOk.textContent = session.ok.length;
    statHard.textContent = session.hard.length;

    const shaky = [...new Set(session.hard)];
    shakyWordsEl.innerHTML = "";
    if (shaky.length === 0) {
      const none = document.createElement("span");
      none.className = "no-shaky";
      none.textContent = "None — solid session.";
      shakyWordsEl.appendChild(none);
    } else {
      shaky.forEach((w) => {
        const chip = document.createElement("span");
        chip.className = "shaky-word";
        chip.textContent = w;
        shakyWordsEl.appendChild(chip);
      });
    }

    summaryEl.classList.add("visible");
  }

  function buildLogMarkdown() {
    const dateStr = new Date().toISOString().slice(0, 10);
    const shaky = [...new Set(session.hard)];
    return [
      `### Korean Math Vocab — ${dateStr}`,
      `- Mode: Flashcards`,
      `- Duration: ${formatDuration(session.endTime - session.startTime)}`,
      `- Cards seen: ${session.totalSeen}`,
      `- Got it: ${session.got.length} | OK: ${session.ok.length} | Hard: ${session.hard.length}`,
      `- Shaky words: ${shaky.length ? shaky.join(", ") : "none"}`
    ].join("\n");
  }

  function resetSession() {
    deck = shuffle(vocabData.map((_, i) => i));
    totalOriginal = deck.length;
    currentIndex = null;
    isFlipped = false;
    acceptingInput = false;

    session.startTime = Date.now();
    session.endTime = null;
    session.totalSeen = 0;
    session.hard = [];
    session.ok = [];
    session.got = [];

    summaryEl.classList.remove("visible");
    document.querySelector(".card-stage").style.display = "";
    copyConfirm.textContent = "";

    loadNextCard();
  }

  // ---- Event listeners ----
  cardEl.addEventListener("click", flipCard);

  document.querySelectorAll(".confidence-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      rateCard(btn.dataset.rating);
    });
  });

  audioBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Placeholder only — no audio wired up yet.
  });

  copyLogBtn.addEventListener("click", () => {
    const text = buildLogMarkdown();
    navigator.clipboard
      .writeText(text)
      .then(() => {
        copyConfirm.textContent = "Copied to clipboard.";
      })
      .catch(() => {
        copyConfirm.textContent = "Couldn't copy — select and copy manually.";
      });
  });

  restartBtn.addEventListener("click", resetSession);

  // ---- Init ----
  loadNextCard();
})();
