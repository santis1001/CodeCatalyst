var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");


signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission

  var userdata={
    firstNameInput:firstNameInput.value.trim(),
    lastNameInput:lastNameInput.value.trim(),
    eemailInputmail: emailInput.value.trim(),
    passwordInput: passwordInput.value.trim()
  }

  // TODO: Set new submission to local storage 
  localStorage.setItem("userdata", JSON.stringify(userdata));

});
