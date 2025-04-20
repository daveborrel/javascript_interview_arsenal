// Function Expression
const getRectangleArea = function (width, height) {
  return width * height;
};

console.log(getRectangleArea(5, 5));

// Function Declaration
function getRectArea(width, height) {
  return width * height;
}

console.log(getRectArea(6, 6));

// Arrow Function
const arrowGetRectArea = (width, height) => {
  return width * height;
};

console.log(arrowGetRectArea(7, 7));
