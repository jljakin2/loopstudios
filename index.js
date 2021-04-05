const hamburger = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

closeButton.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
