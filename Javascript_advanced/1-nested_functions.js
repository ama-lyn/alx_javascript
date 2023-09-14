/*Closure Scope Chain */

// Create a global variable named 'globalVariable'
var globalVariable = "Welcome";
// Define a function named 'outer'.
function outer() {
  // Alert the content of the global variable.
  alert(globalVariable);
  // Create a variable named 'course' with the value 'Holberton'.
  var course = "Holberton";
  function inner() {
    // Define a nested function named 'inner' within 'outer'.
    alert(globalVariable + " " + course);
    var exclamation = "!";

    function inception() {
      alert(globalVariable + " " + course + " " + exclamation);
    }
    // Call the 'inception' function
    inception();
  }
  // Call the 'inner' function.
  inner();
}
// Call the 'outer' function to start the execution
outer();
