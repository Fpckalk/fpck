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


	var coffee = document.getElementById("coffee");
	if (coffee) {
		coffee.addEventListener("keypress", function(e) {
			if(e.keyCode == 13) {
				this.outerHTML = "<br><span>" + this.value + "? Aight, gotcha</span>";
			}
		})
	};
	
});