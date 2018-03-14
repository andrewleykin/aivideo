// Начальная функция

(function(){
	$('#phone, #phone2').inputmask({"mask": "+7 (999) 999 99 99", "placeholder": "-"});
})();

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

// функция скролла
(function(){
	$('.menu__link, .logo__link, .js-scroll').click(function(e) {
		e.preventDefault();
		var direction = $(this).attr('href'),
			reqArticle = $('section, footer, .product__item').filter(direction),
			reqArticlePos = reqArticle.offset().top - 100;
		// 	menu = $('[data-remodal-id=mobile]').remodal();
		console.log(reqArticle);
		// menu.close();

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});

})();

//доп для калькулятора
(function(){
	var calculate = $(".calculate"),
		menu = calculate.find('.calculate__menu-item'),
		productBtn = $('.product__btn'),
		calculateBtn = $('.calculate__item-btn'),
		calculateItems = calculate.find('.calculate__item')
	
	menu.first().addClass('active');

	menu.click(function(){
		var index = $(this).index();
		
		$(this).addClass('active').siblings().removeClass('active');

		replaceBlock(index)
	});
	
	productBtn.click(function(){
		var index = $(this).closest('.product__item').index();

		menu.eq(index).addClass('active').siblings().removeClass('active');

		replaceBlock(index)
	});

	calculateBtn.click(function(){
		var btn = $(this),
				block = btn.closest('.calculate__item');
		
		if(!block.hasClass('disabled')) {
			showBlock(block, btn, false);
		} else {
			showBlock(block, btn, true);
		}
	});

	function replaceBlock(index) {
		for(i=0;i<calculateItems.length;i++) {
			var block = calculateItems.eq(i),
					btn = block.find('.btn');

			showBlock(block, btn, true);
		}
		if(index == 3) {
			var block = calculateItems.eq(2),
			btn = block.find('.btn');
			showBlock(block, btn, false);
		}
	}

	function showBlock(block, btn, bool) {
		if(bool) {
			block.removeClass('disabled');
			btn.removeClass('btn--red');
			btn.find('span').text('отключить');
		} else {
			block.addClass('disabled');
			btn.addClass('btn--red');
			btn.find('span').text('добавить');
		}
	}

	
})();

// функция валидации формы
(function(){

	if ($('[data-validation]').length) {
		initializeValidate();
	}
	if($('.form')) {
		clearForm();
	}

	function clearForm(){
		var inputs = $('.form').find('input, textarea'),
			newVal = '';

		for(i=0;i<inputs.length;i++) {
			inputs.eq(i).val(newVal);
		}
	}

	/* Validate Form */
	function initializeValidate() {
		$('[data-validation]').each(function () {
		    var validator = $(this),
		        inputs = validator.find('input:not(:checkbox), textarea'),
		        submit = validator.find('button[type=submit]'),
		        stopSubmit = false;

		    inputs.each(function() {
		    	$(this).focus(function() {
		    		$(this).siblings().addClass('hide')
		    		$(this).parent().removeClass('invalid')
		    	});
		    	$(this).blur(function(){
					if(!($(this).val())){
						$(this).siblings().removeClass('hide')
					};
		    	});
		    });
		    validator.on('change keyup', 'input[data-name]', function () {
		        var elm = $(this);
		        checkValidity(elm);
		    });

		    submit.on('click', function (e) {
		        var mass = [];

		        stopSubmit = true;

		        for (var i = 0; i < inputs.length; i++) {

		            var input = inputs[i];
		            mass.push(input);

		            if (input.checkValidity() == true) {
		                var elm = input;
		                checkValidity(elm);
		            }

		            if ($(input).parent().hasClass('valid')) {
		                stopSubmit = false;
		            } else {
		                stopSubmit = true;
		                break;
		            }
		        }

		        if (stopSubmit) {
		            e.preventDefault();
		        }
		    });
		});
	}

	function checkValidity(elm) {
	    var elm = $(elm),
	        val = elm.val(),
	        block = elm.parent(),
	        name_reg = /^[A-Za-zА-Яа-яЁё\-\s]+$/,
			text_reg = /^[A-Za-zА-Яа-яёЁ\s\d]/,
	        mail_reg = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i,
	        phone_reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
	        num_reg = /^\d+$/;


	    if (elm.prop('disabled')) {
	        return;
	    } else if (elm.is('[data-name="name"]')) {
	        if (name_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="email"]')) {
	        if (mail_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="phone"]')) {
	        if (phone_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="num"]')) {
	        if (num_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } else if (elm.is('[data-name="text"]')) {
	        if (text_reg.test(val)) {
	            block.removeClass('invalid').addClass('valid');
	        } else {
	            block.removeClass('valid').addClass('invalid');
	        }
	    } 
	}
})();