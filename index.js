let humanScore = 0;
let computerScore = 0;

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
console.log(getHumanChoice());


