// Promises object represents an eventual completion of failure of an asynchronous event.

// In javaScript a promise will have three different states
// (1) Pending - the initial state
// (2) Resolved - completed promise
// (3) Rejected - failed Promise

// - https://www.joshwcomeau.com/javascript/promises/

function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Other things to do before completion of the promise
      console.log("Did something");
      // The fulfillment value of the promise
      resolve("https://example.com/");
    }, 200);
  });
}
