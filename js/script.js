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

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);
    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to the other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
