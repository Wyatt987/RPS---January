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

//User Choice//
let user = document.getElementById('user');
document.getElementById('rocky').addEventListener('click', userChoice);
document.getElementById('Papery').addEventListener('click', userChoice);
document.getElementById('Scissory').addEventListener('click', userChoice);

function userChoice(event) {
    let clickedButtonId = event.target.parentElement.id; 

    if (clickedButtonId === 'rocky') {
        user.textContent = "Rock";
        console.log("Rock");
    } else if (clickedButtonId === 'Papery') {
        user.textContent = "Paper";
        console.log("Paper");
    } else if (clickedButtonId === 'Scissory') {
        user.textContent = "Scissors";
        console.log("Scissors");
    } else {
        console.log("Invalid choice");
    }
}
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





