// alert("namasete javascript");

console.log("\n\nabout Rishabh");

let name = "rishabh maurya";
let age = 24;
let carrer = undefined;
let wealth = null;
let ambition = true;

console.log("name: " + name + "\nage: " + age + "\ncarrer: " + carrer + "\nwealth: " + wealth + "\nambition: " + ambition + "\n\n");


// var(global scope, can be update, can be redeclare)
var word = "rishu"
console.log("var: " + word);

var word = "maurya"
console.log("var: " + word);

// let and const are used now days... introduced after ES6.
// let(block scope, can be updated, no re-declaration)
let num = 12
console.log(num);

{
    let num = 31;
    console.log(num);
}

// const(block scope, no updation, no re-declaration)
// *note: but key of the object can be updated.
const PI = 3.142;
console.log(PI);


// data types in js

// primitive
let n = 12;
let fruit = "apple";
let sunSet = true;
let power = undefined
let temp = null;
let NUM = BigInt("31422155665151215545154");
let greet = Symbol("hello");

console.log("\n\n++++ primitive data types ++++")
console.log("number: " + typeof(n));
console.log("string: " + typeof(fruit));
console.log("boolean: " + typeof(sunSet));
console.log("undefined: " + typeof(power));
console.log("null(absence of an object): " + typeof(temp));
console.log("bigint: " + typeof(NUM));
console.log("string: " + typeof(word));

//non-primitive

const student = {
    fullName: "Rishabh Maurya",
    age: 20,
    skills: "Coding",
    isSkilled: true
}

console.log(student);
console.log("student: " + typeof(student));
console.log(student["fullName"] + "\n" + student.fullName);
console.log(typeof student.fullName);

//here we can update values of key in "const" object.
student.fullName = "ankit"
console.log("student: " + typeof(student));
console.log(student["fullName"] + "\n" + student.fullName);
