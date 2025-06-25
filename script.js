let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoices = Math.floor(Math.random() * 3);
  console.log(computerChoices);

  if (computerChoices === 0) {
    return "Rock";
  } else if (computerChoices === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

console.log(getComputerChoice());


function getHumanChoice() {
  let input = prompt("Please enter a choice of either: Rock, Paper, Scissors").toLowerCase();
  return input;
}

console.log(getHumanChoice());




function playRound(humanChoice, computerChoice) {
  // Use these two parameters to take the human and computer choices as arguments
  // Players can input “rock”, “ROCK”, “RocK”, or other variations
  // Need to tell the user things like, “You lose! Paper beats Rock”.
  // Increment the humanScore or computerScore variable based on the round winner.
}
