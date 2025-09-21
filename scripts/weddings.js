const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dots = document.querySelectorAll('.dot');

let currentSlide = 1; // Start with the second slide (index 1) since it has 'active' class
let autoplayInterval;

function showSlide(index) {
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Add active class to selected slide and dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentSlide = index;
}

function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
}

function prevSlide() {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
}

// Event listeners
nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        resetAutoplay();
    });
});

// Autoplay functionality
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
}

// Initialize carousel
showSlide(currentSlide);
startAutoplay();

// Pause autoplay when hovering over the carousel
track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
track.addEventListener('mouseleave', startAutoplay);

// Mobile menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});