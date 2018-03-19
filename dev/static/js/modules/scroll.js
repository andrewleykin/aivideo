// функция скролла
(function(){
	$('.menu__link, .logo__link, .js-scroll').click(function(e) {
		e.preventDefault();
		var direction = $(this).attr('href'),
			reqArticle = $('section, footer, .product__item').filter(direction),
			reqArticlePos = reqArticle.offset().top - 100;
		// 	menu = $('[data-remodal-id=mobile]').remodal();
		// menu.close();

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});

})();