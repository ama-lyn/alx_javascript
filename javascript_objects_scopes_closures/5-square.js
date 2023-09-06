#!/usr/bin/node
/*Write a class Square that defines a square and inherits from Rectangle of 4-rectangle.js:

You must use the class notation for defining your class and extends
The constructor must take 1 argument: size
The constructor of Rectangle must be called (by using super() */

const Rectangle = require("./4-rectangle"); // Import the Rectangle class

class Square extends Rectangle {
  constructor(size) {
    super(size, size); // Call the constructor of the parent class (Rectangle) with width and height as 'size'
  }
}

module.exports = Square; // Export the Square class
