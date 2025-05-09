// Since step1 requires a callback function, it can't directly use step2 as a parameter.
// We must use function().. as an anonymous function as something we pass in.

const step1 = function (callback) {
  console.log("Step 1 complete");
  setTimeout(callback, 1000);
};

const step2 = function (callback) {
  console.log("Step 2 complete");
  setTimeout(callback, 1000);
};

const step3 = function (callback) {
  console.log("Step 3 complete");
  setTimeout(callback, 1000);
};

const step4 = function (callback) {
  console.log("Step 4 complete");
  setTimeout(callback, 1000);
};

const step5 = function (callback) {
  console.log("Step 5 complete");
  setTimeout(callback, 1000);
};

// This is where callback hell begins
setTimeout(function () {
  console.log("Starting the process...");

  step1(function () {
    step2(function () {
      step3(function () {
        step4(function () {
          step5(function () {
            console.log("Process complete!");
          });
        });
      });
    });
  });
}, 3000);
