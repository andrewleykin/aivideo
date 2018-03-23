// функция скролла
(function(){
	$('.menu__link, .logo__link, .js-scroll').click(function(e) {
		e.preventDefault();
		var direction = $(this).attr('href'),
			reqArticle = $('section, footer, .product__item').filter(direction),
			reqArticlePos = reqArticle.offset().top - 100;
		
		if($(window).width() < 768) {
			reqArticlePos-= 50;
		}
		if($(window).width() < 480) {
			$('.menu__burger').removeClass('active');
			$('.menu__list').slideUp(400);
		}
		

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});

})();