// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below

function validateHand(hand){
  if(hand=='rock'){
    // console.log('rock is true');      ////**************** */
    return true;
  }else if(hand=='paper'){
    // console.log('paper is true');
    return true;
  }else if(hand=='scissors'){
    // console.log('scissors are true');
    return true;
  }else{
    // console.log("what is true?");
    return false;
  }
};

const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected
  let trHand1 = hand1.trim();
  let trHand2 = hand2.trim();
  let lwHand1 = trHand1.toLowerCase();
  let lwHand2 = trHand2.toLowerCase();

  if(validateHand(lwHand1)
  && validateHand(lwHand2)){
    // console.log("Let them fight.", lwHand1, lwHand2); ///************** */
   return combatHands(lwHand1, lwHand2);
  } else {
    console.log("Please enter a valid hand");
  };

};



const combatHands = (hand1, hand2)=>{
  // if cases for a tie
  if(hand1 === 'rock' && hand2 === 'rock'){
    // console.log("It reached here.");  //********************** */
    return "It's a tie!";
  }else if(hand1==='paper' && hand2==='paper'){
    return "It's a tie!";
  }else if(hand1==='scissors' && hand2==='scissors'){
    return "It's a tie!";
  }
  // if cases for rock win
  else if(hand1==='rock' && hand2==='scissors'){
    return "Hand one wins!";
  }else if(hand1==='scissors' && hand2==='rock'){
    return "Hand two wins!";
  }
  // if cases for paper win
  else if(hand1==='paper' && hand2==='rock'){
    return "Hand one wins!";
  }else if(hand1==='rock' && hand2==='paper'){
    return "Hand two wins!";
  }

  // if cases for scissors win
  else if(hand1==='scissors' && hand2==='paper'){
    return "Hand one wins!";
  }else if(hand1==='paper' && hand2==='scissors'){
    return "Hand two wins!";
  }else {return "I don't know"};
};

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
