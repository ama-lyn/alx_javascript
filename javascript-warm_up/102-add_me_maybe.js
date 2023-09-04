/*Write a function that increments and calls a function.

The function must be visible from outside
Prototype: function (number, theFunction)
You are not allowed to use var */

function addMeMaybe(number, execute) {
  let newNumber = number + 5;
  execute(newNumber);
}

// Export the function to make it visible from outside
module.exports.addMeMaybe = addMeMaybe;
