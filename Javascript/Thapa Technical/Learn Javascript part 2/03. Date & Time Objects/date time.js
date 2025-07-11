// Date and Time

console.log("+1. Creating a Date Object +")
{
// + DATE CONSTRUCTOR +
//? Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date object using the new keyword. It can be done in several ways:
//todo There are 9 ways to create a new date object:

// there are 9 ways to create date in JAVASCRIPT
// new Date()
// new Date(dateString)
// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)
// new Date(milliseconds)
const currentDate = new Date();
console.log(currentDate);

// String
const dateString = "2025-07-03T07:18:50.299Z";
const currentDate2 = new Date(dateString);
console.log(currentDate2+"\n");

// year and month
// in date() month starts with 0
// for eg new Date(2025,0,1) output will be 2025-jan-01;
const currentDate3 = new Date(2025,0);
console.log(currentDate3 + "");

// year month and day
const currentDate4 = new Date(2025,0,1);
console.log(currentDate4 + "");


// year month day and hours
const currentDate5 = new Date(2025,0,1,12);
console.log(currentDate5 +"");

// year month day hours and minutes
const currentDate6 = new Date(2025,0,1,12,59);
console.log(currentDate6+"");

// year month day hours minutes and seconds
const currentDate7 = new Date(2025,0,1,12,59,58);
console.log(currentDate7+"\n" );

// year month day hours minutes seconds and ms
const currentDate8 = new Date(2025,0,1,12,59,58,620);
console.log(currentDate8+"\n");

// milliseconds
// Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
const currentDate9 = new Date().getTime();
console.log(currentDate9 +"");

const dateFromMilliseconds = new Date(currentDate);
console.log(dateFromMilliseconds + "");

//todo Note:
//? 1: JavaScript counts months from 0 to 11:
// ?January = 0, December = 11
}

// --------

console.log("\n+2. Date String Format: +")
{
// +
// Date String Format:
// Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
// +

// new Date(date string) creates a date object from a date string
const date1 = new Date("2024-01-05"); // Year-Month-Day
const date2 = new Date("January 5, 2024"); // Month Day, Year

console.log(date1);
console.log(date2);

}

// --------

console.log("\n+3. JavaScript Get Date Methods / Getting Components: +");
{

// * ==================================================
//* 3. JavaScript Get Date Methods / Getting Components:
//* ===================================================

// You can get various components of a date using the methods of the Date object:
const currentDate = new Date();
console.log(currentDate);
// //? In a date object, the time is static.

const year = currentDate.getFullYear();
console.log(year)

const month = currentDate.getMonth(); // 0-based index
console.log(month)

const date = currentDate.getDate();
console.log(date)

const day = currentDate.getDay();
console.log(day);
// In JavaScript, the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
}

// --------

console.log("\n+4. JavaScript Set Date Methods / Setting Components: +");
{
const date = new Date();

console.log(date);

// ? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.
date.setFullYear(2026);
console.log(date);// Date object with the year set to 2026

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date according to local time.
date.setMonth(7); // June (months are zero-based)
console.log(date); // Date object with the month set to June

// ? setDate(dayValue): Sets the day of the month for a specified date according to local time.
date.setDate(15);
console.log(date); // Date object with the day of the month set to 15
}

// --------

console.log("\n+5. JavaScript Get Time Methods / Setting Components: +");
{
const currentTime = new Date();
console.log(Date());

const hours = currentTime.getHours();
console.log(hours);
const minutes = currentTime.getMinutes();
console.log(minutes);
const seconds = currentTime.getSeconds();
console.log(seconds);
const time = currentTime.getTime();
console.log(time); //millisecond fromm jan 1st 1970
}

// --------

console.log("\n+6. JavaScript Set Time Methods / Setting Components: +");
{
const date = new Date();
console.log(Date());

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Sets the hours for a specified date according to local time.
date.setHours(10);
console.log(date + ""); // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Sets the minutes for a specified date according to local time.
date.setMinutes(30);
console.log(date + ""); // Date object with the minutes set to 30

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.
date.setSeconds(45);
console.log(date + ""); // Date object with the seconds set to 45

//? setMilliseconds(millisecondValue): Sets the milliseconds for a specified date according to local time.
const date1 = new Date();

date.setMilliseconds(500);
console.log(date1 + ""); // Date object with the milliseconds set to 500

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
const date2 = new Date();
date2.setTime(0);
console.log(date2 + ""); // Date object representing the specified time
}

console.log("\n++ A few useful methods of the Date object in JavaScript ++");
{
//? 1: toLocaleString(): Returns a string representing the date and time portion of a Date object using the current locale's conventions.
const date = new Date();
const localString = date.toLocaleString();
console.log(date + "");
console.log(localString); // Example output: "2/19/2024, 4:30:00 PM" (depending on the locale)

//? 2: toLocaleDateString(): Returns a string representing the date portion of a Date object using the current locale's conventions.
const date2 = new Date();
const localDateString = date2.toLocaleDateString();
console.log(localDateString); // Example output: "2/19/2024" (depending on the locale)

//? 3: toLocaleTimeString(): Returns a string representing the time portion of a Date object using the current locale's conventions.
const date3 = new Date();
const localTimeString = date3.toLocaleTimeString();
console.log(localTimeString); // Example output: "4:30:00 PM" (depending on the locale)

//? 5: parse(): Parses a string representation of a date and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
const dateString = "2024-02-19T16:30:00Z";
const parsedDate = Date.parse(dateString);
console.log(parsedDate); // Example output: 1703254200000 (milliseconds)
}

console.log("\n ++ Bonus ++");
{
let newDate = new Date();
console.log(Date.now());
console.log(newDate.getTime());

// ? Date.now() is a static method of the Date object.
// ? Use Date.now() if you want the timestamp right this second.
// ? It returns the current timestamp (number of milliseconds) representing the current moment.
// ? Use new Date().getTime() if you have an existing Date object from elsewhere and want its timestamp.
}

console.log("+++ INTERVIEW QUESTIONS +++");

//! 1: Write a function to add a specified number of days to a given date.
{
    // // Example usage:

    function addDaysToDate(date, addDate){
        const finalDate = date.setDate(date.getDate() + addDate);
        return new Date(finalDate);
    }

    const date = new Date("2024-02-29");
    console.log(date.toLocaleDateString());
    const newDate = addDaysToDate(date, 7);
    console.log(newDate);
    console.log(newDate.toLocaleDateString());
}

//! 2: Write a function to calculate the difference in days between two given dates.

// // Example usage:
{

    const getDaysDifference = (date1, date2) => {
        const oneDay = 24*60*60*1000;//milliseconds in a day
        const diff = Math.abs(date2 - date1);
        return Math.round(diff/oneDay);
    }

    console.log("\n\n calculate the difference in days between two given dates.");
    const date1 = new Date("2024-02-19");
    const date2 = new Date("2024-09-21");
    console.log(date1.toLocaleDateString());
    console.log(date2.toLocaleDateString());

    console.log(getDaysDifference(date1, date2)); // Output: 11 (difference in days)
}

3:27:05