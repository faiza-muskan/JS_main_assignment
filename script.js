let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

// this function returns the choices selected by the computer
const computerPlay = () => {
  const computerSelect = choices[Math.floor(Math.random() * 3)];
  console.log(`Computer:- chooses ${computerSelect}`);
  return computerSelect;
};

// this funtion returns the winning or losing scenarios by both player and computer
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!!!!");
    return;
  }

  // Player winning scenarios
  const rockWin =
    playerSelection === 'rock' && computerSelection === 'scissors';
  const paperWin = playerSelection === 'paper' && computerSelection === 'rock';
  const scissorWin =
    playerSelection === 'scissors' && computerSelection === 'paper';

  if (rockWin || paperWin || scissorWin) {
    playerScore++;
    console.log(`You won, ${playerSelection} beats ${computerSelection}`);
  } else {
    computerScore++;
    console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    // playerSelection
    const playerSelection = prompt(
      'Do you like to choose Rock, paper or scissors?'
    ).toLowerCase();
    if (choices.includes(playerSelection)) {
      console.log(`player:- you have selected ${playerSelection}`);
    } else {
      console.log(`Wrong input`);
    }
    // computerSelection
    const computerSelection = computerPlay();
    // function call
    playRound(playerSelection, computerSelection);
    console.log(`player:${playerScore} computer:${computerScore}`);
  }

  // winner of the game
  playerScore > computerScore
    ? console.log(`player wins the game`)
    : console.log(`computer wins the game`);
};

game();
