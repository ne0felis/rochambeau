function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! ${playerSelection} ties with ${computerSelection}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
                    (playerSelection === 'paper' && computerSelection === 'rock') || 
                    (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return `It's a win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `It's a lost! ${playerSelection} loses to ${computerSelection}`;
    }
}

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

    
    Get the randomized computer's choice
        - Create an array containing the options which is rock, paper, and scissors string
        - Create a randomized variable containing one of the options

    Compare the player's and the computer's selection.
        - Make the selection case-insensitive
        - Use else if condition to compare the selection
        
*/