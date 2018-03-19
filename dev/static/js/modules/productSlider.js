// Слайдер
(function(){
	$('.product__slider').each(function(){
		var el = $(this);

		el.slick({
			dots: false,
			infinite: true,
			arrows: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1
		});

	});

	$('.product__control--prev').click(function(){
		$(this).closest('.product__slider').slick('slickPrev')
	});

	$('.product__control--next').click(function(){
		$(this).closest('.product__slider').slick('slickNext')
	});
})();