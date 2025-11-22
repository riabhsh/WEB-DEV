{
    //* ==========================================
//*    ECMAScript Features (2020) / ES11
//* =========================================

//? List of new useful features added in ES8  👇
// BigInt
// Nullish Coalescing Operator ??
// Optional Chaining Operator ?.
// promise.allSettled

//* ===================
//*  BigInt
//* ================
//? BigInt: BigInt in JavaScript is a data type used to represent and perform operations on large integers that exceed the limits of regular numbers.

//? Creating BigInts:
//? - Using the `n` suffix:

// Using the BigInt() constructor:
// const anotherLargeNumber = BigInt("123456789012345678901234567890");
// console.log(anotherLargeNumber);
// console.log(typeof anotherLargeNumber);

// let maxNumber = Number.MAX_SAFE_INTEGER;
// maxNumber = BigInt(maxNumber);
// let num = maxNumber + 10n;
// console.log(num);

//* =======================================
//*   
//* ===================================
//? In JavaScript, the nullish coalescing operator (??) is a logical operator that provides a concise way to handle nullish (null or undefined) values. It returns its right-hand operand when its left-hand operand is null or undefined, otherwise, it returns the left-hand operand.

// let favNum = 0; // falsy
// // userFavNum = favNum || 10;
// userFavNum = favNum ?? 10;
// console.log(userFavNum);

//* =======================================
//*  Optional Chaining Operator (?.)
//* ===================================
//? It provides a concise way to access properties of an object without worrying about the existence of intermediate properties. It's particularly useful when working with nested objects or accessing properties of objects that may be null or undefined.

// const person = {
//   name: "John",
//   address: {
//     city: 0,
//     zipCode: 12345,
//   },
// };

//? Accessing nested properties without optional chaining
// const city = person.address;
// const city = person.address ? person.address.city : "city is not present";
// console.log(city);

//? with optional chaining
// const city = person.address?.city ?? "city is not present";
// console.log(city);
//? One more example
// The optional chaining operator can be chained multiple times to access deeply nested properties:

// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//     zipCode: 12345,
//     coordinates: {
//       latitude: 40.7128,
//       longitude: -74.006,
//     },
//   },
// };

// // Accessing deeply nested properties with optional chaining
// const latitude = person.address?.coordinates?.latitude ?? "not present";
// console.log(latitude);

//* =======================================
//*  Promise.allSettled()
//* ===================================
//? We will cover later in our Promises section part of the video and you gonna love that part.

}

{
// 1. BigInt
// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);
// console.log(maxNumber + 9); //not correct

// const anotherLargeNumber = BigInt("2121515181545616512185165151206515156165165156120651065151561");
// console.log(anotherLargeNumber * anotherLargeNumber);


// 2. Nullish Coalescing Operator ?? [null and undefined are consider false here only]
// let favNum = 0;
// let userFavNum = favNum || 10;
// console.log(userFavNum);

// let userFavNum1 = favNum ?? 10; //only null and undefined 
// console.log(userFavNum1);

// 3. Optional Chaining Operator ?.
// const person = {
//     name: "rishabh",
//     address: {
//         city: 0,
//         zipCode: 12345,
//         location: {
//             longitude: 565626,
//             lattitude: 454545,
//         },
//     },
// };

// const cityLongitude = person.address.location.longitude;
// console.log(cityLongitude);
// const cityLatitude = person.address?.location?.lattitude ?? "no info about latitude";
// console.log(cityLatitude);

// 4. promise.allSettled
// soon 
}