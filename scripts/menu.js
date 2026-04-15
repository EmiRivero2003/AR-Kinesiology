const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const overlay = document.getElementById("overlay");

if (hamburger && navLinks && overlay) {

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    overlay.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      overlay.classList.remove("active");
    });
  });

  overlay.addEventListener("click", () => {
    navLinks.classList.remove("open");
    overlay.classList.remove("active");
  });

}