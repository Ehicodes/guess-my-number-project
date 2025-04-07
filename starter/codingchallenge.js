'use strict';
/*JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game resEt functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //score

  document.querySelector('.score').textContent = score;
  //number
  document.querySelector('.number').textContent = '?';
  //message
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //backgroundColor
  document.querySelector('body').style.backgroundColor = '#222';
  //width
  document.querySelector('.number').style.width = '15rem';
  //guess input
  document.querySelector('.guess').value = '';
});

//THE VALUE OF AN INPUT IS ALWAYS A STRING AND THE EMPTY STRING IS BASICALLY THE ABSENCE OF ANY VALUE.
