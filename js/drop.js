let swiper = new Swiper(".mySwiper", {
    
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      568: {
          slidesPerView: 1,
          spaceBetween: 20,

      },
      680: {
        slidesPerView: 2,
        spaceBetween: 40,

    },
    920: {
        slidesPerView: 3,
        spaceBetween: 40,

    },
    1240: {
        slidesPerView: 4,
        spaceBetween: 50,

    }
  },
  mousewheel: true,
  keyboard: true,
});



<div class="event-item swiper-slide">
                                <div class="event-item-date">
                                    <img src="./images/3.jpg" alt="">
                                    <div class="event-item-date-item">
                                        <p>
                                            Jan
                                        </p>
                                        <h4>
                                            22
                                        </h4>
                                    </div>
                                </div>
                                
                                
                                <div class="event-item-text">
                                    <h3>The Journey</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequuntur!</p>
                                    <div class="btn btn-a"><a href="">Get Info &#8594</a></div>    
                                </div>
                            </div>