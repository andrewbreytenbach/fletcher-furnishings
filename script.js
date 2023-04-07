const hamburger = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav');
});
