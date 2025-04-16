// script.js
console.log('Your portfolio website is loaded');

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Handle theme preference with localStorage
function initTheme() {
  // Check if there's a saved preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (themeIcon) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    }
  } else if (savedTheme === null) {
    // If no saved preference, check system preference
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
      document.body.classList.add('dark-mode');
      if (themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Setup interactive elements
  setupInteractiveElements();
});

// Theme toggle
if (themeToggle) {
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Change icon based on theme
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
    
    // Add animation class
    this.classList.add('clicked');
    setTimeout(() => {
      this.classList.remove('clicked');
    }, 300);
  });
}

// Setup interactive elements with hover effects and animations
function setupInteractiveElements() {
  // Project cards hover effect
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Education item hover effect
  const educationItems = document.querySelectorAll('.education-item');
  educationItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.borderLeftWidth = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.borderLeftWidth = '4px';
    });
  });
  
  // Experience items hover effect
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.borderLeftWidth = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.borderLeftWidth = '4px';
    });
  });
  
  // Skill cards hover effect
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Achievement cards hover effect
  const achievementCards = document.querySelectorAll('.achievement-card');
  achievementCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Certification items hover effect
  const certificationItems = document.querySelectorAll('.certification-item');
  certificationItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add animations for buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  });
}
