// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


// // Test data
// const dolphinScores = [96, 108, 89];
// const koalaScores = [88, 91, 110];

// // Calculate average scores

// const scoreDolphins = (dolphinScores[0] + dolphinScores[1] + dolphinScores[2])/ 3; 
// // Dolphins Average:
// // (96 + 108 + 89) / 3 = 293 / 3 = 97.67
// const scoreKoalas = (koalaScores[0] + koalaScores[1] + koalaScores[2])/ 3;
// // Koalas Average:

// // (88 + 91 + 110) / 3 = 289 / 3 = 96.33

// // Determine the winner

// if (scoreDolphins > scoreKoalas) {
//     console.log("Dolphins win the trophy")
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("Koalas win the trophy")
// } else {
//     console.log("Both win the trophy")
// }


// Dynamically for any test data:

const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];

const calculateAverage = (scores) => scores.reduce((sum, score) => sum + score, 0) / scores.length;

const scoreDolphins = calculateAverage(dolphinsScores);
const scoreKoalas = calculateAverage(koalasScores);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}
