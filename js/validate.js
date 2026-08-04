document.addEventListener("DOMContentLoaded", function () {
 const form = document.getElementById("contact-form");
 //function for the showing of the error
 function showError(fieldId, message) {
   const field = document.getElementById(fieldId);
   const error = field.nextElementSibling;
   error.textContent = message;
   error.style.display = "block";

 }
 //removes error once user fixes the error
 function clearError(fieldId) {
   const field = document.getElementById(fieldId);
   const error = field.nextElementSibling;
   error.style.display = "none";
 }
 //checks if input in the email box fits the criteria
 function validateEmail(email) {return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);}

 //Once submit button is hit it checks if the input is valid and, if not it displays the error messages
 form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    if (name === ""){
      showError("name", "Please input your name");
      isValid = false;
    }
    if (email === ""){
      showError("email", "Please input your email");
      isValid = false;
    }
    if (!validateEmail(email)){
      showError("email", "Please enter a vaild email address format");
      isValid = false;
    }
    if(message.length < 20){
      showError("message", "Message length must be above 20");
      isValid = false;
    }
    if (isValid === true){
      form.style.display = "none";
      const success = document.getElementById("success-msg");
      success.style.display = "block";
    }

 });
 // clears errors as the user types
 ["name", "email", "message"].forEach(function (id) {
   document.getElementById(id).addEventListener("input", function () {
      clearError(id);
   });
 });
});