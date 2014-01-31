// function fadeAll(elems) {
//     console.log("called fade fn");
//     $("div").filter('hidden').fadeIn(500, function() { fadeAll(elems); });
// }

$(document).ready(function () {
	console.log("start js");
//   $( "div" ).css( "visibility", "hidden" );

//   $( "div" ).css( "visibility", "hidden" );
//   // animations:


//   setTimeout(function() {
//         fadeAll($('div'));
//   }, 300);

  // $( ".container" ).css({ opacity: 0});
  // $( ".container" ).fadeTo( 500, 1);
  // $( "h1" ).css({ opacity: 0});
  // $( "h1" ).fadeTo( 1000, 1);
  // $( "input" ).css({ opacity: 0});
  // $( "input" ).fadeTo( 2000, 1);

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
  	$( "#die" ).fadeTo( 0, 0)

  	// Generate a random number between 1~6
  	var rand = Math.floor((Math.random()*6)+1);
  	console.log(rand);

  	//replace the contents of the "#die" DIV
  	$( "#die" ).html( "<img src='" + rand + ".png' title='"+ rand + "' alt='the roll'>");
  	$( "#die" ).css({ opacity: 0})
		$( "#die" ).fadeTo( "slow", 1)

  	// Do AJAX post, method="post" action="/rolls"
  	$.post("/rolls", { value: rand });

  	// Prevent default POST action
  	event.preventDefault();
	});
});

