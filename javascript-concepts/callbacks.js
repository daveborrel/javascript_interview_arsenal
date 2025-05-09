// We can pass functions as parameters

// Callbacks make sure that a function is not going to run before a task is completed.

const message = function () {
  console.log("This message is shown after 3 seconds");
};

// In this very small example, the message function is the callback function, because we wait for 3000ms to pass before calling it.
setTimeout(message, 3000);
