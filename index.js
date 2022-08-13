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

function playRound(player) {
  const playerSelection = this.textContent.toLowerCase();
  const computerSelection = getComputerChoice();

  if (playerPoints.textContent == 5 || compPoints.textContent == 5) {
    return;
  }

  if (playerSelection === computerSelection) {
    playerPoints.textContent++;
    compPoints.textContent++;
    result.textContent = "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints.textContent++;
    result.textContent = "Win";
  } else {
    compPoints.textContent++;
    result.textContent = "Lose";
  }

  if (playerPoints.textContent == 5) {
    result.textContent = "You're the winner!";
  } else if (compPoints.textContent == 5) {
    result.textContent = "You're the loser! Congratz!"
  }
}

const playerPoints = document.querySelector('.player-points');
const compPoints = document.querySelector('.computer-points');

const container = document.querySelector("#container");
const result = document.querySelector(".result");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

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
