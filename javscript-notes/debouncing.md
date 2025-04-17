# Debouncing

In both software and hardware debouncing occurs when a switch activates many more times than the initial amount.

For example, if switches on your remote weren't debounced properly, it would change 2,3,4 + channels instead of the one. This is due to the natural bounce of metal contacts when a switch is pressed.

In software, there are many instances when this would be useful.
- Submitting an order, ensuring that this doesn't happen twice.
- takes input from the search bar and has an autofill function.


```javascript
const debouncedFunc = debounce(originalFunc, 1000);
debouncedFunc("hi", 123); // <-- you call *this*
```

### Important Steps

1. debounce(func, wait) - returns a wrapped version of the original func
2. each time you call the debounced function, it might receive new arguments
3. those arguments are captured by ...args.
4. before setting the timer, we capture this so we don't lose it inside of the setTimeOut function
5. once the timeout expires, we call func.apply(context, args)

The reason we preserve the this in context, is for a situation like this.

```javascript
class Greeter {
  constructor(name) {
    this.name = name;
    this.sayHello = debounce(this.sayHello, 1000); // no bind()
  }

  sayHello(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
  }
}

// If we didn't preserve it, then there would be no method we could call because this is null or undefined.