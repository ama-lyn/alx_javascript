/*Lexical scoping*/

// Define a function named 'welcome' that takes two arguments: 'firstName' and 'lastName'.
function welcome(firstName, lastName) {
  // Create a variable 'fullName'
  var fullName = firstName + " " + lastName;
  // Define a nested function called 'displayFullname'.
  function displayFullname() {
    alert("Welcome" + " " + fullName);
  }
  // Call the 'displayFullname' function.
  displayFullname();
}
