const jsonString = '{"name":"hello","age":27,"city":"London"}';

const parsedString = JSON.parse(jsonString);

console.log(parsedString);
console.log(parsedString.name);
console.log(parsedString.age);
console.log(parsedString.city);

parsedString.hobbies = ["cycling", "scuba"];

const newJsonString = JSON.stringify(parsedString);

console.log(newJsonString);

// const object = {
//     name: "hello",
//     age: 27,
//     city: "London",
// }

// const jsonString = JSON.stringify(object);

// console.log(jsonString);

