const playerOne = {
	score: 0,
	button: document.querySelector("#p1Button"),
	display: document.querySelector("#p1Display"),
	winMsg: "Player One wins.",
};

const playerTwo = {
	score: 0,
	button: document.querySelector("#p2Button"),
	display: document.querySelector("#p2Display"),
	winMsg: "Player Two wins.",
};

const resetBtn = document.querySelector("#resetButton");
const scoreSelector = document.querySelector("#roundNumber");
const winResult = document.querySelector("#result");
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add("has-text-success");
			opponent.display.classList.add("has-text-danger");
			player.button.disabled = true;
			opponent.button.disabled = true;
			winResult.innerText = player.winMsg;
			winResult.classList.add("has-text-info");
		}
		player.display.innerText = player.score;
	}
}

scoreSelector.addEventListener("change", () => {
	winningScore = parseInt(scoreSelector.value);
	reset();
});

playerOne.button.addEventListener("click", () => {
	updateScores(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", () => {
	updateScores(playerTwo, playerOne);
});

resetBtn.addEventListener("click", reset);

function reset() {
	isGameOver = false;
	for (const player of [playerOne, playerTwo]) {
		player.score = 0;
		player.display.innerText = player.score;
		player.display.classList.remove("has-text-success", "has-text-danger");
		player.button.disabled = false;
	}
	winResult.classList.remove("has-text-info");
	winResult.innerText = "Use the buttons below to keep score.";
}
