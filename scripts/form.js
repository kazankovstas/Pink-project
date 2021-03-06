let isStorageSupport = true;
let storage = "";
const form = document.querySelector(".form");
const firstName = document.querySelector(".form_name");
const secondName = document.querySelector(".form_second-name");
const mail = form.querySelector("[name=mail]");
const modal = document.querySelector(".modal");
const formButtonError = document.querySelector(".modal__button");
const formButtonSucces = document.querySelector(".modal__button_large");
const succesModal = document.querySelector(".modal-succes");
const errorModal = document.querySelector(".modal-error");

form.addEventListener("submit", function (evt) {
  if (!firstName.value || !secondName.value || !mail.value) {
    evt.preventDefault();
    errorModal.classList.add("modal_show");
  } else {
    evt.preventDefault();
    succesModal.classList.add("modal_show");
  }
});

formButtonError.addEventListener("click", function (evt) {
  evt.preventDefault();
  errorModal.classList.remove("modal_show");
});

formButtonSucces.addEventListener("click", function (evt) {
  evt.preventDefault();
  succesModal.classList.remove("modal_show");
});

// Закрытие попапа кликом вне его область
window.addEventListener("mousedown", function (evt) {
  if (evt.target.closest(".modal") === null) {
    modal.classList.remove("modal_show");
  }
});

// Закрытие попапа клавишей Esc
window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (modal.classList.contains("modal_show")) {
      evt.preventDefault();
      modal.classList.remove("modal_show");
    }
  }
});
