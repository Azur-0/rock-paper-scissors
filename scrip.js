let opponent;
let player = 'rock';

let playerCounter = 0;
let computerCounter = 0;

let getComputerChoice = () => {
    opponent = Math.random();
    opponent < 0.333 ? opponent = 'rock' :
    opponent > 0.666 ? opponent = 'scissors' :
    opponent = 'paper';
    return opponent;
};

const div = document.querySelector('#result');
const score = document.querySelector('#score');
let str = '';

function playRound(player, opponent) {
    player = player.toLowerCase();
    if (player == opponent){
        str = 'Draw! Both have picked ' + player;
        div.textContent = str;
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'rock' && opponent == 'scissors'){
        playerCounter++;
        div.textContent = 'You win! Rock beats scissors!';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'rock' && opponent == 'paper'){
        computerCounter++;
        div.textContent = 'You lose! Paper beats rock.';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'paper' && opponent == 'scissors'){
        computerCounter++;
        div.textContent = 'You lose! Scissors beat paper.';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'paper' && opponent == 'rock'){
        playerCounter++;
        div.textContent = 'You win! Paper beats rock!';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'scissors' && opponent == 'paper'){
        playerCounter++;
        div.textContent =  'You win! Scissors beat paper!';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    else if (player == 'scissors' && opponent == 'rock'){
        computerCounter++;
        div.textContent = 'You lose! Rock beats scissors.';
        score.textContent = `Player ${playerCounter} - ${computerCounter} Opponent`;
    }
    
    if(playerCounter == 5){
        playerWins();
    }
    else if(computerCounter == 5){
        opponentWins();
    }
  }

  function playerWins() {
    div.textContent = 'Congratulations! You won!';
    playerCounter = 0;
    computerCounter = 0;
  }

  function opponentWins() {
    div.textContent = 'You lost. Better luck next time!';
    playerCounter = 0;
    computerCounter = 0;
  }

  const buttons = document.querySelectorAll('.btn');

  
  buttons.forEach(button => {
    button.addEventListener('click', function myFunction(){
        playerSelection(button);
    });
  });

  function playerSelection(button) {
    player = button.textContent.toLowerCase();
    playRound(player, getComputerChoice());
  }



  