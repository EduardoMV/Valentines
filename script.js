// ============================================
// INTERACTIVE ELEMENTS & EVENT LISTENERS
// ============================================

// Wait for Lottie to load
window.addEventListener('load', function() {
    initializeScrollAnimations();
    initializeYesButton();
    initializeNoButton();
    initializeModal();
    initializeAccessibility();
});

// Fallback in case DOMContentLoaded fires first
document.addEventListener('DOMContentLoaded', function() {
    if (document.readyState === 'loading') return; // Wait for load event
    initializeScrollAnimations();
    initializeYesButton();
    initializeNoButton();
    initializeModal();
    initializeAccessibility();
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initializeScrollAnimations() {
    const reveals = document.querySelectorAll('.timeline-item, .question-container, .reveal');
    
    function checkReveal() {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Add active class on load
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check
}

// ============================================
// YES BUTTON - CONFETTI & MODAL
// ============================================

function initializeYesButton() {
    const yesBtn = document.getElementById('yesBtn');
    let hasBeenClicked = false;
    
    yesBtn.addEventListener('click', function() {
        if (hasBeenClicked) return; // Prevent multiple clicks
        hasBeenClicked = true;
        
        // Trigger confetti
        triggerConfetti();
        
        // Show modal after a short delay
        setTimeout(() => {
            showModal();
        }, 300);
        
        // Add visual feedback
        yesBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            yesBtn.style.transform = 'scale(1)';
        }, 200);
    });
}

function triggerConfetti() {
    // Main burst
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6B9D', '#FFB6D9', '#D4A5E0', '#FDBEA8', '#FFE5D9']
    });
    
    // Secondary bursts from sides
    setTimeout(() => {
        confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors: ['#FF6B9D', '#D4A5E0']
        });
        
        confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors: ['#FFB6D9', '#FDBEA8']
        });
    }, 200);
    
    // Additional floating confetti
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 100,
                startVelocity: 30,
                origin: { y: 0.5 },
                colors: ['#FF6B9D', '#FFB6D9', '#D4A5E0', '#FDBEA8', '#FFE5D9']
            });
        }, i * 150);
    }
}

// ============================================
// NO BUTTON - EVASIVE BEHAVIOR
// ============================================

function initializeNoButton() {
    const noBtn = document.getElementById('noBtn');
    let mouseDistance = 250; // Distance threshold to trigger evasion (pixels)
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // For desktop: mouse move detection
    if (!isMobile) {
        document.addEventListener('mousemove', function(e) {
            const buttonRect = noBtn.getBoundingClientRect();
            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;
            
            const distX = e.clientX - buttonCenterX;
            const distY = e.clientY - buttonCenterY;
            const distance = Math.sqrt(distX * distX + distY * distY);
            
            // Si entra en el radar, inicia la huida
            if (distance < mouseDistance) {
                moveButtonAwayFromMouse(e.clientX, e.clientY);
            }
        });
    }
    
    // For mobile: touch detection
    document.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const buttonRect = noBtn.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        
        const distX = touch.clientX - buttonCenterX;
        const distY = touch.clientY - buttonCenterY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < mouseDistance + 50) {
            moveButtonAwayFromTouch(touch.clientX, touch.clientY);
        }
    });
    
    // Prevent actual click
    noBtn.addEventListener('mouseenter', function() {
        moveButtonRandom();
        playEvasionSound();
    });

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        moveButtonRandom();
    });
}

function moveButtonAwayFromMouse(mouseX, mouseY) {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.question-container');
    const buttonRect = noBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // 1. Obtener la posición actual del botón relativa al contenedor
    let currentX, currentY;
    
    // Si ya es absoluto, usamos sus coordenadas top/left
    if (noBtn.style.position === 'absolute') {
        currentX = parseFloat(noBtn.style.left);
        currentY = parseFloat(noBtn.style.top);
    } else {
        // Si es la primera vez (está en relative/static dentro del flexbox),
        // calculamos dónde está visualmente respecto al contenedor padre
        currentX = buttonRect.left - containerRect.left;
        currentY = buttonRect.top - containerRect.top;
    }

    const buttonCenterX = currentX + buttonRect.width / 2;
    const buttonCenterY = currentY + buttonRect.height / 2;
    
    // 2. Obtener posición del mouse relativa al contenedor
    const mouseCenterX = mouseX - containerRect.left;
    const mouseCenterY = mouseY - containerRect.top;
    
    // 3. Calcular ángulo para huir (Delta)
    const angleToMouse = Math.atan2(mouseCenterY - buttonCenterY, mouseCenterX - buttonCenterX);
    const angleAwayFromMouse = angleToMouse + Math.PI;
    
    // 4. Calcular nueva posición
    const distance = 100 + Math.random() * 50; // Distancia de huida
    const newX = currentX + Math.cos(angleAwayFromMouse) * distance;
    const newY = currentY + Math.sin(angleAwayFromMouse) * distance;
    
    moveButtonTo(newX, newY);
}

// Misma lógica para Touch (Móvil)
function moveButtonAwayFromTouch(touchX, touchY) {
    // Reutilizamos la lógica de mouse pasando las coordenadas del touch
    moveButtonAwayFromMouse(touchX, touchY); 
}

function moveButtonTo(x, y) {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.question-container');
    
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Límites para que no se salga del contenedor (padding de seguridad de 20px)
    const maxX = containerRect.width - btnWidth - 20;
    const maxY = containerRect.height - btnHeight - 20;
    
    // Math.max(20, ...) asegura que no se salga por la izquierda/arriba
    // Math.min(..., maxX) asegura que no se salga por derecha/abajo
    const finalX = Math.max(20, Math.min(x, maxX));
    const finalY = Math.max(20, Math.min(y, maxY));
    
    // APLICAMOS POSITION ABSOLUTE
    // Esto lo saca del .buttons-container y lo hace hijo directo visualmente del .question-container
    noBtn.style.position = 'absolute';
    noBtn.style.left = finalX + 'px';
    noBtn.style.top = finalY + 'px';
    
    // Quitamos márgenes para evitar desfases
    noBtn.style.margin = '0';
    
    // Transición suave (puedes ajustar la velocidad aquí)
    noBtn.style.transition = 'all 0.2s ease-out';
}

function moveButtonRandom() {
    const noBtn = document.getElementById('noBtn');
    const container = document.querySelector('.question-container');
    const containerRect = container.getBoundingClientRect();
    
    // Generate random position within the container
    const maxX = containerRect.width - noBtn.offsetWidth - 20;
    const maxY = containerRect.height - noBtn.offsetHeight - 20;
    
    const randomX = Math.random() * Math.max(maxX, 10);
    const randomY = Math.random() * Math.max(maxY, 10);
    
    moveButtonTo(randomX, randomY);
}

function playEvasionSound() {
    // Create a fun little beep sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600 + Math.random() * 200;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function initializeModal() {
    const closeBtn = document.getElementById('closeModalBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
}

function showModal() {
    const modal = document.getElementById('successModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    modal.classList.add('active');
    modalOverlay.classList.add('active');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('successModal');
    const modalOverlay = document.getElementById('modalOverlay');
    
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
    
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// ============================================
// ACCESSIBILITY FEATURES
// ============================================

function initializeAccessibility() {
    // Keyboard navigation
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    // Enable tab navigation for both buttons
    yesBtn.setAttribute('tabindex', '0');
    noBtn.setAttribute('tabindex', '0');
    
    // Keyboard support for Yes button
    yesBtn.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            yesBtn.click();
        }
    });
    
    // Add focus styles
    const style = document.createElement('style');
    style.textContent = `
        .btn:focus {
            outline: 3px solid var(--primary-pink);
            outline-offset: 2px;
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// ENHANCED SCROLL REVEAL WITH INTERSECTION OBSERVER
// ============================================

// Modern approach using Intersection Observer for better performance
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item, .question-container, .reveal').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// RESPONSIVE NO BUTTON BEHAVIOR
// ============================================

// Adjust mouse distance threshold for different screen sizes
function adjustNoButtonSensitivity() {
    const width = window.innerWidth;
    let mouseDistance;
    
    if (width < 768) {
        mouseDistance = 150;
    } else if (width < 1024) {
        mouseDistance = 120;
    } else {
        mouseDistance = 100;
    }
}

window.addEventListener('resize', adjustNoButtonSensitivity);
adjustNoButtonSensitivity();

// ============================================
// SMOOTH ANIMATIONS ON LOAD
// ============================================

window.addEventListener('load', function() {
    // Add loaded class to trigger animations
    document.body.classList.add('loaded');
});

// ============================================
// PARALLAX EFFECT (Optional Enhancement)
// ============================================

function initializeParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });
}

function moveSlide(button, direction) {
    const container = button.parentElement;
    const slides = container.querySelectorAll('.carousel-slide');
    
    let activeIndex = 0;
    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
            slide.classList.remove('active'); // La apagamos
        }
    });
    
    let newIndex = (activeIndex + direction + slides.length) % slides.length;
    
    slides[newIndex].classList.add('active');
}

window.addEventListener('load', function() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        setInterval(() => {
            const nextBtn = carousel.querySelector('.next');
            if(nextBtn) nextBtn.click();
        }, 3000); // 3000ms = 3 segundos
    });
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // Efecto "Ease Out" (rápido al inicio, lento al final)
        const easeOutQuad = 1 - Math.pow(1 - progress, 3);
        
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            obj.innerHTML = end; // Asegurar número exacto al final
        }
    };
    window.requestAnimationFrame(step);
}

function initializeDaysCounter() {
    const startDate = new Date('2024-09-23');
    const today = new Date();
    
    // Calcular diferencia
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    const counterElement = document.getElementById('daysCounter');
    
    // Iniciar animación (dura 2.5 segundos)
    animateValue(counterElement, 0, diffDays, 2500);
}

// Agregar a tu evento 'load' existente:
window.addEventListener('load', function() {
    // ... tus otras funciones ...
    initializeDaysCounter();
});

window.addEventListener('load', function() {
    const audio = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    // Volumen inicial bajo para no asustar (0.0 a 1.0)
    audio.volume = 0.4; 

    function toggleMusic() {
        if (isPlaying) {
            audio.pause();
            musicBtn.innerHTML = '🔇'; // Icono de mute
            musicBtn.classList.add('muted');
        } else {
            audio.play();
            musicBtn.innerHTML = '🎵'; // Icono de música
            musicBtn.classList.remove('muted');
        }
        isPlaying = !isPlaying;
    }

    // 1. Intentar reproducir automáticamente
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Si funcionó el autoplay
            isPlaying = true;
            musicBtn.innerHTML = '🎵';
        })
        .catch(error => {
            // Si el navegador bloqueó el autoplay (muy probable)
            console.log("Autoplay bloqueado. Esperando interacción...");
            isPlaying = false;
            musicBtn.innerHTML = '🔇';
            musicBtn.classList.add('muted');
            
            // 2. Esperar al primer clic en CUALQUIER lugar para iniciar
            document.body.addEventListener('click', function() {
                if (!isPlaying) {
                    audio.play();
                    isPlaying = true;
                    musicBtn.innerHTML = '🎵';
                    musicBtn.classList.remove('muted');
                }
            }, { once: true }); // Se ejecuta solo una vez
        });
    }

    // 3. Control manual con el botón
    musicBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evitar que dispare otros eventos
        toggleMusic();
    });
});

// Initialize parallax on scroll
initializeParallax();

// ============================================
// EASTER EGG: konami code
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    const key = e.key;
    
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            triggerConfetti(); // Surprise confetti!
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});
