const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Coder", "Photographer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

// Initially, remove all active classes so nothing shows on page load
resumeBtns.forEach(b => b.classList.remove('active'));
resumeDetails.forEach(detail => detail.classList.remove('active'));

resumeBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    resumeBtns.forEach(b => b.classList.remove('active'));
    // Add 'active' class to the clicked button
    btn.classList.add('active');

    // Hide all resume details
    resumeDetails.forEach(detail => detail.classList.remove('active'));
    // Show the resume detail corresponding to clicked button's index
    resumeDetails[idx].classList.add('active');
  });
});

// Select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;  // thoda offset upar se
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
