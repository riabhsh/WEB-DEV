console.log("\n\n+++ Examples Of Data Types +++")
//1. Numbers
var num = 56;
console.log("Number: " + num);

//2. String
var myName = "Rishabh";
console.log("String: " + myName);

// 3. Boolean
var isRaining = false;
console.log("Boolean: " + isRaining);

// 4. Undefined (yet to be defined)
var rishabh;
console.log("Undefined: " + rishabh);

// 5. Null (absence of a value)
var badMemories = null;
console.log("null: " + badMemories);

// 6. BigInt (represents integer of arbritrary precision)
var bigNumber = 545155165156151561518156481516515612165121651215612515154n;
console.log("BigInt: " + bigNumber)

// 7. Symbols (represents a unique and immutable data types, often used to create unique identifiers)
var mySymbol = Symbol("Description");
console.log(mySymbol);

// End
console.log("\n")


console.log("+++ Examples typeof for finding the data type +++");
console.log("Number: " + typeof(num));
console.log("String: " + typeof(myName));
console.log("Boolean: " + typeof(isRaining));
console.log("Undefined: " + typeof(rishabh));
console.log("null: " + typeof(badMemories) + " (its a bug!)");
console.log("BigInt: " + typeof(bigNumber));
console.log(typeof(mySymbol));

// End
console.log("\n")

// Convert string to num and num to string
console.log("+++ convert string to a number +++");
var str = "46";
console.log(typeof(+str));
console.log(typeof(Number(str)));
console.log(typeof(str));

console.log("+++ convert string to a number +++");
var num = 46;
console.log(typeof("" + num));
console.log(typeof(String(num)));
console.log(typeof(num));

// End
console.log("\n")

// Examples of Truthy and Falsy
console.log("+++ Examples of Truthy and Falsy +++");

var sunday = true;

if(sunday){
    console.log("Go to Movie");
}
else{
    console.log("padho le bhai!");
}

sunday = false;

if(sunday){
    console.log("Go to Movie");
}
else{
    console.log("padh le bhai!");
}

// End
console.log("\n")

// Examples of parseInt, parseFloat and NaN

//parseInt, parseFloat
console.log("+++ Examples of parseInt and parseFloat +++");
console.log("545.15 parseInt converts " + parseInt("545.15"));
console.log("5454.54 parseFloat Converts " + parseFloat("5454.54"));

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
console.log(parseInt("&123"));
console.log(parseInt("-123"));
console.log(parseInt("xyz"));

//NaN == NaN is always false because both can be different thats the reason.
if(NaN == NaN){
    console.log(true);
}
else{
    console.log("NaN is not equal to NaN that's why -> " + false);
}

// End
console.log("\n")




