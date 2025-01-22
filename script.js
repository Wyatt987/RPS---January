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
  greeting.innerText = firstNameValue ? `Hello, ${firstNameValue}!` : `Hello Stranger!`;
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

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'Rocky' && computerChoice === 'Rock')
    return "It's a tie!";
  if (userChoice === 'Rocky' && computerChoice === 'Paper')
    return "The Computer Won!";
  if (userChoice === 'Rocky' && computerChoice === 'Scissors') 
    return "You Won!";
  if (userChoice === 'Scissory' && computerChoice === 'Scissory') 
    return "It's a tie!";
  if (userChoice === 'Scissory' && computerChoice === 'Rock')
    return "The Computer Won!";
  if (userChoice === 'Scissory' && computerChoice === 'Paper') 
    return "You Won!";
  if (userChoice === 'Papery' && computerChoice === 'Paper') 
    return "It's a tie!";
  if (userChoice === 'Papery' && computerChoice === 'Scissors')
    return "The Computer Won!";
  if (userChoice === 'Papery' && computerChoice === 'Rock') 
    return "You Won!";
  }
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

