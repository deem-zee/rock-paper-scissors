let humanScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector("#result");
const btnRock = document.querySelector("button[data-choice=rock]");
const btnPaper = document.querySelector("button[data-choice=paper]");
const btnScissors = document.querySelector("button[data-choice=scissors]");
const roundResult = document.querySelector("#round-result");
render();
function getRandom() {
	return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
	let value = getRandom();
	if(value == 0) {
		return "rock";
	} else if(value == 1) {
		return "paper";
	}
	return "scissors";
}


btnRock.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound("rock", computerChoice);
})

btnPaper.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound("paper", computerChoice)
})

btnScissors.addEventListener("click", () => {
	let computerChoice = getComputerChoice();
	playRound("scissors", computerChoice);
})

function playRound(humanChoice, computerChoice) {
	if(humanChoice == "rock" && computerChoice == "paper") {
		computerScore += 1;
		roundResult.textContent = ("paper beats rock, comp + 1")
	} else if(humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
		roundResult.textContent = ("rock beats scissors, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "rock") {
		humanScore += 1;
		roundResult.textContent = ("paper beats rock, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "scissors") {
		computerScore += 1;
		roundResult.textContent = ("scissors beats paper, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "rock") {
		computerScore += 1;
		roundResult.textContent = ("rock beats scissors, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "paper") {
		humanScore += 1;
		roundResult.textContent = ("scissors beats paper, human + 1")
	} else {
		roundResult.textContent = ("draw");
	}
	render();
	checkEndGame();
}



	function render() {
		let result = `Human ${humanScore} : ${computerScore} Computer`;
		scoreBoard.textContent = result;
	}
	

	function checkEndGame() {
		if(humanScore == 5) {
			scoreBoard.textContent = ("Game Over! Human Won!");
			humanScore = 0;
			computerScore = 0;
			restart();
		}
		if(computerScore == 5) {
			scoreBoard.textContent = ("Game Over!Computer Won!");
			humanScore = 0;
			computerScore = 0;
			restart();
		}
		
	}


function restart() {
		let restart = confirm("if you want to play a new game press OK");
		if (!restart) {
			btnRock.disabled = true;
			btnPaper.disabled = true;
			btnScissors.disabled = true;
		}
		return;
}
