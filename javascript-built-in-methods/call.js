const person = {
    fullName: function () {
            return this.firstName + " " + this.lastName;
        }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Jane"
}

// Call is used here to pass a this into the function.

console.log( person.fullName.call(person1));
console.log( person.fullName.call(person2));

// You can also use call in the context of calling it with some arguments.

const obj = {
    name: "John"
};

let greeting = function(a, b) {
    return `${a} ${this.name}. ${b}`;
}


console.log( greeting.call(obj, "Hello", "How are you?"))