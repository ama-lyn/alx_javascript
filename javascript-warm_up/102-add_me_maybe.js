/*Write a function that increments and calls a function.
The function must be visible from outside
Prototype: function (number, theFunction)*/

function addMeMaybe(number, execute) {
  let newNumber = number + 1;
  execute(newNumber);
}

// Export the function to make it visible from outside
module.exports.addMeMaybe = addMeMaybe;
