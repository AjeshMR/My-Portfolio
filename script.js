// Page loader

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);
});


// Mobile navigation

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

  const isOpen = navLinks.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close menu after selecting a link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


// Scroll reveal animation

const revealElements = document.querySelectorAll(
  ".about, .skills-section, .projects, .contact-inner, .project-card, .skill-card"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

revealElements.forEach(element => {
  observer.observe(element);
});