/**
 * reduce() is normally used to turn an array into a single value.
 * we'll usually do an operation with the current element, along with he previous value it was calculated with.
 * 
 * Contains two parameters as input
 *  (1) callbackFn - called on every element of the array
 *  (2) initialValue - this is what we set the accumulator to
 */

const array = [1,2,3,4,5]

const initialValue = 0;
const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
)

console.log(sumWithInitial)