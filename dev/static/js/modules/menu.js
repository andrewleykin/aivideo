// функция для вызова меню
(function(){
	var btn = $('.menu__burger'),
			list = $('.menu__list');
	
	btn.click(function(){
		if(!btn.hasClass('active')) {
			changeMenu(true);
		} else {
			changeMenu(false);
		}
	});

	$(document).click(function (e){ 
		if (!list.is(e.target) && list.has(e.target).length === 0 && !btn.is(e.target) && $(window).width() < 480) { 
					changeMenu(false);
		}
	});

	function changeMenu (bool) {
		if (bool) {
			btn.addClass('active');
			list.slideDown(400);
		} else {
			btn.removeClass('active');
			list.slideUp(400,function(){
				list.removeAttr('style');
			});
		}
	}
})();