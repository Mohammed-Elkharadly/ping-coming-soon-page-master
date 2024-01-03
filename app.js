// selecting HTML elements
const form = document.getElementById("form");
const inputEmail = document.getElementById("email");
const error = document.querySelector(".error");

// add event listener to the form
form.addEventListener("submit", checkEmail);

let isValid = false;

const emailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Function to handle form submission
function checkEmail(e) {
  e.preventDefault();
  handleError();
  if (isValid) {
    form.submit();
  }
}

// Function to handle errors related to email input
function handleError() {
  // Constants for placeholder text and error messages
  const EMAIL_PLACEHOLDER = "Your email address...";
  const ERROR_MESSAGE = "Please provide a valid email address";
  const EXAMPLE_EMAIL = "example@gmail.com";

  // Use setTimeout to reset everything to the default state after a delay
  setTimeout(() => {
    inputEmail.classList.remove("wrong");
    error.textContent = "";
    inputEmail.placeholder = EMAIL_PLACEHOLDER;
  }, 3000);

  const email = inputEmail.value.trim();

  // Check if the entered email is valid or not
  if (!emailReg.test(email)) {
    // Display error message, apply visual indication, and set placeholder to example email
    error.textContent = ERROR_MESSAGE;
    inputEmail.classList.add("wrong");
    inputEmail.placeholder = EXAMPLE_EMAIL;
    isValid = false;
  } else {
    // Valid email, reset validation state
    isValid = true;
  }
}
