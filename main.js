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

var rowsArray = [
		{ rowOne: [boxesArray[0], boxesArray[1], boxesArray[2]]},
		{ rowTwo: [boxesArray[3], boxesArray[4], boxesArray[5]]},
		{ rowThree: [boxesArray[6], boxesArray[7], boxesArray[8]]},
	];

// set up a way for when currentPlayer clicks on a div box it creates h1 
// and sets the text to the currentPlayer value.
for(var i = 0; i < boxesArray.length; i++){
	$(boxesArray[i]).one('click', function(event){
		console.log("box click event fired!");
		//debugger

		// create a way to check whether or not the clicked div already has an h1.
		// if it does, maybe alert player to choose another box.  
		// if it doesn't run all the code below.
		// if ($(event.currentTarget).find('h1') !== [] ){
		// 	alert("Pick another box");

		// } else {

			if (currentPlayer === "x"){
				console.log(event);
				console.log(event.currentTarget);
				$(event.currentTarget).append('<h1 class="purple">' + currentPlayer + '</h1>');
				// $(boxesArray[i]).off('click', event.currentTarget);
				currentPlayer = "o";
				determineWinner();

			} else if (currentPlayer === "o"){
				$(event.currentTarget).append('<h1 class="green">' + currentPlayer + '</h1>');
				currentPlayer = "x";
				determineWinner();
			};
		// }	
	});
}

// how does the program check for a winner?

var determineWinner = function determineWinner(){
	var playerOneName = $('#xName').text();
	var playerTwoName = $('#oName').text();

	var boxA = $('#boxA > h1').text();
	var boxB = $('#boxB > h1').text();
	var boxC = $('#boxC > h1').text();
	var boxD = $('#boxD > h1').text();
	var boxE = $('#boxE > h1').text();
	var boxF = $('#boxF > h1').text();
	var boxG = $('#boxG > h1').text();
	var boxH = $('#boxH > h1').text();
	var boxI = $('#boxI > h1').text();

	if (boxA === "x" && boxB === "x" && boxC === "x"){
		console.log(playerOneName +  " Wins!");
	} else if (boxD === "x" && boxE === "x" && boxF === "x"){
		console.log("Player X Wins!")
	} else if (boxG === "x" && boxH === "x" && boxI === "x"){
		console.log("Player X Wins!")
	} else if (boxA === "x" && boxE === "x" && boxI === "x"){
		console.log("Player X Wins!");
	} else if (boxA === "x" && boxE === "x" && boxI === "x"){
		console.log("Player X Wins!");
	} else if (boxC === "x" && boxE === "x" && boxG === "x"){
		console.log("Player X Wins!")

	} else if (boxA === "o" && boxB === "o" && boxC === "o"){
		console.log(playerTwoName +  " Wins!");
	} else if (boxD === "o" && boxE === "o" && boxF === "o"){
		console.log("Player O Wins!")
	} else if (boxG === "o" && boxH === "o" && boxI === "o"){
		console.log("Player O Wins!")
	} else if (boxA === "o" && boxE === "o" && boxI === "o"){
		console.log("Player O Wins!")
	} else if (boxA === "o" && boxE === "o" && boxI === "o"){
		console.log("Player O Wins!")
	} else if (boxC === "o" && boxE === "o" && boxG === "o"){
		console.log("Player O Wins!")
	}
}

var resetGame = function resetGame(){
	for (var i = 0; i < boxesArray.length; i++){
		$(boxesArray[i]).empty();
	}

}

