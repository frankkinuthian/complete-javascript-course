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