//+++ IF ELSE +++
// The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.

//If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
{
console.log("+++ vote Checker!+++")

var age = 15;
var isCitizen = false;
var isVote = false;

if(age >= 18 && isCitizen && isVote){
    console.log("they are eligible to vote!");
}

else{
    if(age < 18){
        console.log(age + " is less the 18");
    }
    if(isCitizen != true){
        console.log("not a citezen");
    }
    if(isVote != true){
        console.log("not registered");
    }
    console.log("\nSo not eligible to vote!");
}
}

// Interview Questions
// 1. Ever is Odd
{
    console.log("\n++ Even or Odd Checker");

    var num = 2;

    if(num % 2 == 0){
        console.log(num + " is Even");
    }
    else{
        console.log(num + " is Odd");
    }
}

// 2. Prime or Not
//-Prime numbers are numbers that have only 2 factors: 1 and themselves.
//-All prime numbers greater than 2 are odd. However, not all odd numbers are prime.
{
    console.log("\n++ Prime or Not ++");
    var num = 0;

    if(num == 2 || num == 1){
        console.log(num + " is a Prime Number");
    }
    else if(num % 2 != 0){
        console.log(num + " is a Prime Number");
    }
    else{
        console.log(num + " is Not a Prime Number");
    }
}

//3. Write a program to check if a number is positive, negative, or zero.
{
    console.log("\n++ Check if a number is Positive, negative or Zero ++");
    var num = -56;

    if(num > 0){
        console.log(num + " Number is Positve");
    }
    else if(num < 0){
        console.log(num + " Number is Negative");
    }
    else{
        console.log(num + " number is Zero");
    }
}

//+++ Switch Statement +++
// The switch statement is used to perform different actions based on different conditions.
{
    console.log("\n\n++ Switch Statement ++");

    var day = "Friday";
    
    switch(day){
        case "Monday":
            console.log("it's work days guys!");
            break;
        
        case "Friday":
            console.log("it's Friday");
            break;
        
        case "Sunday":
            console.log("it's Sunday");
            break;
        
        default:
            console.log("Other Day");
    }
}
 
// Interview Questions
// 1. Area of shapes via switch
{
    console.log("\n ++ Area of Shapes ++");

    var areaOfShapes = "circle";
    var a = 5;
    var b = 10;
    var r = 2;

    switch(areaOfShapes){
        case "circle": 
        console.log("area of Circle: " + (3.1412 * (r*r)));
        break;

        case "square":
        console.log("area of Square: " + (a*a));
        break;

        case "rectangle":
        console.log("area of rectangle: " + (a * b));
        break;

        default:
        console.log("Wrong Choice");
    }

}

//+++ LOOPs +++
 // condition check in for & while loop
// condition check in do while loop


// ++ While Loop ++
// Display 1 to 10
{
    console.log("\n++ While Loop ++");

    var num = 1;

    while(num <= 10){
        console.log(num);
        num++;
    }
}

// Create table of 5
{
    console.log("\n++ Table Of 5 ++");
    
    var num = 5;
    var i = 1;

    while (i <= 10) {
        console.log("5 x " + i + " = " + (num*i));
        i++;
    }
}

// ++ For Loop ++
// Display 1 to 10
{
    console.log("\n++ For Loop ++");

    for(var num = 1; num <= 10; num++){
        console.log(num);
    }
}

// Infinite For Loop
//use case: Game Development:
// In game development, an infinite loop can be used to continuously update and render game frames until a specific condition (e.g., game over) is met.
// {
//     // infinit for loop
//     for (;;) {
//         // Update game logic and render frames
//         console.log("ram");
//       }
// }
// {
//     let t = 1;
// for(let f = 0; f < 10; t++){
//     console.log("ram");
// }
// }




// ++ Do While Loop ++
// Display 1 to 10
{
    console.log("\n++ Do While Loop ++");

    var num = 12;

    do{
        console.log(num);
        num++;
    }while(num <= 10);
}

//Validating User Input with Do while Loop.
// {
//     console.log("\nValidating User Input with a Do... While Loop");
    
//     let userInput;
//     let positiveNumber;

//     do{
//         userInput = prompt("Enter only a Positive Number");
//         positiveNumber = parseFloat(userInput);
//     }while(isNaN(positiveNumber) || positiveNumber < 0);

//     // Paste above code into console of browser
// }


// Practice of Loops

// calculate the sum of numbers from 1 to 10 using a for loop.
{
    let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
}

console.log("sum: " + sum);
}