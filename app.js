const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playerOneBtn = document.querySelector("#p1Button");
const playerTwoBtn = document.querySelector("#p2Button");
const resetBtn = document.querySelector("#resetButton");
const scoreSelector = document.querySelector("#roundNumber");

let winningScore = 3;
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

scoreSelector.addEventListener("change", () => {
	winningScore = parseInt(scoreSelector.value);
	reset();
});

playerOneBtn.addEventListener("click", () => {
	if (!isGameOver) {
		p1Score += 1;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add("winner");
			p2Display.classList.add("loser");
		}
		p1Display.innerText = p1Score;
	}
});

playerTwoBtn.addEventListener("click", () => {
	if (!isGameOver) {
		p2Score += 1;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2Display.classList.add("winner");
			p1Display.classList.add("loser");
		}
		p2Display.innerText = p2Score;
	}
});

resetBtn.addEventListener("click", reset);

function reset() {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.innerText = p1Score;
	p2Display.innerText = p2Score;
	p1Display.classList.remove("winner", "loser");
	p2Display.classList.remove("winner", "loser");
}
