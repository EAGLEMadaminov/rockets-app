const elHamburgerBtn = document.getElementById("hamburger-button");
const elMobileMune = document.getElementById("mobile-menu");
const toggleMenu = () => {
  elMobileMune.classList.toggle("hidden");
  elMobileMune.classList.toggle("flex");
  elHamburgerBtn.classList.toggle("toggle-btn");
};
elHamburgerBtn.addEventListener("click", toggleMenu);
elMobileMune.addEventListener("click", toggleMenu);
