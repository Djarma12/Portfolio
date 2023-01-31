"use strict";

// UPDATE NPM TYPE
const navigation = document.querySelector(".navigation");

navigation.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.closest(".navigation__btn")) {
    navigation.classList.toggle("active");
    // console.log(mobileNav);.style.animation = "0.325s moveMobileNavClose ease-out";
    // mobileNav.style.animation = "0.325s moveMobileNavClose ease-out";
  }

  if (e.target.closest(".navigation__btn-close")) {
    const mobileNav = document.querySelector(".active");
    let a = document.querySelector(".navigation__list");
    console.log(a);
    a.style.animation = "0.325s moveMobileNavClose ease-out";
  }
});
