function getPlayerChoice() {
  while (Infinity) {
    let options = ["rock", "paper", "scissors"];
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    choice = choice.toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }
  }
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  let choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `win`;
  } else {
    return `lose`;
  }
}

// It's a lost! ${playerSelection} loses to ${computerSelection)

function game() {
  playerScore = 0;
  computerScore = 0;
  roundStatus = "";
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  for (let i = 0; i < 5; i++) {
    roundStatus = playRound(playerSelection, computerSelection);

    if (roundStatus === "win") {
      playerScore++;
      console.log(`It's a win! ${playerSelection} beats ${computerSelection}`);
    }

    if (roundStatus === "lose") {
      playerScore--;
      console.log(
        `It's a lost! ${playerSelection} loses to ${computerSelection}`
      );
    }

    if (roundStatus === "tie") {
      console.log(
        `It's a tie! ${playerSelection} ties with ${computerSelection}`
      );
    }

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();
  }
}

game(getComputerChoice(), getComputerChoice());

/*
Problem Framework

Understand:
Create a Rock Paper Scissors Game, where it is played between two people.
Scissors beats paper, paper beats rock, rock beats scissors.

Plan:
    Get the player's choice
    Get the randomized computer's choice
    Compare the player's and the computer's selection.
    Decide the winner.

Divide:
    Get the player choice
    - Use prompt() to get input from the user
    - Get input from the user again if it is not one of the options
    
    Get the randomized computer's choice
        - Create an array containing the options which is rock, paper, and scissors string
        - Create a randomized variable containing one of the options

    Compare the player's and the computer's selection.
        - Make the selection case-insensitive
        - Use else if condition to compare the selection
        
*/
