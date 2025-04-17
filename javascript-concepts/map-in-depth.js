
const nums = [1, 2, 3, 4, 5];

// you can take in 3 parameters.
const newArray = nums.map((x, index, array) => {
  console.log(`Current value: ${x}`);
  console.log(`Index: ${index}`);
  console.log(`Original array: ${array}`);
  
  return x * 2;
});

console.log(newArray); // [2, 4, 6, 8, 10]