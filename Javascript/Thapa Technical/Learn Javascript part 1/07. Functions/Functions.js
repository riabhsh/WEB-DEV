{
    function sum(num1, num2){
    let sum = num1 + num2;
    return sum;
    }

    console.log(sum(10, 20));
    console.log(sum(100, 20));
    console.log(sum(10, 250));
}


//1. Function Declaration
function product(num1, num2){
    let result = num1 * num2;
    return console.log("product of " + num1 + " and " + num2 + " is " + result + ".");
}

//2. Function Invokation
product(12,21);

//3. Function Parameters
// in function declaration values inside paranthesis are called function Parameters.

// function functionName(parameter1, parameter2,... paranetern){
//     ...
//     ...
//     ...
// }

//4. Function Arguments
// in function Invocation/calling the values inside paranthesis are called function Arguments.

// functionName(argument1, argument2, ... argumentn);

//5. Function expressions
// A function expression is a way to define a function as part of an expression. 
// It can be either named or anonymous. 
// If it's named, it becomes a named function expression. 

// note: if you create a function without return and then creates a function expression then it returns undefined.
var myName = function printName(name){
    return console.log(name);
}

myName("Rishabh");

//6. Anonymous function
// An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

var myName = function (name){
    return console.log(name);
}

myName("Anonymous fn");

//7. Return Keyword 
// Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. 
// The return statement stops the execution of a function and sends a value back to the caller.

function sub(){
    return console.log(45-38);
}

sub();

// 8. IIFE - immediately invoked function expression
// An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. 
// It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately.
// it runs automatically when page load! we dont have to run manually.

// Syntax
// (function (parameters...) {
//   // code to be executed
// })(arguments...);

var summ = ( function(a,b){
   console.log(a+b);
   return (a+b);
})(45,65);

console.log(summ);



let anon = function (){
    console.log('anonymous')
}

anon();

//? Interview Questions

//! Question 1: Calculator Function
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.
{
    console.log(`\n\n++Question 1: Calculator Function++`);

    const calc = (n1,n2,op) => {
        switch(op){
            case '+':{
                return console.log(n1+n2);
            }

            case '-':{
                return console.log(n1-n2);
            }

            case '*':{
                return console.log(n1*n2);
            }

            case '/':{
                if(n2 === 0){
                    return console.log(`0 is not allowed`);
                }
                return console.log(n1/n2);
            }

            default:{
                return console.log(`wrong choice!`);
            }
        }
    }

    calc(12,0,'/');

}


//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.
{
    console.log("\n++Reverse a String++")
    const isReverse = (str) =>{
        let name = "";
        for(let char = str.length-1; char >= 0; char--){
            name = name + str[char];
        }
        console.log(name);
    }
    
    isReverse("Rishabh Maurya");
}

//! Palindrome Check:
//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).
{
    console.log("\n++Palindrome String Checker");

    const isPalindrome = (str) => {
            let name = "";
            for(let char = str.length-1; char >= 0; char--){
                name = name + str[char];
            }
            
            // if(name === str){
            //     console.log(`${str} is Palindrome`);
            // }
            // else console.log(`${str} is Not a Palindrome`);

            str === name ? console.log(`${str} is Palindrome`) : console.log(`${str} is Not a Palindrome`);
    }

    isPalindrome("naman");
}

6:2