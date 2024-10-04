const menuToggle = document.querySelector(".menu-toggle");
export const navMenu = document.querySelector("nav ul");
const menu = document.querySelector("#menu");
const menuLinks = document.querySelectorAll("#menu a");

const toggleMenu = () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
};

const closeMenuOnClickOutside = (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    navMenu.classList.remove("show");
    menuToggle.classList.remove(active);
  }
};

menuToggle.addEventListener("click", toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleMenu();
  });
});

document.addEventListener("click", closeMenuOnClickOutside);
