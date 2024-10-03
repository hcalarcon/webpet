// carousel.js
const carouselItems = document.querySelectorAll(".cr");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function showImage(index) {
  currentIndex =
    index >= carouselItems.length
      ? 0
      : index < 0
      ? carouselItems.length - 1
      : index;

  const offset = -currentIndex * 100;
  carouselItems.forEach((item) => {
    item.style.transform = `translateX(${offset}%)`;
  });

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.getAttribute("data-index"));
    showImage(index);
  });
});

showImage(currentIndex);

setInterval(() => {
  showImage(currentIndex + 1);
}, 5000);
