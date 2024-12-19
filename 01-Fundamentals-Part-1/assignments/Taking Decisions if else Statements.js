// Refer to previous code for more details:

const country = 'Kenya';
const continent =  'Africa';
let population = '10'; // In millions

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
let language = 'Swahili';

console.log(isIsland);
console.log(language);


// If your country split in half, and each half would contain half the population, then how many people would live in each half?

console.log(population / 2); 

// Increase the population of your country by 1 and log the result to the console.
population++;

//Finland has a population of 6 million. Does your country have more people than Finland?
console.log(population); 
console.log(population > 6);

//The average population of a country is 33 million people. Does you country have less people than the average country?
console.log(population < 33);

//Based on the variables you created, create a new variable description which contains a string with this format:
//'Portugal is in Europe, and its 11 million people speak portuguese'.
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;

console.log(description);


//If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

population = 13;

if (population > 33) {
    console.log(`${country}'s population is ${population - 33} million above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}


population = 130;

if (population > 33) {
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}   