/* ============================================================
   PROJECT 1: PERSONAL PORTFOLIO SITE
   File: script.js — The BEHAVIOUR of the page
   JavaScript makes the page interactive: menus, typing, validation.
   ============================================================ */

/* ---------- 1. MOBILE MENU ----------
   When user clicks hamburger, toggle the .open class on nav links.
   CSS shows/hides them based on that class. */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  // Update aria-expanded for accessibility (screen readers)
  const isOpen = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});

/* Close menu when a link is clicked (so it doesn't stay open) */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ---------- 2. TYPING EFFECT ----------
   Cycles through roles: "Full-Stack Developer" → "MERN Learner" → etc.
   Logic: type letter by letter, pause, delete, type next word. */
const roles = ['Full-Stack Developer', 'MERN Learner', 'Problem Solver', 'Durban-based Builder'];
const typingEl = document.getElementById('typingText');
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (isDeleting) {
    charIndex--; // Remove one letter
    typingEl.textContent = current.substring(0, charIndex);
    if (charIndex === 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; }
    setTimeout(typeLoop, 40); // Fast delete
  } else {
    charIndex++; // Add one letter
    typingEl.textContent = current.substring(0, charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1800); // Pause at full word
      return;
    }
    setTimeout(typeLoop, 80); // Typing speed
  }
}
typeLoop(); // Start the loop

/* ---------- 3. ACTIVE NAV LINK ON SCROLL ----------
   Highlights the nav link for whichever section you're viewing. */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    // If we've scrolled past the top of this section, it's "current"
    if (window.scrollY >= section.offsetTop - 150) current = section.id;
  });
  navLinkEls.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

/* ---------- 4. SCROLL REVEAL ANIMATION ----------
   Uses IntersectionObserver: when an element enters the screen,
   add .visible so CSS animates it in. Very modern, very efficient. */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

// Add .reveal to sections/cards so they animate on scroll
document.querySelectorAll('.section, .project-card, .skill-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

/* ---------- 5. CONTACT FORM VALIDATION ----------
   Runs when user clicks "Send Message". Checks each field.
   Shows error messages under fields, or success if all valid.
   NOTE: No backend yet — this is front-end validation only.
   In Week 8 you'll connect this to Express + an email service. */
const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Stop page from reloading

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  let valid = true;

  // Validate name (min 2 chars)
  const nameError = document.getElementById('nameError');
  if (name.length < 2) { nameError.textContent = 'Please enter your name.'; valid = false; }
  else nameError.textContent = '';

  // Validate email (must contain @ and .)
  const emailError = document.getElementById('emailError');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { emailError.textContent = 'Please enter a valid email.'; valid = false; }
  else emailError.textContent = '';

  // Validate message (min 10 chars)
  const messageError = document.getElementById('messageError');
  if (message.length < 10) { messageError.textContent = 'Message must be at least 10 characters.'; valid = false; }
  else messageError.textContent = '';

  if (valid) {
    document.getElementById('formSuccess').hidden = false;
    form.reset(); // Clear the form
    setTimeout(() => document.getElementById('formSuccess').hidden = true, 5000);
  }
});

/* ---------- 6. FOOTER YEAR ----------
   Always shows the current year automatically. */
document.getElementById('year').textContent = new Date().getFullYear();
