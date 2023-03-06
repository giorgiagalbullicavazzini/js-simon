'use strict';

////////////
// Functions
////////////

// A function to create a random number array generator
function randomArray(arrayElements, min, max) {
  // Creation of an empty array
  const generatedArray = [];

  // The array will be filled by a while loop
  // The loop will generate some random numbers between a min and a max number
  while (generatedArray.length < arrayElements) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

      // In order to avoid duplicate numbers, the loop will also check if the randomized number is inside the array or not
      if (!generatedArray.includes(randomNumber)) {
          generatedArray.push(randomNumber);
      }
  }

  return generatedArray;
}

// A function to add a class to an element
function addClass(element, className) {
  element.classList.add(className);
}

////////////
// Main
////////////

const play = document.querySelector('.play');
const randomNumbers = 5;
const numbersContainer = document.querySelector('.random-numbers');
const timer = 30;

play.addEventListener('click', function() {
  // After the click of the button, the button disappears
  addClass(play, 'hidden');

  // With the click of a button, the user can generate 5 random numbers
  const randomSequence = randomArray(randomNumbers, 1, 100);

  // When the array is shown on the user screen, a timer starts
  // After some seconds, the array disappears
  numbersContainer.innerText = randomSequence;
  setTimeout(function() {
    addClass(numbersContainer, 'hidden');
  }, timer * 1000);
})



// After 1 more second, 5 prompt appears
// The prompts ask the user to type the array numbers in the correct order
// IF the prompt value is not a number, the prompt appears again
// To check if the user values are the same of the ones contained in the array, we can use another while loop
// This loop creates another array and contains the 5 prompts
// The loop ends when this array contains exactly 5 numbers
// With a for loop we can then check if the arrays are equal or not
// At the end of the game, the software generates the results
// The results contain the correct string and the number of correct prompts