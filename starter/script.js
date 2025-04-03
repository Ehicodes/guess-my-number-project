'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//selecting and manipulating elements
//with an input field, to get the actual value, we use the value property

//lets say it logs it to the console when we click on check number
//handling click events
//an event is something that happens on the page e.g mouse click, mouse moving
///with an event listener we can wait for a certain event to happen then react to it
//to listen for events, we first need to select the element where  the event should happen

//in the addeventlistener method, we first need to parse the type of the event, which is a click. we need to tell the event listener what to do, we need to specify  a reaction and we do that using a function and the function contains the code that should be executed whenever the click event happens on the funtion and the function is called the EVENT HANDLER. the addeventlistener is a special type of function, it expects as a second argument the function we talked about
// a function is a value and if it is a value, it can be parsed into another  function as an argument just like any other value e.g a string, a number

//lets retrieve the numbers from the input fielf by saving in into a variable
//since we will compare the number from the input with a randomly generated number, we need to convert the input which is a string to  a number, so that we can compare numbers to numbers

//IMPLEMENTING THE GAME LOGIC
//- IMPLEMENT WHAT HAPPENS WHEN THE GUESS IS CORRECT, THAT IS WHEN IT IS EQUAL TO THE SECRET NUMBER.
//-WHEN THE GUESS IS TOO LOW
//-WHEN THE GUESS IS TOO HIGH

//-TO START, LETS DEFINE THE SECRET NUMBER

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

//(math is an object that has many methods. random gives us a number between 0 and 1)
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🎉 🎉';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low 📉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
