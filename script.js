// Typed.js initialization
const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Coder", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// Resume buttons toggle
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

resumeBtns.forEach(b => b.classList.remove('active'));
resumeDetails.forEach(detail => detail.classList.remove('active'));

// Show first tab by default
resumeBtns[0].classList.add('active');
resumeDetails[0].classList.add('active');

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    resumeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    resumeDetails.forEach(detail => detail.classList.remove('active'));
    resumeDetails[idx].classList.add('active');
  });
});

// Scrollspy for navbar links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

/// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
  
  // Toggle body overflow when menu is open
  document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking outside on mobile
document.addEventListener('click', (e) => {
  if (window.innerWidth <= 768 && 
      !e.target.closest('.navbar') && 
      !e.target.closest('#menu-icon') &&
      navbar.classList.contains('active')) {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Recalculate positions on resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
    document.body.style.overflow = '';
  }
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});
