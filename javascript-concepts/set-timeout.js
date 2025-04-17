function helloWorld() {
    console.log("Hello World!");
}

// This function takes in a function and a timeout value
let timeoutID;
timeoutID = setTimeout(helloWorld, 100);

// setTimeout will return unique id to that timer.
console.log("timeout: " + timeoutID)

// You can use clearTimeout(timeoutID) to cancel that timer.