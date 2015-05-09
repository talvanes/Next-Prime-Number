$(document).ready(function(){
	// State is OK by default
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
	// global interval variable to measure execution of routine getNextPrimeNumber()
	var routine;


	/* Some event handlers */
	// Start getting next prime number (OK button)
	$("#action").on("click", function(){
		// First of all, empty output
		$('#output').empty();

		// Check button state (true for OK, false for Stop)
		if(state){
			// Change action to Stop
			state = false;
			$(this).attr('aria-label', "Stop");
			$('button.btn').removeClass(states['OK']["button"]).addClass(states['Stop']["button"]);
			$('span.glyphicon').removeClass(states['OK']["icon"]).addClass(states['Stop']["icon"]);
			$('span.label').text('Stop');

			// -- setInterval action --
			// The value of the number
			var number = parseInt($('#number').val());
			routine = setInterval(
				function(){
					// Appending number to the output
					var output = $('#output');
					output.append("<span class='number'>" + getNextPrimeNumber(number++) + "</span>");
				}, 1000);

		} else {
			// Change back to OK
			state = true;
			$(this).attr('aria-label', "OK");
			$('button.btn').removeClass(states['Stop']["button"]).addClass(states['OK']["button"]);
			$('span.glyphicon').removeClass(states['Stop']["icon"]).addClass(states['OK']["icon"]);
			$('span.label').text('OK');

			// -- clearInterval action --
			clearInterval(routine);

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
