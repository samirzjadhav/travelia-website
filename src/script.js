const preLodaer = document.querySelector("[data-preloader]");

window.addEventListener("load", () => {
  preLodaer.classList.add("remove");
});
