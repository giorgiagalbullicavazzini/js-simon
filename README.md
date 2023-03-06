# Simon Says

- The purpose of this code is to create a Simon Says game;
- With the click of a button, the user can generate 5 random numbers;
- These numbers, saved in an array, are all different;
- The array is generated in a `while` loop and checks if a given number is double or not;
- IF the number is already inside the array, the loop goes on;
- The cycle ends when the array contains exactly 5 random numbers;
- When the array is shown on the user screen, a timer starts;
- With a `setTimeout` function, we can then hide the numbers after 30 seconds;
- After 1 more second, 5 prompt appears;
- The prompts ask the user to type the array numbers in the correct order;
- IF the prompt value is not a number, the prompt appears again;
- To check if the user values are the same of the ones contained in the array, we can use a `while` loop;
- This loop creates another array and contains the 5 prompts;
- The loop ends when this array contains exactly 5 numbers;
- With a `for` loop we can then check if the arrays are equal or not;
- At the end of the game, the software generates the results;
- The results contain the correct string and the number of correct prompts.