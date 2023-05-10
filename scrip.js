let choice = '';
let player = 'rock';
let computerCounter = 0;
let playerCounter = 0;
let playerNumber = 0;
let computerNumber = 0;

let getComputerChoice = () => {
    let x = Math.random();
    x < 0.333 ? choice = 'rock' :
    x > 0.666 ? choice = 'scissors' :
    choice = 'paper';
    return choice;
};


function playRound(str, choice) {
    getComputerChoice();
    player = str.toLowerCase();
    if (str == choice){
        console.log('Draw! Both have picked ' + str);
    }
    else if (str == 'rock' && choice == 'scissors'){
        console.log('You win! Rock beats scissors!');
        playerCounter++;
    }
    else if (str == 'rock' && choice == 'paper'){
        console.log('You lose! Paper beats rock.');
        computerCounter++;
    }
    else if (str == 'paper' && choice == 'scissors'){
        console.log('You lose! Scissors beat paper.');
        computerCounter++;
    }
    else if (str == 'paper' && choice == 'rock'){
        console.log('You win! Paper beats rock!');
        playerCounter++;
    }
    else if (str == 'scissors' && choice == 'paper'){
        console.log('You win! Scissors beat paper!');
        playerCounter++;
    }
    else if (str == 'scissors' && choice == 'rock'){
        console.log('You lose! Rock beats scissors.');
        computerCounter++;
    }
    else {
        return 'error';
    }
  }

  getComputerChoice();

  console.log(playRound(player, choice));

  let playerPick = 'rock';
  function game(){
    computerCounter = 0;
    playerCounter = 0;

    for (let i = 0; i < 5; i++) {
        playerPick = prompt('Choose rock, paper or scissors!', '');
        playerPick = playerPick.toLowerCase();
        playRound(playerPick, choice);
    }

    if (playerCounter > computerCounter) {
        console.log('You won! You had ' + playerCounter + ' points and opponent had ' + computerCounter + ' points!');
    }
    else if (playerCounter < computerCounter) {
        console.log('You lost! You had ' + playerCounter + ' points and opponent had ' + computerCounter + ' points!')
    }
    else {
        console.log('Draw! You had ' + playerCounter + ' points and opponent had ' + computerCounter + ' points!')
    }
    
  }


  