let playerScore = 0;
let computerScore = 0;
let playerSelection;
const rpsArray = ['rock','paper','scissors'];

function getComputerChoice() {
    const rpsArray = ['rock','paper','scissors'];
    return rpsArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  
    document.getElementById("choices").textContent = `Player: ${playerSelection} Computer: ${computerSelection}`;
    if (computerSelection === playerSelection) {
        return document.getElementById("roundWinner").textContent = "Tie";
    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') || 
                (computerSelection === 'paper' && playerSelection === 'rock') || 
                (computerSelection === 'scissors' && playerSelection === 'paper')){   
        computerScore++;
        return document.getElementById("roundWinner").textContent ='Computer wins';
    } else {
        playerScore++;
        return document.getElementById("roundWinner").textContent = 'You win';
    }
}

// BUTTON CHOICES

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'rock';
	return game(), document.getElementById("gameScoreWindow").textContent = `Player score: ${playerScore}  Computer score: ${computerScore}`;
} )

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'paper';
	return playRound('paper', computerSelection), document.getElementById("gameScoreWindow").textContent = `Player score: ${playerScore}  Computer score: ${computerScore}`;
} )																							// if I dont put this line after return it won't increase the first score		

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
	computerSelection = getComputerChoice();
	playerSelection = 'scissors';
	return playRound('scissors', computerSelection), document.getElementById("gameScoreWindow").textContent = `Player score: ${playerScore}  Computer score: ${computerScore}`;
} )

function game() {
	playRound(playerSelection, computerSelection);
	if (playerScore == 5) {
		return document.getElementById("gameWinner").textContent = "YOU WON";
	} else if (computerScore == 5) {
		return document.getElementById("gameWinner").textContent = "COMPUTER WON";
	} else {
		return document.getElementById("gameWinner").textContent = "PLAY TO 5";
	}
}

