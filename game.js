
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
        let playerSelection = prompt("Rock, Paper, or Scissors?");
       
        let computerSelection = getComputerChoice();
        

        //Get the integer result for the single round
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

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