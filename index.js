function getComputerChoice() {
    let choice = Math.floor((Math.random() * 10)) % 3;

    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
    }
    return "scissors";
}

let humanScore = 0;
let computerScore = 0;
let round = 1;
const roundNum = document.querySelector(".roundNum");
const selectionH = document.querySelector(".selection > .H");
const selectionC = document.querySelector(".selection > .C");
const text = document.querySelector(".text");
const scoreH = document.querySelector(".score > .H");
const scoreC = document.querySelector(".score > .C");
const endText = document.querySelector(".endText");

function endGame() {
    if(round >= 5) {
        if(humanScore == computerScore) {
            endText.textContent = "You tied the game!";
        }else if(humanScore > computerScore) {
            endText.textContent = "You won the game!";
        }else{
            endText.textContent = "You lost the game!";
        }
        humanScore = 0;
        computerScore = 0;
        round = 1;
    }else{
        round++;
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    roundNum.textContent = `Round ${round}`;
    selectionH.textContent = `Human: ${humanChoice}`;
    selectionC.textContent = `Computer: ${computerChoice}`;
    endText.textContent = "";

    if(humanChoice === computerChoice) {
        text.textContent = "\nYou tied! You each get a point.";
        humanScore++;
        computerScore++;
    }
    
    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            text.textContent = "You lose! Paper beats rock.";
            computerScore++;
        }else if(computerChoice === "scissors") {
            text.textContent = "You win! Rock beats scissors.";
            humanScore++;
        }
    }else if(humanChoice === "paper") {
        if(computerChoice === "rock") {
            text.textContent = "You win! Paper beats rock.";
            humanScore++;
        }else if(computerChoice === "scissors") {
            text.textContent = "You lose! Scissors beats paper.";
            computerScore++;
        }
    }else if(humanChoice === "scissors") {
        if(computerChoice === "paper") {
            text.textContent = "You win! Scissors beats paper.";
            humanScore++;
        }else if(computerChoice === "rock") {
            text.textContent = "You lose! Rock beats scissors.";
            computerScore++;
        }
    }
    scoreH.textContent = `Human score: ${humanScore}`;
    scoreC.textContent = `Computer score: ${computerScore}`;
    endGame();
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.id);
    });
});
