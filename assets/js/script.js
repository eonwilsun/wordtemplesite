// Word Temple Website JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animate game demo
    animateGameDemo();
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.difficulty-card, .instructions');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function animateGameDemo() {
    const tiles = document.querySelectorAll('.letter-tile');
    const letters = ['G', 'O', 'F', 'M', 'E'];
    
    if (tiles.length === 0) return;
    
    // Fill in demo letters
    tiles.forEach((tile, index) => {
        if (index < letters.length) {
            tile.textContent = letters[index];
            tile.classList.add('filled');
        }
    });
    
    // Add some animation to the tiles
    setInterval(() => {
        tiles.forEach(tile => {
            if (tile.classList.contains('filled')) {
                tile.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    tile.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }, 3000);
}

// Play button functionality
function playGame() {
    // This would typically redirect to app store or open the game
    alert('Redirecting to Google Play Store...');
    // window.open('https://play.google.com/store/apps/details?id=your.app.id', '_blank');
}

// Add some interactive effects
document.addEventListener('mousemove', function(e) {
    const hero = document.querySelector('.hero');
    if (hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hero.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    }
});