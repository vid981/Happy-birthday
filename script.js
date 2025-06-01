const openingCard = document.getElementById("openingCard"); const page1Text = document.getElementById("page1Text"); const pages = document.querySelectorAll(".page"); let currentPage = 1;

openingCard.addEventListener("click", () => { let messages = [ "Happy birthday Madamji !!!", "It’s your special day", "So..........!!", "I want to make something special for you" ]; let index = 0; page1Text.style.opacity = 0; page1Text.style.transition = "opacity 0.6s ease";

const showNext = () => { if (index < messages.length) { page1Text.textContent = messages[index]; page1Text.style.opacity = 1; setTimeout(() => { page1Text.style.opacity = 0; index++; setTimeout(showNext, 600); }, 2000); } else { setTimeout(() => { openingCard.style.transition = "opacity 0.8s ease"; openingCard.style.opacity = 0; setTimeout(() => { goToPage(2); }, 800); }, 500); } };

showNext(); });

function goToPage(n) { pages.forEach(p => p.classList.remove("active")); document.getElementById(page${n}).classList.add("active"); currentPage = n; }

const audio = document.getElementById("voiceNote"); const toPage3Btn = document.getElementById("toPage3"); audio.addEventListener("ended", () => { toPage3Btn.classList.remove("hidden"); }); toPage3Btn.addEventListener("click", () => goToPage(3));

let flippedCount = 0; const cards = document.querySelectorAll(".flip-card"); const toPage4Btn = document.getElementById("toPage4");

cards.forEach(card => { card.addEventListener("click", () => { if (!card.classList.contains("flipped")) { card.classList.add("flipped"); const label = card.querySelector(".card-label"); if (label) label.style.display = "none"; const message = document.createElement("div"); message.className = "flip-message"; message.innerText = card.getAttribute("data-text"); card.appendChild(message); flippedCount++; if (flippedCount === cards.length) { toPage4Btn.classList.remove("hidden"); } } }); }); toPage4Btn.addEventListener("click", () => goToPage(4));

