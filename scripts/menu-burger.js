const headerWrapper = document.querySelector(".header__wrapper");
const menuBurger = document.querySelector(".main-nav");
const openBurger = document.querySelector(".menu-burger__open-btn");
const closeBurger = document.querySelector(".menu-burger__close-btn");
const tabletMenu = document.querySelector(".tablet__menu");

openBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBurger.classList.remove("main-hide");
  headerWrapper.classList.add("header__wrapper-burger");
  closeBurger.classList.remove("menu-burger__close-btn_hide");
  openBurger.classList.add("menu-burger__open-btn_hide");
  tabletMenu.classList.add("tablet__background");
});

closeBurger.addEventListener("click", function (evt) {
  evt.preventDefault();
  menuBurger.classList.add("main-hide");
  headerWrapper.classList.remove("header__wrapper-burger");
  closeBurger.classList.add("menu-burger__close-btn_hide");
  openBurger.classList.remove("menu-burger__open-btn_hide");
  tabletMenu.classList.remove("tablet__background");
});
