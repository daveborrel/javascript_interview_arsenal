// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// map() creates a new instance of the array populated with the results of calling the function on every element.

const nums = [1,2,3,4,5]

const newArray = nums.map((x) => x * 2)

console.log(newArray)

// For each will just execute the function on each element.

nums.forEach((element) => console.log(element))
