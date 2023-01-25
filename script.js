function getComputerChoice(aleatory) {
    aleatory = ["rock", "paper", "scissors"]
    let computerPlay = Math.floor(Math.random() * aleatory.length)
    return aleatory[computerPlay]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Deuce"
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You win!"
    } else if ((playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")) {
        return "You lost!"
    } else {
        return "Try choosing Rock, Paper or Scissors" 
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()

