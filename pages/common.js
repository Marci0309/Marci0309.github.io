// common.js - Shared functions for all pages

/**
 * Highlights the current page in the navigation
 */
function highlightCurrentPage() {
    // Get the current page from the URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // Highlight the current page in the navigation
    navLinks.forEach(link => {
      const linkHref = link.getAttribute('href').split('/').pop();
      
      if (currentPage === '' && linkHref === 'index.html') {
        // We're on the home page
        link.classList.add('active');
      } else if (linkHref === currentPage) {
        // We're on the page matching this link
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  
  /**
   * Adds animation to section elements
   */
  function setupSectionAnimations() {
    const sections = document.querySelectorAll('.section');
    
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
  
  // Initialize page when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in navigation
    highlightCurrentPage();
    
    // Setup animations for sections
    setupSectionAnimations();
  }); 