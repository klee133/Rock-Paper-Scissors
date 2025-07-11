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

function getHumanChoice() {
    let answer = prompt("Choose rock, paper, or scissors.").toLowerCase();
    while(answer !== "rock" && answer !== "paper" && answer !== "scissors") {
        answer = prompt("You didn't type rock, paper, or scissors. Try again.").toLowerCase();
    }
    return answer;
}
// console.log(getHumanChoice());

function playGame() {
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

    for(let i = 0; i < 5; i++) {
        console.log("Round " + (i+1));
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("Human: " + humanSelection + ", Computer: " + computerSelection)
        playRound(humanSelection, computerSelection);
    }

    if(humanScore == computerScore) {
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("You tied with the computer!");
    }else if(humanScore > computerScore) {
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("You won!");
    }else{
        console.log("Your score: " + humanScore);
        console.log("Computer's score: " + computerScore);
        console.log("You lost!");
    }
}

playGame();
