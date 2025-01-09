const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) =>
    `${firstName}, you have ${65 - calcAge(birthYear) > 0 
        ? (65 - calcAge(birthYear)) 
        : 'already retired!'}`;

console.log(yearsUntilRetirement(1990, "John")); // "John, you have 36 years left until you can retire."
console.log(yearsUntilRetirement(1950, "Jane")); // "Jane, you have already retired!"


// For readability 👆:
// const calcAge = (birthYear) => 2037 - birthYear;

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const yearsLeft = 65 - calcAge(birthYear);
//     return yearsLeft > 0 
//         ? `${firstName}, you have ${yearsLeft} years left until you can retire.`
//         : `${firstName}, you have already retired!`;
// };

// console.log(yearsUntilRetirement(1990, "John")); // "John, you have 36 years left until you can retire."
// console.log(yearsUntilRetirement(1950, "Jane")); // "Jane, you have already retired!"
