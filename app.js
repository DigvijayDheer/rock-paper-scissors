const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

// FUNCTION DECLARATION/DEFINITION
function getPlayerChoice() {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		""
	).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you.`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
}

// FUNCTION EXPRESSION
const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

// ARROW FUNCTION
const getWinner = (cChoice, pChoice) => {
	if (cChoice === pChoice) {
		return RESULT_DRAW;
	} else if (
		(cChoice === ROCK && pChoice === PAPER) ||
		(cChoice === PAPER && pChoice === SCISSORS) ||
		(cChoice === SCISSORS && pChoice === ROCK)
	) {
		return RESULT_PLAYER_WINS;
	} else {
		return RESULT_COMPUTER_WINS;
	}
};

// ANONYMOUS FUNCTION
startGameBtn.addEventListener("click", function () {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log("Game is starting...");
	const playerSelection = getPlayerChoice();
	const computerSelection = getComputerChoice();
	const winner = getWinner(computerSelection, playerSelection);
	let message = `You picked ${playerSelection} and computer picked ${computerSelection} therefore you `;
	if (winner === RESULT_DRAW) {
		message = message + "had a draw.";
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + "won.";
	} else {
		message = message + "lost.";
	}
	alert(message);
	gameIsRunning = false;
});
