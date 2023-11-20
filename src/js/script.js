let glide1 = new Glide('.slider1', {
	type: 'slider',
	startAt: 0,
	perView: 1,
	autoplay: 3000, 
}).mount();


let glide2 = new Glide('.slider2', {
	type: 'carousel',
	startAt: 0,
	perView: 3, // Отображение 3 слайдов на десктопе
	breakpoints: {
	  800: {
		 perView: 2, // Отображение 2 слайдов на таблетах
	  },
	  480: {
		 perView: 1, // Отображение 1 слайда на мобильных устройствах
	  }
	},
	autoplay: 3000, // Автоматическое прокручивание через 3 секунды
 }).mount();



function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    center: {lat: 48.43306439179746, lng: 34.84722679687054},
    zoom: 12,
		mapId: '3078384c4f8f2ab9',
  });
}

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
});
