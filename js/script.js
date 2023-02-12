"use strict";

// UPDATE NPM TYPE
const navigation = document.querySelector(".navigation");

navigation.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.closest(".navigation__btn")) {
    navigation.classList.toggle("active");
  }
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
      // document.body.classList.remove("nosticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
      // document.body.classList.add("nosticky");
    }
  },
  {
    root: null,
    // threshold: 0.84,
    // rootMargin: "-90px",
  }
);
observer.observe(header);

////////////////////////////////////////////
const allLinks = Array.from(document.querySelectorAll(".navigation__link"));
const btnHeader = document.querySelector(".header__buttons").children;
allLinks.push(...btnHeader);

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
