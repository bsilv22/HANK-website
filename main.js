// Add this at the very beginning of the file
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    document.body.style.visibility = 'visible';
});

// Add mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add mobile menu toggle button
    const nav = document.querySelector('.nav-container');
    if (nav) {
        const mobileToggle = document.createElement('div');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
        nav.appendChild(mobileToggle);
        
        // Toggle mobile menu
        mobileToggle.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            if (navLinks) {
                navLinks.classList.toggle('active');
                
                // Change icon based on menu state
                const icon = this.querySelector('i');
                if (navLinks.classList.contains('active')) {
                    icon.className = 'fas fa-times';
                } else {
                    icon.className = 'fas fa-bars';
                }
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Only apply smooth scroll to hash links on the same page
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const mobileToggleIcon = document.querySelector('.mobile-menu-toggle i');
                    if (navLinks) navLinks.classList.remove('active');
                    if (mobileToggleIcon) mobileToggleIcon.className = 'fas fa-bars';
                }
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '0.5rem 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '1rem 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });
    
    // Form submission handling for minor registration
    const minorForm = document.getElementById('minorRegistrationForm');
    if (minorForm) {
        minorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for registering! We will contact you shortly to confirm your registration.');
            // Here you would typically send the form data to a server
            // For now, we'll just reset the form
            this.reset();
        });
    }

    // Form submission handling for elderly registration
    const elderlyForm = document.getElementById('elderlyRegistrationForm');
    if (elderlyForm) {
        elderlyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if at least one service is selected
            const serviceCheckboxes = document.querySelectorAll('input[name="services"]:checked');
            if (serviceCheckboxes.length === 0) {
                alert('Please select at least one service that you need assistance with.');
                return;
            }
            
            alert('Thank you for registering! We will contact you shortly to discuss your needs and match you with volunteers.');
            this.reset();
        });
    }
});

// Add this right after the existing error handler
window.onerror = function(message, source, lineno, colno, error) {
    console.error('JavaScript error:', message, 'at line', lineno);
    // Make sure content is visible despite errors
    document.body.style.visibility = 'visible';
    document.body.style.display = 'block';
    return true; // Prevents the firing of the default error handler
}; 