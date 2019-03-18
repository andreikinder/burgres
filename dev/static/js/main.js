$(document).ready(function () {
    svg4everybody({});
	 $('.slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.preview'
	});
	$('.preview').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  asNavFor: '.slider',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});


});