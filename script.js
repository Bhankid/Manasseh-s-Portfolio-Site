const navToggle = document.querySelector(".nav-toggle");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links");
const openNav = document.querySelector("#open-nav");
const closeNav = document.querySelector("#close-nav");

navToggle.addEventListener("click", () => {
  navBar.classList.toggle("open");
  openNav.style.display = navBar.classList.contains("open") ? "none" : "block";
  closeNav.style.display = navBar.classList.contains("open") ? "block" : "none";
});
