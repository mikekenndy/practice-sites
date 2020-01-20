// Play rock paper scissors
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

// Results
const WIN = 1;
const LOSS = -1;
const DRAW = 0;

// Generates the play that the computer makes
function computerPlay() {
	return Math.floor(Math.random() * 3) + 1;
}

function playRound(playerSelection, computerSelection){
	if (playerSelection == computerSelection)
		return DRAW;
	if (playerSelection > computerSelection || 
		(playerSelection == ROCK && computerSelection == SCISSORS))
		return WIN;
	return LOSS;
}

// Change image when selection is made
function changeImage(pick) {
	switch(pick) {
		case ROCK:
			document.getElementById('computer-pick').src='images/rock.png';
		break;
		case PAPER:
			document.getElementById('computer-pick').src='images/paper.png';
		break;
		case SCISSORS:
			document.getElementById('computer-pick').src='images/scissors.png';
		break;
		default:
		//None
	}
}

// Handles the running of the game
function pickRock() {
	var computerpick = computerPlay();
	var result = playRound(ROCK, computerpick);
	changeImage(computerpick);
	displayResult(result);
}
function pickPaper() {
	var computerpick = computerPlay();
	var result = playRound(PAPER, computerpick);
	changeImage(computerpick);
	displayResult(result);
}
function pickScissors() {
	var computerpick = computerPlay();
	var result = playRound(SCISSORS, computerpick);
	changeImage(computerpick);
	displayResult(result);
}

function displayResult(result) {
	switch(result) {
		case WIN:
			document.getElementById("response").innerHTML = "You win!";
		break;
		case LOSS:
			document.getElementById("response").innerHTML = "You lost!";
		break;
		case DRAW:
			document.getElementById("response").innerHTML = "Draw! You picked the same thing.";
		break;
		default:;
	}
}