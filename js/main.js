$(document).ready(function(){
	// State:
	var state = true;
	// button states: OK and Stop
	var states = {
		'OK': {
			"button": 'btn-success',
			"icon": 'glyphicon-ok'
		},
		'Stop': {
			"button": 'btn-danger',
			"icon": 'glyphicon-remove'
		}
	};

	/* Some event handlers */
	// Start getting next prime number (OK button)
	$("#action").on("click", function(){
		// Check button state (true for OK, false for Stop)
		if(state){
			// Change action to Stop
			state = false;
			$(this).attr('aria-label', "Stop");
			$('button.btn').removeClass('btn-success').addClass('btn-danger');
			$('span.glyphicon').removeClass('glyphicon-ok').addClass('glyphicon-remove');
			$('span.label').text('Stop');
			// -- setInterval action

		} else {
			// Change back to OK
			state = true;
			$(this).attr('aria-label', "OK");
			$('button.btn').removeClass('btn-danger').addClass('btn-success');
			$('span.glyphicon').removeClass('glyphicon-remove').addClass('glyphicon-ok');
			$('span.label').text('OK');
			// -- clearInterval action

		}
	});
});

/* A function to get the next prime number from the one given */
function getNextPrimeNumber(num){
	// NUmber of dividers
	var dividers = 1;

	// Let's find the next prime number among the next numbers
	for (num += 1; dividers != 2; num += 1){
		// every number is divisible at least by one
		dividers = 1;
		for(var count = 2; count <= num; count += 1){
			// Counting one divider
			if(num % count == 0){
				dividers += 1;
			}
		}
	}

	// return next prime number (it is ending exactly one unit after)
	return --num;
}
