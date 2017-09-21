// create variables for button and input box
// create function to do the following:
// when button is clicked
// prevent page load
// read input box
// 	if length of input is equal to zero, user has not entered anything. Pop up alert reminding user to enter a city
// 		if value of input box is a recognized name for NYC
// 			change body background to NYC picture
// 		else if statements for SF, LA, Austin and Sydney
// 			change body background to appropriate picture
// 		else (for input which does not match any of the pictures)
// 			alert user with a message that their input does not match any city, and try again
// 		final step is to clear the input box to be ready for next input
//
$(document).ready(function() {
var button = $("#submit-btn");
var inputCity = $("#city-type");

	button.click(function(e) {
		e.preventDefault();  		//prevent page load on click
		city = inputCity.val();   	//store user input in variable to work with it
		console.log(city);
		if (city.length > 0){		//validate user has entered data
			$('body').toggleClass(); //remove existing city class if one exists
			if (city === "New York" || city === "New York City" || city === "NYC") {
				$('body').addClass('nyc');
			}
			else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
				$('body').addClass('sf');
			}
			else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
				$('body').addClass('la');
			}
			else if (city === "Austin" || city === "ATX") {
				$('body').addClass('austin');
			}
			else if (city === "Sydney" || city === "SYD") {
				// $('body').css("background-image", "url(images/sydney.jpg)");
				$('body').addClass('sydney');
			}
			else {
				alert('"' + city + '" is not a recognized city.  Please try again.');
			}
			console.log('here is where I want to set input field back to default');
			
			inputCity.val("");     //set to empty so placeholder shows up again

		}
		else {
			alert('Please enter a city name');
		}
	}) ;
});

