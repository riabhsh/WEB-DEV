// add data in locacal storage 
localStorage.setItem("ram ram", "adding data");

// get data in local storage
localStorage.getItem("ram ram");

// remove data from local storage
localStorage.removeItem("ram ram");

//todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringify:

//* JSON.stringify: Converts a JavaScript object into a JSON string.
// Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
// const data = { name: "Vinod", age: 30, city: "pune" };
// const jsonString = JSON.stringify(data);
// console.log(jsonString);
// Output: '{"name":"Vinod","age":30,"city":"pune"}'

//* JSON.parse: Converts a JSON string into a JavaScript object.
// Useful when you receive JSON data from a server or read it from a file, and you want to work with it as a JavaScript object.


const data = { name: "Vinod", age: 30, city: "pune" };
const jsonString = JSON.stringify(data);
console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log(parsedData);