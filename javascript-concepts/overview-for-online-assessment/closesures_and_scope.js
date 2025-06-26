// SCOPE
// If we use var, then the blocks we use don't define any scope at all
// the keyword var will define the scope in this example.
if (Math.random() > 0.5) {
  var x = 1;
} else {
  var x = 2;
}
console.log(x);

// In this example, if we comment out the above code, then it should return an error
// because the scope of the x in both cases are lost
if (Math.random() > 0.5) {
  const x = 1;
} else {
  const x = 2;
}
console.log(x);

// CLOSURES
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
