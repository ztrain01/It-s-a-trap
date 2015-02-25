//Hide trp sign
//when user clicks on image, reveal trap sign

$(document).ready(function() {
	$('.warning').hide();

	// capture click on image
	$('.image').on('click', function() {
		console.log('sweet!');
        
        $('.warning').toggle('slow');
	})
})