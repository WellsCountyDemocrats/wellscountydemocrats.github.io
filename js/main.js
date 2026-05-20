// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav on outside click
document.addEventListener('click', (e) => {
  if (navLinks && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// Highlight active nav link
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// Smooth topbar scroll on smaller screens
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(27,47,82,0.15)';
    } else {
      navbar.style.boxShadow = '0 2px 8px rgba(27,47,82,0.10)';
    }
  }
});
