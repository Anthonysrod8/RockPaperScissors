const rockButton = document.querySelector('.rock-btn');

const paperButton = document.querySelector('.paper-btn');

const scissorsButton = document.querySelector('.scissors-btn');

const resultsEl = document.querySelector('.results-el');

let playerScore = 0;
let computerScore = 0;

let playerWin = () => {
    playerScore += 1
};

let computerWin = () => {
    computerScore += 1
};

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}



rockButton.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        return resultsEl.textContent = playRound('rock', getComputerChoice())
    } else if (playerScore === 5) {
        return resultsEl.textContent = 'PLAYER WINS THE GAME WITH 5 POINTS'
    } else if (computerScore === 5) {
        return resultsEl.textContent = 'COMPUTER WINS THE GAME WITH 5 POINTS'
    }
    
    
});

paperButton.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        return resultsEl.textContent = playRound('paper', getComputerChoice())
    } else if (playerScore === 5) {
        return resultsEl.textContent = 'PLAYER WINS THE GAME WITH 5 POINTS'
    } else if (computerScore === 5) {
        return resultsEl.textContent = 'COMPUTER WINS THE GAME WITH 5 POINTS'
    }
    
});

scissorsButton.addEventListener('click', function () {
    if (playerScore < 5 && computerScore < 5) {
        return resultsEl.textContent = playRound('scissors', getComputerChoice())
    } else if (playerScore === 5) {
        return resultsEl.textContent = 'PLAYER WINS THE GAME WITH 5 POINTS'
    } else if (computerScore === 5) {
        return resultsEl.textContent = 'COMPUTER WINS THE GAME WITH 5 POINTS'
    }
})


if (playerScore === 5) {
    resultsEl.textContent = `player has scored ${playerScore} Player Wins!`
} else if (computerScore === 5) {
    resultsEl.textContent = `Computer has scored ${computerScore} Computer Wins!`
}





let playRound = (playerSelection, computerSelection) => {
    
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tied game, you both picked rock'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lost, paper beats rock'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win!, rock beats scissors' 
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win!, paper beats rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tied game, you both chose paper'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lost, scissors beats paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lost, rock beats scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win!, scissors beats paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Tied game, you both chose scissors'
    }
}




 

