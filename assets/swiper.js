var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 2,
    grabCursor: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
  });