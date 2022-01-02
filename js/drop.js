let swiper = new Swiper(".swiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,

        }
    }
    
  });