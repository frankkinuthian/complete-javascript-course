// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

// Call the function with input data for 3 different countries

const country1 = describeCountry('Finland', 6, 'Helsinki');// Store the returned values in 3 different variables
const country2 = describeCountry('USA', 328, 'Washington D.C.');
const country3 = describeCountry('Brazil', 211, 'Brasília');
// Store the returned values in 3 different variables   

console.log(country1);
console.log(country2);
console.log(country3);

// Test example 2 
// Challenge: Create a Function to Describe a City
// Write a function called describeCity that takes three parameters: city, country, and population. The function should return a string in the following format: 'Paris is in France and has a population of 2 million people.'

// Steps to Complete the Challenge:
// Define the describeCity function with the specified parameters.
// Call this function three times with different city data (including city name, country, and population).
// Store the returned values in three different variables.
// Log the results to the console.

// Solution 

function describeCity(city, country, population) {
    return `${city} is in ${country} and has a population of ${population} million people.`;
}

const city1 = describeCity('Paris', 'France', 2);
const city2 = describeCity('New York', 'USA', 8);
const city3 = describeCity('Tokyo', 'Japan', 15);

console.log(city1);
console.log(city2);
console.log(city3);


// Test example 3
// Challenge: Create a Function to Describe a Book
// Write a function called describeBook that takes four parameters: title, author, year, and genre. The function should return a string in the following format: 'The book "To Kill a Mockingbird" was written by Harper Lee in 1960 and belongs to the Fiction genre.'

// Steps to Complete the Challenge:
// Define the describeBook function with the specified parameters.
// Call this function three times with different book data (including title, author, year, and genre).
// Store the returned values in three different variables.
// Log the results to the console.

// Solution 

function describeBook(title, author, year, genre) {
    return `The book "${title}" was written by ${author} in ${year} and belongs to the ${genre} genre.`;
}

const book1 = describeBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'Fiction');
const book2 = describeBook('1984', 'George Orwell', 1949, 'Dystopian Fiction');
const book3 = describeBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic');

console.log(book1);
console.log(book2);
console.log(book3);

