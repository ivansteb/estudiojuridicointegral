# COMPONENTS_SPEC.md — Estudio Jurídico Integral
 
Especificación técnica de todos los componentes React del proyecto.
Cada componente está documentado con: responsabilidad, props, estados, comportamiento
y notas de implementación. Leer junto con `DESIGN_SYSTEM.md` para valores visuales.
 
---
 
## Índice
 
1. [Layout](#layout)
   - [ScrollContainer](#scrollcontainer)
   - [ScrollSection](#scrollsection)
   - [Navbar](#navbar)
   - [Footer](#footer)
2. [UI (reutilizables)](#ui-reutilizables)
   - [Button](#button)
   - [SectionTitle](#sectiontitle)
   - [WhatsAppButton](#whatsappbutton)
3. [Sections (contenido)](#sections-contenido)
   - [Hero](#hero)
   - [AreasCard](#areascard)
   - [TeamMember](#teammember)
   - [ContactForm](#contactform)
   - [MapEmbed](#mapembed)
4. [Pages](#pages)
   - [Home](#home)
5. [Hooks](#hooks)
   - [useFadeIn](#usefadein)
---
 
## Layout
 
### ScrollContainer
 
**Archivo**: `src/components/layout/ScrollContainer.jsx`
**Responsabilidad**: Contenedor raíz que habilita el comportamiento de full-page scroll mediante CSS Scroll Snap. Envuelve todas las secciones del sitio.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `children` | `node` | ✅ | — | Las `<ScrollSection>` que contiene |
 
#### Comportamiento
- Ocupa exactamente `100dvh` de alto y `100vw` de ancho.
- `overflow-y: scroll` + `scroll-snap-type: y mandatory`.
- No tiene padding ni margin propios — el espaciado es responsabilidad de cada sección.
#### CSS clave
```css
.scroll-container {
  height: 100dvh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
```
 
#### Notas
- Es el único elemento del DOM con scroll vertical. El `<body>` debe tener `overflow: hidden`.
- Si en el futuro se agrega una sección de contenido largo (más de `100dvh`), usar la variante `--tall` documentada en `DESIGN_SYSTEM.md`.
---
 
### ScrollSection
 
**Archivo**: `src/components/layout/ScrollSection.jsx`
**Responsabilidad**: Wrapper de cada sección del sitio. Garantiza que cada sección ocupe el viewport completo y se comporte correctamente con el snap scroll.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `id` | `string` | ✅ | — | ID de anclaje para la navbar (`"inicio"`, `"areas"`, `"equipo"`, `"contacto"`) |
| `children` | `node` | ✅ | — | Contenido de la sección |
| `className` | `string` | ❌ | `''` | Clases adicionales de Tailwind |
| `tall` | `bool` | ❌ | `false` | Si `true`, la sección puede crecer más de `100dvh` (para Contacto con mapa) |
 
#### Comportamiento
- `tall={false}`: altura fija `100dvh`, `overflow: hidden`.
- `tall={true}`: altura mínima `100dvh`, puede crecer, scroll interno habilitado.
#### Notas
- El `id` debe coincidir exactamente con los `href` de la Navbar.
---
 
### Navbar
 
**Archivo**: `src/components/layout/Navbar.jsx`
**Responsabilidad**: Barra de navegación fija en la parte superior. Contiene el logo/nombre del estudio y los links a cada sección.
 
#### Props
 
Ninguna. Los links están hardcodeados ya que las secciones son fijas.
 
#### Estado interno
 
| Estado | Tipo | Descripción |
|---|---|---|
| `isMenuOpen` | `boolean` | Controla si el menú hamburguesa está abierto (mobile) |
| `activeSection` | `string` | ID de la sección actualmente visible |
 
#### Comportamiento
- **Desktop** (≥768px): links horizontales visibles.
- **Mobile** (<768px): ícono hamburguesa (Lucide `Menu`) que despliega menú vertical.
- Al hacer clic en un link: cerrar menú mobile + scroll suave a la sección.
- `activeSection` se actualiza usando `IntersectionObserver` sobre las secciones — el link de la sección visible se marca con estilo activo.
- Fondo: semitransparente con blur (`backdrop-filter: blur(8px)`) para no ocultar el contenido al scrollear.
#### Links de navegación
```js
const NAV_LINKS = [
  { label: 'Inicio',            href: '#inicio'   },
  { label: 'Áreas de Práctica', href: '#areas'    },
  { label: 'El Equipo',         href: '#equipo'   },
  { label: 'Contacto',          href: '#contacto' },
];
```
 
#### Notas
- El logo puede ser texto (`Estudio Jurídico Integral`) hasta que el cliente entregue un archivo de logo.
- Z-index: `50` para estar sobre el contenido de las secciones.
- Al hacer clic en un link usar `scrollIntoView({ behavior: 'smooth' })`, no `window.location.hash` directo, para respetar el scroll snap.
---
 
### Footer
 
**Archivo**: `src/components/layout/Footer.jsx`
**Responsabilidad**: Pie de página con información de contacto básica y créditos.
 
#### Props
 
Ninguna. El contenido es estático.
 
#### Contenido
- Nombre del estudio.
- Email de contacto. `{/* TODO: reemplazar con email real */}`
- Teléfono. `{/* TODO: reemplazar con teléfono real */}`
- Ciudad: Santa Fe, Argentina.
- Texto de copyright: `© {new Date().getFullYear()} Estudio Jurídico Integral`.
#### Notas
- El Footer vive dentro de la última `<ScrollSection>` (Contacto), no fuera del `ScrollContainer`.
- No tiene links de redes sociales en v1.0 (el cliente no los solicitó).
---
 
## UI (reutilizables)
 
### Button
 
**Archivo**: `src/components/ui/Button.jsx`
**Responsabilidad**: Botón estilizado con las variantes del design system. Nunca usar `<button>` con estilos inline directamente en otros componentes.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `children` | `node` | ✅ | — | Texto o contenido del botón |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | ❌ | `'primary'` | Estilo visual |
| `onClick` | `func` | ❌ | `undefined` | Handler de clic |
| `href` | `string` | ❌ | `undefined` | Si se provee, renderiza como `<a>` en lugar de `<button>` |
| `target` | `string` | ❌ | `undefined` | Para links externos (`'_blank'`) |
| `disabled` | `bool` | ❌ | `false` | Estado deshabilitado |
| `type` | `'button' \| 'submit' \| 'reset'` | ❌ | `'button'` | Tipo HTML del botón |
| `className` | `string` | ❌ | `''` | Clases adicionales |
 
#### Variantes visuales
- `primary`: fondo `--color-accent`, texto blanco. Uso: CTAs principales.
- `secondary`: fondo `--color-primary`, texto blanco. Uso: acciones secundarias.
- `outline`: fondo transparente, borde `--color-primary`, texto `--color-primary`. Uso: acciones terciarias.
#### Comportamiento
- Si recibe `href`, renderiza `<a>` con los atributos correspondientes.
- Si `target="_blank"`, agregar siempre `rel="noopener noreferrer"`.
- Estado `disabled`: opacidad reducida, cursor `not-allowed`, sin eventos.
---
 
### SectionTitle
 
**Archivo**: `src/components/ui/SectionTitle.jsx`
**Responsabilidad**: Encabezado de sección con título principal y subtítulo opcional. Garantiza consistencia visual entre todas las secciones.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Título principal de la sección (H2) |
| `subtitle` | `string` | ❌ | `undefined` | Texto descriptivo debajo del título |
| `align` | `'left' \| 'center' \| 'right'` | ❌ | `'center'` | Alineación del bloque |
| `light` | `bool` | ❌ | `false` | Si `true`, usa colores claros (para secciones con fondo oscuro) |
 
#### Estructura HTML generada
```html
<div class="section-title [align] [light]">
  <h2>{{ title }}</h2>
  <span class="separator" />   <!-- línea decorativa -->
  <p>{{ subtitle }}</p>        <!-- solo si subtitle está definido -->
</div>
```
 
#### Notas
- El separador es una línea horizontal corta (`width: 48px`) en `--color-accent`.
- Fuente del título: `Cormorant Garamond` (definida en `DESIGN_SYSTEM.md`).
---
 
### WhatsAppButton
 
**Archivo**: `src/components/ui/WhatsAppButton.jsx`
**Responsabilidad**: Botón flotante de WhatsApp visible en todas las páginas.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `phoneNumber` | `string` | ✅ | — | Número en formato internacional sin `+` ni espacios. Ej: `5493425000000` |
| `message` | `string` | ❌ | `''` | Mensaje pre-escrito al abrir WhatsApp (URL-encoded internamente) |
 
#### Comportamiento
- Posición: `fixed`, `bottom: 24px`, `right: 24px`, `z-index: 1000`.
- Abre `https://wa.me/{phoneNumber}?text={message}` en `target="_blank"`.
- Al hover: `transform: scale(1.05)`.
- Ícono: SVG de WhatsApp hardcodeado (no depende de Lucide, que no tiene el ícono de WhatsApp).
#### Notas
- `phoneNumber` incluye el código de país + código de área sin el `0` inicial.
  Argentina, Santa Fe → `549342XXXXXXX` (549 = +54 Argentina, 342 = código Santa Fe).
- `{/* TODO: reemplazar phoneNumber con número real del estudio */}`
---
 
## Sections (contenido)
 
### Hero
 
**Archivo**: `src/components/sections/Hero.jsx`
**Responsabilidad**: Primera sección visible al cargar. Presentación principal del estudio con CTA.
 
#### Props
 
Ninguna. El contenido es estático (hardcodeado o desde constante).
 
#### Contenido
```js
// {/* TODO: reemplazar con texto real del cliente */}
const HERO_CONTENT = {
  tagline:   'Asesoramiento legal con compromiso y cercanía',
  subtitle:  'Derecho de Familia · Derecho Civil · Derecho Comercial',
  ctaLabel:  'Consultanos',
  ctaHref:   '#contacto',
};
```
 
#### Estructura
```
<ScrollSection id="inicio">
  [Fondo: imagen/textura cálida]
  <div centered>
    <h1>{ tagline }</h1>
    <p>{ subtitle }</p>
    <Button href="#contacto">Consultanos</Button>
  </div>
</ScrollSection>
```
 
#### Notas
- El fondo puede ser una imagen de Santa Fe, una textura de papel, o un gradiente de la paleta.
  Usar `object-fit: cover` si es imagen. `{/* TODO: definir imagen de fondo con el cliente */}`
- La animación de entrada del texto usa el hook `useFadeIn` con `staggered delay`.
- En mobile: texto centrado, tamaño de fuente reducido según escala tipográfica.
---
 
### AreasCard
 
**Archivo**: `src/components/sections/AreasCard.jsx`
**Responsabilidad**: Tarjeta individual para una área de práctica. Se usa en la sección Áreas de Práctica iterando sobre un array de datos.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `title` | `string` | ✅ | — | Nombre del área. Ej: `'Derecho de Familia'` |
| `description` | `string` | ✅ | — | Descripción breve (2-3 líneas) |
| `icon` | `node` | ✅ | — | Componente de ícono de Lucide React |
 
#### Datos de las tres áreas
```js
// src/pages/Areas.jsx o constante compartida
import { Users, FileText, Briefcase } from 'lucide-react';
 
export const AREAS_DATA = [
  {
    id: 'familia',
    title: 'Derecho de Familia',
    icon: <Users size={32} />,
    description: '{/* TODO: texto real del cliente */}',
  },
  {
    id: 'civil',
    title: 'Derecho Civil',
    icon: <FileText size={32} />,
    description: '{/* TODO: texto real del cliente */}',
  },
  {
    id: 'comercial',
    title: 'Derecho Comercial',
    icon: <Briefcase size={32} />,
    description: '{/* TODO: texto real del cliente */}',
  },
];
```
 
#### Estructura visual
- Fondo: `--color-surface`
- Borde izquierdo: `4px solid var(--color-accent)`
- Padding: generoso (`--space-8`)
- Sombra base: `--shadow-md`; en hover: `--shadow-lg` + `translateY(-2px)`
- Layout en sección: 1 columna (mobile) → 3 columnas (desktop ≥1024px)
---
 
### TeamMember
 
**Archivo**: `src/components/sections/TeamMember.jsx`
**Responsabilidad**: Tarjeta de perfil de un integrante del equipo.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `name` | `string` | ✅ | — | Nombre completo. Ej: `'Carolina Vagner'` |
| `role` | `string` | ✅ | — | Rol profesional. Ej: `'Abogada'` |
| `bio` | `string` | ✅ | — | Descripción biográfica (2-4 líneas) |
| `photo` | `string` | ✅ | — | Ruta a la imagen. Ej: `'/images/carolina.jpg'` |
| `photoAlt` | `string` | ❌ | `name` | Texto alternativo de la imagen |
 
#### Datos del equipo
```js
// src/pages/Equipo.jsx o constante compartida
export const TEAM_DATA = [
  {
    id: 'carolina',
    name: 'Carolina Vagner',
    role: 'Abogada',
    bio: '{/* TODO: bio real del cliente */}',
    photo: '/images/carolina-vagner.jpg', // {/* TODO: foto real */}
  },
  {
    id: 'martin',
    name: 'Martín Perezlindo',
    role: 'Procurador',
    bio: '{/* TODO: bio real del cliente */}',
    photo: '/images/martin-perezlindo.jpg', // {/* TODO: foto real */}
  },
];
```
 
#### Estructura visual
- Foto circular o con `border-radius` suave (`--radius-lg`).
- Nombre en `Cormorant Garamond`, rol en `Lato` color `--color-muted`.
- Layout en sección: 1 columna (mobile) → 2 columnas (desktop ≥768px).
#### Notas
- Mientras no se tengan las fotos reales, usar un placeholder con las iniciales
  (div con fondo `--color-secondary` y texto blanco). No usar servicios externos de placeholder.
---
 
### ContactForm
 
**Archivo**: `src/components/sections/ContactForm.jsx`
**Responsabilidad**: Formulario de contacto que envía datos a Formspree.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `formspreeId` | `string` | ✅ | — | ID del endpoint de Formspree. Ej: `'xpwzgkra'` |
 
#### Campos del formulario
 
| Campo | Tipo HTML | Requerido | Validación |
|---|---|---|---|
| Nombre | `text` | ✅ | Mínimo 2 caracteres |
| Email | `email` | ✅ | Formato email válido |
| Teléfono | `tel` | ❌ | Solo números, sin validación estricta |
| Área de consulta | `select` | ✅ | Una de las 3 áreas o "General" |
| Mensaje | `textarea` | ✅ | Mínimo 10 caracteres |
 
#### Opciones del select "Área de consulta"
```js
const AREAS_OPTIONS = [
  { value: '',          label: 'Seleccioná un área' }, // disabled
  { value: 'familia',   label: 'Derecho de Familia' },
  { value: 'civil',     label: 'Derecho Civil' },
  { value: 'comercial', label: 'Derecho Comercial' },
  { value: 'general',   label: 'Consulta general' },
];
```
 
#### Estado interno
 
| Estado | Tipo | Descripción |
|---|---|---|
| `formData` | `object` | Valores actuales de cada campo |
| `errors` | `object` | Mensajes de error por campo (validación client-side) |
| `submitStatus` | `'idle' \| 'sending' \| 'success' \| 'error'` | Estado del envío |
 
#### Comportamiento
- Validación client-side al intentar enviar (no en tiempo real para no ser intrusivo).
- Al enviar: mostrar spinner / texto "Enviando..." en el botón, deshabilitar campos.
- En éxito: mostrar mensaje de confirmación positivo, resetear formulario.
- En error: mostrar mensaje de error con sugerencia de contacto por WhatsApp.
- Envío vía `fetch` a `https://formspree.io/f/{formspreeId}` con `method: POST`.
#### Notas
- `{/* TODO: reemplazar formspreeId con el ID real del endpoint creado en formspree.io */}`
- No instalar la librería `@formspree/react` — usar `fetch` directo para evitar dependencia.
---
 
### MapEmbed
 
**Archivo**: `src/components/sections/MapEmbed.jsx`
**Responsabilidad**: Mapa de ubicación de la oficina mediante Google Maps Embed.
 
#### Props
 
| Prop | Tipo | Requerida | Default | Descripción |
|---|---|---|---|---|
| `address` | `string` | ✅ | — | Dirección completa URL-encoded para el embed |
| `title` | `string` | ❌ | `'Ubicación del estudio'` | Texto del atributo `title` del iframe (accesibilidad) |
| `height` | `string` | ❌ | `'320px'` | Alto del mapa |
 
#### Implementación
```jsx
// URL base del embed — sin API key
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
 
return (
  <iframe
    title={title}
    src={mapSrc}
    width="100%"
    height={height}
    style={{ border: 0, borderRadius: 'var(--radius-md)' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
);
```
 
#### Notas
- `{/* TODO: reemplazar address con la dirección real de la oficina */}`
- El iframe es responsive por `width="100%"`.
- `loading="lazy"` evita que el mapa frene la carga inicial del sitio.
---
 
## Pages
 
### Home
 
**Archivo**: `src/pages/Home.jsx`
**Responsabilidad**: Página principal (única página en v1.0). Ensambla todas las secciones dentro del `ScrollContainer`.
 
#### Estructura
```jsx
<ScrollContainer>
  <ScrollSection id="inicio">
    <Navbar />
    <Hero />
  </ScrollSection>
 
  <ScrollSection id="areas">
    <SectionTitle title="Áreas de Práctica" subtitle="..." />
    {AREAS_DATA.map(area => <AreasCard key={area.id} {...area} />)}
  </ScrollSection>
 
  <ScrollSection id="equipo">
    <SectionTitle title="El Equipo" />
    {TEAM_DATA.map(member => <TeamMember key={member.id} {...member} />)}
  </ScrollSection>
 
  <ScrollSection id="contacto" tall>
    <SectionTitle title="Contacto" />
    <ContactForm formspreeId="XXXXXXXX" />
    <MapEmbed address="[dirección real], Santa Fe, Argentina" />
    <Footer />
  </ScrollSection>
</ScrollContainer>
```
 
#### Notas
- La Navbar se posiciona `fixed` sobre la primera sección, pero vive fuera del scroll
  para estar visible en todas las secciones.
- `WhatsAppButton` también vive en `Home.jsx` fuera del `ScrollContainer`, con `position: fixed`.
---
 
## Hooks
 
### useFadeIn
 
**Archivo**: `src/hooks/useFadeIn.js`
**Responsabilidad**: Hook personalizado que observa un elemento y agrega la clase `visible`
cuando entra en el viewport, disparando la animación de fade-in definida en CSS.
 
#### Firma
```js
const ref = useFadeIn(options?)
```
 
#### Parámetros
 
| Parámetro | Tipo | Default | Descripción |
|---|---|---|---|
| `options.threshold` | `number` | `0.15` | Qué porcentaje del elemento debe ser visible para disparar (0-1) |
| `options.once` | `bool` | `true` | Si `true`, la animación solo ocurre una vez |
 
#### Retorno
`ref` — React ref que debe asignarse al elemento a observar.
 
#### Uso
```jsx
import { useFadeIn } from '../hooks/useFadeIn';
 
const MyComponent = () => {
  const ref = useFadeIn();
  return <div ref={ref} className="fade-in">Contenido</div>;
};
```
 
#### CSS requerido (en `index.css`)
```css
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
 
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
 
#### Notas
- No usar en el Hero — ese componente maneja su propia animación de entrada con `animation-delay` escalonado.
- Para efectos escalonados en listas (ej: las 3 AreasCard), agregar `transition-delay` incremental en cada ítem:
  ```css
  .areas-grid .fade-in:nth-child(2) { transition-delay: 0.1s; }
  .areas-grid .fade-in:nth-child(3) { transition-delay: 0.2s; }
  ```
 
---
 
## Pendientes para v2.0
 
Los siguientes componentes están identificados pero fuera del alcance de v1.0:
 
| Componente | Descripción |
|---|---|
| `BlogCard` | Tarjeta para artículos de novedades legales |
| `AppointmentForm` | Formulario de reserva de turno online |
| `ClientPortal` | Área privada para clientes (requiere backend) |
| `CookieBanner` | Banner de consentimiento de cookies |
| `LanguageToggle` | Selector español / otro idioma |
 