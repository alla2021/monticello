import Swiper from "swiper";

var mySwiper = new Swiper('.slider', {
	slidesPerView: 1,
	loop: true,
	autoplay: {
		delay: 1000,
	},
	speed: 1000,
});
mySwiper.update();

function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    center: {lat: 48.43306439179746, lng: 34.84722679687054},
    zoom: 12,
		mapId: '3078384c4f8f2ab9',
  });
}

document.addEventListener('DOMContentLoaded', function() {
	var burgerButton = document.querySelector('.js-burger-btn');
	var header = document.querySelector('.js-header');

	burgerButton.addEventListener('click', function() {
		header.classList.toggle('active');
	});
});