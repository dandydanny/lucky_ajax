$(document).ready(function () {
	console.log("start js")
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

  // Binds to "Roll Dice" form submit
  $( "form" ).submit(function( event ) {

  	// Debug
  	console.log("detected form submit");

  	// Fade out old die
  	$( "#die" ).fadeTo( "slow", 0)

  	// Do AJAX post, method="post" action="/rolls"
  	$.post("/rolls");

  	// Generate a random number between 1~6
  	var rand = Math.floor((Math.random()*6)+1);
  	console.log(rand);
		
  	//replace the contents of the "#die" DIV
  	$( "#die" ).html( "<img src='" + rand+ ".png' title='"+ rand + "' alt='the roll'>");
  	$( "#die" ).css({ opacity: 0})
		$( "#die" ).fadeTo( "slow", 1)
		
  	// Prevent default POST action
  	event.preventDefault();
	});

	$( "form" ).submit(function( event ) {
	  if ( $( "input:first" ).val() === "correct" ) {
	    $( "span" ).text( "Validated..." ).show();
	    return;
	  }
	 
	  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
	  event.preventDefault();
	});



});
		