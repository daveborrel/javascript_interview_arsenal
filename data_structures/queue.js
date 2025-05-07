// Implementing a Queue using two stacks.

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(value) {
    this.stack1.push(value);
  }

  pop() {
    // ensure that any while loops that check if a stack is empty or not explicitly check its length.
    // if it checks this.stack1 by itself, it will be truthy.
    while (this.stack1.length > 0) {
      let value = this.stack1.pop();
      this.stack2.push(value);
    }

    const res = this.stack2.pop();

    while (this.stack2.length > 0) {
      let value = this.stack2.pop();
      this.stack1.push(value);
    }

    return res;
  }
}

const q = new Queue();
q.push(3);
q.push(5);
const val = q.pop();

console.log(val);
