// script.js

// Wait for the page to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get the menu button and navigation links
  const menuBtn = document.getElementById('menu-btn');
  const navLinks = document.querySelector('nav ul');

  // Toggle the navigation menu when the menu button is clicked
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // Smooth scroll to sections when navigation links are clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
          // Close the nav menu on mobile after clicking a link
          navLinks.classList.remove('open');
        }
      }
    });
  });
});