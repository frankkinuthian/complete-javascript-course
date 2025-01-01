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