
$(function() {
	if ($.fn.placeholder.input && $.fn.placeholder.textarea) {
		console.log('Placeholder supported for INPUT & TEXTAREA tag');
	} else if ($.fn.placeholder.input) {
		$('textarea').placeholder();
		console.log('Placeholder supported for INPUT tag only');
	} else {
		$('input, textarea').placeholder();
		console.log('Placeholder NOT supported');
	}
});