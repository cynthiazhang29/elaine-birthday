function openModal(text) {
  document.getElementById("modal-text").textContent = text;
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function showMessage() {
  openModal(
    "ur such a rizzy alpha sigma goat twin ☺️ \n \n ok but fr \n \nYou’re kind, thoughtful, and genuinely one of the best people in the world 💗"
  );
}

function smile() {
  openModal(
    "good 😌 you deserve to smile today and always"
  );
}

function celebrate() {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });

  openModal("🎉 HAPPY 67th BIRTHDAY ELAINE!!! 🎉");
}

function openDonkey() {
  document.getElementById("donkey-modal").classList.remove("hidden");
}

function closeDonkey() {
  document.getElementById("donkey-modal").classList.add("hidden");
}

function openPoem(poemText) {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.classList.add("poem");
  document.getElementById("modal-text").textContent = poemText;
  modal.classList.remove("hidden");
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalContent = modal.querySelector(".modal-content");

  modalContent.classList.remove("poem");
  modal.classList.add("hidden");
}
