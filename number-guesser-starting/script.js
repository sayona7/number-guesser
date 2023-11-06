let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Step 1
function generateTarget() {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }
  //console.log(generateTarget());

  // Step 2
  function compareGuesses(human, computer, secret) {
    
  }

  // Step 3

  function updateScore(value) {
    if (value === 'human') {
      humanScore++;
    }
  
    if (value === 'computer') {
      computerScore++;
    }
  
  }

  // Step 4

  function advanceRound() {
    currentRoundNumber++;
  }