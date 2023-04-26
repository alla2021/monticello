var swiper1 = new Swiper('.swiper1', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});


var swiper2 = new Swiper('.swiper2', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 30,
	slidesPerView: 3,
	centeredSlides: true,
	breakpoints: {
		400: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1200: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//function initMap() {
//  new google.maps.Map(document.getElementById("map"), {
//    center: {lat: 48.43306439179746, lng: 34.84722679687054},
//    zoom: 12,
//		mapId: '3078384c4f8f2ab9',
//  });
//}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
});
