let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}



function getHumanChoice() {
  let input = prompt(
    "Please enter a choice of either: Rock, Paper, Scissors"
  ).toLowerCase();
  return input;
}


function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log(`You Win! Rock beats Scissors`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(`You Win! Paper beats Rock`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(`You Win! Scissors beats Paper`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log(`You Lost. Rock beats Scissors`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log(`You Lost. Paper beats Rock`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log(`You Lost. Scissors beats Paper`);
    console.log(`Player Score: ${humanScore} Computer Score: ${computerScore}`);
  } else {
    console.log(`It's a tie.`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Final result
  if (humanScore > computerScore) {
    console.log("🏆 You won the game!");
  } else if (computerScore > humanScore) {
    console.log("💻 Computer wins the game!");
  } else {
    console.log("🤝 The game is a tie!");
  }
}

playGame()

