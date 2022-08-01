let playerScore = 0;
let computerScore = 0;
let currentRound = 1;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const matchResultDiv = document.getElementById('matchResult');
const playerScoreDiv = document.getElementById('playerScore');
const computerScoreDiv = document.getElementById('computerScore');

const roundDiv = document.getElementById('round');

const gameOverScreenDiv = document.getElementById('gameOverScreen');
const gameOverDiv = document.querySelector('div.gameOver');

const playerPick = document.getElementById('yourPick');
const computerPick = document.getElementById('computerPick');

roundDiv.textContent = `Round ${currentRound}`;

function computerPlay() {
    const val = Math.floor(Math.random()*3);
    
    if (val === 0) {
        return "rock";
    } else if (val === 1) {
        return "paper";
    } else return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {

        if (computerSelection === "rock") {
            return "It's a tie! Rock equals Rock"
        } else if (computerSelection === "paper") {
            return "Bot gains a point! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            return "You gain a point! Rock beats Scissors"
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            return "You gain a point! Paper beats Rock"
        } else if (computerSelection === "paper") {
            return "It's a tie! Paper equals Paper"
        } else if (computerSelection === "scissors") {
            return "Bot gains a point! Scissors beats Paper"
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            return "Bot gains a point! Rock beats Scissors"
        } else if (computerSelection === "paper") {
            return "You gain a point! Scissors beats Paper"
        } else if (computerSelection === "scissors") {
            return "It's a tie! Scissors equals Scissors"
        }
    }
}

function calculateResult(result) {

    if (result.slice(0,3) === "You") {
        playerScore++;
    } else if (result.slice(0,3) === "Bot") {
        computerScore++;
    }
    
}

function game(playerSelection) {
    
    const compPlay = computerPlay();

    if (playerSelection === 'rock') {
        playerPick.textContent = "Rock";
    } else if (playerSelection === 'paper') {
        playerPick.textContent = "Paper";
    } else if (playerSelection === 'scissors') {
        playerPick.textContent = "Scissors";
    }

    if (compPlay === 'rock') {
        computerPick.textContent = "Rock";
    } else if (compPlay === 'paper') {
        computerPick.textContent = "Paper";
    } else if (compPlay === 'scissors') {
        computerPick.textContent = "Scissors";
    }

    
    const result = playRound(playerSelection, compPlay);
    matchResultDiv.textContent = result;
    calculateResult(result);
    
    currentRound++;
    roundDiv.textContent = `Round ${currentRound}`;
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;

    if (playerScore === 5) {
        gameOverScreenDiv.textContent = "Congratulations, You win the game!";
        rockButton.removeEventListener('click', rockGameFunct);
        paperButton.removeEventListener('click', paperGameFunct);
        scissorsButton.removeEventListener('click', scissorsGameFunct);

        const tryAgainButton = document.createElement('button');
        tryAgainButton.setAttribute('id', 'tryAgain');
        tryAgainButton.textContent = "Try Again?";
        tryAgainButton.addEventListener('click', () => {
            location.href = "./index.html";
        })

        gameOverDiv.appendChild(tryAgainButton);
        

    } else if (computerScore === 5) {
        gameOverScreenDiv.textContent = "Unfortunately you lost the game. Try again next time!";
        rockButton.removeEventListener('click', rockGameFunct);
        paperButton.removeEventListener('click', paperGameFunct);
        scissorsButton.removeEventListener('click', scissorsGameFunct);

        const tryAgainButton = document.createElement('button');
        tryAgainButton.setAttribute('id', 'tryAgain');
        tryAgainButton.textContent = "Try Again?";
        tryAgainButton.addEventListener('click', () => {
            location.href = "./index.html";
        })

        gameOverDiv.appendChild(tryAgainButton);
    }
}



const rockGameFunct = () => {
    game('rock');
};

const paperGameFunct = () => {
    game('paper');
};

const scissorsGameFunct = () => {
    game('scissors');
};



rockButton.addEventListener('click', rockGameFunct)

paperButton.addEventListener('click', paperGameFunct)

scissorsButton.addEventListener('click', scissorsGameFunct)
