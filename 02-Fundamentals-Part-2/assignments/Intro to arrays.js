const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(years);

console.log(years[0]);
console.log(years[1]);
console.log(years[2]);
console.log(years[3]);

console.log(years.length);

console.log(years[years.length - 1]);

console.log(friends[friends.length - 1]);

// Mutating Arrays
friends[2] = "Jay";
console.log(friends);

const frank = ["Frank", "Kinuthia", 2025 - 1997, "Student", friends];
console.log(frank);

// Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.

// Log to the console whether the array has 4 elements or not (true or false).

// Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.

const populations = [100000000, 200000000, 300000000, 400000000];

console.log(populations.length === 4);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);
// Create an array called countries containing the names of the 4 countries you have chosen.

const countries = ["Kenya", "Uganda", "Tanzania", "Nigeria"];

console.log(countries);

// Create an array called populationData containing the population values and the corresponding country names.

const populationData = [
  [populations[0], countries[0]],
  [populations[1], countries[1]],
  [populations[2], countries[2]],
  [populations[3], countries[3]],
];

console.log(populationData);
