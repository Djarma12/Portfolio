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

  // if (e.target.closest(".navigation__btn-open")) {
  //   // const mobileNav = document.querySelector(".active");
  //   let a = document.querySelector(".navigation__list");
  //   console.log(a);
  //   a.style.animation = "0.325s moveMobileNavClose ease-out";
  // }

  // if (e.target.closest(".navigation__btn-close")) {
  //   // const mobileNav = document.querySelector(".active");
  //   let a = document.querySelector(".navigation__list");
  //   console.log(a);
  //   a.style.animation = "0.325s moveMobileNavOpen ease-out";
  // }
});

///////////////////////////////////////////////
const sectionHeroEl = document.querySelector(".navigation");
const header = document.querySelector(".header");
console.log(header);
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(entries[0]);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      document.body.classList.remove("nosticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      document.body.classList.add("nosticky");
    }

    // if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    // threshold: 0.84,
    // rootMargin: "-90px",
  }
);
observer.observe(header);

////////////////////////////////////////////
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});
