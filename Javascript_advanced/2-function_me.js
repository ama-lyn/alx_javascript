/*Closure*/

// Define a function named 'welcomeMessage' that accepts one arg
function welcomeMessage(fullName) {
  //A closure for an alert displaying Welcome <fullName>
  return function () {
    alert("Welcome " + fullName);
  };
}

var guillaume = welcomeMessage("Guillaume");
var alex = welcomeMessage("Alex");
var fred = welcomeMessage("Fred");
