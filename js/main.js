// Unplug & Breathe — Main JavaScript

(function () {
  'use strict';

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      mobileMenu.classList.toggle('hidden');
      menuIconOpen.classList.toggle('hidden');
      menuIconClose.classList.toggle('hidden');
    });

    // Close menu when clicking a nav link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      });
    });
  }

  // Navbar shadow on scroll
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        navbar.classList.add('nav-scrolled');
      } else {
        navbar.classList.remove('nav-scrolled');
      }
    });
  }

  // Contact form handling with Formspree
  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form && formStatus) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.textContent = 'Thank you! Your message has been sent.';
            formStatus.className = 'text-center text-sm form-success';
            formStatus.classList.remove('hidden');
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        })
        .catch(function () {
          formStatus.textContent = 'Oops! Something went wrong. Please try again or email us directly.';
          formStatus.className = 'text-center text-sm form-error';
          formStatus.classList.remove('hidden');
        });
    });
  }
})();
