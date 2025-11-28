// TEST 
{
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Weather App></title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <!-- Main Container -->
//      <!-- Input field Search -->
//      <!-- Weather main data -->
//      <!-- Weather extra data -->
// <script src="index.js"></script>
// </body>
// </html>
}


{
// api key 
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// 31143f5f8a7b2e81fc86e1caa49a4980

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=31143f5f8a7b2e81fc86e1caa49a4980
}





// dATE
let dt = 1764252079;
const curDate = new Date(dt * 1000); // convert in seconds
console.log(curDate);

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);

const formattedDate = formatter.format(curDate);

console.log(formattedDate);
