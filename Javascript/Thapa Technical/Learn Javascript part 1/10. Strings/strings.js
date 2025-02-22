// for string to array -> split(",");
// for array to string -> join();

//* String Properties:
// {
//     let naam = "alan walker";
//     console.log(naam);
//     console.log(naam.length);
// }

//* Escape Character
// {
//     let text = " my name is 'alan walaker' & I'm a \"Full stack dev\" ";
//     console.log(text);
// }

//2. String Search Methods
//a. indexOf();
// {
//     // syntax
//     // indexOf(searchString)
//     // indexOf(searchString, position)

//     let naam = "alan walker"
//     console.log(naam.indexOf("an"));
// }

// convert string to array
// {
//     let word = "hello rishabh";
//     let stringArr = Array.from(word);
//     console.log(word);
//     console.log(stringArr);
//     console.log(stringArr.indexOf('h'));

//     //wap with map to show the array element along side with there index via map

//     let strmap = stringArr.map((curElem, index, strArr) => (`${curElem} - ${index}`));

//     console.log(strmap);
// }

//b. lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified text in a string;
//  {
// //     // index of the last occurrence of a specified text in a string:
// //     // syntax
// //     // lastIndexOf(searchString)
// //     // lastIndexOf(searchString, position) 


// //     let text = "Javascript full form of js is Javascript";
// //     console.log(text);
// //     console.log(text.lastIndexOf('Javascript',10));
// }

//c. search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.
//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value
// {
//     let text = "Hello Javascript, welcome to our world best Javascript course";
//     let result = text.search(/javaScript/i);
//     console.log(result);
// }

//d.  match() : Returns an array of the matched values or null if no match is found.
// behind the scenes match() converts normal expression to regular expression..
// {
//     let text = "Hello JavaScript, welcome to our world best JavaScript course";
//     let result1 = text.match("Javascript");
//     let result2 = text.match(/JavaScript/);
//     let result3 = text.match(/Javascript/gi);

//     console.log(result1);
//     console.log(result2);
//     console.log(result3);
    
//     //todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
//     // let result = text.match(/Javascript/gi);

//     // console.log(result);
// }

// matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
//  {
// //     let text = "Hello JavaScript, welcome to our world best JavaScript course";
// //     let matchResult1 = text.matchAll("javascript");
// //     let matchResult2 = text.matchAll("JavaScript");
// //     //here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

// //     console.log(matchResult1);
// //     console.log(matchResult2);
// //     // console.log(...matchResult2);

// //     // for(let item of matchResult2){
// //     //     console.log(item);
// //     // }

// //     // for (let index of matchResult2) {
// //     //   console.log(index.index);
// //     // }

// //     // for (let { index } of matchResult2) {
// //     //   console.log(index);
// //     // }
//  }


// includes(): Returns true if the string contains the specified value, and false otherwise.
// {
//     let text = "Hello JavaScript, welcome to our world best JavaScript course";
//     // let includeResult = text.includes(/java/i);
//     let includeResult = text.includes("J");
//     console.log(includeResult);
// }
// Note: includes() is case sensitive. includes() is an ES6 feature.

// startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// {
//     let text = "Hello JavaScript, welcome to our world best JavaScript course";
//     // let result = text.startsWith("welcome");
//     // let result = text.startsWith("Hello");
//     // console.log(result);

//     //* start position for the search can be specified
//     // let result = text.startsWith("welcome", 18);
//     // let result = text.startsWith("welcome", 17);
//     // console.log(result);
// }

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
// {
//     // let text = "Hello JavaScript, welcome to our world best JavaScript course";
//     // let result = text.endsWith("welcome");
//     // let result = text.endsWith("course");
//     // console.log(result);
// }


//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
    // syntax
    // slice(start, end);

// {
//     //JavaScript counts positions from zero.
//     //First position is 0. Second position is 1.

//     // let text = "Hello JavaScript, welcome to our world best JavaScript course";
//     // // let result = text.slice(6);
//     // let result = text.slice(6, 15);
//     // console.log(result);
// }


// subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// let result = text.substring(12,20);
// let result = text.substring(-200);
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// let result = text.slice(-5);
// console.log(result);

//! similarities
//In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.


//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-5);
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

// String.fromCharCode() : it returns the code of the character
// let result = String.fromCharCode(65);
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
// ? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/ig, "vinod");
// console.log(replacedString);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).


//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana";
// let strArr = str.split(",").reverse().join();
// let strArr = str.split("");
// let strArr = str.split();
// console.log(strArr);

//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowels in a string?

// const countVowels = (str) => {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of str) {
//     console.log(char);
//     // console.log(str.includes(char));
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
//   console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
// console.log(countVowels("Hello a i o u world"));

//! 3: Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));

//! 4: Write a JavaScript function to check if the given string is Pangram or not?

// const pangramChecker = (str) => {
//   let inputArr = str.toLowerCase().split("");
//   // console.log(inputArr);
//   // // console.log("z".charCodeAt());
//   const values = inputArr.filter(
//     (curElem) =>
//       curElem.charCodeAt() >= "a".charCodeAt() &&
//       curElem.charCodeAt() <= "z".charCodeAt()
//   );
//   // console.log(values);

//   return new Set(values).size === 26;

//   // return [...new Set(values)].length === 26;
// };

// console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));


