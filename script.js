document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add navbar background color on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        }
    });

    // Add click handlers for buttons (placeholder functionality)
    const ctaButtons = document.querySelectorAll('.cta-btn');
    const loginBtn = document.querySelector('.login-btn');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Account creation feature coming soon!');
        });
    });

    loginBtn.addEventListener('click', () => {
        alert('Sign in feature coming soon!');
    });
});
