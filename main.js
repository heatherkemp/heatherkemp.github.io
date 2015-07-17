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
		console.log(event);
		if(currentPlayer === "x"){
			$(event.target).append('<h1 class="purple">' + currentPlayer + '</h1>');
			currentPlayer = "o";
			determineWinner();

		} else if (currentPlayer === "o"){
			$(event.target).append('<h1 class="green">' + currentPlayer + '</h1>');
			currentPlayer = "x";
			determineWinner();
		};
	});
}

// how does the program check for a winner?

var determineWinner = function determineWinner(){
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
		console.log("Player X Wins!")
	} else if (boxD === "x" && boxE === "x" && boxF === "x"){
		console.log("Player X Wins!")
	} else if (boxG === "x" && boxH === "x" && boxI === "x"){
		console.log("Player X Wins!")
	} else if (boxA === "x" && boxE === "x" && boxI === "x"){
		console.log("Player X Wins!");
	} else if (boxA === "x" && boxE === "x" && boxI === "x"){
		console.log("Player X Wins!");

	} else if (boxA === "o" && boxB === "o" && boxC === "o"){
		console.log("Player O Wins!")
	} else if (boxD === "o" && boxE === "o" && boxF === "o"){
		console.log("Player O Wins!")
	} else if (boxG === "o" && boxH === "o" && boxI === "o"){
		console.log("Player O Wins!")
	} else if (boxA === "o" && boxE === "o" && boxI === "o"){
		console.log("Player O Wins!")
	} else if (boxA === "o" && boxE === "o" && boxI === "o"){
		console.log("Player O Wins!")
	}
}

