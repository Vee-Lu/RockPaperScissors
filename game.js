

/**
 * This gets the buttons text value so we can pass it as the player's choice
 */
const buttons = document.querySelectorAll("button");

//Alternatee one line arrow function
//buttons.forEach(button => button.addEventListener("click", getPlayerChoice));

buttons.forEach(button => button.addEventListener("click", function() {
    console.log(this.innerHTML.toLowerCase());

    const playerChoice = this.innerHTML.toLowerCase();
    const computerChoice = getComputerChoice();

    console.log(`Player: ${playerChoice}`);
    console.log(`Computer: ${computerChoice}`);
    

    console.log(playRound(playerChoice, computerChoice));
}));

//Function to get the text of the button: Rock, Paper, or Scissors
function getPlayerChoice(){
    //console.log(this.innerHTML.toLowerCase());
    return this.innerHTML.toLowerCase();
}

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


function playRound(playerSelection, computerSelection){
    //If the player chose "Rock"
    if(playerSelection.toLowerCase() == "Rock".toLowerCase()){
        
        if(computerSelection.toLowerCase() == "Rock".toLowerCase()){
            return 0;
        }   
        else if(computerSelection.toLowerCase() == "Paper".toLowerCase()){
            return -1;
        }   
        else if(computerSelection.toLowerCase() == "Scissors".toLowerCase()){
            return 1;
        }
       
    }
     //If the player chose "Paper"
    else if(playerSelection.toLowerCase() == "Paper".toLowerCase()){

        if(computerSelection.toLowerCase() == "Rock".toLowerCase()){
            return 1;
        }
        else if(computerSelection.toLowerCase() == "Paper".toLowerCase()){
            return 0;
        }
        else if(computerSelection.toLowerCase() == "Scissors".toLowerCase()){
            return -1;
        }
    }
     //If the player chose "Scissors"
    else if(playerSelection.toLowerCase() == "Scissors".toLowerCase()){

        if(computerSelection.toLowerCase() == "Rock".toLowerCase()){
            return -1;
        }
        else if(computerSelection.toLowerCase() == "Paper".toLowerCase()){
            return 1;
        }
        else if(computerSelection.toLowerCase() == "Scissors".toLowerCase()){
            return 0;
        }
    }
    else {
       return "Player choice is invalid. Please try again";
    }

}

function game(){
    let playerScore = 0;
    let cpuScore = 0;

    for(let i = 0; i < 5; i++){
        alert(`Round ${i+1}`);

        //Get the choice for the player and computer
        let playerSelection = getPlayerChoice;
        let computerSelection = getComputerChoice();
        
        //Get the integer result for the single round
        let result = playRound(playerSelection, computerSelection);

        if(result == 1){
            alert(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }
        else if(result == -1){
            alert(`You lose! ${computerSelection} beats ${playerSelection}`);
            cpuScore++;
        }
        else if (result == 0){
            alert(`It's a tie! Both are ${computerSelection}`);
        }

        alert(`Player: ${playerScore} Computer ${cpuScore}`);

    
    }

    if(playerScore > cpuScore){
        alert("Congratulations! You won!");
    }
    else if (playerScore < cpuScore){
        alert("Sorry! Better luck next time!");
    }
    else {
        alert("It's a tie! Rematch?");
    }
}
