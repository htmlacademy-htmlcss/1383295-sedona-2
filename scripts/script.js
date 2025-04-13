
const modalMenu = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-close-button");
const searchButton = document.querySelector(".search-button");


searchButton.addEventListener('click', ()=> {
  modalMenu.classList.remove("visually-hidden");
})

closeModal.addEventListener('click', ()=> {
  modalMenu.classList.add("visually-hidden");
})
