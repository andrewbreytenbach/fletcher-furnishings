/* Open and close the mobile menu */
const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

menuBtn.addEventListener('click', function() {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('show');
});

/* Smooth scrolling to anchor links */
const links = document.querySelectorAll('nav a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
