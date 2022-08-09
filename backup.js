console.log(game());

function game() {
    for (let i=0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        return "You won against the computer!"
    } else if (playerScore < computerScore) {
        return "The computer is superior."
    } else {
        return "You tied with the computer."
    }
}

function game() {
    while (playerScore !== 5 || computerScore !== 5) {
        playRound();
    } if (playerScore == 5) {
        return document.getElementById("gameWinner").textContent = "You win";
    } else (computerScore == 5)
        return document.getElementById("gameWinner").textContent = "Computer wins";
    }
