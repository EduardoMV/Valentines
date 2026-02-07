# 💝 Landing Page Interactiva - Propuesta de San Valentín

Una landing page ultra-responsiva, interactiva y romántica para una propuesta de San Valentín con diseño **Modern Soft UI** y **Glassmorphism**.

## ✨ Características Principales

### 🎨 Diseño Visual
- **Paleta de colores romántica**: Rosa milenial, lavanda, melocotón y tonos pastel cálidos
- **Gradiente animado**: Fondo que cambia suavemente en el Hero Section
- **Glassmorphism**: Efectos de cristal esmerilado en las tarjetas de la timeline
- **Soft UI**: Sombras suaves y bordes redondeados elegantes
- **Tipografías elegantes**: Playfair Display (títulos) e Inter (texto)

### 🎭 Secciones

#### 1. **Hero Section** (Pantalla Inicial)
- Gradiente animado con colores pastel (rosa milenial → lavanda → melocotón)
- Animación flotante de corazón latiendo (Lottie)
- Título elegante: "Tengo una pregunta importante..."
- Indicador de scroll animado
- Efecto flotante suave en background

#### 2. **Timeline - Nuestra Historia** (Scroll)
- Línea de tiempo minimalista vertical
- 3 hitos con tarjetas glassmorphism
- Fotos con efecto zoom en hover
- Fade-in animations al hacer scroll
- Diseño responsive con ajuste automático en móvil

#### 3. **La Gran Pregunta** (Footer/Cierre)
- Pregunta destacada: "¿Quieres ser mi San Valentín?"
- Contenedor con efecto glassmorphism
- Dos botones interactivos

### 🎯 Funcionalidades Interactivas

#### 🎉 **Botón SÍ**
- Color vibrante con gradiente
- Animación de pulso continuo
- Efecto hover con elevación
- Al hacer clic:
  - Explosión de confeti multicolor en toda la pantalla
  - Abre un modal con mensaje: "¡Sabía que dirías que sí! Te amo ❤️"
  - Animación de zoom del modal

#### 🏃 **Botón NO** (El Truco Creativo)
- Comportamiento esquivo inteligente
- En **Desktop**: Se aleja cuando el cursor se aproxima
- En **Mobile**: Se desplaza cuando el dedo se acerca
- Cambio de posición aleatoria con animación suave
- Sonido lúdico al intentar presionarlo
- Imposible de hacer clic (¡no hay escape! 😄)

### ✨ Micro-interacciones
- **Floating animations**: Elementos flotando suavemente
- **Fade-in effects**: Desvanecimiento elegante al hacer scroll
- **Hover effects**: Cambios suaves en interacción con elementos
- **Scroll reveal**: Las tarjetas aparecen conforme haces scroll
- **Pulse animation**: Pulso continuo en el botón SÍ
- **Sound effects**: Sonido lúdico cuando intentas clicar NO

## 📱 Responsividad

Diseño **Mobile-First** completamente responsivo:
- ✅ **Móviles** (320px - 768px): Diseño vertical, botones apilados
- ✅ **Tablets** (769px - 1024px): Timeline ajustada
- ✅ **Desktop** (1025px+): Diseño completo con timeline alternada

## 🛠️ Tecnologías Utilizadas

### Front-end
- **HTML5**: Estructura semántica
- **CSS3**: 
  - Gradientes animados
  - Backdrop-filter (Glassmorphism)
  - Animaciones keyframe
  - Media queries responsive
  - CSS Grid & Flexbox
- **JavaScript Vanilla**: 
  - Detección de scroll
  - Event listeners (mouse/touch)
  - Web Audio API
  - Intersection Observer

### Librerías Externas
- **Lottie Web**: Animaciones JSON en 3D
  - Corazón latiendo
  - Animación de éxito en modal
- **Canvas Confetti**: Explosión de confeti
- **Google Fonts**: Playfair Display & Inter

## 📂 Estructura de Archivos

```
Valentine/
├── index.html       # Estructura HTML
├── styles.css       # Estilos CSS (completos)
├── script.js        # Lógica JavaScript interactiva
├── server.py        # Servidor HTTP local (opcional)
└── README.md        # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Servidor Local (Recomendado)

```bash
# Navega a la carpeta del proyecto
cd c:\Users\eduum\OneDrive\Desktop\Valentine

# Ejecuta el servidor Python
python server.py

# Se abrirá automáticamente en http://localhost:8000
```

### Opción 2: Abrir directamente
- Simplemente abre `index.html` en tu navegador

### Opción 3: Usar un servidor web (Node.js)
```bash
# Si tienes Node.js instalado
npx http-server
```

## 🎮 Interacción

1. **Carga la página**: Verás el Hero Section con animación de corazón
2. **Haz scroll hacia abajo**: La timeline aparecerá con efectos fade-in
3. **Continúa scrolling**: Llega a la pregunta final
4. **Haz clic en SÍ**: 
   - 🎉 Explosión de confeti
   - 💬 Modal aparece con mensaje romántico
5. **Intenta hacer clic en NO**:
   - 🏃 El botón se escapa
   - 😄 Es imposible presionarlo
   - 🔊 Sonido lúdico

## 🎨 Personalización

### Cambiar Colores
En `styles.css`, modifica las variables CSS:
```css
:root {
    --primary-pink: #FF6B9D;        /* Cambiar color principal */
    --soft-pink: #FFB6D9;
    --lavender: #D4A5E0;
    /* ... más colores */
}
```

### Cambiar Textos
En `index.html`, edita:
- Título del hero: `<h1 class="hero-title">`
- Hitos de la timeline
- La pregunta final
- Mensaje del modal

### Cambiar Imágenes
En las etiquetas `<img>`, reemplaza las URLs de Unsplash con tus propias fotos:
```html
<img src="https://your-image-url.jpg" alt="Descripción">
```

### Ajustar Animaciones
- **Velocidad de gradiente**: En `.hero`, modifica `animation: gradientShift 15s` (más/menos segundos)
- **Velocidad de flotación**: Busca `@keyframes float` y modifica `6s`
- **Duración de transiciones**: Cambia `transition: all 0.3s ease;`

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexión a internet (para las fuentes de Google y Lottie)

## 📱 Navegadores Soportados

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## ♿ Accesibilidad

- ✅ Navegación por teclado (Tab)
- ✅ Focus indicators visibles
- ✅ Etiquetas semánticas HTML
- ✅ Contraste de colores adecuado
- ✅ Alt text en imágenes

## 🎁 Easter Egg

Intenta presionar la secuencia **Konami Code**:
- ⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A

¡Sorpresa! 🎉

## 📝 Notas Técnicas

### Confeti
- Usa Canvas Confetti CDN
- Burst personalizado con 3 ráfagas de confeti
- Colores coordinados con la paleta
- Efecto realista de gravedad

### Botón NO Evasivo
- Detección de distancia de mouse
- Cálculo de ángulo opuesto
- Límites de pantalla respetados
- Detección automática de dispositivo móvil
- Suavidad en transiciones CSS

### Glassmorphism
- Backdrop-filter con blur(10px)
- Borde semi-transparente
- Prefijo -webkit- para compatibilidad
- Degradación elegante en navegadores antiguos

## 🚨 Solución de Problemas

### Las animaciones se ven lentas
- Verifica la aceleración por hardware en tu navegador
- Intenta cerrar otras pestañas pesadas
- Comprueba la velocidad de tu conexión a internet

### El confeti no aparece
- Asegúrate de que JavaScript está habilitado
- Comprueba que las librerías externas se cargan (abre DevTools → Red)
- Intenta refrescar la página

### El botón NO no se escapa en móvil
- Es normal si usas eventos touch
- El botón se escapa más agresivamente en pantallas pequeñas
- Intenta acercarte más con tu dedo

### Las imágenes no cargan
- Verifica tu conexión a internet
- Las imágenes usan Unsplash CDN
- Puedes reemplazarlas con URLs locales

## 💡 Mejoras Futuras Posibles

- [ ] Agregar música de fondo (con control de volumen)
- [ ] Más animaciones Lottie personalizadas
- [ ] Galería de fotos expandible
- [ ] Contador de días juntos
- [ ] Efectos de partículas personalizados
- [ ] Versión dark mode
- [ ] Integración con redes sociales para compartir

## 📄 Licencia

Este proyecto es creado con ❤️ para propuestas románticas.

---

**¡Buena suerte con tu propuesta de San Valentín! 💕**

Hecho con amor y código. 💻✨
