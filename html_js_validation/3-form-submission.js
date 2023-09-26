document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("submitForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  // Add an event listener to the form element to handle form submission.
  submitForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Retrieve the values entered in the form fields.
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Perform form validation.
    if (validateForm(name, email)) {
      // Display a success message.
      const successMessage = document.createElement("p");
      successMessage.textContent = "Form submitted successfully!";
      successMessage.style.color = "green";
      submitForm.appendChild(successMessage);
    } else {
      // Display an error message.
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Please fill in all required fields.";
      errorMessage.style.color = "red";
      submitForm.appendChild(errorMessage);
    }
  });

  // Function to validate the form fields.
  function validateForm(name, email) {
    if (name === "" || email === "") {
      return false; // Name or email is empty
    }

    // Additional validation logic can be added here if needed.

    return true; // All required fields are filled
  }
});
