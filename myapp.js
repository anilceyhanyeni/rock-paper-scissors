let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const rpsArray = ['rock','paper','scissors'];
    return rpsArray[Math.floor(Math.random() * 3)];
}
function getPlayerChoice() {
const playerChoice = prompt('rock paper scissors?');
    return playerChoice.toLowerCase();
}

function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log("Player:", playerSelection, "Computer: ", computerSelection);
    
    if (computerSelection === playerSelection) {
        return "Tie";
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || 
                (computerSelection === 'paper' && playerSelection === 'rock') || 
                (computerSelection === 'scissors' && playerSelection === 'paper')){   
        computerScore++;
        return 'Computer wins';
    } else {
        playerScore++;
        return 'You win';
    }
}

console.log(game());

function game() {
    for (let i=0; i < 5; i++) {
        console.log(playRound());
    }
    if (playerScore > computerScore) {
        return "You won against the computer!"
    } else if (playerScore < computerScore) {
        return "The computer is superior."
    } else {
        return "You tied with the computer."
    }
}

function validateInput(x) {
    return rpsArray.includes(x)
}