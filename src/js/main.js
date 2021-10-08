$(document).ready(function() {
    $('.slider').slick({
      prevArrow: $('.prev-btn'),
      nextArrow: $('.next-btn'),
        arrows: true,
        dots: true,
        slidesToShow: 3,
        infinite: false,
        speed: 300,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000,
                dots: false,
                arrows: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
              }
            }
        ]
    })
})



function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: '078384c4f8f2ab',
    center: { lat: 48.85, lng: 2.35 },
    zoom: 12,
  });


