//Carousel
const carouselItems = document.querySelectorAll(".cr");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Función para mostrar la imagen correspondiente y actualizar el dot activo
function showImage(index) {
  // Asegurarse de que el índice esté en el rango
  currentIndex =
    index >= carouselItems.length
      ? 0
      : index < 0
      ? carouselItems.length - 1
      : index;

  // Mover el carrusel
  const offset = -currentIndex * 100;
  carouselItems.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });

  // Actualizar los dots para reflejar la imagen activa
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Asignar evento de clic a cada dot para que cambie de imagen
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    showImage(index);
  });
});

// Mostrar la primera imagen y activar el primer dot al cargar
showImage(currentIndex);

// Opcional: Puedes añadir un intervalo para cambiar automáticamente las imágenes
setInterval(() => {
  showImage(currentIndex + 1); // Cambiar automáticamente a la siguiente imagen
}, 5000);

//menu
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("active");
});

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
