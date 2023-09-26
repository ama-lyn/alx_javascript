// Get references to the form, email input, and error message elements
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const errorElement = document.getElementById("error");

emailForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting by default
  const email = emailInput.value;

  if (validateEmail(email)) {
    // Email format is valid, allow form submission
    errorElement.textContent = ""; // Clear any previous error messages
    emailForm.submit(); // Submit the form
  } else {
    // Email format is not valid, display an error message
    errorElement.textContent = "Please enter a valid email address.";
  }
});

// Function to validate the email format
function validateEmail(email) {
  // Define a regular expression pattern for a valid email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Check if the email matches the pattern
  return emailRegex.test(email);
}
