main();

// Control Flow and Testing Messages
function main() {
	console.log("index.js - loaded successfully.");
	// console.log("Using scheme + " controlColours());
	colourSetup();
}


// Change colours based on the option the user has selected
// Force-called when user makes dropdown selection
function controlColours() {
	let scheme = document.getElementById("colour_scheme");
	let c1 = document.getElementById("c1").style;
	let c2 = document.getElementById("c2").style;
	let c3 = document.getElementById("c3").style;

	// Change the colours
	switch (scheme.value) {
		case ("rgb"):
			c1.backgroundColor = "rgb(235, 50, 50)";
			c2.backgroundColor = "rgb(50, 235, 50)";
			c3.backgroundColor = "rgb(50, 50, 235)";
			break;
		case ("neon"):
			c1.backgroundColor = "rgb(255, 0, 0)";
			c2.backgroundColor = "rgb(0, 255, 0)";
			c3.backgroundColor = "rgb(0, 0, 255)";
			break;
		case ("cremes"):
			c1.backgroundColor = "#DFDFE5";
			c2.backgroundColor = "#887878";
			c3.backgroundColor = "#B7BBB5";
			break;
		case ("sea"):
			c1.backgroundColor = "#1DDFE4";
			c2.backgroundColor = "#1D7FE4";
			c3.backgroundColor = "#1E1DE4";
			break;
		case ("sunrise"):
			c1.backgroundColor = "#F1ED07";
			c2.backgroundColor = "#DE220F";
			c3.backgroundColor = "#E020A4";
			break;
		case ("forest"):
			c1.backgroundColor = "#4BF10E";
			c2.backgroundColor = "#49C744";
			c3.backgroundColor = "#0D6314";
			break;
		default:
			console.log("Something went wrong, colour not changed.");
	}

	// document.cookie = "c1 = wowowwowowowowo; path = /game.html";
	document.cookie = "c1 = wowowwowowowowo;";
	// document.cookie = "c1 = " + c1.backgroundColor;
	// document.cookie = "c2 = " + c2.backgroundColor;
	// document.cookie = "c3 = " + c3.backgroundColor;
	let x = document.cookie;
	console.log("Cookie -- " + x);
	console.log("Scheme set: " + scheme.value);
	// return ("" + scheme.value);
}

// Set the colours of player names based on the selected colour scheme
function colourSetup() {
	// Only attempt to do this if on the game page
	if (window.location.pathname.includes("game.html")) {
		console.log("Attempting to set player colours.");
		document.getElementById("p1").style.color = "rgb(255, 0, 0)";
		document.getElementById("p2").style.color = "rgb(255, 0, 0)";
		document.getElementById("p3").style.color = "rgb(255, 0, 0)";
	}
	
}

// Adds to and updates player scores
function score(player) {
	return 0;
}

// function pullVars() {
// 	const urlSearchParams = new urlSearchParams(window.location.search);
// }

// document.getElementById().setAttribute("href") = `/game.html?col=${scheme.value}`;