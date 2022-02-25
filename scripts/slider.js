// Слайдер меню
const slideFirst = document.querySelector(".reviews__feedback_first-slide");
const slideSecond = document.querySelector(".reviews__feedback_second-slide");
const slideThird = document.querySelector(".reviews__feedback_third-slide");
const sliderBtnFirst = document.querySelector(".reviews__slider-button_first");
const sliderBtnSecond = document.querySelector(
  ".reviews__slider-button_second"
);
const sliderBtnThird = document.querySelector(".reviews__slider-button_third");

sliderBtnFirst.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.add("reviews__feedback_current");
  slideSecond.classList.remove("reviews__feedback_current");
  slideThird.classList.remove("reviews__feedback_current");
  sliderBtnFirst.classList.add("reviews__slider-button_current");
  sliderBtnSecond.classList.remove("reviews__slider-button_current");
  sliderBtnThird.classList.remove("reviews__slider-button_current");
});

sliderBtnSecond.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("reviews__feedback_current");
  slideSecond.classList.add("reviews__feedback_current");
  slideThird.classList.remove("reviews__feedback_current");
  sliderBtnFirst.classList.remove("reviews__slider-button_current");
  sliderBtnSecond.classList.add("reviews__slider-button_current");
  sliderBtnThird.classList.remove("reviews__slider-button_current");
});

sliderBtnThird.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideFirst.classList.remove("reviews__feedback_current");
  slideSecond.classList.remove("reviews__feedback_current");
  slideThird.classList.add("reviews__feedback_current");
  sliderBtnFirst.classList.remove("reviews__slider-button_current");
  sliderBtnSecond.classList.remove("reviews__slider-button_current");
  sliderBtnThird.classList.add("reviews__slider-button_current");
});
