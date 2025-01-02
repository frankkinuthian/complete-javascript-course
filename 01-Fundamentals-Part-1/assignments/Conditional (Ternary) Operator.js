// If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

// // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.



// Solution:

const country = 'Portugal';
let population = 100;

let result = population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`; // Ternary operator
result = population >= 1000 ? "This city is a megacity" : "This city is a small town";

console.log(result); // Output: This city is a small town

population = 13;

result = population >= 1000 ? "This city is a megacity" : "This city is a small town";

console.log(result); // Output: This city is a small town

population = 130;

result = population >= 1000 ? "This city is a megacity" : "This city is a small town";

console.log(result); // Output: This city is a megacity

// Note: The ternary operator is a shorthand way to write an if-else statement. It takes three arguments: a condition, a value to be returned if the condition is true, and a value to be returned if the condition is false. In this case, the condition is population > 33, and the values to be returned are `${country}'s population is above average` and `${country}'s population is below average`. The result is then logged to the console.


// Example 2
// Grade Calculator
// Alex is a teacher and wants to calculate the final grade for his students based on their scores. The grading system is as follows:

// If the score is 90 or above, the grade is "A".
// If the score is between 80 and 89, the grade is "B".
// If the score is between 70 and 79, the grade is "C".
// If the score is between 60 and 69, the grade is "D".
// If the score is below 60, the grade is "F".
// Your tasks:

// Create a variable called grade to store the grade based on the score.
// Use a ternary operator to determine the grade without using an if...else statement.
// Print a string to the console containing the score and the corresponding grade.
// Example:
// If the score is 85, the grade is "B".

// Test Data:
// Test with different scores: 95, 72, 58, and 88.

// Solution:
// let age = 23;
// const classifyAge = age => {
//   let category =
//     age >= 0 && age <= 12
//       ? 'Child'
//       : age >= 13 && age <= 19
//       ? 'Teenager'
//       : age >= 20 && age <= 64
//       ? 'Adult'
//       : age > 65
//       ? 'Senior'
//       : 'Invalid Age';
//   console.log(`Age: ${age}, Category: ${category}`);
// };

// // Test Data
// classifyAge(10); 
// classifyAge(17); 
// classifyAge(30); 
// classifyAge(70);


// Covering all available avenues:
const classifyAge = (age) => {
    // Input validation
    if (typeof age !== 'number' || age < 0) {
        console.log("Please enter a valid age.");
        return;
    }
  
    // Category calculation using nested ternary operators
    let category =
      age >= 0 && age <= 12
        ? 'Child'
        : age >= 13 && age <= 19
        ? 'Teenager'
        : age >= 20 && age <= 64
        ? 'Adult'
        : 'Senior'; // No need for age > 65 check since it's the last condition
  
    console.log(`Age: ${age}, Category: ${category}`);
  };
  
  // Example usage:
  classifyAge(10);  // Child
  classifyAge(17);  // Teenager
  classifyAge(30);  // Adult
  classifyAge(70);  // Senior
  classifyAge(-5);  // Invalid Age
  classifyAge("twenty"); // Invalid Age

  // Want to ensure that the function handles invalid inputs gracefully. Added a check at the beginning of the function to handle cases where the age is not a number.