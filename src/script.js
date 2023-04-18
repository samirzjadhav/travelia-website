const preLodaer = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preLodaer.classList.add("remove");
});

// add Event on multiple element

const addEventOnElement = function (element, eventType, callBack) {
  for (let i = 0, len = element.length; i < len; i++) {
    element[i].addEventListener(eventType, callBack);
  }
};

// Navbar toggler for mobile
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelectorAll("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElement(navTogglers, "click", toggleNav);
