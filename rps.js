
const results = document.querySelector('#results');

// start keeping tabs on player's and computer's scores
let computerScore = 0;
let playerScore = 0;

game();

function computerPlay () {

    let computerChoice = "";
    let randomNum = Math.floor(Math.random()*3)+1;

    switch (randomNum) {
        case 1:
            computerChoice = "rock";
            return computerChoice;
        case 2:
            computerChoice = "paper";
            return computerChoice;
        default:
            computerChoice = "scissors";
            return computerChoice;
    }   
}

function game () {

    // ask player to pick an option each round

    const btn = document.querySelectorAll('button');

    btn.forEach ((button) => {
        button.addEventListener('click', () => {
            console.log(playRound(button.id,computerPlay()));
        });
    });

    // a function to take player's selection and compare it to computer's selection

    function playRound (playerSelection, computerSelection) {
      
        const playerText = document.createElement('p');
        playerText.textContent = "Player chooses " + playerSelection;
        results.appendChild(playerText);

        const compText = document.createElement('p');
        const winStatus = document.createElement('p');
        const score = document.createElement('p');

        if (computerSelection === "scissors") {

        compText.textContent = "Computer chooses " + computerSelection ;
        results.appendChild(compText);

            switch (playerSelection) {
                case "rock":
                    playerScore++;
                    winStatus.textContent = "Player wins! :)";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "paper":
                    computerScore++;
                    winStatus.textContent = "Computer wins! :(";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "scissors":
                    winStatus.textContent = "Draw! Go again.";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                default:
                    winStatus.textContent = "What is that?? Go again.";
                    results.appendChild(winStatus);
                    break;
            }
        }


        else if (computerSelection === "rock") {

        compText.textContent = "Computer chooses " + computerSelection;
        results.appendChild(compText);  

            switch (playerSelection) {
                case "rock":
                    winStatus.textContent = "Draw! Go again.";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "paper":
                    playerScore++;
                    winStatus.textContent = "Player wins! :)";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "scissors":
                    computerScore++;
                    winStatus.textContent = "Computer wins! :(";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                default:
                    winStatus.textContent = "What is that?? Go again.";
                    results.appendChild(winStatus);
                    break;
            }    
        }


        else if (computerSelection === "paper") {

        compText.textContent = "Computer chooses " + computerSelection;
        results.appendChild(compText);  

            switch (playerSelection) {
                case "rock":
                    computerScore++;
                    winStatus.textContent = "Computer wins! :(";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "paper":
                    winStatus.textContent = "Draw! Go again.";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                case "scissors":
                    playerScore++;
                    winStatus.textContent = "Player wins! :)";
                    score.textContent = "Computer: " + computerScore + " Player: " + playerScore;
                    results.appendChild(winStatus);
                    results.appendChild(score);
                    scoreCheck();
                    break;
                default:
                    winStatus.textContent = "What is that?? Go again.";
                    results.appendChild(winStatus);
                    break;
            }    
        }
    }
}

// calculate final score & outcome

function scoreCheck() {

        // check if someone has won the game

        const endResult = document.createElement('h2');

        if (playerScore >= 5) {
            console.log("player wins");
            endResult.textContent = "PLAYER WINS THE GAME!";
            results.appendChild(endResult);
            return;
        } else if (computerScore >= 5) {
            console.log("computer wins");
            endResult.textContent = "GAME OVER - computer has won the game";
            results.appendChild(endResult);
            return;
        }

}