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
    if (secret !== human && secret !== computer) {
        let humanDif = Math.abs(secret - human);
        let computerDif = Math.abs(secret - computer);
        if (humanDif === computerDif || humanDif < computerDif) {
          return true;
        } else if (humanDif > computerDif) {
          return false;
        }
      } else if (secret === human) {
        return true;
      } else if (secret === computer) {
        return false;
      }
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