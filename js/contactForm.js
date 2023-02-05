"use strict";
// import isEmail from "./validator/lib/isEmail.js";
// const isEmail = require("validator/lib/isEmail");
// console.log(isEmail("test@example.com")); // true

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get the user's input from the form
  const name = form.querySelector("#name").value;
  const email = form.querySelector("#mail").value;
  const message = form.querySelector("#message").value;
  if (name === "" || email === "" || message == "") {
    e.preventDefault();
    alert("Enter all data in the form.");
  }
  console.log("aa");
  // Use the Email.js library to send the email
  emailjs
    .send("service_284tpr9", "template_k9x3sc", {
      form_name: name,
      email_id: email,
      message: message,
    })
    .then(
      function (response) {
        document.querySelector(".form").style.display = "none";
        document.querySelector(".successful").style.display = "block";
      },
      function (error) {
        alert(
          "There were technical problems while sending the message, please contact us directly by email at madjardusan@gmail.com."
        );
      }
    );
});
// document.querySelector(".form").style.display = "none";
// document.querySelector(".successful").style.display = "block";
