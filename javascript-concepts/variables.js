// Can either be global scope, or local scope.
// This can also be
var x = 5;

const z = 2;

function foo(val) {
  let y = 2;

  for (let i = 0; i < 3; i++) {
    x = x + y;
  }

  // We can also redefine it
  var x = 99;
}

foo(x);

console.log(x);
// console.log(y);  // y is undefined because we are outside of its scope.
console.log(z);
