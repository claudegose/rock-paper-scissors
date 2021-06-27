// VARIABLES
let computerChoiceDisplay = document.getElementById("computer-choice")
let userChoiceDisplay = document.getElementById("user-choice")
let resultDisplay = document.getElementById("result")
let possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

//  CHOICES
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(ev => {
   userChoice = ev.target.id
   userChoiceDisplay.innerHTML = userChoice;
   generateComputerChoice()
   getResult ()

})))
// COMP GENERATED CHOICE
function generateComputerChoice () {
   const randomNumber = Math.floor(Math.random() * 3 + 1) ;

   if (randomNumber === 1) {
      computerChoice = 'rock';
   }
   if (randomNumber === 2){
      computerChoice = 'scissors';
   }
   if (randomNumber === 3) {
      computerChoice = 'paper';
   }
   computerChoiceDisplay.innerHTML = computerChoice

}

// RESULT DISPLAY
function getResult (){

   if (computerChoice === userChoice){
      result = 'Its a draw';
   }if (computerChoice === 'rock' && userChoice === 'paper'){
      result = 'You win';
   }if (computerChoice === 'rock' && userChoice === 'scissors'){
      result = 'You loose';
   }if (computerChoice === 'paper' &&  userChoice === 'scissors'){
      result = 'You win';
   }if (computerChoice === 'paper' && userChoice === 'rock'){
      result = 'You loose';
   }if (computerChoice === 'scissors' &&  userChoice === 'rock'){
      result = 'You win';
   }if (computerChoice === 'scissors' && userChoice === 'paper'){
      result = 'You loose';
   }
   resultDisplay.innerHTML = result
}