# Estudio Jurídico Integral — Instrucciones de Proyecto para Copilot
 
## Descripción general
 
Sitio web institucional e informativo para el **Estudio Jurídico Integral**, conformado por:
 
- **Carolina Vagner** — Abogada
- **Martín Perezlindo** — Procurador
El sitio es **puramente informativo**, sin panel de administración ni autenticación. No requiere backend propio.
 
---
 
## Stack tecnológico
 
| Capa | Tecnología |
|---|---|
| Framework UI | React 18 + Vite |
| Routing | React Router v6 (SPA) |
| Estilos | Tailwind CSS |
| Formulario de contacto | Formspree (sin backend) |
| Mapa | Google Maps Embed API (iframe) o React Leaflet |
| Deploy | Vercel o Netlify |
| Lenguaje | JavaScript (sin TypeScript por ahora) |
| Tipado de props | PropTypes |
 
**No hay Node/Express backend.** Cualquier necesidad de servidor se resuelve con servicios externos (Formspree, Google Maps embed, etc.).
 
---
 
## Áreas de práctica del estudio
 
1. **Derecho de Familia** — divorcios, alimentos, tenencia, adopciones, sucesiones
2. **Derecho Civil / Contratos** — contratos, responsabilidad civil, daños y perjuicios
3. **Derecho Comercial** — constitución de sociedades, contratos comerciales, asesoramiento empresarial
---
 
## Secciones del sitio (páginas / rutas)
 
| Ruta | Sección | Descripción |
|---|---|---|
| `/` | Inicio / Hero | Presentación del estudio, llamada a la acción |
| `/areas` | Áreas de Práctica | Descripción de las tres áreas |
| `/equipo` | El Equipo | Perfiles de Carolina y Martín |
| `/contacto` | Contacto | Formulario + mapa de ubicación de la oficina |
 
La navegación es tipo **single-page app** con scroll suave entre secciones si se prefiere en una sola página, o rutas separadas. Consultar antes de elegir.
 
---
 
## Identidad visual
 
### Tono y personalidad
- **Cálido y accesible**: el estudio no quiere verse intimidante ni frío.
- Profesional pero cercano. Transmite confianza, no distancia.
- Orientado a personas, no a corporaciones.
### Paleta de colores
```css
:root {
  --color-primary:    #5C4A3A; /* marrón tierra oscuro — titulares, navbar */
  --color-secondary:  #8B7355; /* marrón medio — acentos, bordes */
  --color-accent:     #6B7C5C; /* verde oliva — botones, highlights */
  --color-background: #F5F0E8; /* beige cálido — fondo principal */
  --color-surface:    #FFFFFF; /* blanco — cards, formularios */
  --color-text:       #2C2416; /* casi negro cálido — texto corrido */
  --color-muted:      #9E8E7A; /* gris tierra — texto secundario */
}
```
 
### Tipografía
- **Display / titulares**: `Cormorant Garamond` (serif elegante, cálido) — Google Fonts
- **Cuerpo / UI**: `Lato` o `Source Sans 3` (legible, neutro, sans-serif) — Google Fonts
- Tamaño base: 16px. Line-height: 1.6.
### Principios de diseño
- **Mobile-first**: diseñar primero para pantallas de 375px, luego escalar.
- Espaciado generoso. No aglomerar contenido.
- Imágenes con tono cálido (no fotos corporativas frías con fondo blanco).
- Sin animaciones distractoras. Micro-interacciones sutiles están bien.
- Botones CTA con bordes redondeados, color `--color-accent`.
---
 
## Estructura de archivos esperada
 
```
src/
├── assets/
│   └── images/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   └── SectionTitle.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── AreasCard.jsx
│       ├── TeamMember.jsx
│       ├── ContactForm.jsx
│       └── MapEmbed.jsx
├── pages/
│   ├── Home.jsx
│   ├── Areas.jsx
│   ├── Equipo.jsx
│   └── Contacto.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```
 
---
 
## Convenciones de código
 
- Componentes en **PascalCase**: `TeamMember.jsx`
- Archivos utilitarios en **camelCase**: `formatPhone.js`
- Carpetas en **kebab-case** cuando son multi-palabra: `contact-form/`
- Un componente por archivo.
- Props documentadas con `PropTypes` al final del archivo.
- No usar `var`. Preferir `const` sobre `let`.
- Usar componentes funcionales con hooks. Sin clases.
- Comentar en **español** cuando el comentario explica lógica de negocio.
- Comentar en **inglés** cuando es convención técnica estándar.
---
 
## Componentes reutilizables clave
 
### `<Button variant="primary|secondary|outline">`
Botón estilizado con la paleta del proyecto. No usar `<button>` directo con estilos inline.
 
### `<SectionTitle title="" subtitle="">`
Encabezado de sección consistente con separador visual.
 
### `<TeamMember name="" role="" bio="" photo="">`
Tarjeta de perfil para Carolina y Martín.
 
### `<AreasCard title="" description="" icon="">`
Tarjeta para cada área de práctica.
 
---
 
## Funcionalidades especiales
 
### Formulario de contacto
- Proveedor: **Formspree** (`https://formspree.io`)
- Campos: Nombre, Email, Teléfono (opcional), Mensaje, Área de consulta (select)
- Validación: client-side con estado React (sin librerías externas por ahora)
- Feedback visual: estado de envío (enviando / éxito / error)
### Mapa de ubicación
- Implementar con **Google Maps Embed** (iframe) para evitar dependencias de API key en frontend.
- Alternativamente: **React Leaflet** con OpenStreetMap (sin API key).
- El mapa debe ser responsive (100% ancho en mobile).
### Botón de WhatsApp flotante
- Posición: fixed, bottom-right.
- Abre `https://wa.me/5493425111222` en nueva pestaña.
- Visible en todas las páginas.
---
 
## Accesibilidad y SEO básico
 
- Todas las imágenes deben tener `alt` descriptivo.
- Usar etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`.
- Contraste mínimo WCAG AA entre texto y fondo.
- Meta tags básicos en `index.html`: title, description, og:title, og:description.
- El `<title>` de cada página debe reflejar la sección: `"Equipo | Estudio Jurídico Integral"`.
---
 
## Lo que NO hacer
 
- No agregar backend Node/Express salvo que se solicite explícitamente.
- No usar TypeScript sin consultar primero.
- No instalar librerías de UI (Material UI, Ant Design, Chakra) — el diseño es custom con Tailwind.
- No usar `useEffect` para lógica que puede resolverse de otra forma.
- No hardcodear colores fuera de las variables CSS definidas.
- No generar contenido jurídico inventado. El copy real lo provee el cliente.
