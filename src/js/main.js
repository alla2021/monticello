$(document).ready(function() {
    $('.slider').slick({

        arrows: true,
        dots: true,
        slidesToShow: 3,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 985,
              settings: {
                arrows: false,
                slidesToShow: 2
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


