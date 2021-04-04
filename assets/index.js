$(document).ready(function() {
	$('#subir').click(function(){
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
});


	function toggler() {
		var x = document.getElementById("toggle");
		if (x.className === "nav-bar") {
			x.className += " responsive";
		}
		else {
			x.className = "nav-bar";
		}
	}
