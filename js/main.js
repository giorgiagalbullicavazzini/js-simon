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

// A function to remove a class to an element
function removeClass(element, className) {
  element.classList.remove(className);
}

// A function to check if two arrays are equal
function equalArrays (value, array1, array2) {
  const result = [];

  for (let i = 0; i < value; i++) {
    if (array1[i] !== array2[i]) {
      result.push(`<i class="fa-solid fa-xmark"></i>`);
    } else {
      result.push(`<i class="fa-solid fa-check"></i>`);
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
  const randomSequence = randomArray(randomNumbers, 10, 99);

  // When the array is shown on the user screen, a timer starts
  // After some seconds, the array disappears
  for (let i = 0; i < randomSequence.length; i++) {
    numbersContainer.innerHTML += `<span>${randomSequence[i]}</span> `;
  }

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

    // With another loop we can count the user points
    let points = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === `<i class="fa-solid fa-check"></i>`) {
        points += 1;
      }
    }

    removeClass(numbersContainer, 'hidden');
    
    const inputsContainer = document.querySelector('.user-inputs');
    for (let i = 0; i < userSequence.length; i++) {
      inputsContainer.innerHTML += `<span>${userSequence[i]}</span> `;
    } 

    const resultsContainer = document.querySelector('.results');
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i].includes(`<i class="fa-solid fa-xmark"></i>`)) {
        resultsContainer.innerHTML += `<span class="red">${correctAnswers[i]}</span> `;
      } else {
        resultsContainer.innerHTML += `<span class="green">${correctAnswers[i]}</span> `;
      }
    }

    const winCondition = document.querySelector('.win-condition');

    // At the end of the game, the software generates the results
    if (correctAnswers.includes(`<i class="fa-solid fa-xmark"></i>`) && points === 0) {
      winCondition.innerText = 'Hai totalizzato 0 punti, ma puoi sempre riprovare!';
    } else if (correctAnswers.includes(`<i class="fa-solid fa-xmark"></i>`)) {
      winCondition.innerText = `Hai perso, ma hai comunque totalizzato un punteggio di ${points}. Riprova!`;
    } else {
      winCondition.innerText = 'Complimenti, hai vinto! Sei un vero pro player!';
    }

  }, (timer + 1) * 1000);
})