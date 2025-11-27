computerScore = 0;
humanScore = 0;

const container = document.querySelector("#rpsButtons");

// ----- BUTTONS -----
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

// ----- SCORE DISPLAY -----
const results = document.createElement("div");
results.classList.add("results");
results.textContent = `${humanScore} : ${computerScore}`;
container.appendChild(results);

// ----- MESSAGE DISPLAY -----
const message = document.createElement("div");
message.classList.add("message");
message.textContent = "Make your move!";
container.appendChild(message);


// node list of all buttons
const buttons = document.querySelectorAll("button");

// helper to update the score text
function updateScoreboard() {
    results.textContent = `${humanScore} : ${computerScore}`;
}

// helper to check if winner reached 5 points
function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winner = humanScore === 5 ?  "You" : "Computer";
        message.textContent = `${winner} won the game! Final score: ${humanScore} : ${computerScore}`;

        // disable buttons so game stops
        buttons.forEach((button) => {
            button.disabled = true;
        });
    }
}

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
            message.textContent = "You win! Rock beats Scissors!";
            humanScore++;
        } else if(computerChoice == "paper") {
            message.textContent = "You lose! Paper beats Rock!";
            computerScore++;
        } else {
            message.textContent = "It's a draw!";
        }
    }

    if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            message.textContent = "You lose! Scissors win Paper!";
            computerScore++;
        } else if(computerChoice == "paper") {
            message.textContent = "It's a draw!";
        } else {
            message.textContent = "You win! Rock beats Scissors!";
            humanScore++;
        }
    }

    if(humanChoice == "scissors") {
        if(computerChoice == "scissors") {
            message.textContent = "It's a draw!";
        } else if(computerChoice == "paper") {
            message.textContent = "You win! Scissors beats Paper!";
            humanScore++;
        } else {
            message.textContent = "You lose! Rock beats Scissors!";
            computerScore++;
        }
    }

    // update DOM after each round
    updateScoreboard();
    checkForWinner();
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