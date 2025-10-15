// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Booking form handling
const bookingForm = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        message: document.getElementById('message').value
    };

    // Format the message for WhatsApp
    const whatsappMessage = `
🚗 *Nouvelle Demande de Rendez-vous*

👤 *Nom:* ${formData.name}
📱 *Téléphone:* ${formData.phone}
📧 *Email:* ${formData.email || 'Non fourni'}
🔧 *Service:* ${formData.service}
📅 *Date:* ${formData.date}
🕐 *Heure:* ${formData.time}
💬 *Message:* ${formData.message || 'Aucun message'}
    `.trim();

    // WhatsApp number (replace with actual number)
    const whatsappNumber = '212672057286';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Show success message
    formMessage.className = 'form-message success';
    formMessage.textContent = 'Demande envoyée ! Redirection vers WhatsApp...';

    // Redirect to WhatsApp after 1.5 seconds
    setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        bookingForm.reset();
        
        // Hide message after 3 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 3000);
    }, 1500);
});

// Animate elements on scroll
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

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Observe gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Gallery lightbox effect (simple version)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                animation: fadeIn 0.3s ease;
            }
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .lightbox-content img {
                width: 100%;
                height: auto;
                border-radius: 10px;
            }
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                font-size: 40px;
                color: white;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            .lightbox-close:hover {
                color: #dc2626;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
            style.remove();
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
                style.remove();
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Form validation
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    // Remove non-numeric characters
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid var(--primary-red)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = 'none';
    });
});

// Counter animation for experience badge (if visible)
const experienceBadge = document.querySelector('.badge-number');
if (experienceBadge) {
    const observeBadge = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(experienceBadge, 15, 2000);
                observeBadge.unobserve(entry.target);
            }
        });
    });
    observeBadge.observe(experienceBadge);
}

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + '+';
        }
    }, 16);
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.scrollY;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

console.log('🚗 Garage Auto Pro Marrakech - Website Loaded Successfully!');
