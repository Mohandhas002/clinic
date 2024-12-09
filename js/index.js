
$(document).ready(function() {
  $('.slick-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
