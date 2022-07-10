let playerScore = 0;
let computerScore = 0;

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
            return "You lose! Paper beats Rock"
        } else if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors"
        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "rock") {
            return "You win! Paper beats Rock"
        } else if (computerSelection === "paper") {
            return "It's a tie! Paper equals Paper"
        } else if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper"
        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors"
        } else if (computerSelection === "paper") {
            return "You win! Scissors beats Paper"
        } else if (computerSelection === "scissors") {
            return "It's a tie! Scissors equals Scissors"
        }
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`Round ${i+1} \nPick your weapon! Paper/Rock/Scissors`).toLowerCase();
        const computerSelection = computerPlay();
        
        
        const result = playRound(playerSelection, computerSelection);

        if (result.slice(0,8) === "You win!") {
            playerScore++;
        } else if (result.slice(0,9) === "You lose!") {
            computerScore++;
        }
        
        console.log(result);

    }

    
}

game();
console.log("")
console.log("Results of the game:")
console.log("Your score: " + playerScore);
console.log("Computer score: " + computerScore);

if (playerScore > computerScore) {
    console.log("Congratulations, You win the game!")
} else if (playerScore < computerScore) {
    console.log("Unfortunately you lost the game. Try again next time!")
} else {
    console.log("It's a draw!")
}