const obj = {
    name: "John"
};

let greeting = function(a, b) {
    return `${a} ${this.name}. ${b}`;
}

// In contrast to the call method, apply will take these arguments in seperately

console.log( greeting.apply(obj, ["Hello", "How are you?"]))

/**
 * Lets say we wanted to find the maximum value in an array.
 * But javaScript doesn't normally have a max value.
 */

const numbers = [1,2,3,4,5]

// We can use apply() here to call the function and pass in each element of the array as a parameter.
console.log( Math.max.apply(null, numbers));