// Начальная функция

(function(){
	$('#phone, #phone2').inputmask({"mask": "+7 (999) 999 99 99", "placeholder": "-", showMaskOnHover: false});
	var popupOrder = $('[data-remodal-id=order]').remodal();
	var popupOrderCalculate = $('[data-remodal-id=calculate-order]').remodal();
	
	popupOrder.close();
	popupOrderCalculate.close();
})();

// функция добавления в форму услуги
(function(){
	var btn = $('.services__btn, .calculate__btn'),
		input = $('.order').find('input#services'),
		services = [
			'Cистемы видеонаблюдения',
			'Охранно-пожарная сигнализация',
			'Системы контроля и управления доступом',
			'Установка приточно вытяжной вентиляции',
			'Система охраны периметра',
			'Система платной парковки'
		],
		calculateServices = [
			'Cистемы видеонаблюдения',
			'Охранно-пожарная сигнализация',
			'Контроль доступа СКУД',
			'Система охраны периметра'
		]
	

	btn.click(function() {
		var thisBtn = $(this);
		if (thisBtn.closest('.services__item')) {
			var index = thisBtn.closest('.services__item').index();
			input.attr('value',services[index]);
		} 		
		if (thisBtn.closest('.calculate')) {
			var calc = $('.calculate'),
				orderCalc = $('.calculate-order'),
				meter = calc.find('.calculate__input').val(),
				building = calc.find('.calculate__menu-item').filter('.active').text();
				totalCost = calc.find('.calculate__total-num').text().slice(0, -1);
				servicesItem = calc.find('.calculate__item');
				totalServices = '',
				inputMeter = orderCalc.find('input#meter2');
				inputBuilding = orderCalc.find('input#building');
				inputTotal = orderCalc.find('input#totalCost');
				inputServices = orderCalc.find('input#services2');

			for(i=0; i<servicesItem.length; i++) {
				if(!servicesItem.eq(i).hasClass('disabled')) {
					totalServices = totalServices + calculateServices[i] + ' / ';
				}
			}
			
			inputMeter.attr('value', meter);
			inputBuilding.attr('value', building);
			inputTotal.attr('value', totalCost);
			inputServices.attr('value', totalServices);
		}
	});
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
		// menu.close();

		$('body, html').animate({scrollTop: reqArticlePos}, 500);
	});

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
// Калькулятор
(function(){
	var calculate = $(".calculate"),
		menu = calculate.find('.calculate__menu-item'),
		productBtn = $('.product__btn'),
		calculateBtn = $('.calculate__item-btn'),
		calculateItems = calculate.find('.calculate__item'),
		inputMeter = calculate.find('#meter'),
		totalCostBlock = calculate.find('.calculate__total-num');

	var cp = [
		[
			[101,102,103,104],
			[201,202,203,204],
			[301,302,303,304],
			[401,402,403,404]
		],
		[
			[111,112,113,114],
			[211,212,213,214],
			[311,312,313,314],
			[411,412,413,414]
		],
		[
			[121,122,123,124],
			[221,222,223,224],
			[321,322,323,324],
			[421,422,423,424]
		],
		[
			[131,132,133,134],
			[231,232,233,234],
			[331,332,333,334],
			[431,432,433,434]
		]
	]
	
	menu.first().addClass('active');
	inputMeterFunction();

	menu.click(function(){
		var index = $(this).index();

		menu.eq(index).addClass('active').siblings().removeClass('active');
		if(index == 3) {
			var block = calculateItems.eq(2),
			btn = block.find('.btn');
			showBlock(block, btn, false);
		}
		inputMeterFunction();
	});
	
	productBtn.click(function(){
		var index = $(this).closest('.product__item').index();

		replaceBlock(index);
		inputMeterFunction();
	});

	calculateBtn.click(function(){
		var btn = $(this),
				block = btn.closest('.calculate__item');
		
		if(!block.hasClass('disabled')) {
			showBlock(block, btn, false);
		} else {
			showBlock(block, btn, true);
		}
		inputMeterFunction();
	});

	inputMeter.keypress(validateNumber);
	inputMeter.keyup(inputMeterFunction);

	function inputMeterFunction(){
		var val = inputMeter.val(),
			indexMeter = 0,
			indexActiveMenu = menu.filter('.active').index(),
			totalCost = 0,
			flagForItem = calculateItems.length;

		if (val > 50 && val <= 100) {
			indexMeter = 1;
		} else if(val > 100 && val <= 150) {
			indexMeter = 2;
		} else if (val > 150) {
			indexMeter = 3;
		}

		var reqTable = cp[indexMeter];
		var reqStr = reqTable[indexActiveMenu];

		for(i=0;i<calculateItems.length;i++) {
			if ( !calculateItems.eq(i).hasClass('disabled') ) {
				totalCost+= reqStr[i]
			} else {
				flagForItem--;
			}
		}

		if(val.length > 0) {
			totalCostAssign(totalCost, true);
		} else {
			totalCostAssign(totalCost, false);
		}

		if(flagForItem === 0) {
			totalCostAssign(totalCost, false);
		}

	}

	function validateNumber(event) {
		var key = window.event ? event.keyCode : event.which;
		if (event.keyCode === 8 || event.keyCode === 46) {
			return true;
		} else if ( key < 48 || key > 57 ) {
			return false;
		} else {
			return true;
		}
	};

	function replaceBlock(index) {
		menu.eq(index).addClass('active').siblings().removeClass('active');
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

	function totalCostAssign(val, bool) {
		var formatVal = String(val).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
		formatVal+= ' руб*'
		if(bool) {
			totalCostBlock.text(formatVal);
		} else {
			totalCostBlock.text('');
		}
	}
})();
$(document).ready(function () {
    svg4everybody({});
});
// Библиотека wow.js для анимации

(function () {
	new WOW().init();
})();