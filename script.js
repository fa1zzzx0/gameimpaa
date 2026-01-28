// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('scrolled-nav');
    } else {
        navbar.classList.remove('scrolled-nav');
    }
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true' || false;
    this.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
    
    // Change icon
    const icon = this.querySelector('i');
    if (expanded) {
        feather.replace();
        icon.setAttribute('data-feather', 'menu');
    } else {
        feather.replace();
        icon.setAttribute('data-feather', 'x');
    }
    feather.replace();
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        feather.replace();
        mobileMenuButton.querySelector('i').setAttribute('data-feather', 'menu');
        feather.replace();
    });
});

// Initialize feather icons
document.addEventListener('DOMContentLoaded', function() {
    feather.replace();
});
