// ========================================
//  PC Lagbe? / Zenfa AI — Main JS
// ========================================

import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Particle Canvas Hero ─────────────────────────────
function initHeroCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animFrameId;
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 140;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                r: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < CONNECTION_DIST) {
                    const alpha = (1 - dist / CONNECTION_DIST) * 0.15;
                    ctx.strokeStyle = `rgba(110, 225, 201, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        // Particles
        for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(110, 225, 201, ${p.opacity})`;
            ctx.fill();

            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Wrap
            if (p.x < 0) p.x = canvas.width;
            if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height;
            if (p.y > canvas.height) p.y = 0;
        }

        animFrameId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });
}

// ─── Navbar Scroll Effect ─────────────────────────────
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile toggle
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            links.classList.toggle('active');
        });
        // Close menu on link click
        links.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                links.classList.remove('active');
            });
        });
    }
}

// ─── GSAP Scroll Reveals ──────────────────────────────
function initScrollReveal() {
    // Section headers
    gsap.utils.toArray('.section-header').forEach((header) => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%',
                once: true,
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        });
    });

    // Data-reveal elements
    gsap.utils.toArray('[data-reveal]').forEach((el, i) => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                once: true,
                onEnter: () => el.classList.add('revealed'),
            },
        });
        // Add stagger delay based on sibling index
        const siblings = el.parentElement.querySelectorAll('[data-reveal]');
        const idx = Array.from(siblings).indexOf(el);
        el.style.transitionDelay = `${idx * 0.12}s`;
    });

    // Hero entrance animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' });
        gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
        gsap.from('.hero-subtitle', { y: 25, opacity: 0, duration: 0.7, delay: 0.6, ease: 'power3.out' });
        gsap.from('.hero-actions', { y: 20, opacity: 0, duration: 0.7, delay: 0.8, ease: 'power3.out' });
        gsap.from('.hero-stats', { y: 20, opacity: 0, duration: 0.7, delay: 1.0, ease: 'power3.out' });
        gsap.from('.hero-scroll-indicator', { opacity: 0, duration: 1, delay: 1.4, ease: 'power2.out' });
    }

    // Steps stagger
    gsap.utils.toArray('.step').forEach((step, i) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 85%',
                once: true,
            },
            x: -30,
            opacity: 0,
            duration: 0.7,
            delay: i * 0.15,
            ease: 'power3.out',
        });
    });
}

// ─── Budget Slider ────────────────────────────────────
function initBudgetSlider() {
    const slider = document.getElementById('budgetSlider');
    const display = document.getElementById('budgetValue');
    if (!slider || !display) return;

    function formatBDT(val) {
        return '৳ ' + Number(val).toLocaleString('en-IN');
    }

    slider.addEventListener('input', () => {
        display.textContent = formatBDT(slider.value);
        // Update slider fill
        const pct = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
        slider.style.background = `linear-gradient(to right, #4f9e97 0%, #6ee1c9 ${pct}%, rgba(255,255,255,0.08) ${pct}%)`;
    });

    // Init fill
    slider.dispatchEvent(new Event('input'));
}

// ─── Purpose Toggles ─────────────────────────────────
function initPurposeToggles() {
    const btns = document.querySelectorAll('.purpose-btn');
    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            btns.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

// ─── Waitlist Counter Animation ───────────────────────
function initWaitlistCounter() {
    const counter = document.getElementById('waitlistCounter');
    if (!counter) return;

    // Seed number + localStorage increment
    const SEED = 873;
    let stored = parseInt(localStorage.getItem('pclagbe_wl') || '0', 10);
    const target = SEED + stored;

    // Animate counting up
    ScrollTrigger.create({
        trigger: counter,
        start: 'top 90%',
        once: true,
        onEnter: () => {
            gsap.to({ val: 0 }, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                onUpdate: function () {
                    counter.textContent = Math.round(this.targets()[0].val).toLocaleString();
                },
            });
        },
    });
}

// ─── Waitlist Form (simple handler) ───────────────────
function initWaitlistForm() {
    const form = document.getElementById('waitlistForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('waitlistEmail').value;
        if (!email) return;

        // Increment local counter
        let stored = parseInt(localStorage.getItem('pclagbe_wl') || '0', 10);
        stored++;
        localStorage.setItem('pclagbe_wl', stored.toString());

        // Update counter display
        const counter = document.getElementById('waitlistCounter');
        if (counter) {
            const current = parseInt(counter.textContent.replace(/,/g, ''), 10) || 873;
            counter.textContent = (current + 1).toLocaleString();
        }

        // Visual feedback
        const btn = form.querySelector('.btn-cta');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '✓ You\'re on the list!';
        btn.style.background = '#22c55e';
        btn.disabled = true;
        document.getElementById('waitlistEmail').value = '';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.disabled = false;
        }, 3000);

        // In production, you'd also POST to Formspree/your API here.
        // For now it's local-only.
    });
}

// ─── Smooth Scroll for Anchor Links ──────────────────
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                const offset = 80; // Navbar height
                const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
}

// ─── Initialize Everything ────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    initNavbar();
    initScrollReveal();
    initBudgetSlider();
    initPurposeToggles();
    initWaitlistCounter();
    initWaitlistForm();
    initSmoothScroll();
    console.log('🚀 PC Lagbe? — Promo site initialized');
});
