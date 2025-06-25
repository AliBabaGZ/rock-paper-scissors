function playRPS() {
    // This game is played entirely via the console.
    // Player makes a choice
    // Computer makes a choice
    // Winner is decided
    // Score is updated
    // First one to win five rounds
}

function getComputerChoice() {
    let choices = Math.floor(Math.random() * 3);
    console.log(choices);
    
    if (choices === 0) {
        return "Rock"
    }

    else if (choices === 1) {
        return "Paper"
    }

    else {
        return "Scissors"
    }
}
console.log(getComputerChoice());


function getHumanChoice() {
    // Same three options are available: Rock, Paper, Scissors
    // Randomisation comes from the players choice. Choice can be made via a prompt input
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // Use these two parameters to take the human and computer choices as arguments
    // Players can input “rock”, “ROCK”, “RocK”, or other variations
    // Need to tell the user things like, “You lose! Paper beats Rock”.
    // Increment the humanScore or computerScore variable based on the round winner.
}