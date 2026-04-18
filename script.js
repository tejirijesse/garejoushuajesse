// Animate role cards when they scroll into view
const cards = document.querySelectorAll('.role-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 150);
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));
