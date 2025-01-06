//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

const person = ['ram', 'haari', 'sita', 'gita'];
console.log(`Array Person: ${person}`);
console.log(`index 0 of Array Person is: ${person[0]}`);
console.log(`last index of Array Person is: ${person[person.length-1]}`);
console.log(`Array Person's length is: ${person.length}`);

console.log(`last index of Array Person is via .at(-1) is: ${person.at(-1)}`);

const arr = '';
console.log(typeof(arr));

const arr2 = [];
console.log(typeof(arr2));



//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

// Using Array constructor
let fruits = new Array('apple', 'mango', 'banana');
console.log(fruits);

// Using Array Literals
let vegies = ['patato', 'bhindi', 'kaddu'];
console.log(vegies);

//* ======================================
//*  Accessing Elements:
//* =====================================

// Accessing Elements:  Array elements are accessed using zero-based indices.
console.log(fruits[0]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//Modifying Elements: You can modify array elements by assigning new values to specific indices.
fruits[0] = 'tomato';
console.log(fruits[0]);
console.log(fruits);

// we can add different data types of elements in array in js but in the time of accessing via it can
// give us problems.

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ========================================
//Array Traversal / Iterating Over Arrays

//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
// for-of gives value.
let fruitss = ["apple", "orange", "mango", "grapes"]; 
console.log(fruitss);
for(let item of fruitss){
    console.log(item);
}
console.log("\n")
for(let item = 0; item < fruitss.length; item++){
    console.log(fruitss[item]);
}

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
// for-in gives index.
for(let item in fruitss){
    console.log(item);
}


// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// it dosnt return a value
// performs an action on each element
// ArrayName.forEach(() => {});

fruitss.forEach((curElem, index, arr) => {
    console.log(`${curElem} ${index}`);
});

// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the orignal array.
// creats a new array with transformed elements 

// it returns a value... 
// it dosnt change/mutate the original array. 

fruits.map((curElem, index, arr) => {
    console.log(`${curElem} ${index}`);
});


//todo Practice Time
// write a program to Multiply each element with 2
const numbers = [1, 2, 3, 4, 5];

// for...of
for(let item of numbers){
    console.log(`${item*2}`);
}

// for...in
for(let item in numbers){
    console.log(numbers[item]*2);
}

// forEach -  Performs an action on each element
numbers.forEach((curElem, index, arr) => {
    console.log(`2 x ${curElem} = ${curElem*2}`);
});

// map -  Creates a new array with transformed elements
console.log(numbers);
let mul = numbers.map((curELemntindex, arr) => {
        return curELemntindex * 2;
});
console.log(mul);


// forEach vs map {KEY DIFFERENCES}
// no return / returns a value
// no return, no chaining / returns a value so yes chaining
// you dont need a new array but you want to modify and display the array./
// when you want a new array based on the transformation of previous array.

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

let bikes = ["ktm", "pulsar", "yamaha", "baneli", "tvs"];

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.
console.log(bikes.push("honda"));
console.log(bikes);
//? 2: pop(): Method that removes the last element from an array.
console.log(bikes.pop());
console.log(bikes);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
console.log(bikes.unshift("honda", "tesla"));
console.log(bikes);
//? 4: shift(): Method that removes the first element from an array.
console.log(bikes.shift());
console.log(bikes);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
// console.log(bikes.splice(0));
console.log(bikes.splice(2,2,"bmw","mercedes","rolls royce"));
console.log(bikes);

//! what if you want to add the element at the end
// console.log(bikes.splice(-1, 0, "rishabh"));
// console.log(bikes);
console.log(bikes.splice(bikes.length, 0, "rishabh"));
console.log(bikes);

//todo Challenge time
const months = ["Jan", "march", "April", "June", "July"];
// 1: Add Dec at the end of an array?
console.log(months);
months.push("dec");
console.log(months);
// 2: What is the return value of splice method?
console.log(months.splice());
// 3: Update march to March (update)?
months.splice(1,1,"March");
console.log(months);
// 4: Delete June from an array?
console.log(months.splice(3,1));
console.log(months);


//* =========================================
//*  Searching in an Array
//* =========================================
//?Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
const numm = [11, 22, 36, 54, 27 , 54, 86, 27, 68, 91];

//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// note: duplicate mein sirf pehle wale ka index bhejta hai wo thats the best used case always remember!
// syntax
// indexOf(searchElement);
console.log(numm.indexOf(27));
// indexOf(searchElement, fromIndex);
console.log(numm.indexOf(54,7));

//?2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// suppose agar ek number repeat ho raha hai to wo sabse last wale number ka index return karega and indexOf pehle wale ka
console.log(numm.lastIndexOf(27));

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
console.log(numm.includes(27));
// includes(searchElement, fromIndex)
console.log(numm.includes(54,7));
// filter ke time mein bahut kaam aata hai includes...

//todo Challenge time
const mahine = ["Jan", "march", "April", "June", "July"];
// 1: Add Dec at the end of an array?
console.log(mahine);
mahine.splice(mahine.length,0,"dec");
console.log(mahine);
// 2: What is the return value of splice method?
console.log(mahine.splice()); //return an empty array
// 3: Update march to March (update)?
mahine.splice(1,1,"March");
console.log(mahine);

// 4: Delete June from an array?
const indexToDelete = mahine.indexOf("June")
console.log(mahine.splice(indexToDelete,1));
console.log(mahine);


//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
const gintiya = [1, 2, 1, 4, 7, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// only for the first occurace
let result = gintiya.find((curElem) => {
    return curElem > 6;
});

console.log(result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
let mul5 = gintiya.map((curElem) => {return curElem*5});
console.log(mul5);
let resultIndex = mul5.findIndex((curElem) => {
    return  curElem > 12;
});

console.log(resultIndex);

//* 3: filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)
let resultFilter = mul5.filter((curElem) => {
    return  curElem > 12;
});
console.log(resultFilter);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
const eCom = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
let value = 6; 
let addToCart = eCom.filter((curElem) => { return curElem != value});
console.log(eCom);
console.log(addToCart);

// Practice time
// !Example 2: Filtering Products by Price
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Tablet", price: 300 },
  { name: "Smartwatch", price: 150 },
];
// Filter products with a price less than or equal to 500

const filterProduct = products.filter((curElem) => {
   return curElem.price <= 500;
});

console.log(filterProduct);


// //! Filter unique values
const sankhya = [11, 22, 33, 44, 66, 55, 66, 77, 88, 99];
let unique = sankhya.filter((curElem, index, arr) => {
    // console.log(arr[index]);
   return arr.indexOf(curElem) === index;
});// indexOf() sirf first index return karta hai..

console.log(unique);

// set method (it removes the duplicate values)
const sankhya2 = [11, 22, 33, 44, 66, 55, 66, 77, 88, 99];
console.log(new Set(sankhya2));
console.log([... new Set(sankhya2)]); // ... is spread operator

//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

const fal = ["Banana", "Apple", "Orange", "Mango"];
console.log(fal);
fal.sort();
console.log(fal);

const serialNumber = [6,4,5,9,10,14,20,60,4,8,5,6,4,7,];
console.log(serialNumber);
serialNumber.sort();
console.log(serialNumber);

// this compare method actually sorts number properly more then 1 digit because 
// by default sort() sorts elements as strings.
const orderNumber = serialNumber.sort((a,b) => {
    if(a>b) return 1;
    if(b>a) return -1;
});

console.log(orderNumber);

// =======
// Interview Questions Array Filter
// =======

// Original array of numbers
const sankhya3 = [1, 2, 3, 4, 5];

//1. Using map to square each number and create a new array

let square = sankhya3.map((curElem) => curElem*curElem);
console.log(square);

// 2. using the map method, write a function that takes array of strings and returns a new array where each string is capatalized.
const names = ["ram", "shyam", "arjun", "lakhan"];
const capNames = names.map((curElem) => {
    return curElem.toUpperCase();
});
console.log(capNames);

// 3. using the map method, write a function that takes array of numbers and returns and a new array where each number is squared, but only if its an even.

// let evenSquare = sankhya3.map((curElem) => {if(curElem % 2 === 0){return curElem*curElem;}}).filter((curElem) => curElem != undefined);
// 2nd method
let evenSquare = sankhya3
.map((curElem) => (curElem % 2 === 0 ? curElem*curElem : undefined))
.filter((curElem) => curElem != undefined);

console.log(evenSquare);

// 4 using the map method, write a function that takes array of names and returns a new array where each name is prefixed with "Mr. "

let preNames = names.map((curElem) => (`Mr. ${curElem}`));
console.log(preNames);

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// jaise aapko ecommerce website mein jab final total/average nikalte hai average nikalte hai Add to Cart products ka tab reduce lagta hai

// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   Your logic here
//   Return the updated accumulator value
// }, initialValue);

// =======
// Interview Questions Array Reduce
// ======= 

// write a javascript function that Calculates the total price of items in a shopping cart. the function should take an array of item prices as imput and return the total price.

// !Example 2: Filtering Products by Price
const shoppingCart = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 300 },
    { name: "Smartwatch", price: 150 },
  ];
  // Filter products with a price less than or equal to 500
  
  let initialValue = 0;
  const totalPrice = shoppingCart.reduce((accumulator, curElem,) => {
       return accumulator + curElem.price;
  }, initialValue);
  
  console.log(shoppingCart);
  console.log(`total price: ${totalPrice}`);