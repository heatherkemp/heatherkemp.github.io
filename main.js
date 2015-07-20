console.log("main.js is linked!")

var xSubmit = $('#xPlayerSubmit');

var setPlayerOneName = function setPlayerOneName(){
	// get value of input and set h3 text to that value
	// then hide the playerXname div
	console.log("You clicked Player X Submit");
	var xInput = $('#xPlayerInput').val();
	$('#xName').text(xInput);
	console.log(xInput);
	var playerXname = $('#playerXname'); //div
	playerXname.toggle();
};

xSubmit.on('click', setPlayerOneName);

var oSubmit = $('#oPlayerSubmit');

var setPlayerTwoName = function setPlayerTwoName(){
	// get value of input and set h3 text to that value
	// then hide the playerOname div
	console.log("You clicked Player O Submit");
	var oInput = $('#oPlayerInput').val();
	$('#oName').text(oInput);
	console.log(oInput);
	var playerOname = $('#playerOname'); //div
	playerOname.toggle();
};

oSubmit.on('click', setPlayerTwoName);

var currentPlayer = "x";

var boxesArray = $('.box');

var rowsArray = [
		{ rowOne: [boxesArray[0], boxesArray[1], boxesArray[2]]},
		{ rowTwo: [boxesArray[3], boxesArray[4], boxesArray[5]]},
		{ rowThree: [boxesArray[6], boxesArray[7], boxesArray[8]]},
	];

var columnsArray = [
		{ colOne: [boxesArray[0], boxesArray[3], boxesArray[6]]},
		{ colTwo: [boxesArray[1], boxesArray[4], boxesArray[7]]},
		{ colThree: [boxesArray[2], boxesArray[5], boxesArray[8]]},
];	

var diagonalsArray = [
	{ diagOne: [boxesArray[0], boxesArray[4], boxesArray[8]]},
	{ diagTwo: [boxesArray[2], boxesArray[4], boxesArray[6]]},
];

// set up a way for when currentPlayer clicks on a div box it creates h1 
// and sets the text to the currentPlayer value.
var startGame = function startGame(){
	for(var i = 0; i < boxesArray.length; i++){
		$(boxesArray[i]).one('click', function(event){
			console.log("box click event fired!");
			//debugger
			// create a way to check whether or not the clicked div already has an h1.  
			// if it doesn't run all the code below.

		if (currentPlayer === "x"){
			console.log(event.currentTarget);
			$(event.currentTarget).append('<h1 class="purple">' + currentPlayer + '</h1>');
			currentPlayer = "o";
			determineWinner();

		} else if (currentPlayer === "o"){
			$(event.currentTarget).append('<h1 class="green">' + currentPlayer + '</h1>');
			currentPlayer = "x";
			determineWinner();
		};	
		});
	}
}

startGame();

var theModal = $('#modal');
var showWinnerModal = function showWinnerModal(){
	theModal.toggle();
}

var drawCounter = 0;
var xWins = 0;
var oWins = 0;

// how does the program check for a winner?
var determineWinner = function determineWinner(){
	var playerOneName = $('#xName').text();
	var playerTwoName = $('#oName').text();
	var theModalWinnerText = $('#winner');
	

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
		$(rowsArray[0].rowOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxD === "x" && boxE === "x" && boxF === "x"){
		console.log(playerOneName +  " Wins!");
		$(rowsArray[1].rowTwo).find('h1').addClass('animated infinite tada');	
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxG === "x" && boxH === "x" && boxI === "x"){
		console.log(playerOneName +  " Wins!");
		$(rowsArray[2].rowThree).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		sxWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxA === "x" && boxD === "x" && boxG === "x"){
		console.log(playerOneName +  " Wins!");
		$(columnsArray[0].colOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxB === "x" && boxE === "x" && boxH === "x"){
		console.log(playerOneName +  " Wins!");
		$(columnsArray[1].colTwo).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxC === "x" && boxF === "x" && boxI === "x"){
		console.log(playerOneName +  " Wins!");
		$(columnsArray[2].colThree).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxA === "x" && boxE === "x" && boxI === "x"){
		console.log(playerOneName +  " Wins!");
		$(diagonalsArray[0].diagOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxC === "x" && boxE === "x" && boxG ==="x"){	
		console.log(playerOneName +  " Wins!");
		$(diagonalsArray[1].diagTwo).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerOneName +  " Wins!");
		xWins += 1;
		$('#xWins').text("# Wins: " + xWins);
		showWinnerModal();

	} else if (boxA === "o" && boxB === "o" && boxC === "o"){
		console.log(playerTwoName +  " Wins!");
		$(rowsArray[0].rowOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxD === "o" && boxE === "o" && boxF === "o"){
		console.log("Player O Wins!");
		$(rowsArray[1].rowTwo).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxG === "o" && boxH === "o" && boxI === "o"){
		console.log("Player O Wins!");
		$(rowsArray[2].rowThree).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxA === "o" && boxD === "o" && boxG === "o"){
		console.log("Player O Wins!");
		$(columnsArray[0].colOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxB === "o" && boxE === "o" && boxH === "o"){
		console.log("Player O Wins!");
		$(columnsArray[1].colTwo).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxC === "o" && boxF === "o" && boxI === "o"){
		console.log("Player O Wins!");
		$(columnsArray[2].colThree).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxA === "o" && boxE === "o" && boxI === "o"){
		console.log(playerTwoName +  " Wins!");
		$(diagonalsArray[0].diagOne).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else if (boxC === "o" && boxE === "o" && boxG ==="o"){	
		console.log(playerTwoName +  " Wins!");
		$(diagonalsArray[1].diagTwo).find('h1').addClass('animated infinite tada');
		theModalWinnerText.text(playerTwoName +  " Wins!");
		oWins += 1;
		$('#oWins').text("# Wins: " + oWins);
		showWinnerModal();

	} else {
		console.log("Draw!");  // need to figure out a way out of this if no one wins.
		console.log(drawCounter);
		drawCounter += 1;

			if (drawCounter === 9){
			console.log("The game is a tie!");
			theModalWinnerText.text("The Game is Tied!");
			showWinnerModal();
		}
	}
}

var resetGame = function resetGame(){
	for (var i = 0; i < boxesArray.length; i++){
		$(boxesArray[i]).empty();
		$(boxesArray[i]).off();
		theModal.toggle();
		currentPlayer = "x";
		//somehow reset the loop here
	}
	 startGame();
}

var playAgain = $('#playAgain');
playAgain.on('click', resetGame);

var brandNewGame = function brandNewGame(){
	drawCounter = 0;
	xWins = 0;
	oWins = 0;
	$('#xPlayerInput').val('');
	$('#oPlayerInput').val('');
	$('#xWins').text('');
	$('#oWins').text('');
	resetGame();
	setPlayerOneName();
	setPlayerTwoName();
}

var newPlayerGame = $('#newPlayers');
newPlayerGame.on('click', brandNewGame);



