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