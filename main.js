console.log("main.js is linked!")

var xSubmit = $('#xPlayerSubmit');

xSubmit.on('click', function(){
	// get value of input and set h3 text to that value
	// then hide the playerXname div
	console.log("You clicked Player X Submit");
	var xInput = $('#xPlayerInput').val();
	$('#xName').text(xInput);
	console.log(xInput);
	var playerXname = $('#playerXname'); //div
	playerXname.toggle();
});

var oSubmit = $('#oPlayerSubmit');

oSubmit.on('click', function(){
	// get value of input and set h3 text to that value
	// then hide the playerOname div
	console.log("You clicked Player O Submit");
	var oInput = $('#oPlayerInput').val();
	$('#oName').text(oInput);
	console.log(oInput);
	var playerOname = $('#playerOname'); //div
	playerOname.toggle();
});

var currentPlayer = "x";

var boxesArray = $('.box');

// set up a way for when currentPlayer clicks on a div box it creates h1 
// and sets the text to the currentPlayer value.
for(var i = 0; i < boxesArray.length; i++){
	$(boxesArray[i]).on('click', function(event){
		console.log("box click event fired!");
		if(currentPlayer === "x"){
			$(event.target).append('<h1 class="purple">' + currentPlayer + '</h1>');
			currentPlayer = "o";

		} else if (currentPlayer === "o"){
			$(event.target).append('<h1 class="green">' + currentPlayer + '</h1>');
			currentPlayer = "x";
		};
	});
}


// how does the program check for a winner?

var determineWinner = function determineWinner(){
	var boxA = $('#boxA');
	var boxB = $('#boxB');
	var boxC = $('#boxC');

	if(boxA === "x" && boxB === "x" && boxC === "x"){
		console.log("Player X Wins!")
	}
}

determineWinner();



