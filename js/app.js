const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            toggle.classList.toggle('bx-x')
        })
    }
}

showMenu('header-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


//const r = rolly({
 //   view: document.querySelector('.app'),
 //   native: true,
 //   // other options
 // });
 // r.init();

 // AOS.init({
//      duration: 1500 //Global duration
//  });

//Flipster plugin

//$('.photos-container').flipster();


//Swiper for testimonies
let swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets: true,
  },
  breakpoints: {
      568: {
          slidesPerView: 2,

      }
  },
  mousewheel: true,
  keyboard: true,
});