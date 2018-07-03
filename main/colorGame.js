console.log("connected"); //ensure js file connection to html file

var colors = [ //array of colors assigned to class 'square'
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square"); //select squares
var pickedColor = pickColor(); //the winning color
var colorDisplay = document.getElementById("colorDisplay"); //the rgb value of the winning color (to be guessed)
var messageDisplay = document.getElementById("message");
var body = document.getElementById("container");

colorDisplay.textContent = pickedColor; //updates the span to become the correct color

for (var i = 0; i < squares.length; i++) { //loop through all square divs

	squares[i].style.backgroundColor = colors[i]; //assign colors array index value(color) to square div backgrounds
	squares[i].addEventListener("click", function (){ //add clicklistener to squares
		var clickedColor = this.style.backgroundColor; //assign the clicked color to variable 

		if(clickedColor === pickedColor){ //check if clicked color value is equal to correct color

			messageDisplay.textContent = "Nice work!";
			changeColors(clickedColor);

		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again!";
		}
	});
}

function changeColors(color) {
	for ( var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = color;
		}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length); //generate random number equal to array length
	return colors[random]; // takes random number and array index and assigns it to pickedColor
}