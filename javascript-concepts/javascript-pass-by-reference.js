function changeStuff(a, b, c) {
  a = a * 10;
  b.item = "changed";
  c = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

// this should remain 10 because a is a copy of num.
console.log(num);

// b is a copy of the reference to obj1. So this will indeed change the field.
console.log(obj1.item);

// c is a copy of the reference to obj2. So when we print out obj2 it won't change anything.
console.log(obj2.item);
