// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validate form
        if (!name || !email || !subject || !message) {
          alert('Please fill in all fields');
          return;
        }
        
        // Show message
        if (formMessage) {
          formMessage.style.display = 'block';
          formMessage.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Create mailto link
        const mailtoLink = `mailto:szokedencsim@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        
        // Delay opening the email client slightly to allow user to see the message
        setTimeout(() => {
          window.location.href = mailtoLink;
        }, 500);
      });
    }
  }); 