import IndexFunctions from "../scripts/index.js";
const openBtn = document.querySelector("button");
const closeBtn = document.querySelector('[data-button="close"]');
// console.log(openBtn,closeBtn)
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", openModal);

function openModal() {
  modal.style.display = "grid";
}

closeBtn.addEventListener("click", closeModal);

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal();
  }
});