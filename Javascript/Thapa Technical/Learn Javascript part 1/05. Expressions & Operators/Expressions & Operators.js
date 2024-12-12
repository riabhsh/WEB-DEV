console.log("++ Types Of Operators ++\n")

//1. Assignment Operator
console.log("1.Assignment Operator");
console.log("var a = 10, here '=' is an assignment operator");

var num1 = 50;
var num2 = 10

console.log("\nnum1: " + num1 + "\nnum2: " + num2 + "\n");

//2. Arithmatic Operator
console.log("2. Arithmatic Operator");

console.log("num1 + num2: ");
console.log(num1 + num2);

console.log("num1 - num2: ");
console.log(num1 - num2);

console.log("num1 * num2: ");
console.log(num1 * num2);

console.log("num1 / num2: ");
console.log(num1 / num2);

console.log("num1 % num2: ");
console.log(num1 % num2);

console.log("++ interview questions ++");
console.log("'string' / 2: ");
console.log('string' / 2)

console.log("\n0.1 + 0.2: ");
console.log(0.1 + 0.2);
console.log("we dont want the floating points so we use (0.1 + 0.2).toFixed(2):")
console.log((0.1 + 0.2).toFixed(2));

//3. String Operator
//There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

console.log("\n3. String Operator");

var str1 = "Hello";
var str2 = "World";
var str3 = str1 + " " + str2;
console.log(str3);

//4. Comparison Operator

console.log("\n4. Comparison Operator");

var a = 10;
var b = 10;

console.log("a: " + a + " b: " + b);
console.log("a == b: " + (a == b));
console.log("a === b: " + (a === b));
console.log("a != b: " + (a != b));
console.log("a > b: " + (a > b));
console.log("a < b: " + (a < b));
console.log("a <= b: " + (a <= b));
console.log("a >= b: " + (a >= b));

// Equal (==): Checks if two values are equal, performing type coercion if necessary.
// Strict Equal (===): Checks if two values are equal without performing type coercion.

// console.log("++ interview questions ++")


//! What is the difference between == and === operators in JavaScript❓

// Strict Equal (===):
// Checks if two values are equal without performing type coercion

// Equal (==): Checks if two values are equal, performing type coercion if necessary.


//5. Logical Operator

console.log("\n5. Logical Operator");
//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
var x = 5;
var y = 10;
console.log(x > 0 && y > 0);

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
var a = 15;
var b = 0;
console.log(a > 10 || b > 10);

//? Logical NOT (!):
//? Returns true if the operand is false, and false if the operand is true.
// Example:
var isOpen = false;
console.log(!isOpen);

// Examples
var age = 20;
var l = true;
console.log(age>=18 && l);

//6. Conditional (Ternary) Operator

console.log("\n6. Conditional (Ternary) Operator");

var agee = 25;
var result = age >= 18 ? "YES" : "NO";

console.log(result);


console.log("\n Interview Questions");
console.log("5" - 3);
console.log(typeof("5" - 3) + "\n");

console.log(2 < 12 < 5);
console.log(typeof(2 < 12 < 5) + "\n");

console.log("20" + 10 + 10);
console.log(typeof("20" + 10 + 10) + "\n");
