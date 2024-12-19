//* ======================================
//* Modern JavaScript - EcmaScript 2015
//* =====================================


//* ======================================
//* LET AND CONST - EcmaScript 2015
//* =====================================
// -var
// var naam = "rishabh maurya";

// if(true){
//     var naam = "rishu";
//     console.log(naam);
// }

// naam = "rishabh rishabh"
// console.log(naam);


// -let 
// let letNaam = "rishabh maurya";

// if(true){
//     let letNaam = "rishu";
//     console.log(letNaam);
// }

// letNaam = "rishabh rishabh";
// console.log(letNaam);

//-const
// const constNaam = "rishabh maurya";

// if(true){
//     const constNaam = "rishu";
//     console.log(constNaam);


// constNaam = "rishabh rishabh";
// console.log(constNaam);



//? let Keyword:  The let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.
//? const Keyword: The const keyword is used to declare variables with block scope, but once a value is assigned to a const variable, it cannot be reassigned. const variables are immutable.


//* ==========================================
//* TEMPLATE STRINGS - EcmaScript 2015
//* =========================================

//? In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in JavaScript. Template strings are enclosed in backticks (``) rather than single or double quotes.

let firstName = "Rishabh";
let lastName = "Maurya";

// Using template string for string interpolation
// old way
let fullName = firstName + " " + lastName;
console.log(fullName);
// new way
let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

//? String Interpolation:  Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

let age = 25;

// String interpolation with variable
let message = `${firstName} ${lastName} is ${age} years old.`;
console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.
let msg = `my name ${firstName}.
i am from india.
i ❤  Programming.
my fav lang was javascript.`

console.log(msg);

//? Expression Evaluation: Template expressions can include any valid JavaScript expression.
//! Practice Time
let num = 2;
console.log("5 * " + num + " = " + 5 * num);
console.log(`5 * ${num} = ${5 * num}`);

//? Advantages:
//? Readability: Template strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any JavaScript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* ==========================================
//* DEFAULT Parameters
//* =========================================

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults. 
// Default parameters allow you to specify default values for function parameters in the function declaration itself. 
// If a parameter is not provided when the function is called, the default value is used.

//? Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// example
function sum(a = 5, b = 10){
    return console.log(a + b);
}

sum(5);

//* ==========================================
//*  FAT ARROW FUNCTION
//* =========================================

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to write anonymous functions.

let add = function(a,b){
    let result = `the sum of ${a} + ${b} is ${a+b}`;
    console.log(result);
}

add(15,51);

let add2 = (a,b) =>{
    let result = `the sum of ${a} + ${b} is ${a+b}`;
    console.log(result);
}
add(155,51);

// ----

let square = (a) => console.log(`square of ${a} is ${a*a}`);

square(212);


// todo NOTES

//🚀 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 5));

//🚀 2: If there is only one parameter, the parentheses () around the parameter list can be omitted.
// const square = a => `The square of ${a} is  ${a * a}`;
// console.log(square(5));

//🚀 3: If there are no parameters, use an empty set of parentheses ().
const greet = () => console.log('namaste!');

greet();