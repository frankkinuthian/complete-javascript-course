// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

// Solution:

// Function Declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

// Call the function for 3 countries
const chinaPopulation = 1441000000;
const chinaPercentage = percentageOfWorld1(chinaPopulation);
console.log(`China has ${chinaPercentage.toFixed(2)}% of the world population.`);

const indiaPopulation = 1366000000;
const indiaPercentage = percentageOfWorld1(indiaPopulation);
console.log(`India has ${indiaPercentage.toFixed(2)}% of the world population.`);

const japanPopulation = 126400000;
const japanPercentage = percentageOfWorld1(japanPopulation);
console.log(`Japan has ${japanPercentage.toFixed(2)}% of the world population.`);