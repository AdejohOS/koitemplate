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
let swiperEvents = new Swiper('.upcomingEvents', {
	cssMode: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination-upcoming',
	  clickable: true,
	  dynamicBullets: true,
	},

  
	breakpoints: {
	  620: {
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
	  },
	},
	mousewheel: true,
  	keyboard: true, 
    });



	//Swiper for testimonies

	let swiperTestimonies = new Swiper('.koiTestimonies', {
		        
		loop: true,
		grabCursor: true,
		spaceBetween:48,

		pagination: {
			el: '.swiper-pagination-testimonies',
			clickable: true,
			dynamicBullets:true,
		},
		autoplay: {
			delay: 5000,
		  },

		});