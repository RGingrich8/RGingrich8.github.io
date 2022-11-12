// Global Var Setup
const NO_OF_LINES = 24;

let playerTurn = 1;
let p1Score = 0;
let p2Score = 0;
let p3Score = 0;

let unclaimedLines = [];
let usedLines = [];

let availSets = new Array(["h0", "h3", "v0", "v1"], ["h1", "h4", "v1", "v2"], [], [], [], [], [], [], []);


// Run
main();



// Control Flow
function main() {
	console.log("index.js - loaded successfully.");
	
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
	
	console.log("Player colours set correctly.");
	document.getElementById("p1").style.color = (document.cookie.split(";")[0]).split("=")[1];
	document.getElementById("p2").style.color = (document.cookie.split(";")[1]).split("=")[1];
	document.getElementById("p3").style.color = (document.cookie.split(";")[2]).split("=")[1];
	
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
	
	// Used to check all conditions of moving onto the next player's turn
	let moveOn = true;

	// Set current player's colour
	let currColour = "black"; 	// Default

	// Set colour based on player's turn
	if (playerTurn == 1) {
		currColour = document.cookie.split(";")[0].split("=")[1];
	} else if (playerTurn == 2) {
		currColour = document.cookie.split(";")[1].split("=")[1];
	} else {
		currColour = document.cookie.split(";")[2].split("=")[1];
	}
	
	// Check if valid move
	if (!usedLines.includes(this.id)) {
		document.getElementById(this.id).style.backgroundColor = currColour;
		usedLines.push(this.id);
		
		// Check if a square completed
		// document.getElementById("p" + playerTurn).setAttribute("Player " + playerTurn + ": " + p1Score)
		if (checkPoint()) {
			moveOn = false;
			incScore(playerTurn);
		}

		// Check if all lines have been used
		if (usedLines.length == NO_OF_LINES) {
			moveOn = false;
			// let sortScores = new Array(p1Score, p2Score, p3Score).sort();
			alert("Game over!");
			document.location.reload();
			// document.createElement()
		}

		// If all of the above false, move on to next turn
		if (moveOn) {
			playerTurn++;
			if (playerTurn > 3) {
				playerTurn = 1; // Loop back to P1
			}
		}

	}
	
}



// Check if an available square has been completed
function checkPoint() {
	
	let found = false;

	console.log(usedLines[usedLines.length - 1]);
	for (let x = 0; x < availSets.length; x++) {
		if (availSets[x].includes(usedLines[usedLines.length - 1])) { 	// If most recently added line is in that set...
			let y = 0;
			while (y < availSets[x].length) {
				if (usedLines.includes(availSets[x][y])) {
					found = true;
				} else {
					found = false;
					break;
				}
				y++;
			}
			// if (usedLines.includes(availSets[x][0]) && usedLines.includes(availSets[x][1]) && usedLines.includes(availSets[x][2]) && usedLines.includes(availSets[x][3])) {
			// 	console.log("LOOOL");
			// 	return true;
			// } else {
			// 	console.log("AWWWW");
			// 	return false;
			// }
		}
	}

	
	// availSets.remove(the found one);
	if (found) {
		console.log("FOUND IT");
		return true;
	} else {
		return false;
	}
}



// Simple function to increase a player's points and update HTML document
function incScore(player) {
	
	if (player == 1) {
		p1Score++;
	} else if (player == 2) {
		p2Score++;
	} else {
		p3Score++;
	}

	document.getElementById("p1").setAttribute("value", "Player 1: " + p1Score);
	document.getElementById("p2").setAttribute("value", "Player 2: " + p2Score);
	document.getElementById("p3").setAttribute("value", "Player 3: " + p3Score);

}