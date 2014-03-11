$(document).ready(function() {
	$('#intro_close_btn').click(function() {
		$('#intro').slideUp('slow');
	});
	
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
	$('.filter').click(function() {
		var currentFilter = $(this).text();
		$('.filter').removeClass('active');
		$(this).addClass('active');
		
		$('.case:not(.' + currentFilter + ')').fadeOut(tranSpeed, function() {
			$('.case').removeClass('last');
			if(currentFilter == 'all') {
				$('.case').fadeIn(tranSpeed);
				$('.case:nth-child(3n)').addClass('last');
			} else {
				$('.case.' + currentFilter).fadeIn(tranSpeed);
				$('.case.' + currentFilter).each(function(){
				var i = $(this).index('.case.' + currentFilter)+1;
				if (i%3==0) {
						$(this).addClass('last');
				};
			});
			};
		});
	});
});