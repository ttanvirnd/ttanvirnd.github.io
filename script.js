// Smooth reveal animation
const revealItems = document.querySelectorAll(".section, .project-card, .about-info p");

revealItems.forEach((item) => item.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

// Small parallax effect for hero image
window.addEventListener("scroll", () => {
  const img = document.querySelector(".hero-image-wrap");
  const y = window.scrollY;
  if (img && y < window.innerHeight) {
    img.style.transform = `translateX(-50%) translateY(${y * 0.08}px)`;
  }
});
