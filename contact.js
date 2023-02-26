const subjectField = document.getElementById("subject"); //GEBI is used to pick up id, which here is "email"
const submitButton = document.querySelector("button[type='submit']"); // method to select the first element (button)
const errorMsg = document.createElement("span"); //a method used to create new HTML element (span)

// Validating the subjectfield
// textContent is accessing divs in HTML
// will be called, like a click event
//when a click/event happens the function
subjectField.addEventListener("input", function (event) {
  const value = event.target.value.trim();
  submitButton.disabled = value.length < 10;
  errorMsg.textContent =
    value.length < 10 ? "You need at least 10 characters" : "";
  subjectField.parentNode.insertBefore(errorMsg, subjectField.nextSibling);
});

// adding click eventlistenere, to reject the submission to accept less than 10 characters to the subjectField
//InsertBefore creates a new element for example a div, and inserting it before an existing element
submitButton.addEventListener("click", function (event) {
  const value = subjectField.value.trim();
  if (value.length < 10) {
    event.preventDefault();
    errorMsg.textContent = "You need at least 10 characters";
    subjectField.parentNode.insertBefore(errorMsg, subjectField.nextSibling);
  } else {
    errorMsg.textContent = "";
  }
});

// EMAIL

//createElement will be used to display error message and creating a new html element
//Regex: Checking if it follows a email pattern/valid email.
//parentnode = access to (emailinput) <div>
// nextSibling = access something after parentnode
const emailInput = document.getElementById("email");
const errorMessage = document.createElement("div");

errorMessage.className = "error-message";
emailInput.addEventListener(function () {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "This email does not work. Enter a valid one";
    emailInput.parentNode.insertBefore(errorMessage, emailInput.nextSibling);
  } else {
    if (errorMessage.parentNode) {
      errorMessage.parentNode.removeChild(errorMessage);
    }
  }
});

// ADDRESS

//SCV allows me to set a custom validation message for textarea, select and so on
//preventDefault:prevents the default behaviour of an HTML element in response to an event
const addressField = document.getElementById("address");

addressField.addEventListener("input", function (event) {
  const value = event.target.value.trim();
  if (value.length < 25) {
  } else {
    addressField.setCustomValidity(
      "you need minimum 25 characters to continue"
    );
  }
});

addressField.addEventListener("invalid", function (event) {
  event.preventDefault();
});

//NAME contact page
// Trim: Removes leading and trailing whitespace

const nameField = document.getElementById("name");

nameField.addEventListener("input", function (event) {
  const value = event.target.value.trim();
  if (value.replace(/^\s/, "").length < 3) {
    // Removes all whitespace characters and check length

    nameField.setCustomValidity("Name must be at least 3 characters long");
  } else {
    nameField.setCustomValidity("");
  }
});

nameField.addEventListener("invalid", function (event) {
  event.preventDefault();
});