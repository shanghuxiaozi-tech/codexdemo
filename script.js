const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

revealElements.forEach((element) => revealObserver.observe(element));

const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const opacity = Math.min(window.scrollY / 360, 0.82);
  header.style.background = `rgba(3, 6, 19, ${opacity})`;
  header.style.borderBottom = opacity > 0.2 ? '1px solid rgba(128, 226, 255, 0.16)' : '1px solid transparent';
}, { passive: true });
