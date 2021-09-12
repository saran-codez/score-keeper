const playerOne = {
	score: 0,
	button: document.querySelector("#p1Button"),
	display: document.querySelector("#p1Display"),
};

const playerTwo = {
	score: 0,
	button: document.querySelector("#p2Button"),
	display: document.querySelector("#p2Display"),
};

const resetBtn = document.querySelector("#resetButton");
const scoreSelector = document.querySelector("#roundNumber");
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
}
