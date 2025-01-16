/* First button*/
const showWebsite = document.getElementById('yes');
const RPS = document.getElementById('RPS');
const Choice = document.getElementById('Choice');


/*Reveal website*/
showWebsite.addEventListener('click', () => {
    RPS.classList.remove('d-none');
    Choice.classList.remove('d-none');
    Results.classList.remove('d-none');
    RPS.scrollIntoView({ behavior: 'smooth' });
    form.classList.add('d-none');
    replace.classlist.remove('d-none'):
});
document.getElementById('yes').addEventListener('click', function () {
  document.getElementById('form').submit();
});


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

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return "You won with the secret weapon!";
    }
  
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    if (userChoice === 'Rocky') {
      return computerChoice === 'Paper' ? 'The computer won!' : 'You won!';
    }
  
    if (userChoice === 'Papery') {
      return computerChoice === 'Scissors' ? 'The computer won!' : 'You won!';
    }
  
    if (userChoice === 'Scissory') {
      return computerChoice === 'Rock' ? 'The computer won!' : 'You won!';
    }
  };
//Code to run the game//
const playGame = (userChoice) => {
     
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
    document.getElementById('CC').innerHTML = computerChoice;
    document.getElementById('user').innerHTML = userChoice;
    document.getElementById('WorL').innerHTML = determineWinner(userChoice, computerChoice);
  };
//Greeting//

let userName = firstName

userName ? greeting.innerText=`Hello, ${userName}!` 
: greeting.innerText=`Hello Stranger!`
