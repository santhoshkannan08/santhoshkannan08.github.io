// Enhanced Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Enhanced Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Enhanced Navbar background change on scroll with parallax effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '1px solid rgba(78, 205, 196, 0.2)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    }
    
    // Smooth navbar effect without parallax
    // Removed parallax to fix scrolling glitches
});

// Enhanced Form submission handling with dark theme styling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Enhanced validation with visual feedback
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show success message with dark theme styling
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
        
        // Add visual feedback
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = 'Message Sent!';
        submitBtn.style.background = 'linear-gradient(45deg, #4ecdc4, #45b7d1)';
        
        setTimeout(() => {
            submitBtn.innerHTML = 'Send Message';
            submitBtn.style.background = 'linear-gradient(45deg, #ff6b6b, #ff8e8e)';
        }, 3000);
    });
}

// Custom notification system for dark theme
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add dark theme styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(45deg, #4ecdc4, #45b7d1)' : 'linear-gradient(45deg, #ff6b6b, #ff8e8e)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    });
}

// Enhanced Intersection Observer for smooth animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for skill items
            if (entry.target.classList.contains('skill-category')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Enhanced element observation with staggered animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .about-stats .stat');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        // Add staggered delay for different element types
        if (el.classList.contains('skill-category')) {
            el.style.transitionDelay = '0.2s';
        } else if (el.classList.contains('project-card')) {
            el.style.transitionDelay = '0.4s';
        }
        
        observer.observe(el);
    });
    
    // Initialize skill items with staggered animation
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = 'all 0.6s ease';
        item.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Removed typing effect to fix HTML rendering issue
// Hero title now displays properly with highlight span

// Enhanced hover effects with dark theme
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px) scale(1.08)';
        this.style.background = 'rgba(78, 205, 196, 0.15)';
        this.style.borderColor = '#4ecdc4';
        this.style.boxShadow = '0 10px 25px rgba(78, 205, 196, 0.2)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.background = 'rgba(255, 255, 255, 0.05)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        this.style.boxShadow = 'none';
    });
});

// Enhanced click effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        // Add enhanced click effect
        this.style.transform = 'scale(0.95) rotate(1deg)';
        this.style.boxShadow = '0 15px 35px rgba(78, 205, 196, 0.3)';
        
        setTimeout(() => {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4)';
        }, 200);
    });
});

// Enhanced smooth reveal animation for sections
function revealOnScroll() {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
            
            // Add glow effect when section comes into view
            section.style.boxShadow = '0 0 50px rgba(78, 205, 196, 0.1)';
        }
    });
}

// Initialize enhanced section animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.hero)');
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        section.style.boxShadow = 'none';
    });
    
    // Trigger initial reveal
    revealOnScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
});

// Enhanced loading animation with dark theme
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
        
        // Add subtle glow effect to body
        document.body.style.boxShadow = 'inset 0 0 100px rgba(78, 205, 196, 0.05)';
    }, 100);
});

// Enhanced counter animation with dark theme styling
function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + '+';
                
                // Add pulse effect during counting
                counter.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 100);
                
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target + '+';
                // Final celebration effect
                counter.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    counter.style.transform = 'scale(1)';
                }, 200);
            }
        };
        
        updateCounter();
    });
}

// Trigger enhanced counter animation
const aboutSection = document.querySelector('#about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                aboutObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    aboutObserver.observe(aboutSection);
}

// Add custom cursor effect for dark theme
document.addEventListener('DOMContentLoaded', () => {
    // Only create custom cursor on desktop
    if (!('ontouchstart' in window)) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
        });
    } else {
        // Show default cursor on mobile
        document.body.style.cursor = 'auto';
    }
});

// Removed parallax effects to fix scrolling glitches
// Elements now have smooth animations without scroll interference

// Add glow effect on hover for interactive elements
document.querySelectorAll('.btn, .skill-item, .project-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 30px rgba(78, 205, 196, 0.3)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// Enhanced mobile menu animations
document.querySelectorAll('.nav-link').forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-20px)';
    link.style.transition = 'all 0.3s ease';
    link.style.transitionDelay = `${index * 0.1}s`;
    
    // Animate in when menu opens
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    observer.observe(link);
});
