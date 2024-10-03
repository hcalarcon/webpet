import { navMenu } from "./menu.js";
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("headerColor");
    navMenu.classList.add("headerColor");
  } else {
    header.classList.remove("headerColor");
    navMenu.classList.remove("headerColor");
  }
});
