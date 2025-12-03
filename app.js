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

function getHumanChoice() {
	return prompt("What do you choose: rock, paper or scissors?").toLowerCase();
}





function playGame(numOfRounds) {
	let humanScore = document.querySelector("#humanScore");
	let computerScore = document.querySelector("#computerScore");
	humanScore.textContent = 0;
	computerScore.textContent = 0;

	function playRound(humanChoice, computerChoice) {
	if(humanChoice == "rock" && computerChoice == "paper") {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		console.log("paper beats rock, comp + 1")
	} else if(humanChoice == "rock" && computerChoice == "scissors") {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		console.log("rock beats scissors, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "rock") {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		console.log("paper beats rock, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "scissors") {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		console.log("scissors beats paper, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "rock") {
		computerScore.textContent = parseInt(computerScore.textContent) + 1;
		console.log("rock beats scissors, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "paper") {
		humanScore.textContent = parseInt(humanScore.textContent) + 1;
		console.log("scissors beats paper, human + 1")
	} else {
		console.log("draw");
	}
}


	for(let i = 0; i < numOfRounds; i++) {
		let humanSelection = getHumanChoice();
		let computerChoice = getComputerChoice();
		playRound(humanSelection, computerChoice);
	}
	if(parseInt(humanScore.textContent) > parseInt(computerScore.textContent)) {
		console.log("Human Wins!");
	} else if(parseInt(humanScore.textContent) < parseInt(computerScore.textContent)) {
		console.log("Computer Wins!");
	} else {
		console.log("It's a draw");
	}
}

playGame(5)