/*Complex Closure*/

// Define a function 'divideBy' that takes 'firstNumber' and returns a function.
function divideBy(firstNumber) {
  // Return a function that takes 'secondNumber' and returns the result of division.
  return function (secondNumber) {
    return secondNumber / firstNumber;
  };
}

// Define a function 'addBy' that takes 'firstNumber' and returns a function.
function addBy(firstNumber) {
  // Return a function that takes 'secondNumber' and returns the sum.
  return function (secondNumber) {
    return firstNumber + secondNumber;
  };
}

// Create four closures
var addBy100 = addBy(100);
var addBy100 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy10 = divideBy(1000);

// Executing
console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));
