"use strict";

// Add navigation for mobile devices
const navigation = document.querySelector(".navigation");
const navigationBtn = document.querySelectorAll(".navigation__btn");

navigationBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.closest(".navigation__btn")) {
      navigation.classList.toggle("active");
    }
  });
});

///////////////////////////////////////////////
// Display navigation when user isn't on header section
const header = document.querySelector(".header");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
      // document.body.classList.remove("nosticky");
    } else {
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

///////////////////////////////////////////////
// Animate sections
const observerSections = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show--sections");
      observer.unobserve(entry.target);
    }
  }),
    {
      threshold: 0.45,
    };
});

const hiddenElements = document.querySelectorAll(".hidden--sections");
hiddenElements.forEach((el) => observerSections.observe(el));

////////////////////////////////////////////
// Remove RESUME link in nav, to can download CV
const allLinks = Array.from(document.querySelectorAll(".navigation__link"));
allLinks.forEach((el, key) =>
  el.classList.contains("navigation__link-download")
    ? allLinks.splice(key, 1)
    : null
);
const btnHeader = document.querySelector(".header__buttons").children;
allLinks.push(...btnHeader);

////////////////////////////////////////////
// Add smooth scrolling
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      navigation.classList.remove("active");
    }

    // Scroll to the other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      navigation.classList.remove("active");
    }
  });
});

////////////////////////////////////////////
// Animate text in heading
const text = document.querySelector(".heading-primary--main");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Dusan Madjar";
  }, 0);
  setTimeout(() => {
    text.textContent = "and I'm Frontend Dev.";
  }, 4000);
};

textLoad();
setInterval(textLoad, 8000);

////////////////////////////////////////////
// Animate images and nav items from left and display them
const animateElements = (entries, className) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add(className);
      }, 150 * (index + 1));
    } else {
      entry.target.classList.remove(className);
    }
  });
};

const observerImages = new IntersectionObserver(
  (entries) => {
    animateElements(entries, "show--left");
  },
  {
    threshold: 0.5,
  }
);

const observerNav = new IntersectionObserver(
  (entries) => {
    const isWindowLarge = window.innerWidth > 900;

    animateElements(entries, "show--nav");

    if (isWindowLarge) {
      entries.forEach((entry) => {
        observerNav.unobserve(entry.target);
      });
    }
  },
  {
    threshold: 0.5,
  }
);

const hiddenImages = document.querySelectorAll(".hidden--left");
const hiddenNav = document.querySelectorAll(".hidden--nav");

hiddenImages.forEach((el) => observerImages.observe(el));
hiddenNav.forEach((el) => observerNav.observe(el));
