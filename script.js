
window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
});

ScrollReveal().reveal('.hero', {
  delay: 300,
  distance: '40px',
  duration: 1000,
  origin: 'bottom',
  reset: false
});
