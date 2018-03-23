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
	var btn = $('.services__btn, .calculate__btn, .product__btn'),
		input = $('.order').find('input#services'),
		services = [
			'Cистемы видеонаблюдения',
			'Охранно-пожарная сигнализация',
			'Системы контроля и управления доступом',
			'Установка приточно вытяжной вентиляции',
			'Система охраны периметра',
			'Система платной парковки'
		],
		buildings = [
			'Рестораны, кафе, столовые',
			'Бизнес-центры офисы',
			'Складские помещения',
			'Загородные дома коттеджи, поселки'
		]
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
			input.attr('value', services[index]);
		} 		
		if (thisBtn.closest('.product__item')) {
			var index = thisBtn.closest('.product__item').index();
			
			input.attr('value', buildings[index]);
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