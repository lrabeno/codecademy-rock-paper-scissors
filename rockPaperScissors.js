const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput
  } else {
    console.log('error');
  }
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'tie';
 }
 if (userChoice === 'rock') {
   if (computerChoice === 'paper') {
   return 'computer wins';
}  else {
   return "You win";
}
 }
 if (userChoice === 'paper') {
   if (computerChoice === 'scissors') {
   return 'computer wins';
 } else {
   return 'You win';
}
 }
 if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
   return 'computer wins';
} else {
  return 'you win';
}
 }
 if (userChoice === 'bomb')
   return 'you win and explode!'
 };

const playGame = () => {
  const userChoice = getUserChoice('bomb'); 
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}, computer threw: ${computerChoice}.`); 
  
  
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()














  




















