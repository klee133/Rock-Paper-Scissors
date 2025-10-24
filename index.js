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
// console.log(getComputerChoice());
// console.log(getHumanChoice());

function playGame(humanChoice) {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if(humanChoice === computerChoice) {
            console.log("You tied! You each get a point.");
            humanScore++;
            computerScore++;
        }
        
        if(humanChoice === "rock") {
            if(computerChoice === "paper") {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }else if(computerChoice === "scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
        }else if(humanChoice === "paper") {
            if(computerChoice === "rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            }else if(computerChoice === "scissors") {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            }
        }else if(humanChoice === "scissors") {
            if(computerChoice === "paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
            }else if(computerChoice === "rock") {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
        }
    }

    let i = 0;
    console.log("Round " + (i+1));
    const humanSelection = humanChoice;
    const computerSelection = getComputerChoice();
    console.log("Human: " + humanSelection + ", Computer: " + computerSelection)
    playRound(humanSelection, computerSelection);

    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);

    if(humanScore == computerScore) {
        console.log("You tied with the computer!");
    }else if(humanScore > computerScore) {
        console.log("You won!");
    }else{
        console.log("You lost!");
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playGame(button.id);
    });
});
