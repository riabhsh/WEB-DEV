// =============================
// == 04. == Time-Based Events
// =============================

// 1. setTimeout() 
function setTimeoutTest() {
    function tout(){
        console.log("timeOut Function run! after 2sec[2000]");
    }

    setTimeout(tout, 2000);
}
// 2. clearTimeout()
function clearTimeoutTest() {
    function tout(){
        console.log("timeOut Function run! after 2sec[2000]");
    }
    const clearTimeoutT = setTimeout(tout, 2000);
    clearTimeout(clearTimeoutT);
}
 
// 3. setInterval() -> it works on api like every sec you want new data
function setIntervalTest() {
    function Iout(x){
        console.log("repeacts after 2sec[2000ms]!",x);
    }
    setInterval(() => Iout(23), 2000);
}

// 4. clearInterval
function clearIntervalTest() {
    function Iout(x){
        console.log("repeacts after 2sec[2000ms]!",x);
    }
    const clearIntervalT = setInterval(() => Iout(23), 2000);
    clearInterval(clearIntervalT);
    
}

// setTimeoutTest();
// clearTimeoutTest();
// setIntervalTest();
// clearIntervalTest();

// // ! Write a JavaScript program that defines a function called repeatedFunction. This function should log the message "This function repeats every 1000 milliseconds (1 second)" to the console. Then, set up an interval using setInterval() to call repeatedFunction every 1000 milliseconds.  Additionally, after 5 seconds have elapsed, use setTimeout() to clear the interval previously set up. Make sure to log the message "Interval cleared after 5 seconds." when the interval is cleared.

function repeatedFunctionTest() {
function repeatedFunction(){
    console.log("This function repeats every 1000 milliseconds (1 second)");
}

const stopInterval = setInterval(() => repeatedFunction(), 1000);
setTimeout(() => {clearInterval(stopInterval)}, 5000);

}
// repeatedFunctionTest();


// CLOCK PROJECT 
function clock(){ 
    const clockStart =  setInterval(() => {const currentTime = new Date();
                                     const time = currentTime.toLocaleTimeString(); console.log(time)}, 1000);
    setTimeout(() => {clearInterval(clockStart)}, 10000);
}

// clock();