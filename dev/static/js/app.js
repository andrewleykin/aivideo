// Начальная функция

(function(){
	$('#phone, #phone2').inputmask({"mask": "+7 (999) 999 99 99", "placeholder": "-", showMaskOnHover: false});
	var popupOrder = $('[data-remodal-id="order"]').remodal();
	var popupOrderCalculate = $('[data-remodal-id=calculate-order]').remodal();

	popupOrder.close();
	popupOrderCalculate.close();
})();