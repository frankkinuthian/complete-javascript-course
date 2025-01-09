// Function expression

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function for above
const calcAge2 = (birthYear) => 2037 - birthYear;
const age2 = calcAge2(1991);
console.log(age2); // Output: 36


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement}`
}

console.log(yearsUntilRetirement(1991)); // Output: 26

// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWorld2, and also call it with 3 country populations (can be the same populations).
// Solution:
const percentageOfWorld1 = population => ((population / 7900) * 100).toFixed(2);

const chinaPopulation = 1441000000;
const chinaPercentage = percentageOfWorld1(chinaPopulation);
console.log(`China has ${chinaPercentage}% of the world population.`); // Output: China has 18.21% of the world population.

const indiaPopulation = 1366000000;
const indiaPercentage = percentageOfWorld1(indiaPopulation);
console.log(`India has ${indiaPercentage}% of the world population.`); // Output: India has 16.96% of the world population.

const japanPopulation = 126400000;
const japanPercentage = percentageOfWorld1(japanPopulation);
console.log(`Japan has ${japanPercentage}% of the world population.`); // Output: Japan has 1.56% of the world population.

// percentageOfWorld2
const percentageOfWorld2 = population => ((population / 7900) * 100).toFixed(2);

const usaPopulation = 331000000;
const usaPercentage = percentageOfWorld2(usaPopulation);
console.log(`USA has ${usaPercentage.toFixed(2)}% of the world population.`); // Output: USA has 4.46% of the world population.

const brazilPopulation = 213000000;
const brazilPercentage = percentageOfWorld2(brazilPopulation);
console.log(`Brazil has ${brazilPercentage.toFixed(2)}% of the world population.`); // Output: Brazil has 3.11% of the world population.

const russiaPopulation = 145000000;
const russiaPercentage = percentageOfWorld2(russiaPopulation);
console.log(`Russia has ${russiaPercentage.toFixed(2)}% of the world population.`); // Output: Russia has 1.91% of the world population.