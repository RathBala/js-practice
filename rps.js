
function computerPlay () {
    // create a string
    // select a random number between 1 - 3
    // if 1, set string to Rock
    // else if 2, set string to Paper
    // else if 3, set string to Scissors
    // output string

    let computerChoice = "";
    let randomNum = Math.floor(Math.random()*3)+1;

    switch (randomNum) {
        case 1:
            computerChoice = "rock";
            console.log("Computer chooses " + computerChoice);
            return computerChoice;
        case 2:
            computerChoice = "paper";
            console.log("Computer chooses " + computerChoice);
            return computerChoice;
        default:
            computerChoice = "scissors";
            console.log("Computer chooses " + computerChoice);
            return computerChoice;
    }   
}

function game () {
    // ask player to pick an option each round

    let playerSelection = "";
    playerSelection = window.prompt("Rock, paper or scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    
    // a function to take player's selection and compare it to computer's selection

    function playRound (playerSelection, computerSelection) {
        // normalise player selection to small caps
        let normalisedPlayer = playerSelection.toLowerCase();
        console.log("Player chooses " + normalisedPlayer);
        let outcome = "";
        // compare player selection to computer selection
        // if player picked rock & computer picked scissors = player wins
        // if player picked paper & computer picked scissors = computer wins
        // if player picked scissors & computer picked scissors = draw

        if (computerSelection === "scissors") {

            switch (normalisedPlayer) {
                case "rock":
                    outcome = "Player wins! :)";
                    playerScore++;
                    return outcome;
                case "paper":
                    outcome = "Computer wins! :(";
                    computerScore++;
                    return outcome;
                case "scissors":
                    outcome = "Draw! Go again.";
                    return outcome;
                default:
                    outcome = "What is that?? Go again.";
                    return outcome;
            }
        }

        // if player picked rock & computer picked rock = draw
        // if player picked paper & computer picked rock = player wins
        // if player picked scissors & computer picked rock = computer wins

        else if (computerSelection === "rock") {
            switch (normalisedPlayer) {
                case "rock":
                    outcome = "Draw! Go again.";
                    return outcome;
                case "paper":
                    outcome = "Player wins! :)";
                    playerScore++;
                    return outcome;
                case "scissors":
                    outcome = "Computer wins! :(";
                    computerScore++;
                    return outcome;
                default:
                    outcome = "What is that?? Go again.";
                    return outcome;
            }    
        }

        // if player picked rock & computer picked paper = computer wins
        // if player picked paper & computer picked paper = draw
        // if player picked scissors & computer picked paper = player wins

        else if (computerSelection === "paper") {
            switch (normalisedPlayer) {
                case "rock":
                    outcome = "Computer wins! :(";
                    computerScore++;
                    return outcome;
                case "paper":
                    outcome = "Draw! Go again.";
                    return outcome;
                case "scissors":
                    outcome = "Player wins! :)";
                    playerScore++;
                    return outcome;
                default:
                    outcome = "What is that?? Go again.";
                    return outcome;
            }    
        }
    }
}

// calculate final score & outcome

function finalScore() {
    
    let result = "";
    console.log("Computer: " + computerScore + " Player: " + playerScore);

    if (computerScore > playerScore) {
        result = "Computer wins the game!";
    } else if (playerScore > computerScore) {
        result = "Player wins the game!";
    } else {
        result = "Oh wow, it's a draw!";
    }

    console.log(result);
}

// start keeping tabs on player's and computer's scores
let computerScore = 0;
let playerScore = 0;

// play 5 rounds

for (i = 1; i < 6; i++) {
    console.log("Computer: " + computerScore + " Player: " + playerScore);
    console.log ("ROUND " + i);
    game();
}

finalScore();

// BUGS TO FIX
// 1. not displaying 5th round score
// 2. need to show who ultimately wins the game, not just each round