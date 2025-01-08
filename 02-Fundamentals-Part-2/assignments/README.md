## JavaScript Fundamentals Part 2

* Find the assignments for the coursework at:

* https://jonas.io/assignments/javascript-fundamentals-part-2.html
Happy Tasking!


-------------------------------------------------------------------------


# Topics:
---------------------------------------------------------------------------


# Functions

A function is a fundamental concept in programming that represents a reusable block of code designed to perform a specific task. Functions allow you to encapsulate logic, making your code more organized, modular, and easier to maintain. Here are some key aspects of functions:

## Key Characteristics of Functions
#### Definition: 
A function is defined using a specific syntax that typically includes a name, parameters (optional), and a body that contains the code to be executed.

#### Parameters: 
Functions can take inputs, known as parameters or arguments, which allow you to pass data into the function. This makes functions flexible and reusable with different inputs.

#### Return Value: 
Functions can return a value using the return statement. If a function does not explicitly return a value, it returns undefined by default.

#### Encapsulation: 
Functions encapsulate code, allowing you to group related operations together. This helps in organizing code and reducing redundancy.

Scope: Functions create their own scope, meaning that variables defined within a function are not accessible outside of it (unless they are explicitly returned or defined in a broader scope).

Higher-Order Functions: Functions can be passed as arguments to other functions, returned from functions, or assigned to variables. This allows for powerful programming techniques such as callbacks and functional programming.

Example of a Function in JavaScript
Here’s a simple example of a function in JavaScript:

```javascript

// Function declaration
function add(a, b) {
    return a + b; // Returns the sum of a and b
}
```

### Calling the function
```javascript
const result = add(5, 3); // result will be 8
console.log(result); // Output: 8
```

## Types of Functions
* #### Built-in Functions: 
Functions that are provided by the programming language (e.g., Math.max() in JavaScript).

* #### User -defined Functions: 
Functions that are created by the programmer to perform specific tasks.

* #### Anonymous Functions: 
Functions that do not have a name and are often used as arguments to other functions.

* #### Arrow Functions: 
A concise way to write functions in JavaScript using the arrow syntax (=>).

## Conclusion
Functions are a core building block of programming that promote code reusability, organization, and clarity. They allow developers to break down complex problems into smaller, manageable pieces, making it easier to write, test, and maintain code.

--------------------------------------------

# Function Declarations vs. Function Expressions
## Differences Between Function Declarations and Function Expressions

In JavaScript, functions can be defined in two primary ways: **function declarations** and **function expressions**. While both serve the purpose of defining functions, they have distinct characteristics and behaviors. Here are the key differences:

## 1. Syntax

### Function Declaration
A function declaration defines a named function. The syntax is as follows:

```javascript
function functionName(parameters) {
    // function body
}
```

Example:

```javascript 
function greet(name) {
    return `Hello, ${name}!`;
}
```
### Function Expression

A function expression defines a function as part of a larger expression, often assigning it to a variable. The syntax is as follows:

```javascript
const functionName = function(parameters) {
    // function body
};

```
Example:

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

```
## 2. Hoisting
### Function Declaration

Function declarations are hoisted to the top of their containing scope. This means you can call the function before it is defined in the code.

Example:

```javascript
console.log(greet('Alice')); // Output: Hello, Alice!

function greet(name) {
    return `Hello, ${name}!`;
}
```


### Function Expression
Function expressions are not hoisted in the same way. If you try to call a function expression before it is defined, you will get a TypeError.

Example:

```javascript
console.log(greet('Alice')); // Output: TypeError: greet is not a function

const greet = function(name) {
    return `Hello, ${name}!`;
};
```

## 3. Named vs. Anonymous Functions
### Function Declaration
Function declarations are always named.

### Function Expression
Function expressions can be either named or anonymous. An anonymous function does not have a name, while a named function expression has a name.

Anonymous Function Expression Example:

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};
```

Named Function Expression Example:

```javascript
const greet = function greetFunction(name) {
    return `Hello, ${name}!`;
};
```

## 4. Use Cases
### Function Declaration
Function declarations are typically used when you want to define a function that will be used throughout the code, as they are hoisted and can be called anywhere in their scope.

### Function Expression
Function expressions are often used in situations where functions are passed as arguments to other functions, returned from functions, or when you want to create a function that is only used in a limited scope.

### Conclusion
In summary, while both function declarations and function expressions are used to define functions in JavaScript, they differ in syntax, hoisting behavior, naming conventions, and typical use cases. Understanding these differences is crucial for writing effective and maintainable JavaScript code.

-----------------------------------------------------

