

// This gets the elements needed to display and change the game
const buttons = document.querySelectorAll(".input");
const result = document.querySelector(".displayResult");
const reset = document.querySelector(".resetButton");



//Create a div element with the class name "score"
const score = document.createElement("div");
score.classList.add("score");
document.querySelector("body").insertBefore(score,document.querySelector(".playerSelection"));


//Alternate one line arrow function
//buttons.forEach(button => button.addEventListener("click", getPlayerChoice));

//Variables to hold player and cpu wins
let playerScore = 0;
let cpuScore = 0;

/**
 * Input utton event handler that plays Rock, Paper, Scissors
 */
buttons.forEach(button => button.addEventListener("click", function() {

    //Get the player's choice by getting the button's inner text
    const playerChoice = this.innerHTML;
    //Gets the computer choice through the getComputerChoice method 
    const computerChoice = getComputerChoice();

    //If the player score and cpu score is less than 5, we want to play the game since neither have hit 5 wins
    if(playerScore < 5 && cpuScore < 5){

        //Calls the game() method to determine who won the game and how
        result.innerText = game(playerChoice,computerChoice);

        //Get the determineWinner method returned number to increment either the player's wins or the cpu's wins
        if(determineWinner(playerChoice,computerChoice) == 1){
            playerScore++;
        }

        else if(determineWinner(playerChoice,computerChoice) == -1){
            cpuScore++;
        }

        //Display it throught the div element called "score"
        score.innerText = `Player: ${playerScore} Computer: ${cpuScore}`;

        //If the player wins, congratulate them, else tell them better luck
        if(playerScore == 5){
            score.innerText = "Congratulations! You win! Play a new game?";
        } 

        else if(cpuScore == 5){
            score.innerText = "Tough luck! You lose! Want to try again?";
        }

        
    }

    //If either the player or cpu reaches 5 wins, tell the player to start a new game
    else {
        result.innerText = "The game is over! Please hit rest to start a new game!";
    }
    
}));

/**
 * Reset button event handler that resets everything back to their default values
 */
reset.addEventListener("click", function(){
    score.innerText = "";
    result.innerText = "Choose Rock, Paper, or Scissors";
    playerScore = 0;
    cpuScore = 0;
   
});

/**
 * Function that randomly determines what the CPU will choose for Rock, Paper, or Scissors
 * @returns Either Rock, Paper, or Scissors
 */
function getComputerChoice(){

    let choice = Math.floor(Math.random()*3)+1;

    switch(choice){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        default: 
            return "Scissors";
    }
   
}

/**
 * Function that returns an int value based on the result of the game
 * @param {*} playerSelection - the player's input
 * @param {*} computerSelection - the computer's input
 * @returns 
 */
function determineWinner(playerSelection, computerSelection){
    //If the player chose "Rock"
    if(playerSelection.toLowerCase() == "rock"){
        
        if(computerSelection.toLowerCase() == "rock"){
            return 0;
        }   
        else if(computerSelection.toLowerCase() == "paper"){
            return -1;
        }   
        else if(computerSelection.toLowerCase() == "scissors"){
            return 1;
        }
       
    }
     //If the player chose "Paper"
    else if(playerSelection.toLowerCase() == "paper"){

        if(computerSelection.toLowerCase() == "rock"){
            return 1;
        }
        else if(computerSelection.toLowerCase() == "paper"){
            return 0;
        }
        else if(computerSelection.toLowerCase() == "scissors"){
            return -1;
        }
    }
     //If the player chose "Scissors"
    else if(playerSelection.toLowerCase() == "scissors"){

        if(computerSelection.toLowerCase() == "rock"){
            return -1;
        }
        else if(computerSelection.toLowerCase() == "paper"){
            return 1;
        }
        else if(computerSelection.toLowerCase() == "scissors"){
            return 0;
        }
    }
   

}

/**
 * Function that returns the result of the round and why it happened
 * @param {*} playerSelection, the player's input
 * @param {*} computerSelection, the computer's input
 * @returns 
 */
function game(playerSelection, computerSelection){
        
        //Get the integer result for the single round
        let result = determineWinner(playerSelection, computerSelection);

        //If the player wins, display the result
        if(result == 1){
            return `You win! ${playerSelection} beats ${computerSelection}`;
           
        }
        //If the cpu wins, display the result
        else if(result == -1){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
            
        }
        //If the neither wins, display the result
        else if (result == 0){
            return `It's a tie! Both are ${computerSelection}`;
        }

}
