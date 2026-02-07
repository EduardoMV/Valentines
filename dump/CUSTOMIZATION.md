# Different color styles

:root {
    /*  Vibrant */
    --primary-pink: #FF1493;           /* Rosa intenso */
    --soft-pink: #FF69B4;              /* Rosa caliente */
    --light-pink: #FFB6C1;             /* Rosa suave */
    --lavender: #9370DB;               /* Púrpura */
    --light-lavender: #DDA0DD;         /* Púrpura claro */
    --peach: #FF8C69;                  /* Durazno intenso */
    --light-peach: #FFCCCB;            /* Durazno claro */
    --cream: #FFF5EE;                  /* Crema */
    --white: #FFFFFF;
    --dark-text: #1A1A2E;              /* Azul oscuro */
    --medium-text: #5A5A8A;            /* Azul medio */
}

/* Vanilla Sweet */

:root {
    --primary-pink: #E8B4D4;           /* Rosa pastel */
    --soft-pink: #F0D4E8;              /* Rosa muy suave */
    --light-pink: #F8E8F0;             /* Rosa pálido */
    --lavender: #D4C4E8;               /* Lavanda suave */
    --light-lavender: #E8DDF8;         /* Lavanda muy clara */
    --peach: #F8D4C4;                  /* Melocotón suave */
    --light-peach: #FFF0E8;            /* Melocotón muy claro */
    --cream: #FFFBF8;                  /* Crema casi blanca */
    --white: #FFFFFF;
    --dark-text: #5A4A6A;              /* Marrón oscuro */
    --medium-text: #8A7A9A;            /* Marrón medio */
}

<!-- ============================================
     2. CAMBIAR TEXTOS
     ============================================ -->

<!-- En index.html, modifica estos elementos: -->

<!-- Hero Title -->
<h1 class="hero-title">Te amo ❤️</h1>
<!-- O -->
<h1 class="hero-title">Eres lo mejor que me pasó</h1>

<!-- Hero Subtitle -->
<p class="hero-subtitle">Descubre porque quiero estar contigo siempre</p>

<!-- Timeline Items -->
<h3>Nuestro Primer Encuentro</h3>
<p>Era un día lluvioso cuando nos conocimos en el café. No sabía que era el inicio de la mejor historia de mi vida.</p>
<span class="timeline-date">14 de Febrero de 2024</span>

<!-- Question Title -->
<h2 class="question-title">¿Quieres ser mi pareja oficial?</h2>

<!-- Question Subtitle -->
<p class="question-subtitle">No hay regalo más valioso que tenerte a mi lado. ¿Me harías el honor?</p>

<!-- Modal Text -->
<h2>¡Eres la mejor decisión que pude tomar!</h2>
<p>Te prometo amarte cada día más. Contigo quiero todo: los grandes momentos y los pequeños detalles.</p>

<!-- ============================================
     3. CAMBIAR IMÁGENES
     ============================================ -->

<!-- Reemplaza las URLs en las etiquetas <img> -->

<!-- Opción A: Usar imágenes de Unsplash (gratis, sin registro) -->
<img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop" alt="Nuestro primer encuentro">

<!-- Opción B: Usar imágenes de Pexels (gratis, sin registro) -->
<img src="https://images.pexels.com/photos/2873866/pexels-photo-2873866.jpeg?w=400&h=300&fit=crop" alt="Momentos especiales">

<!-- Opción C: Usar imágenes locales -->
<img src="/images/nuestro-primer-encuentro.jpg" alt="Nuestro primer encuentro">
<img src="/images/momentos-especiales.jpg" alt="Momentos especiales">
<img src="/images/futuro-juntos.jpg" alt="El futuro juntos">

<!-- Opción D: Usar imágenes de Google Drive (con link compartible) -->
<img src="https://drive.google.com/uc?id=TU_ID_DE_ARCHIVO" alt="Nuestro encuentro">

<!-- ============================================
     4. CAMBIAR ANIMACIONES LOTTIE
     ============================================ -->

<!-- Encuentra animaciones en lottiefiles.com -->
<!-- Copia el URL de la animación que te guste -->

<!-- Ejemplo: Rosas cayendo -->


<!-- ============================================
     5. AJUSTAR VELOCIDADES DE ANIMACIÓN
     ============================================ -->

/* En styles.css, modifica estos valores: */

/* Gradiente del Hero más rápido o lento */
@keyframes gradientShift {
    /* Cambiar 15s a 20s para más lento, 10s para más rápido */
    animation: gradientShift 20s ease infinite;
}

/* Flotación más pronunciada */
@keyframes float {
    0%, 100% {
        transform: translateY(0px);       /* Cambiar para menos movimiento */
    }
    50% {
        transform: translateY(-50px);     /* Cambiar a -50px para más movimiento */
    }
}

/* Corazón latiendo más rápido */
@keyframes floatingHeart {
    /* Cambiar 3s a valores menores para más rápido */
    animation: floatingHeart 2s ease-in-out infinite;
}

/* Fade-in de scroll más lento o rápido */
@keyframes fadeInUp {
    /* Cambiar 1s a 0.5s para más rápido, 1.5s para más lento */
    animation: fadeInUp 0.5s ease-out;
}

<!-- ============================================
     6. AGREGAR MÁS HITOS EN LA TIMELINE
     ============================================ -->

<!-- Copia este bloque y modifica los números -->

<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content glassmorphism">
        <div class="timeline-image">
            <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop" alt="Nuestro viaje">
        </div>
        <div class="timeline-text">
            <h3>Nuestro Viaje a...</h3>
            <p>Recuerdo cada momento de ese viaje. Conocerte en diferentes lugares me hizo amarte más.</p>
            <span class="timeline-date">Verano 2024</span>
        </div>
    </div>
</div>

<!-- ============================================
     7. CAMBIAR EFECTOS DE CONFETI
     ============================================ -->

/* En script.js, modifica la función triggerConfetti */

function triggerConfetti() {
    // Confeti más abundante
    confetti({
        particleCount: 200,              /* Aumentar para más confeti */
        spread: 90,                      /* Aumentar para más dispersión */
        origin: { y: 0.6 },
        colors: ['#FF6B9D', '#FFB6D9', '#D4A5E0', '#FDBEA8', '#FFE5D9'],
        gravity: 1.2,                    /* Aumentar para caída más rápida */
        scalar: 1.5                      /* Aumentar para partículas más grandes */
    });
}

<!-- ============================================
     8. AGREGAR MÚSICA DE FONDO
     ============================================ -->

<!-- Agrega en el <body> de index.html -->
<audio id="bgMusic" autoplay loop>
    <source src="https://tu-musica-url.mp3" type="audio/mpeg">
    Tu navegador no soporta audio HTML5.
</audio>

<!-- En script.js, agrega control: -->
<script>
    // Control de volumen de música
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3;  // 30% de volumen
    
    // Opcional: Pausar música si el usuario lo prefiere
    // bgMusic.play(); // Algunos navegadores requieren interacción del usuario
</script>

<!-- ============================================
     9. CAMBIAR EL COMPORTAMIENTO DEL BOTÓN NO
     ============================================ -->

/* En script.js, modifica estas variables */

function initializeNoButton() {
    const noBtn = document.getElementById('noBtn');
    let mouseDistance = 150;  /* Cambiar a 200 para mayor sensibilidad */
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // ... resto del código
}

/* Cambiar distancia de movimiento */
function moveButtonAwayFromMouse(mouseX, mouseY) {
    // ...
    const distance = 150 + Math.random() * 100;  /* Cambiar 150 y 100 */
    // ...
}

<!-- ============================================
     10. PERSONALIZACIÓN AVANZADA - TEMA OSCURO
     ============================================ -->

/* Agrega al final de styles.css */

@media (prefers-color-scheme: dark) {
    :root {
        --cream: #1A1A2E;
        --white: #2A2A4E;
        --dark-text: #FFFFFF;
        --medium-text: #D0C0E0;
    }
    
    body {
        background: linear-gradient(135deg, #1A1A2E 0%, #0F0F1E 50%, #1A1A2E 100%);
    }
}

<!-- ============================================
     11. AGREGAR CONTADOR DE DÍAS JUNTOS
     ============================================ -->

<!-- En index.html, en la sección hero-subtitle -->
<p class="hero-subtitle">Llevamos <span id="daysCounter">0</span> días juntos</p>

<!-- En script.js, agrega esta función -->
<script>
    function calculateDaysTogether() {
        const startDate = new Date('2022-02-14');  // Cambia a tu fecha
        const today = new Date();
        const diffTime = Math.abs(today - startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        document.getElementById('daysCounter').textContent = diffDays;
    }
    
    calculateDaysTogether();
</script>

<!-- ============================================
     12. AGREGAR FORMULARIO O GALERÍA
     ============================================ -->

<!-- Para agregar una galería de fotos expandible: -->

<div class="gallery">
    <div class="gallery-item" onclick="openImage(this)">
        <img src="/images/foto1.jpg" alt="Foto 1">
    </div>
    <div class="gallery-item" onclick="openImage(this)">
        <img src="/images/foto2.jpg" alt="Foto 2">
    </div>
    <!-- Más items... -->
</div>

<!-- Modal para galería -->
<div class="gallery-modal" id="galleryModal">
    <img id="enlargedImage" src="" alt="">
    <button onclick="closeGallery()">×</button>
</div>

<!-- ============================================
     NOTAS IMPORTANTES
     ============================================ -->

/*
    - Siempre guarda un backup antes de hacer cambios
    - Prueba los cambios en diferentes navegadores
    - Recarga la página con Ctrl+Shift+R para limpiar cache
    - Las imágenes de Unsplash requieren conexión a internet
    - Los colores deben ser visibles en móvil (contraste suficiente)
    - Las animaciones muy lentas pueden verse arrastradas en móviles viejos
    - Prueba en dispositivo real si es posible
*/
