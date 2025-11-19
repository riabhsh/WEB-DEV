// +++ 1. Creating Objects: +++
// {
// const personObj = {
// name: "rishu",
// age: 25,
// isStudent: true,
// greet: function () {
//     console.log("om namah shivay!");
// },
// };

// console.log(personObj);
// }

// +++ 2. Accessing Properties: +++
// {
// const personObj = {
// name: "rishu",
// age: 25,
// isStudent: true,
// greet: function () {
//     console.log("om namah shivay!");
// },
// };

// console.log(personObj.name);
// console.log(personObj.age);
// console.log(personObj[`greet`]);
// console.log(personObj[`name`]);


// }

// +++ 3. Adding and Modifying Properties: +++
// {
// const personObj = {
// name: "rishu",
// age: 25,
// isStudent: true,
// greet: function () {
//     console.log("om namah shivay!");
// },
// };

// console.log(personObj.name);
// console.log(personObj.age);
// console.log(personObj[`greet`]);
// console.log(personObj[`name`]);

// personObj.job = "web dev";
// personObj["isStudent"] = false;
// console.log(personObj.job + ` \n` + personObj.isStudent);


// }

// +++ 4. Methods: +++
// {
// const personObj = {
// name: "rishu",
// age: 25,
// isStudent: true,
// greet: function () {
//     console.log("om namah shivay!");
// },
// };

// personObj.greet();
// }

// +++ 5. We can add dynamic keys in an object +++
// useCase: when we want to get the user name and value in react
// {
//     let identityNo = "studentNo" //-> here you change you identity number dyncamically

//     const studObj = {
//         [identityNo]: 48484,
//         class: 10,
//         passed: true,
//     };

//     console.log(`your ${identityNo} is ${studObj[identityNo]} and you class is ${studObj["class"]}`);
// }

// +++ 6. Data Modeling: +++
// {
//     let car = {
//         brand: "Toyota",
//         model: "Camry",
//         year: 2022,
//         start: function () {
//             console.log("Engine started!");
//             },
//     };
// }

// +++ 7. pass by Value and Pass by Reference +++
// {
//     // pass by value is createing the copy of the orignal
//     // pass by reference is modifying the orignal

//     // example of passByValue[copy of the orginal]
//     let x = 10;
//     const change = (x) => (x = 100);
    

//     console.log(`+ pass by value + \n`, change());
//     console.log(x);

//     // example of passByReference[modification of the origial value]
//     //? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

//    {
//      let obj = {name: "rishu", age: 25, work: "web dev",};
//     let obj1 = obj;

//     obj1.name = "tyson";
//     obj1.age = 50;

//     console.log("\n++pass by reference:++\n", obj1);
//     console.log(obj);

//    }

//     // if you want to avoid pass by reference the we do
//     // Object.assign() and spread operator(...):

//     {
//         let obj = {name: "rishu", age: 25, work: "web dev",};
//         let obj1 = Object.assign({}, obj);

//         obj1.name = "tyson";
//         obj1.age = 50;

//         console.log("\n\n++ pass by reference[bypass by using Object.asign() method] ++:\n", obj1);
//         console.log(obj);

//     }
// }

// +++ 8. comparisson by Reference +++
// {
// // Two objects are equal only if they refer to the same object.
// // Independent objects (even if they look alike) are not equal:

// const obj1 = { name: "vinod" };
// const obj2 = { name: "vinod" };
// const obj3 = obj1;

// const isEqual = obj1 == obj2 ? true : false;
// // const isEqual = obj1 == obj3 ? true : false;
// console.log(isEqual);
// }

// +++ 9. JSON (JavaScript Object Notation): +++
// {
//     let employe = {
//         id: 123007,
//         name: 'rishu',
//         role: 'dev',
//         work: function code() {
//             return console.log(`id: ${employe.id}\nname: ${employe.name} does code!`);
//         }

//     }
//     console.log(`OBJECT: `, employe);
//     let jsonData = JSON.stringify(employe);
//     console.log(`JSON data: `, jsonData);

//     let jsonParse = JSON.parse(jsonData);
//     console.log(`JSON Object: `, jsonParse);

// }

// +++ 10. "this" Object +++
// {
    
// //? In JavaScript, the this keyword refers to an object.

// // Which object depends on how this is being invoked (used or called).

// // The this keyword refers to different objects depending on how it is used:

// // In an object method, this refers to the object.
// // Alone, this refers to the global object.
// // In a function, this refers to the global object.
// // In a function, in strict mode, this is undefined.
// // In an event, this refers to the element that received the event.
// // Methods like call(), apply(), and bind() can refer this to any object.

// // Note
// // this is not a variable. It is a keyword. You cannot change the value of this.
// // ("use strict");

// // x = 5;
// // console.log(x);

// // function callme() {
// //   console.log(this);
// // }

// // callme(); // try to run on browser console

// //todo  Let's check the this keyword values in an object methods

// //* Regular Function Expression:
// // const obj = {
// //   name: "Kodyfier",
// //   greet: function () {
// //     console.log(this);
// //   },
// // };

// // obj.greet();

// //* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
// // const obj = {
// //   name: "Kodyfier",
// //   greet() {
// //     console.log(this);
// //   },
// // };

// // obj.greet();

// //* Fat Arrow Function
// // const obj = {
// //   name: "thapa technical",
// //   greet: () => {
// //     console.log(this);
// //   },
// // };

// // obj.greet();
// // }

// }

// +++ 11. Objects Useful Methods +++
// {
    
// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//   image: "image link will be added during projects",
// };

// //? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

// // let keys = Object.keys(product);
// // console.log(keys);

// //? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.
// // let values = Object.values(product);
// // console.log(values);

// //? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.
// // let entries = Object.entries(product);
// // console.log(entries);

// //? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
// // console.log(product.hasOwnProperty("name")); // Output: true
// // console.log(product.hasOwnProperty("isStudent")); // Output: false

// //? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// // const target = { a: 1, b: 5 };
// // const source = { b: 3, c: 4 };
// // const mergedObject = Object.assign(target, source);
// // console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }

// //? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
// // Object.freeze(product);
// // product.id = "5656";
// // console.log(product);
// }

// =======================
//* 1. Interview Question - Objects
// {
//     //! 1: What will be the output?

// // const target = { a: 1, b: 2 };
// // const source = { b: 3, c: 4 };

// // const mergedObject = Object.assign({}, target, source);
// // console.log(mergedObject);
// }

// 2. Interview Question - Object Manipulation
// {
// // Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// function addSubject(student, key, value) {
//     if(!student.grades){
//         student.grades = {};
//     }
//    return (student.grades[key] = value);
// }


// addSubject(student, "computer", 90);
// console.log(student);
// }

// 3. Interview Question - Object Comparison:
// {
// //! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// }

// Problem 1: Write a function that compares two objects to determine if they have the same properties and values.

// Problem 2: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.