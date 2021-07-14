const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button__next',
    prevEl: '.hotel-slider__button__prev',
  },
  effect: "coverflow",

});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button__next',
    prevEl: '.reviews-slider__button__prev',
  },

});