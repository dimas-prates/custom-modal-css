const openBtn = document.querySelector("button");
const closeBtn = document.querySelector('[data-button="close"]');
const modal = document.querySelector(".modal");
const form = document.querySelector("form");

openBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "grid";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("close-modal-animation");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("close-modal-animation");
  }, 500);
}

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});

form.addEventListener("submit", submitForm);
function submitForm() {
  const card = document.querySelector(".card");
  const backupContent = card.innerHTML;
  card.innerHTML = `<h1>Thanks for your subscription</h1>`;
  setTimeout(() => {
    closeModal();
    card.innerHTML = backupContent;
  }, 2000);
}
