const cutFruitPieces = fruit =>  fruit * 4;


const fruitProcessor = function (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3)); // Output: "Juice with 8 pieces of apple and 12 pieces of orange."


// Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

// To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

// Call describePopulation with data for 3 countries of your choice.

// Solution:

const describePopulation = (country, population) => 
    `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;

// Example calls
console.log(describePopulation('Kenya', 46)); // For Kenya 
// Output: "Kenya has 46 million people, which is about 0.58% of the world."
console.log(describePopulation('Nigeria', 190)); // For Nigeria
// Output: "Nigeria has 190 million people, which is about 2.41% of the world."
console.log(describePopulation('Uganda', 42)); // For Uganda
// Output: "Uganda has 42 million people, which is about 0.53% of the world."

