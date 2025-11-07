playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice().toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        function playRound(humanChoice, computerChoice) {
            if(humanChoice == "rock") {
                if(computerChoice == "scissors") {
                    console.log("You win! Rock beats Scissors!");
                    humanScore++;
                } else if(computerChoice == "paper") {
                    console.log("You lose! Paper beats Rock!");
                    computerScore++;
                } else {
                    console.log("It's a draw!");
                }
            }

            if(humanChoice == "paper") {
                if(computerChoice == "scissors") {
                    console.log("You lose! Scissors win Paper!");
                    computerScore++;
                } else if(computerChoice == "paper") {
                    console.log("It's a draw!");
                } else {
                    console.log("You win! Rock beats Scissors!");
                    humanScore++;
                }
            }

            if(humanChoice == "scissors") {
                if(computerChoice == "scissors") {
                    console.log("It's a draw!");
                } else if(computerChoice == "paper") {
                    console.log("You win! Scissors beats Paper!");
                    humanScore++;
                } else {
                    console.log("You lose! Rock beats Scissors!");
                    computerScore++;
                }
            }
        }
    }
    console.log("Score: \n"  + humanScore + " : " + computerScore);
}



function getComputerChoice() {
    let result = Math.random();

    if (result <= 0.33) {
        return "rock";
    } else if (result <= 0.66) {
        return "paper";
    } else 
        return "scissors";
}

function getHumanChoice() {
    let result = prompt("Enter your choice: ")

    return result;
}