// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Visit Counter
document.addEventListener('DOMContentLoaded', function() {
    // Get the visit count element
    const visitCountElement = document.getElementById('visit-count');
    
    // Get the current visit count from localStorage
    let visitCount = localStorage.getItem('portfolioVisitCount');
    
    // If this is the first visit, initialize the count
    if (!visitCount) {
        visitCount = 1;
    } else {
        // Increment the count
        visitCount = parseInt(visitCount) + 1;
    }
    
    // Save the updated count
    localStorage.setItem('portfolioVisitCount', visitCount);
    
    // Update the display with animation
    animateCounter(visitCountElement, visitCount);
});

// Function to animate the counter
function animateCounter(element, finalValue) {
    let currentValue = 0;
    const duration = 1000; // Animation duration in milliseconds
    const steps = 20; // Number of steps in the animation
    const increment = finalValue / steps;
    const stepDuration = duration / steps;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
        }
        element.textContent = Math.floor(currentValue);
    }, stepDuration);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll-based header effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
}); 