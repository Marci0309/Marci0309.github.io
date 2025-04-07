// script.js
console.log('Your resume website is loaded');

// DOM Elements
const introSection = document.getElementById('intro');
const resumeSection = document.getElementById('resume');
const enterButton = document.getElementById('enter-btn');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('header nav ul li a');

// Check if user has a theme preference
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
  document.body.classList.add('dark-mode');
  themeIcon.classList.remove('fa-moon');
  themeIcon.classList.add('fa-sun');
}

// Initialize the page with animations
document.addEventListener('DOMContentLoaded', function() {
  // Fade in intro section
  introSection.classList.add('active');
  
  // Setup section animations
  setupSectionAnimations();
  
  // Smooth scrolling for navigation links
  setupSmoothScrolling();
});

// Enter button click - transition from intro to resume
enterButton.addEventListener('click', function() {
  // Add animation class to button
  this.classList.add('clicked');
  
  // Hide intro section
  introSection.classList.remove('active');
  introSection.classList.add('hidden');
  
  // Show resume section
  setTimeout(function() {
    resumeSection.classList.remove('hidden');
    setTimeout(function() {
      resumeSection.classList.add('active');
    }, 100);
  }, 500);
});

// Theme toggle
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  
  // Change icon based on theme
  if (document.body.classList.contains('dark-mode')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
  }
  
  // Add animation class
  this.classList.add('clicked');
  setTimeout(() => {
    this.classList.remove('clicked');
  }, 300);
});

// Setup section animations with Intersection Observer
function setupSectionAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetPosition = document.querySelector(targetId).offsetTop;
      
      window.scrollTo({
        top: targetPosition - 70,
        behavior: 'smooth'
      });
    });
  });
}

// Add hover effects to project cards and other interactive elements
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});
