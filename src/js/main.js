$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$( document ).ready(function() {
	$('.js-burger-btn').on('click', function() {
			if($('.js-header').hasClass('active')) {
					$('.js-header').removeClass('active');
			} else {
					$('.js-header').addClass('active');
			}
	})
});


function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    center: {lat: 48.43306439179746, lng: 34.84722679687054},
    zoom: 12,
		mapId: '3078384c4f8f2ab9',
  });
}



