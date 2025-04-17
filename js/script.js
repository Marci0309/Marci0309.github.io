// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize particles.js for background effects
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 3,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 3,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 150,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
    
    // Initialize Typed.js for typing animation
    if (document.getElementById('typed-output')) {
        new Typed('#typed-output', {
            strings: ["Artificial Intelligence", "Machine Learning", "Data Science", "Problem Solving"],
            typeSpeed: 70,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }
    
    // Counter animation for achievements
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    const animateCounter = (el, start = 0, end, duration = 2000) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            el.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseInt(target.getAttribute('data-count'));
                animateCounter(target, 0, endValue);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    achievementNumbers.forEach(number => {
        observer.observe(number);
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .achievement-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('card-hover');
        });
    });
    
    // Fade in effect for sections
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * index);
    });
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Add active class to inputs with placeholder to keep labels positioned correctly
        const formInputs = contactForm.querySelectorAll('.form-control');
        formInputs.forEach(input => {
            // Initial check for placeholder
            if (input.placeholder.trim() !== '') {
                input.classList.add('active');
            }
            
            // Focus event
            input.addEventListener('focus', function() {
                this.classList.add('active');
            });
            
            // Blur event
            input.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    this.classList.remove('active');
                }
            });
        });

        // Form validation
        function validateField(field, errorId, errorMessage) {
            const errorElement = document.getElementById(errorId);
            if (field.value.trim() === '') {
                errorElement.textContent = errorMessage;
                field.classList.add('is-invalid');
                return false;
            } else {
                errorElement.textContent = '';
                field.classList.remove('is-invalid');
                field.classList.add('is-valid');
                return true;
            }
        }

        // Email validation
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email.toLowerCase());
        }

        // Form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            const successMessage = document.getElementById('formSuccessMessage');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            
            let isValid = true;
            
            // Validate each field
            isValid = validateField(name, 'nameError', 'Please enter your name') && isValid;
            
            if (!validateField(email, 'emailError', 'Please enter your email')) {
                isValid = false;
            } else if (!validateEmail(email.value)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                email.classList.add('is-invalid');
                isValid = false;
            }
            
            isValid = validateField(subject, 'subjectError', 'Please enter a subject') && isValid;
            isValid = validateField(message, 'messageError', 'Please enter your message') && isValid;
            
            if (isValid) {
                // Disable submit button and show loading state
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                
                // Using FormData to collect all form data
                const formData = new FormData(contactForm);
                
                // Send the form using fetch API
                fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                .then(response => {
                    if (response.ok) {
                        // Show success message
                        successMessage.classList.remove('d-none');
                        
                        // Reset form
                        contactForm.reset();
                        formInputs.forEach(input => {
                            input.classList.remove('active', 'is-valid');
                        });
                        
                        // Hide success message after 5 seconds
                        setTimeout(() => {
                            successMessage.classList.add('d-none');
                        }, 5000);
                    } else {
                        throw new Error('Network response was not ok');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was a problem submitting your form. Please try again later.');
                })
                .finally(() => {
                    // Re-enable submit button
                    submitButton.disabled = false;
                    submitButton.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
                });
            }
        });
    }
    
    // Add smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active nav highlighting based on scroll position
    if (document.querySelector('.nav-links')) {
        window.addEventListener('scroll', function() {
            highlightNavOnScroll();
        });
    }
    
    // Function to highlight nav items based on scroll position
    function highlightNavOnScroll() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.pageYOffset + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(navLink => {
                    navLink.classList.remove('active');
                    if (navLink.getAttribute('href') === '#' + sectionId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }
}); 