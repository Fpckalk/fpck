$(document).ready(function() {
	
	//** Validation and mail **//
	$('#contact_form').validate({
		submitHandler: function() {
			$.post('/includes/process.php', $('#contact_form').serialize(), function(data) {
				$('#contact_form').hide('fast');
				$('#contact_succes').html("Gnarly. I'll reply as fast as I can.");
				$('#contact_succes').show('fast');
			});
		}
	});
	
	//** FILTERS **//
	// Var declaration
	var tranSpeed = 0;
	var filterWidth = 0;

	/*$('.filter').each(function() {
		filterWidth += $(this).outerWidth(true);
	});
	$('#filters').width(filterWidth);*/
	
	$('.case:nth-child(3n)').addClass('last');
});