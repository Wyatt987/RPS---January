/* First button*/
const showWebsite = document.getElementById('yes');
const RPS = document.getElementById('RPS');
const Choice = document.getElementById('Choice');


/*Reveal website*/
showWebsite.addEventListener('click', () => {
  RPS.classList.remove('d-none');
  Choice.classList.remove('d-none');
  Results.classList.remove('d-none');
  Replace.classList.remove('d-none');
  form.classList.add('d-none');
  showWebsite.classList.remove('d-none');
  RPS.scrollIntoView({ behavior: 'smooth' });
});

//Greeting//
function userName() {
  const firstNameValue = document.getElementById("firstName").value;
  const greeting = document.getElementById("greeting");
  greeting.innerText = firstNameValue ? `Hello, ${firstNameValue}! Let's play Rock Paper Scissors Best of 5!` : `Hello Stranger!`;
}




//ComputerChoice//
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
    const computerChoice = getComputerChoice();
    document.getElementById('CC').innerHTML = computerChoice;
}
//Code to run the game//
const playGame = (userChoice) => {
  if (roundsPlayed < 5) {
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    
    determineWinner(userChoice, computerChoice);

    document.getElementById('CC').innerHTML = computerChoice;
    document.getElementById('user').innerHTML = userChoice;
  }
};

// Declare scores and round count
let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Function to determine the winner of each round
const determineWinner = (userChoice, computerChoice) => {
  let result = "";

  // Check for ties and updates to scores
  if (userChoice === 'Rocky' && computerChoice === 'Rock' ||
      userChoice === 'Scissory' && computerChoice === 'Scissory' ||
      userChoice === 'Papery' && computerChoice === 'Paper') {
    result = "It's a tie!";
  } else if (userChoice === 'Rocky' && computerChoice === 'Paper' ||
             userChoice === 'Scissory' && computerChoice === 'Rock' ||
             userChoice === 'Papery' && computerChoice === 'Scissors') {
    result = "The Computer Won!";
    computerScore++; // Increment Computer's score
  } else {
    result = "You Won!";
    userScore++; // Increment User's score
  }
  // Update scores and display results
  document.getElementById('userScore').innerText = `User: ${userScore}`;
  document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
  
  // Check if the game is over (Best of 5)
  if (userScore === 3) {
    document.getElementById('WorL').innerText = "You are the overall winner!";
    disableGame(); // Disable further play
  } else if (computerScore === 3) {
    document.getElementById('WorL').innerText = "The Computer is the overall winner!";
    disableGame(); // Disable further play
  } else {
    document.getElementById('WorL').innerText = result; 
  }
};

// Disable game after a winner is found
const disableGame = () => {
  document.getElementById('Rocky').disabled = true;
  document.getElementById('Papery').disabled = true;
  document.getElementById('Scissory').disabled = true;
  document.getElementById('resetButton').classList.remove("d-none"); 
};

// Reset the game for a new round
const resetGame = () => {
  userScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  document.getElementById('Rocky').disabled = false;
  document.getElementById('Papery').disabled = false;
  document.getElementById('Scissory').disabled = false;
  document.getElementById('resetButton').classList.add("d-none"); 
  
  document.getElementById('userScore').innerText = `User: ${userScore}`;
  document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
  document.getElementById('WorL').innerText = "Start a New Round!";
};

// Event listeners for user choices
document.getElementById('Rocky').addEventListener('click', () => playGame('Rocky'));
document.getElementById('Papery').addEventListener('click', () => playGame('Papery'));
document.getElementById('Scissory').addEventListener('click', () => playGame('Scissory'));

// Reset button event listener
document.getElementById('resetButton').addEventListener('click', resetGame);
