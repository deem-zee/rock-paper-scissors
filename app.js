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

	function playRound(humanChoice, computerChoice) {
	if(humanChoice == "rock" && computerChoice == "paper") {
		computerScore += 1;
		console.log("paper beats rock, comp + 1")
	} else if(humanChoice == "rock" && computerChoice == "scissors") {
		humanScore += 1;
		console.log("rock beats scissors, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "rock") {
		humanScore += 1;
		console.log("paper beats rock, human + 1")
	} else if(humanChoice == "paper" && computerChoice == "scissors") {
		computerScore += 1;
		console.log("scissors beats paper, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "rock") {
		computerScore += 1;
		console.log("rock beats scissors, comp + 1")
	} else if(humanChoice == "scissors" && computerChoice == "paper") {
		humanScore += 1;
		console.log("scissors beats paper, human + 1")
	} else {
		console.log("draw");
	}
}

	let humanScore = 0;
	let computerScore = 0;
	for(let i = 0; i < numOfRounds; i++) {
		let humanSelection = getHumanChoice();
		let computerChoice = getComputerChoice();
		playRound(humanSelection, computerChoice);
	}
	if(humanScore > computerScore) {
		console.log("Human Wins!");
	} else if(humanScore < computerScore) {
		console.log("Computer Wins!");
	} else {
		console.log("It's a draw");
	}
}


playGame(5)