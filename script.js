// JavaScript Code
const showWebsite = document.getElementById('yes');
const RPS = document.getElementById('RPS');
const Choice = document.getElementById('Choice');
const Results = document.getElementById('Results');
const form = document.getElementById('form');

// Reveal website
showWebsite.addEventListener('click', () => {
    RPS.classList.remove('d-none');
    Choice.classList.remove('d-none');
    Results.classList.remove('d-none');
    Replace.classList.remove('d-none');
    form.classList.add('d-none');
    showWebsite.classList.add('d-none');
    RPS.scrollIntoView({ behavior: 'smooth' });
});

// Greeting
function userName() {
    const firstNameValue = document.getElementById("firstName").value;
    const greeting = document.getElementById("greeting");
    greeting.innerText = firstNameValue ? `Hello, ${firstNameValue}! Let's play Rock Paper Scissors Best of 5!` : `Hello Stranger!`;
}

// Computer Choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return ['Rock', 'Paper', 'Scissors'][randomNumber];
}

// Code to run the game
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

    if (userChoice === 'Rocky' && computerChoice === 'Rock' ||
        userChoice === 'Scissory' && computerChoice === 'Scissors' ||
        userChoice === 'Papery' && computerChoice === 'Paper') {
        result = "It's a tie!";
    } else if (userChoice === 'Rocky' && computerChoice === 'Paper' ||
               userChoice === 'Scissory' && computerChoice === 'Rock' ||
               userChoice === 'Papery' && computerChoice === 'Scissors') {
        result = "The Computer Won!";
        computerScore++;
    } else {
        result = "You Won!";
        userScore++;
    }

    document.getElementById('userScore').innerText = `User: ${userScore}`;
    document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
    
    if (userScore === 3) {
        document.getElementById('WorL').innerText = "You are the overall winner!";
        disableGame();
    } else if (computerScore === 3) {
        document.getElementById('WorL').innerText = "The Computer is the overall winner!";
        disableGame();
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

// Reset game
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

// Reset button
document.getElementById('resetButton').addEventListener('click', resetGame);
