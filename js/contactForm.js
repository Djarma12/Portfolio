"use strict";
// import isEmail from "./validator/lib/isEmail.js";
// const isEmail = require("validator/lib/isEmail");
// console.log(isEmail("test@example.com")); // true
const btnClosePopup = document.querySelector(".btn__popup");
const popup = document.querySelector(".popup");

//////////////////////////////////////////
// FUNCTION
const validateEmail = function (email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const result = re.test(String(email).toLowerCase());
  return result;
};

const displayPopup = function (str, e) {
  popup.style.display = "block";
  popup.querySelector(`#popup-${str}`).style.display = "flex";
  return e.preventDefault();
};

//////////////////////////////////////////
// TESTING MAIL
form.addEventListener("submit", function (e) {
  e.preventDefault();
  popup.querySelector("#popup-name").style.display = "none";
  popup.querySelector("#popup-email").style.display = "none";
  popup.querySelector("#popup-message").style.display = "none";

  const name = form.querySelector("#name").value;
  const email = form.querySelector("#mail").value;
  const message = form.querySelector("#message").value;
  // Get the user's input from the form
  console.log(name);
  if (name === "") {
    return displayPopup("name", e);
  }
  if (!validateEmail(email)) {
    return displayPopup("email", e);
  }
  if (message === "") {
    return displayPopup("message", e);
  }

  console.log("moze dalje");
  // Use the Email.js library to send the email
  emailjs
    .send("service_284tpr9", "template_k9x3scz", {
      name: name,
      email_id: email,
      message: message,
    })
    .then(
      function (response) {
        document.querySelector(".form").style.display = "none";
        document.querySelector(".successful").style.display = "block";
      },
      function (error) {
        document.querySelector(".popup__text--error").textContent = error.text;
        return displayPopup("error", e);
      }
    );
});

btnClosePopup.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.closest(".popup"));
  this.closest(".popup").style.display = "none";
});

// const email = form.querySelector("#mail").value;
// email.addEventListener("input", function () {
//   if (email.value === "") {
//     this.style.borderBottom = "2px solid red";
//   } else {
//     this.style.borderBottom = "2.4px solid #00eaff";
//   }
// });
const input = document.querySelectorAll(".form__element");

const validateFormEl = function (input, trueFalse) {
  if (trueFalse) {
    input.style.borderBottom = "2px solid red";
  } else {
    input.style.borderBottom = "2.4px solid #00eaff";
  }
};

input.forEach((input) => {
  input.addEventListener("keyup", function () {
    console.log(input.id);
    if (input.id === "mail") {
      validateFormEl(this, !validateEmail(input.value));
    } else {
      validateFormEl(this, input.value === "");
    }
  });

  input.addEventListener("blur", function () {
    input.style.borderBottom = "1px solid var(--secondaryColor)";
  });
});
