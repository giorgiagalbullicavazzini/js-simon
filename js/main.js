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

// A function to check if two arrays are equal
function equalArrays (value, array1, array2) {
  const result = [];

  for (let i = 0; i < value; i++) {
    if (array1[i] !== array2[i]) {
      result.push('No');
    } else {
      result.push('Sì');
    }
  }

  return result;
}

////////////
// Main
////////////

const play = document.querySelector('.play');
const randomNumbers = 5;
const numbersContainer = document.querySelector('.random-numbers');
const timer = 1;

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

  // To check if the user values are the same of the ones contained in the array, we can use another while loop
  const userSequence = [];

  // After 1 more second, 5 prompt appears
  setTimeout(function() {
    // The loop ends when this array contains exactly 5 numbers
    while (userSequence.length < 5) {
      // The prompts ask the user to type the array numbers in the correct order
      const userInput = Number(prompt(`Inserisci il ${userSequence.length + 1}° numero`));
      if (!isNaN(userInput)) {
        userSequence.push(userInput);
      } else {
        // IF the prompt value is not a number, the prompt appears again
        alert('Devi inserire un numero!');
      }
    }

    // With a for loop we can check if the arrays are equal or not
    const correctAnswers = equalArrays(randomNumbers, randomSequence, userSequence);

    // At the end of the game, the software generates the results
    if (correctAnswers.includes('No')) {
      console.log('Hai perso!');
    } else {
      console.log('Hai vinto!');
    }

    // The results contain the number of correct prompts
    let points = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === 'Sì') {
        points += 1;
      }
    }
    console.log(points);
  }, (timer + 1) * 1000);
})