

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'Rock'
    } else if (randomNumber === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function playRound(playerSelection, computerSelection) {
   if (getComputerChoice() === 'Rock') {
    return 'Tie Game!!, You both chose Rock' 
   } else if (getComputerChoice() === 'Paper') {
    return `You lose! Paper beats Rock`
   } else {
    return `You Win! Rock beats Scissors`
   }
}

const playerSelection = 'Rock';
const computerSelection  = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));