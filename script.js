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
let user = document.getElementById('user');

function userChoiceRock() {
    user.innerHTML = "Rock"; 
    console.log(user.innerHTML); 
}







