// script.js
console.log('Your resume website is loaded');

// DOM Elements
const introSection = document.getElementById('intro');
const resumeSection = document.getElementById('resume');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

// Check for intro and enter button on main page only
const enterButton = document.getElementById('enter-btn');

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

// Initialize the page with animations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize theme
  initTheme();
  
  // Main page intro animation
  if (introSection) {
    introSection.classList.add('active');
  }
  
  // If this is a subpage, make sure the resume section is visible and active
  if (!introSection && resumeSection) {
    resumeSection.classList.remove('hidden');
    resumeSection.classList.add('active');
  }
  
  // Setup interactive elements
  setupInteractiveElements();
});

// Enter button click - transition from intro to resume (only on main page)
if (enterButton) {
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
    
    // Remove clicked class after animation
    setTimeout(() => {
      enterButton.classList.remove('clicked');
    }, 300);
  });
}

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
  
  // Extra items hover effect
  const extraItems = document.querySelectorAll('.extra-item');
  extraItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.borderLeftWidth = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.borderLeftWidth = '4px';
    });
  });
  
  // Skill items hover effect
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    const icon = item.querySelector('.skill-icon');
    
    item.addEventListener('mouseenter', function() {
      icon.style.transform = 'scale(1.2)';
    });
    
    item.addEventListener('mouseleave', function() {
      icon.style.transform = 'scale(1)';
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
