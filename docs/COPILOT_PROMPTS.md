## FASE 1 — Configuración del proyecto
 
### PROMPT 1.1 — Tailwind config
 
```
Configurá el archivo tailwind.config.js para que escanee todos los archivos
en ./src con extensiones .jsx y .js.
 
El archivo debe quedar así:
- content: ["./index.html", "./src/**/*.{js,jsx}"]
- theme.extend vacío por ahora
- sin plugins adicionales
```
 
---
 
### PROMPT 1.2 — Variables CSS y estilos globales
 
```
Reemplazá el contenido de src/index.css con lo siguiente:
 
1. Las directivas de Tailwind (@tailwind base, components, utilities)
 
2. Un bloque :root con estas variables CSS exactas:
  --color-primary: #5C4A3A
  --color-secondary: #8B7355
  --color-accent: #6B7C5C
  --color-background: #F5F0E8
  --color-surface: #FFFFFF
  --color-surface-alt: #EDE8DF
  --color-text: #2C2416
  --color-text-light: #FFFFFF
  --color-muted: #9E8E7A
  --color-success: #4A7C59
  --color-error: #9B3A2A
  --color-border: #D4C9B8
  --font-display: 'Cormorant Garamond', Georgia, serif
  --font-body: 'Lato', 'Helvetica Neue', sans-serif
  --radius-sm: 4px
  --radius-md: 8px
  --radius-lg: 12px
  --shadow-sm: 0 1px 3px rgba(44, 36, 22, 0.08)
  --shadow-md: 0 4px 12px rgba(44, 36, 22, 0.10)
  --shadow-lg: 0 8px 24px rgba(44, 36, 22, 0.12)
 
3. Estilos globales para body:
  - font-family: var(--font-body)
  - color: var(--color-text)
  - background-color: var(--color-background)
  - overflow: hidden (para que el scroll snap funcione correctamente)
 
4. Las clases de animación fade-in:
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
 
5. Clases de delay para listas escalonadas:
  .delay-100 { transition-delay: 0.1s; }
  .delay-200 { transition-delay: 0.2s; }
  .delay-300 { transition-delay: 0.3s; }
```
 
---
 
### PROMPT 1.3 — Fuentes en index.html
 
```
En el archivo index.html, dentro del <head>, agregá:
- Las etiquetas de preconnect para Google Fonts
- El link para cargar las fuentes Cormorant Garamond (pesos 400 y 600)
  y Lato (pesos 300, 400 y 700)
- Actualizá el <title> a "Estudio Jurídico Integral"
- Agregá la meta description: "Estudio jurídico en Santa Fe, Argentina.
  Derecho de Familia, Civil y Comercial. Carolina Vagner y Martín Perezlindo."
```
 
---
 
### PROMPT 1.4 — Estructura de carpetas y archivos vacíos
 
```
Creá la siguiente estructura de archivos dentro de src/.
Cada archivo debe tener solo el esqueleto mínimo: import de React
y un export default con un fragmento vacío o un div con un comentario
indicando el nombre del componente. Sin lógica todavía.
 
Archivos a crear:
- src/components/layout/ScrollContainer.jsx
- src/components/layout/ScrollSection.jsx
- src/components/layout/Navbar.jsx
- src/components/layout/Footer.jsx
- src/components/ui/Button.jsx
- src/components/ui/SectionTitle.jsx
- src/components/ui/WhatsAppButton.jsx
- src/components/sections/Hero.jsx
- src/components/sections/AreasCard.jsx
- src/components/sections/TeamMember.jsx
- src/components/sections/ContactForm.jsx
- src/components/sections/MapEmbed.jsx
- src/pages/Home.jsx
- src/hooks/useFadeIn.js
- src/data/areas.js
- src/data/team.js
```
 
---
 
## FASE 2 — Hooks y datos
 
### PROMPT 2.1 — Hook useFadeIn
 
```
Implementá el hook src/hooks/useFadeIn.js con estas características:
 
- Recibe un parámetro options opcional con: threshold (default 0.15) y once (default true)
- Crea un ref con useRef
- Usa useEffect para crear un IntersectionObserver que agrega la clase CSS "visible"
  al elemento cuando entra en el viewport
- Si once es true, deja de observar después del primer trigger
- Retorna el ref
- Documentá con un comentario breve qué hace cada parte
```
 
---
 
### PROMPT 2.2 — Datos estáticos de áreas
 
```
Creá el archivo src/data/areas.js con el array AREAS_DATA exportado.
Cada objeto debe tener: id, title, iconName (string con el nombre del ícono
de lucide-react), description (string con texto placeholder en español
indicando que debe reemplazarse con contenido real del cliente).
 
Las tres áreas son:
- id: "familia", title: "Derecho de Familia", iconName: "Users"
- id: "civil", title: "Derecho Civil", iconName: "FileText"
- id: "comercial", title: "Derecho Comercial", iconName: "Briefcase"
```
 
---
 
### PROMPT 2.3 — Datos estáticos del equipo
 
```
Creá el archivo src/data/team.js con el array TEAM_DATA exportado.
Cada objeto debe tener: id, name, role, bio, photo.
 
Los dos integrantes son:
- id: "carolina", name: "Carolina Vagner", role: "Abogada",
  bio: texto placeholder indicando que debe reemplazarse,
  photo: "/images/carolina-vagner.jpg" con comentario TODO
- id: "martin", name: "Martín Perezlindo", role: "Procurador",
  bio: texto placeholder indicando que debe reemplazarse,
  photo: "/images/martin-perezlindo.jpg" con comentario TODO
```
 
---
 
## FASE 3 — Componentes de layout
 
### PROMPT 3.1 — ScrollContainer
 
```
Implementá src/components/layout/ScrollContainer.jsx.
 
El componente debe:
- Recibir children como única prop
- Renderizar un div con estas clases/estilos:
  height: 100dvh, width: 100vw,
  overflow-y: scroll,
  scroll-snap-type: y mandatory,
  scroll-behavior: smooth
- Usar inline styles o una clase CSS llamada "scroll-container"
  (no clases de Tailwind para estas propiedades específicas,
  ya que scroll-snap no está en el core de Tailwind sin configuración extra)
- Agregar PropTypes para children
- Agregar un comentario explicando por qué se usa 100dvh en lugar de 100vh
```
 
---
 
### PROMPT 3.2 — ScrollSection
 
```
Implementá src/components/layout/ScrollSection.jsx.
 
El componente recibe: id (string, requerido), children, className (string, default ""),
tall (bool, default false).
 
Comportamiento:
- Renderiza un <section> con el id recibido
- Si tall es false: height 100dvh, overflow hidden
- Si tall es true: minHeight 100dvh, height auto, overflow-y auto
- En ambos casos: scroll-snap-align start, width 100%
- Combina los estilos base con className adicional recibido
- Agregar PropTypes para todas las props
```
 
---
 
### PROMPT 3.3 — Navbar
 
```
Implementá src/components/layout/Navbar.jsx con estas características:
 
Estado interno:
- isMenuOpen (boolean, default false): controla el menú hamburguesa en mobile
- activeSection (string, default "inicio"): sección actualmente visible
 
Array de links hardcodeado:
[
  { label: "Inicio", href: "inicio" },
  { label: "Áreas de Práctica", href: "areas" },
  { label: "El Equipo", href: "equipo" },
  { label: "Contacto", href: "contacto" }
]
 
Comportamiento:
- Al hacer clic en un link: llamar scrollIntoView({ behavior: "smooth" })
  sobre el elemento con ese id, y cerrar el menú mobile
- Usar IntersectionObserver para detectar cuál sección es visible
  y actualizar activeSection
- El link activo tiene un estilo visual diferente (subrayado o color distinto
  usando var(--color-accent))
 
Layout:
- Desktop (≥768px): links horizontales en una fila
- Mobile (<768px): ícono Menu de lucide-react que abre/cierra un menú vertical
- Fondo: var(--color-primary) con opacity 0.95 y backdrop-filter blur(8px)
- Texto: var(--color-text-light)
- Position: fixed, top 0, left 0, width 100%, z-index 50
- El nombre del estudio "Estudio Jurídico Integral" como logo-texto a la izquierda
  usando font-family var(--font-display)
 
No usar ninguna librería de UI. Solo React, lucide-react y CSS con variables del proyecto.
```
 
---
 
### PROMPT 3.4 — Footer
 
```
Implementá src/components/layout/Footer.jsx.
 
Contenido estático:
- Nombre del estudio: "Estudio Jurídico Integral"
- Ciudad: "Santa Fe, Argentina"
- Email: placeholder con comentario TODO para reemplazar con email real
- Teléfono: placeholder con comentario TODO para reemplazar con teléfono real
- Copyright dinámico: © {new Date().getFullYear()} Estudio Jurídico Integral
- Usar íconos Mail y Phone de lucide-react junto a los datos de contacto
 
Estilos:
- Fondo var(--color-primary), texto var(--color-text-light)
- Padding generoso arriba y abajo
- Layout: columna centrada en mobile, dos columnas en desktop
- Tipografía cuerpo: var(--font-body), tamaño pequeño
- Copyright en color var(--color-muted) al pie
 
Sin links de redes sociales (no solicitados en v1.0).
```
 
---
 
## FASE 4 — Componentes UI reutilizables
 
### PROMPT 4.1 — Button
 
```
Implementá src/components/ui/Button.jsx.
 
Props: children, variant ("primary"|"secondary"|"outline", default "primary"),
onClick, href, target, disabled (default false), type (default "button"), className.
 
Lógica:
- Si recibe href, renderizar como <a>. Si no, como <button>.
- Si target="_blank", agregar rel="noopener noreferrer" automáticamente.
- Estado disabled: pointer-events none, opacity 0.5.
 
Estilos por variante (usar inline styles con variables CSS, no Tailwind para colores):
- primary: background var(--color-accent), color var(--color-text-light)
- secondary: background var(--color-primary), color var(--color-text-light)
- outline: background transparent, border 1.5px solid var(--color-primary),
  color var(--color-primary)
 
Estilos comunes a todas las variantes:
- font-family var(--font-body), font-weight 700, font-size 0.875rem
- letter-spacing 0.08em, text-transform uppercase
- padding 0.75rem 2rem, border-radius var(--radius-md)
- cursor pointer, transition background-color 0.2s, transform 0.1s
- En hover: translateY(-1px) y ligero oscurecimiento del fondo
 
Agregar PropTypes para todas las props.
```
 
---
 
### PROMPT 4.2 — SectionTitle
 
```
Implementá src/components/ui/SectionTitle.jsx.
 
Props: title (string, requerido), subtitle (string, opcional),
align ("left"|"center"|"right", default "center"),
light (bool, default false).
 
Estructura:
- Wrapper div con text-align según align
- H2 con font-family var(--font-display), tamaño grande
- Separador: un span de 48px de ancho, 2px de alto,
  background var(--color-accent), display block, margin auto si centrado
- Párrafo de subtítulo solo si subtitle está definido
 
Colores:
- light=false: H2 color var(--color-primary), párrafo color var(--color-muted)
- light=true: H2 color var(--color-text-light), párrafo color var(--color-text-light) con opacity 0.8
 
Agregar PropTypes.
```
 
---
 
### PROMPT 4.3 — WhatsAppButton
 
```
Implementá src/components/ui/WhatsAppButton.jsx.
 
Props: phoneNumber (string, requerido), message (string, default "").
 
El componente renderiza un <a> con:
- href: `https://wa.me/${phoneNumber}${message ? "?text=" + encodeURIComponent(message) : ""}`
- target="_blank", rel="noopener noreferrer"
- position fixed, bottom 24px, right 24px, z-index 1000
- width y height 56px, border-radius 50%
- background var(--color-surface), box-shadow var(--shadow-lg)
- display flex, align-items center, justify-content center
- transition transform 0.2s, en hover scale(1.05)
 
Ícono SVG de WhatsApp hardcodeado (color #25D366, tamaño 28px).
Usar este path SVG:
M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606
.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025
-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008
-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0
1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262
.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004
a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86
0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898
a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297
A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142
1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0
11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z
 
Agregar PropTypes. Agregar comentario TODO con el número real del estudio.
```
 
---
 
## FASE 5 — Componentes de secciones
 
### PROMPT 5.1 — Hero
 
```
Implementá src/components/sections/Hero.jsx.
 
Sin props. Contenido definido en una constante interna:
const HERO_CONTENT = {
  tagline: "Asesoramiento legal con compromiso y cercanía",
  subtitle: "Derecho de Familia · Derecho Civil · Derecho Comercial",
  ctaLabel: "Consultanos",
  ctaHref: "#contacto"
}
Agregar comentario TODO indicando que el texto debe reemplazarse con el del cliente.
 
Estructura:
- Sección que ocupa 100% del alto y ancho disponible
- Fondo: var(--color-background) con una textura CSS sutil
  (usar background-image con un patrón de puntos usando radial-gradient
  para dar profundidad sin imagen externa)
- Contenido centrado vertical y horizontalmente (flexbox)
- H1 con font-family var(--font-display), tamaño grande, color var(--color-primary)
- Párrafo de subtítulo con font-family var(--font-body), color var(--color-muted)
- Componente Button importado con variant="primary" que hace scroll a #contacto
  al hacer clic (usar scrollIntoView)
 
Animaciones de entrada escalonadas usando solo CSS:
- H1: animation fadeInUp 0.8s ease forwards, delay 0.1s
- Subtítulo: animation fadeInUp 0.8s ease forwards, delay 0.3s
- Botón: animation fadeInUp 0.8s ease forwards, delay 0.5s
- Definir @keyframes fadeInUp: from { opacity: 0, translateY(30px) } to { opacity: 1, translateY(0) }
- Estado inicial: opacity 0 para que no parpadee antes de la animación
 
No usar el hook useFadeIn en este componente (tiene su propia animación de entrada).
Importar Button desde ../ui/Button.
```
 
---
 
### PROMPT 5.2 — AreasCard
 
```
Implementá src/components/sections/AreasCard.jsx.
 
Props: title (string, requerido), description (string, requerido),
iconName (string, requerido), index (number, default 0).
 
El prop iconName es un string con el nombre del ícono de lucide-react.
Importar dinámicamente usando un objeto de mapeo:
import { Users, FileText, Briefcase } from 'lucide-react';
const ICON_MAP = { Users, FileText, Briefcase };
Renderizar el ícono como: const Icon = ICON_MAP[iconName];
 
Estructura visual:
- div card con background var(--color-surface)
- border-left: 4px solid var(--color-accent)
- border-radius var(--radius-md)
- padding 2rem
- box-shadow var(--shadow-md)
- transition box-shadow 0.2s, transform 0.2s
- En hover: box-shadow var(--shadow-lg), translateY(-2px)
- Ícono en color var(--color-accent), tamaño 32px
- Título en font-family var(--font-display), color var(--color-primary)
- Descripción en font-family var(--font-body), color var(--color-text), line-height 1.6
 
Aplicar la clase "fade-in" al wrapper y agregar un delay escalonado basado
en el prop index: index 0 = sin delay, index 1 = delay-100, index 2 = delay-200.
Usar el hook useFadeIn para agregar la clase "visible".
 
Agregar PropTypes.
```
 
---
 
### PROMPT 5.3 — TeamMember
 
```
Implementá src/components/sections/TeamMember.jsx.
 
Props: name (string, requerido), role (string, requerido),
bio (string, requerido), photo (string, requerido),
photoAlt (string, default = name).
 
Estructura:
- Card con fondo var(--color-surface), border-radius var(--radius-lg),
  box-shadow var(--shadow-md), overflow hidden
- Imagen de foto con object-fit cover, aspect-ratio 3/4 en mobile,
  1/1 en desktop. Si la imagen no carga, mostrar un placeholder:
  div con fondo var(--color-secondary), display flex center,
  texto con las iniciales del nombre en blanco, font-size 2rem
- Bloque de texto con padding 1.5rem:
  - Nombre: font-family var(--font-display), font-size 1.5rem,
    color var(--color-primary)
  - Rol: font-family var(--font-body), color var(--color-muted),
    font-size 0.875rem, text-transform uppercase, letter-spacing 0.1em
  - Bio: font-family var(--font-body), color var(--color-text), line-height 1.6
 
Para el placeholder de iniciales, extraer las primeras letras de cada palabra
del nombre: "Carolina Vagner" → "CV".
 
Usar el hook useFadeIn en el wrapper de la card.
Agregar PropTypes.
```
 
---
 
### PROMPT 5.4 — ContactForm
 
```
Implementá src/components/sections/ContactForm.jsx.
 
Props: formspreeId (string, requerido).
Agregar comentario TODO para reemplazar el ID con el real de formspree.io.
 
Estado interno con useState:
- formData: { nombre: "", email: "", telefono: "", area: "", mensaje: "" }
- errors: {} (objeto con mensajes de error por campo)
- submitStatus: "idle" | "sending" | "success" | "error"
 
Función de validación (validar solo al submit, no en tiempo real):
- nombre: requerido, mínimo 2 caracteres
- email: requerido, debe tener formato válido (usar regex simple)
- area: requerido
- mensaje: requerido, mínimo 10 caracteres
- telefono: opcional, sin validación estricta
 
Función handleSubmit:
- Prevenir default
- Correr validación, si hay errores setear errors y no continuar
- Setear submitStatus a "sending"
- Fetch POST a https://formspree.io/f/${formspreeId}
  con headers { Accept: "application/json" } y body JSON.stringify(formData)
- En éxito: submitStatus "success", resetear formData
- En error: submitStatus "error"
 
Campos del formulario (opciones del select):
[
  { value: "", label: "Seleccioná un área" },
  { value: "familia", label: "Derecho de Familia" },
  { value: "civil", label: "Derecho Civil" },
  { value: "comercial", label: "Derecho Comercial" },
  { value: "general", label: "Consulta general" }
]
 
Estilos de inputs (aplicar a text, email, tel, select, textarea):
- width 100%, font-family var(--font-body), font-size 1rem
- color var(--color-text), background var(--color-surface)
- border: 1px solid var(--color-border), border-radius var(--radius-sm)
- padding 0.75rem 1rem
- En focus: border-color var(--color-accent),
  box-shadow 0 0 0 3px rgba(107, 124, 92, 0.15), outline none
- Labels: font-family var(--font-body), font-size 0.875rem,
  color var(--color-primary), font-weight 700, margin-bottom 0.25rem
 
Mensajes de error: font-size 0.75rem, color var(--color-error), margin-top 0.25rem
 
Estado success: ocultar formulario, mostrar mensaje positivo con ícono CheckCircle de lucide-react
Estado error: mostrar mensaje de error con sugerencia de contacto por WhatsApp
Estado sending: botón deshabilitado con texto "Enviando..."
 
Usar el componente Button importado desde ../ui/Button con type="submit" y variant="primary".
Agregar PropTypes.
```
 
---
 
### PROMPT 5.5 — MapEmbed
 
```
Implementá src/components/sections/MapEmbed.jsx.
 
Props: address (string, requerido), title (string, default "Ubicación del estudio"),
height (string, default "320px").
 
El componente renderiza un <iframe> con:
- src: `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
- width="100%", height={height}
- style: border 0, border-radius var(--radius-md)
- allowFullScreen, loading="lazy"
- referrerPolicy="no-referrer-when-downgrade"
- title={title} (para accesibilidad)
 
Envolver el iframe en un div con width 100% y overflow hidden
para que el border-radius funcione correctamente en todos los browsers.
 
Agregar un comentario TODO indicando que address debe reemplazarse
con la dirección real de la oficina en Santa Fe.
Agregar PropTypes.
```
 
---
 
## FASE 6 — Página principal
 
### PROMPT 6.1 — Home
 
```
Implementá src/pages/Home.jsx ensamblando todos los componentes.
 
Importar:
- ScrollContainer y ScrollSection desde components/layout
- Navbar y Footer desde components/layout
- Button desde components/ui
- WhatsAppButton desde components/ui
- SectionTitle desde components/ui
- Hero desde components/sections
- AreasCard desde components/sections
- TeamMember desde components/sections
- ContactForm desde components/sections
- MapEmbed desde components/sections
- AREAS_DATA desde ../data/areas
- TEAM_DATA desde ../data/team
 
Estructura JSX:
- Navbar fuera del ScrollContainer, con position fixed (ya lo tiene internamente)
- WhatsAppButton fuera del ScrollContainer con phoneNumber="5493420000000"
  y comentario TODO para reemplazar con número real
- ScrollContainer conteniendo 4 ScrollSection:
 
  1. ScrollSection id="inicio":
     <Hero />
 
  2. ScrollSection id="areas" con fondo var(--color-surface-alt):
     <SectionTitle title="Áreas de Práctica"
       subtitle="Brindamos asesoramiento integral en las principales ramas del derecho civil" />
     <div con grid: 1 columna mobile, 3 columnas desktop, gap 1.5rem>
       {AREAS_DATA.map((area, index) =>
         <AreasCard key={area.id} {...area} index={index} />
       )}
     </div>
 
  3. ScrollSection id="equipo" con fondo var(--color-background):
     <SectionTitle title="El Equipo" subtitle="Profesionales comprometidos con cada caso" />
     <div con grid: 1 columna mobile, 2 columnas desktop, gap 2rem>
       {TEAM_DATA.map(member =>
         <TeamMember key={member.id} {...member} />
       )}
     </div>
 
  4. ScrollSection id="contacto" tall con fondo var(--color-surface):
     <SectionTitle title="Contacto" subtitle="Estamos para ayudarte" />
     <div con layout: columna en mobile, 2 columnas en desktop>
       <ContactForm formspreeId="XXXXXXXX" /> (comentario TODO)
       <div>
         <MapEmbed address="Santa Fe, Argentina" /> (comentario TODO dirección real)
         datos de contacto: dirección, teléfono, email con comentarios TODO
       </div>
     </div>
     <Footer />
 
Cada ScrollSection que no sea inicio debe tener padding-top suficiente
para que el contenido no quede debajo de la Navbar fija (usar padding-top: 80px).
```
 
---
 
### PROMPT 6.2 — App.jsx
 
```
Reemplazá el contenido de src/App.jsx para que simplemente renderice
el componente Home sin ningún Router (la navegación es por scroll, no por rutas).
 
Eliminar todos los estilos y contenido de ejemplo que genera Vite por defecto.
Eliminar también el import de App.css si existe.
```
 
---
 
## FASE 7 — Verificación final
 
### PROMPT 7.1 — Revisión de PropTypes
 
```
Revisá todos los archivos en src/components/ y src/pages/.
Para cada componente que tenga props, verificá que:
1. PropTypes esté importado desde 'prop-types'
2. Cada prop tenga su tipo definido
3. Las props requeridas tengan .isRequired
4. Las props opcionales tengan un defaultProp o defaultProps definido
 
Listá los componentes que necesiten correcciones y aplicalas.
```
 
---
 
### PROMPT 7.2 — Revisión mobile
 
```
Revisá todos los componentes y verificá que:
1. No haya ningún width fijo en px que pueda romper el layout en mobile (375px)
2. Los textos grandes (H1, H2) tengan tamaños apropiados en mobile
   (máximo 2.25rem en mobile, pueden crecer en desktop)
3. Los grids usen 1 columna en mobile y más columnas en desktop
4. El formulario de contacto sea usable en mobile (inputs con height mínimo 44px)
5. La Navbar mobile sea funcional con el menú hamburguesa
 
Listá los problemas encontrados y corregílos.
```
 
---
 
### PROMPT 7.3 — Limpieza de archivos Vite
 
```
Limpiá los archivos que genera Vite por defecto y que ya no se usan:
- Eliminá src/App.css si existe
- Eliminá src/assets/react.svg si existe
- Verificá que public/vite.svg pueda reemplazarse por un favicon simple
  (podés dejarlo por ahora con un comentario TODO)
- Verificá que no haya imports rotos después de la limpieza
```
 
---
 
## Orden de ejecución resumido
 
```
FASE 0  → Terminal: crear proyecto, instalar deps
FASE 1  → Copilot: config Tailwind, CSS vars, fuentes, estructura de archivos
FASE 2  → Copilot: hook useFadeIn, datos estáticos
FASE 3  → Copilot: ScrollContainer, ScrollSection, Navbar, Footer
FASE 4  → Copilot: Button, SectionTitle, WhatsAppButton
FASE 5  → Copilot: Hero, AreasCard, TeamMember, ContactForm, MapEmbed
FASE 6  → Copilot: Home, App.jsx
FASE 7  → Copilot: revisión PropTypes, mobile, limpieza
```
 