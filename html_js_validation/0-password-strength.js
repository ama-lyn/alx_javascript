// Get references to the form, password input, and error message elements
const passwordForm = document.getElementById("passwordForm");
const passwordInput = document.getElementById("password");
const errorElement = document.getElementById("error");

passwordForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting by default
  const password = passwordInput.value;

  if (validatePassword(password)) {
    // Password is valid, allow form submission
    errorElement.textContent = ""; // Clear any previous error messages
    passwordForm.submit(); // Submit the form
  } else {
    // Display an error message
    errorElement.textContent =
      "Password must have at least 8 characters, including uppercase, lowercase, digit, and special character.";
  }
});

// Function to validate the password
function validatePassword(password) {
  // Define regular expressions for each criterion
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharacterRegex = /[!@#$%^&*]/;

  // Check each criterion
  const isLengthValid = lengthRegex.test(password);
  const hasUppercase = uppercaseRegex.test(password);
  const hasLowercase = lowercaseRegex.test(password);
  const hasDigit = digitRegex.test(password);
  const hasSpecialCharacter = specialCharacterRegex.test(password);

  // Check if all criteria are met
  return (
    isLengthValid &&
    hasUppercase &&
    hasLowercase &&
    hasDigit &&
    hasSpecialCharacter
  );
}
