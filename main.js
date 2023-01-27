function getComputerChoice(aleatory) {
    aleatory = ['rock', 'paper', 'scissors']
    let computerPlay = Math.floor(Math.random() * aleatory.length)
    return aleatory[computerPlay]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return alert("Deuce")
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        return alert("You win!")
    } else if ((playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")) {
        return alert("You lost!")
    } else {
        return alert("Invalid play! Next time, try choosing Rock, Paper or Scissors.")
    }
}

function game() {
    alert("Let's play 3 matches!");
    for (let i = 0; i < 3; i++) {
        playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase()
        computerSelection = getComputerChoice()
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()
