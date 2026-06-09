const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

const cursor = document.querySelector('.cursor');
if (window.matchMedia('(min-width: 901px)').matches) {
  cursor.style.display = 'block';
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
}
