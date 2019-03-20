$(document).ready(function () {
    svg4everybody({});
	 $('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
      dots: false,
      initialSlide: 7, 
	  asNavFor: '.preview',
	  adaptiveHeight: true,
	  responsive: [
	  	{
	      breakpoint: 767,
	      settings: {
	        arrows: false,
	        fade: true,
	      }
	    }
	  ]
	});
	$('.preview').slick({
	  mobileFirst: true,
	  slidesToShow: 3,
	  asNavFor: '.slider',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true,
	  initialSlide: 7,
	   responsive: [
	  	{
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 5
	      }
	    }
	  ]

	});


});