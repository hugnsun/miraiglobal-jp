// ========================================
// Theme Toggle (Dark/Light Mode)
// ========================================
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// ========================================
// Mobile Menu Toggle
// ========================================
function toggleMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuBtn && mobileNav) {
        menuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    }
}

// Initialize theme on page load
(function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    
    // ========================================
    // Hero Particle Wave Animation
    // ========================================
    const canvas = document.getElementById('heroWave');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = 200;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        class Particle {
            constructor() {
                this.reset();
            }
            
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 20;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = -Math.random() * 1.5 - 0.5;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.life = 0;
                this.maxLife = Math.random() * 100 + 100;
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life++;
                
                // Fade out as particle rises
                this.opacity = (1 - this.life / this.maxLife) * 0.5;
                
                if (this.life >= this.maxLife || this.y < 0) {
                    this.reset();
                }
            }
            
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(197, 160, 89, ${this.opacity})`;
                ctx.fill();
            }
        }
        
        // Create particles
        for (let i = 0; i < 80; i++) {
            const p = new Particle();
            p.life = Math.random() * p.maxLife; // Stagger initial positions
            particles.push(p);
        }
        
        // Wave parameters
        let waveOffset = 0;
        
        function drawWave() {
            // Draw flowing wave lines
            for (let w = 0; w < 3; w++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height);
                
                for (let x = 0; x <= canvas.width; x += 5) {
                    const y = canvas.height - 30 - w * 15 
                        + Math.sin((x * 0.01) + waveOffset + w * 0.5) * 15
                        + Math.sin((x * 0.02) + waveOffset * 0.7) * 10;
                    ctx.lineTo(x, y);
                }
                
                ctx.lineTo(canvas.width, canvas.height);
                ctx.closePath();
                
                const gradient = ctx.createLinearGradient(0, canvas.height - 80, 0, canvas.height);
                gradient.addColorStop(0, `rgba(197, 160, 89, ${0.03 + w * 0.02})`);
                gradient.addColorStop(1, `rgba(197, 160, 89, ${0.08 + w * 0.03})`);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw waves
            waveOffset += 0.02;
            drawWave();
            
            // Update and draw particles
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            
            animationId = requestAnimationFrame(animate);
        }
        
        animate();
        
        // Pause animation when not visible
        const heroSection = document.querySelector('.hero');
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) animate();
                } else {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            });
        }, { threshold: 0.1 });
        
        heroObserver.observe(heroSection);
    }

    // ========================================
    // Map Fallback System (Google -> Amap -> Static)
    // ========================================
    const googleMap = document.getElementById('googleMap');
    const amapFallback = document.getElementById('amapFallback');
    const staticFallback = document.getElementById('mapFallbackStatic');
    
    if (googleMap) {
        let googleLoaded = false;
        let checkTimeout;
        
        // Check if Google Maps loaded successfully
        googleMap.onload = function() {
            // Google Maps iframe loaded, but we need to verify it's actually working
            // by checking if we can access google.com
            googleLoaded = true;
            clearTimeout(checkTimeout);
        };
        
        googleMap.onerror = function() {
            // Google Maps failed to load, switch to Amap
            switchToAmap();
        };
        
        // Timeout fallback - if Google doesn't load in 5 seconds, switch
        checkTimeout = setTimeout(function() {
            if (!googleLoaded) {
                // Try to detect if Google is blocked by checking iframe content
                try {
                    // If we can't access iframe content due to CORS, Google might be blocked
                    switchToAmap();
                } catch(e) {
                    switchToAmap();
                }
            }
        }, 5000);
        
        function switchToAmap() {
            console.log('Google Maps unavailable, switching to fallback...');
            googleMap.style.display = 'none';
            
            // Try Amap first
            if (amapFallback) {
                amapFallback.style.display = 'block';
                
                // If Amap also fails after 3 seconds, show static fallback
                setTimeout(function() {
                    // For now, we'll keep Amap visible
                    // In production, you might want to check if Amap loaded properly
                }, 3000);
            } else if (staticFallback) {
                staticFallback.style.display = 'flex';
            }
        }
    }

    // ========================================
    // Scroll Reveal Animation
    // ========================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scroll for Anchor Links
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

    // Header Scroll Effect (Glassmorphism intensity)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0, 59, 115, 0.1)";
            header.style.background = "rgba(255, 255, 255, 0.98)";
        } else {
            header.style.boxShadow = "0 2px 8px rgba(0, 59, 115, 0.05)";
            header.style.background = "rgba(255, 255, 255, 0.95)";
        }
    });
});
