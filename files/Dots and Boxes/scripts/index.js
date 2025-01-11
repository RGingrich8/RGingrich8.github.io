// Global Var Setup
const NO_OF_LINES = 24;
const URL = "https://rgingrich8.github.io/";
const URL_ALT = "https://rgingrich8.github.io";

// let firstTimeSetup = true;
let playerTurn = 1;
let p1Score = 0;
let p2Score = 0;
let p3Score = 0;

let unclaimedLines = [];
let usedLines = [];

// ADD A LOOP TO DO THIS!!!!!!!!!!
let availSets = new Array(["h0", "h3", "v0", "v1"], ["h1", "h4", "v1", "v2"], ["h2", "h5", "v2", "v3"], 
				["h3", "h6", "v4", "v5"], ["h4", "h7", "v5", "v6"], ["h5", "h8", "v6", "v7"], 
				["h6", "h9", "v8", "v9"], ["h7", "h10", "v9", "v10"], ["h8", "h11", "v10", "v11"]);

// Run
main();



// Control Flow
function main() {
	console.log("index.js - loaded successfully.");
	
	// Set up cookies on homepage
	// if (window.location.pathname.includes("index.html") || !(window.location.pathname.includes("/"))) {
	if (window.location.href == URL || window.location.href == URL_ALT || window.location.href == URL + "index.html") {
		console.log(window.location.href);
		document.cookie = "c1 = " + "rgb(235, 50, 50)";
		document.cookie = "c2 = " + "rgb(50, 235, 50)";
		document.cookie = "c3 = " + "rgb(50, 50, 235)";
		// document.cookie = "firstTimeSetup = " + false;
	}
	
	// Only attempt to do this if on the game page
	if (window.location.pathname.includes("game.html")) {
		initLines();
		colourSetup();
	}

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

	// Save this data as cookies
	document.cookie = "c1 = " + c1.backgroundColor;
	document.cookie = "c2 = " + c2.backgroundColor;
	document.cookie = "c3 = " + c3.backgroundColor;
	console.log("Scheme set: " + scheme.value);
}



// Set the colours of player names based on the selected colour scheme
// Grabs the colour scheme from cookies
function colourSetup() {
	
	document.getElementById("p1").style.color = (document.cookie.split(";")[0]).split("=")[1];
	document.getElementById("p2").style.color = (document.cookie.split(";")[1]).split("=")[1];
	document.getElementById("p3").style.color = (document.cookie.split(";")[2]).split("=")[1];

	document.getElementById("up_next").style.backgroundColor = (document.cookie.split(";")[0]).split("=")[1];
	
}



// Initiates all lines with event listeners
function initLines() {
	
	// Set up all horizontal lines
	unclaimedLines = document.getElementsByClassName("hline");
	for (let x = 0; x < unclaimedLines.length; x++) {
		unclaimedLines[x].addEventListener("click", placement);
		unclaimedLines[x].id = "h" + x;
	}
	
	// Set up all vertical lines
	unclaimedLines = [];
	unclaimedLines = document.getElementsByClassName("vline");
	for (let x = 0; x < unclaimedLines.length; x++) {
		unclaimedLines[x].addEventListener("click", placement);
		unclaimedLines[x].id = "v" + x;
	}
}



// Game logic, etc
function placement(event) {
	
	// Used to check all conditions before moving onto the next player's turn
	let moveOn = true;

	// Set current player's colour
	let currColour = "black"; 									// Default
	let next = document.getElementById("up_next").style;		// Indicator at bottom for whose is up next

	// Set colour based on player's turn
	if (playerTurn == 1) {
		currColour = document.cookie.split(";")[0].split("=")[1];
		next.backgroundColor = document.cookie.split(";")[1].split("=")[1];
	} else if (playerTurn == 2) {
		currColour = document.cookie.split(";")[1].split("=")[1];
		next.backgroundColor = document.cookie.split(";")[2].split("=")[1];
	} else {
		currColour = document.cookie.split(";")[2].split("=")[1];
		next.backgroundColor = document.cookie.split(";")[0].split("=")[1];
	}

	// Check if valid move
	if (!usedLines.includes(this.id)) {
		document.getElementById(this.id).style.backgroundColor = currColour;
		usedLines.push(this.id);
		
		// Check if square(s) completed
		let turnScore = checkPoint();

		// If yes, increase score
		if (turnScore > 0) {
			moveOn = false;
			next.backgroundColor = document.cookie.split(";")[playerTurn - 1].split("=")[1]; // Keep indicator unchanged
			incScore(playerTurn, turnScore);
		}

		// Check if all lines have been used
		if (usedLines.length == NO_OF_LINES) {
			moveOn = false;
			alert("Game over! The winner is " + checkWinner() + "! The game will now reset.");
			document.location.reload();
		}

		// If each of the above is false, move on to next turn
		if (moveOn) {
			playerTurn++;
			if (playerTurn > 3) {
				playerTurn = 1; // Loop back to P1
			}
		}

	}
	
}



// Check if an available square has been completed
// Updated: check for multiple square completion
function checkPoint() {
	
	let totalPoints = 0;

	// console.log(usedLines[usedLines.length - 1]);
	for (let x = 0; x < availSets.length; x++) {						// Iterate through all possible sets
		if (availSets[x].includes(usedLines[usedLines.length - 1])) { 	// If most recently added line is in that set...
			if (usedLines.includes(availSets[x][0]) && usedLines.includes(availSets[x][1]) && usedLines.includes(availSets[x][2]) && usedLines.includes(availSets[x][3])) {
				totalPoints++;
			}
		}
	}

	return totalPoints;
}



// Simple function to increase a player's points and update HTML document
function incScore(player, amount) {
	
	if (player == 1) {
		p1Score += amount;
	} else if (player == 2) {
		p2Score += amount;
	} else {
		p3Score += amount;
	}

	document.getElementById("p1").textContent = "Player 1: " + p1Score;
	document.getElementById("p2").textContent = "Player 2: " + p2Score;
	document.getElementById("p3").textContent = "Player 3: " + p3Score;

}



// Simple function to see whose score was highest
function checkWinner() {
	
	if (p1Score > p2Score && p1Score > p3Score) {
		return "Player 1 with a score of " + p1Score;
	} else if (p2Score > p1Score && p2Score > p3Score) {
		return "Player 2 with a score of " + p2Score;
	} else if (p1Score == p2Score || p2Score == p3Score || p1Score == p3Score) { // This needs fixing!! Change it in the future
		return "nobody, it's a draw";
	} else {
		return "Player 3 with a score of " + p3Score;
	}
}