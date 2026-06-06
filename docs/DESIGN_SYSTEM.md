# Design System — Estudio Jurídico Integral
 
Documento de referencia para decisiones visuales y de experiencia de usuario.
Todo componente nuevo debe respetar estas definiciones antes de consultar cualquier otra fuente.
 
---
 
## 1. Filosofía de diseño
 
El estudio trabaja con personas en momentos difíciles (familias, contratos, conflictos).
El sitio debe transmitir **confianza sin distancia**, **profesionalismo sin frialdad**.
 
Tres palabras que guían cada decisión visual:
> **Cálido. Claro. Confiable.**
 
---
 
## 2. Paleta de colores
 
```css
:root {
  /* Colores principales */
  --color-primary:    #5C4A3A; /* marrón tierra oscuro — navbar, titulares */
  --color-secondary:  #8B7355; /* marrón medio — acentos, separadores */
  --color-accent:     #6B7C5C; /* verde oliva — botones CTA, highlights */
 
  /* Fondos */
  --color-background: #F5F0E8; /* beige cálido — fondo de secciones alternas */
  --color-surface:    #FFFFFF; /* blanco puro — cards, formularios */
  --color-surface-alt:#EDE8DF; /* beige más oscuro — secciones de contraste suave */
 
  /* Texto */
  --color-text:       #2C2416; /* casi negro cálido — texto corrido */
  --color-text-light: #FFFFFF; /* blanco — texto sobre fondos oscuros */
  --color-muted:      #9E8E7A; /* gris tierra — texto secundario, placeholders */
 
  /* Estados */
  --color-success:    #4A7C59; /* verde para confirmación de formulario */
  --color-error:      #9B3A2A; /* rojo tierra para errores de validación */
  --color-border:     #D4C9B8; /* borde sutil para inputs y cards */
}
```
 
### Regla de uso
- Nunca hardcodear colores hexadecimales fuera de este archivo.
- Siempre referenciar mediante variables CSS: `color: var(--color-primary)`.
- Las secciones alternan entre `--color-background` y `--color-surface` para dar ritmo visual sin contraste agresivo.
---
 
## 3. Tipografía
 
### Fuentes
 
| Rol | Fuente | Peso | Uso |
|---|---|---|---|
| Display | `Cormorant Garamond` | 400, 600 | Titulares de sección (H1, H2) |
| Body | `Lato` | 300, 400, 700 | Párrafos, UI, labels, botones |
 
Importar en `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
```
 
### Escala tipográfica
 
```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Lato', 'Helvetica Neue', sans-serif;
 
  --text-xs:   0.75rem;   /* 12px — labels pequeños */
  --text-sm:   0.875rem;  /* 14px — texto secundario */
  --text-base: 1rem;      /* 16px — cuerpo de texto */
  --text-lg:   1.125rem;  /* 18px — destacados */
  --text-xl:   1.25rem;   /* 20px — subtítulos */
  --text-2xl:  1.5rem;    /* 24px — títulos de card */
  --text-3xl:  1.875rem;  /* 30px — H2 de sección */
  --text-4xl:  2.25rem;   /* 36px — H1 mobile */
  --text-5xl:  3rem;      /* 48px — H1 desktop */
  --text-6xl:  3.75rem;   /* 60px — Hero display */
 
  --leading-tight:  1.25;
  --leading-normal: 1.6;
  --leading-loose:  1.8;
}
```
 
### Reglas tipográficas
- H1 y H2 siempre en `Cormorant Garamond`. No usar para body ni UI.
- Lato para todo lo demás: párrafos, botones, nav, formularios.
- Peso 300 (light) solo para subtítulos o texto decorativo, nunca para cuerpo largo.
- Interlineado `1.6` para texto corrido. `1.25` para titulares.
---
 
## 4. Espaciado
 
```css
:root {
  --space-1:  0.25rem;  /*  4px */
  --space-2:  0.5rem;   /*  8px */
  --space-3:  0.75rem;  /* 12px */
  --space-4:  1rem;     /* 16px */
  --space-6:  1.5rem;   /* 24px */
  --space-8:  2rem;     /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```
 
Principio: **espaciado generoso**. Cuando dudes entre dos valores, elegí el mayor.
 
---
 
## 5. Bordes y radios
 
```css
:root {
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   12px;
  --radius-full: 9999px; /* pastillas / badges */
 
  --border-width: 1px;
  --border-color: var(--color-border);
}
```
 
- Cards: `--radius-md`
- Botones: `--radius-md`
- Inputs: `--radius-sm`
- Sin bordes redondeados agresivos (nada de `border-radius: 24px` en cards).
---
 
## 6. Sombras
 
```css
:root {
  --shadow-sm: 0 1px 3px rgba(44, 36, 22, 0.08);
  --shadow-md: 0 4px 12px rgba(44, 36, 22, 0.10);
  --shadow-lg: 0 8px 24px rgba(44, 36, 22, 0.12);
}
```
 
Sombras con tinte cálido (base `#2C2416`), nunca gris frío puro.
 
---
 
## 7. Experiencia de scroll — Full-Page Scroll con CSS Scroll Snap
 
### Decisión técnica
El sitio usa **CSS Scroll Snap** nativo del navegador.
**No se usa fullPage.js** (licencia paga) ni ninguna librería de scroll hijacking.
La solución es liviana, funciona en mobile sin problemas, y no agrega dependencias.
 
### Cómo funciona
El contenedor principal ocupa el 100% del viewport y cada sección también.
El navegador "engancha" el scroll al inicio de cada sección automáticamente.
 
```css
/* Contenedor principal — en App.jsx o layout wrapper */
.scroll-container {
  height: 100dvh;           /* dynamic viewport height — correcto en mobile */
  overflow-y: scroll;
  scroll-snap-type: y mandatory;  /* mandatory = enganche forzado */
  scroll-behavior: smooth;
}
 
/* Cada sección */
.scroll-section {
  height: 100dvh;
  scroll-snap-align: start;
  overflow: hidden;          /* evita que el contenido interno rompa el snap */
}
```
 
> **`100dvh` vs `100vh`**: En mobile, `100vh` incluye la barra del navegador y produce scroll indeseado. `100dvh` (dynamic viewport height) es el valor correcto para mobile-first. Soporte: todos los navegadores modernos desde 2022.
 
### Transición entre secciones
La animación suave viene de `scroll-behavior: smooth` en el contenedor.
Para un efecto más controlado, agregar también en el HTML raíz:
 
```css
html {
  scroll-behavior: smooth;
}
```
 
### Implementación en React
 
```jsx
// src/components/layout/ScrollContainer.jsx
const ScrollContainer = ({ children }) => (
  <div className="scroll-container">
    {children}
  </div>
);
 
// src/components/layout/ScrollSection.jsx
const ScrollSection = ({ id, children, className = '' }) => (
  <section
    id={id}
    className={`scroll-section ${className}`}
  >
    {children}
  </section>
);
```
 
```jsx
// src/App.jsx — estructura de uso
<ScrollContainer>
  <ScrollSection id="inicio">
    <Hero />
  </ScrollSection>
  <ScrollSection id="areas">
    <Areas />
  </ScrollSection>
  <ScrollSection id="equipo">
    <Equipo />
  </ScrollSection>
  <ScrollSection id="contacto">
    <Contacto />
  </ScrollSection>
</ScrollContainer>
```
 
### Navbar y anclas
La navbar usa `href="#inicio"`, `href="#areas"`, etc.
Al hacer clic en un link de nav, el scroll snap se encarga del desplazamiento suave.
 
```jsx
// Ejemplo de link de navegación
<a href="#areas" onClick={(e) => {
  e.preventDefault();
  document.getElementById('areas').scrollIntoView({ behavior: 'smooth' });
}}>
  Áreas de Práctica
</a>
```
 
### Consideraciones para secciones con contenido largo
Si una sección tiene mucho contenido (por ejemplo Contacto con formulario + mapa),
puede no caber en `100dvh`. En ese caso, esa sección específica usa:
 
```css
.scroll-section--tall {
  height: auto;
  min-height: 100dvh;
  scroll-snap-align: start;
  overflow-y: auto;          /* scroll interno solo en esa sección */
}
```
 
### Animación de entrada de elementos (Intersection Observer)
Para que los elementos dentro de cada sección aparezcan con fade-in al llegar:
 
```css
/* Clase base — elemento invisible */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
 
/* Clase activa — cuando el Intersection Observer la agrega */
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
 
```jsx
// src/hooks/useFadeIn.js
import { useEffect, useRef } from 'react';
 
export const useFadeIn = () => {
  const ref = useRef(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.15 }
    );
 
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
 
  return ref;
};
 
// Uso en cualquier componente:
// const ref = useFadeIn();
// <div ref={ref} className="fade-in">...</div>
```
 
---
 
## 8. Componentes de UI — especificaciones visuales
 
### Botón primario
```css
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: var(--text-sm);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: var(--space-3) var(--space-8);
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}
 
.btn-primary:hover {
  background-color: #5a6b4d; /* --color-accent oscurecido ~10% */
  transform: translateY(-1px);
}
```
 
### Botón secundario (outline)
```css
.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 1.5px solid var(--color-primary);
  /* resto igual que btn-primary */
}
 
.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-text-light);
}
```
 
### Cards de área de práctica
- Fondo: `--color-surface`
- Borde izquierdo: `4px solid var(--color-accent)`
- Padding: `var(--space-8)`
- Sombra: `--shadow-md`
- En hover: `--shadow-lg` + `translateY(-2px)`
### Inputs del formulario
```css
.form-input {
  width: 100%;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--color-text);
  background-color: var(--color-surface);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-4);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
 
.form-input:focus {
  outline: none;
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(107, 124, 92, 0.15);
}
```
 
---
 
## 9. WhatsApp flotante
 
- Posición: `fixed`, `bottom: 24px`, `right: 24px`
- Z-index: `1000`
- Ícono: SVG de WhatsApp (color `#25D366`)
- Fondo del botón: `--color-surface` con `--shadow-lg`
- Tamaño: `56px × 56px`, `border-radius: 50%`
- Al hover: escalar `1.05` con `transition: transform 0.2s ease`
- Abre `https://wa.me/549XXXXXXXXXX` en `target="_blank"`
---
 
## 10. Responsive — breakpoints
 
```css
/* Mobile first — base styles sin media query */
/* sm  */ @media (min-width: 640px)  { ... }
/* md  */ @media (min-width: 768px)  { ... }
/* lg  */ @media (min-width: 1024px) { ... }
/* xl  */ @media (min-width: 1280px) { ... }
```
 
### Scroll snap en mobile
`scroll-snap-type: y mandatory` funciona correctamente en iOS Safari y Android Chrome.
Verificar siempre en dispositivo real además del emulador de DevTools.
 
---
 
## 11. Íconos
 
Usar **Lucide React** (`lucide-react`) — liviano, consistente, tree-shakeable.
 
```bash
npm install lucide-react
```
 
```jsx
import { Scale, Users, FileText, Phone, MapPin, Menu } from 'lucide-react';
```
 
Tamaño estándar de íconos en UI: `20px`. En cards destacadas: `32px`.
Color: heredar del texto padre (`currentColor`).
 
---
 
## 12. Lo que NO hacer visualmente
 
- No usar gradientes de color llamativos (nada de morado sobre blanco).
- No usar más de 3 tipografías distintas.
- No usar sombras de color puro `rgba(0,0,0,X)` — siempre con tinte cálido.
- No usar `fullPage.js` (licencia comercial paga).
- No usar animaciones de más de `0.6s` — generan sensación de lentitud.
- No saturar la paleta con colores fuera de las variables definidas.
- No usar imágenes de stock genéricas con fondo blanco y personas en traje señalando papeles.