computerScore = 0;
humanScore = 0;

const container = document.querySelector("#rpsButtons");

const rockButton = document.createElement("button");
rockButton.id = "rock";
rockButton.textContent = "Rock";

const paperButton = document.createElement("button");
paperButton.id = "paper";
paperButton.textContent = "Paper";

const scissorsButton = document.createElement("button");
scissorsButton.id = "scissors";
scissorsButton.textContent = "Scissors";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

// add a div for displaying results
const results = document.createElement("div");
results.classList.add("results");
results.textContent = `${humanScore} : ${computerScore}`;

container.appendChild(results);

// node list of all buttons
const buttons = document.querySelectorAll("button");

// iterate through all the buttons and console log the individual button ids
buttons.forEach((button) => {
    // for each button add a 'click' listener
    button.addEventListener("click", () => {
        playRound(`${button.id}`, getComputerChoice());
    });
});

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
// console.log("Score: \n"  + humanScore + " : " + computerScore);
// if(humanScore > computerScore) {
//     console.log("Congratulations! You won!");
// } else if(computerScore > humanScore) {
//     console.log("You lost! Try again next time");
// } else {
//     console.log("It was a draw! Try again next time");
// }



function getComputerChoice() {
    let result = Math.random();

    if (result <= 0.33) {
        return "rock";
    } else if (result <= 0.66) {
        return "paper";
    } else 
        return "scissors";
}