/* First button*/
const showWebsite = document.getElementById('yes');
const RPS = document.getElementById('RPS');
const Choice = document.getElementById('Choice');


/*Reveal website*/
showWebsite.addEventListener('click', () => {
    RPS.classList.remove('d-none');
    Choice.classList.remove('d-none');
    RPS.scrollIntoView({ behavior: 'smooth' });
});


//ComputerChoice//
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    const computerChoice = getComputerChoice();
    document.getElementById('CC').innerHTML = computerChoice;
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return "You won with the secret weapon!";
    }
  
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
  
    if (userChoice === 'rock') {
      return computerChoice === 'paper' ? 'The computer won!' : 'You won!';
    }
  
    if (userChoice === 'paper') {
      return computerChoice === 'scissors' ? 'The computer won!' : 'You won!';
    }
  
    if (userChoice === 'scissors') {
      return computerChoice === 'rock' ? 'The computer won!' : 'You won!';
    }
  };

const playGame = (userChoice) => {
     
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };


