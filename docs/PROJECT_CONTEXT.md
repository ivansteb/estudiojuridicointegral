# PROJECT_CONTEXT.md — Estudio Jurídico Integral
 
Documento de referencia general del proyecto. Describe el negocio, los objetivos,
los actores involucrados y las decisiones tomadas. Leer antes de cualquier tarea
de desarrollo o diseño.
 
---
 
## 1. El cliente
 
**Estudio Jurídico Integral**
Estudio de abogados ubicado en **Santa Fe, Argentina**.
 
### Equipo profesional
 
| Nombre | Rol |
|---|---|
| **Carolina Vagner** | Abogada — socia |
| **Martín Perezlindo** | Procurador — socio |
 
### Áreas de práctica
 
- **Derecho de Familia**: divorcios, alimentos, tenencia, adopciones, sucesiones.
- **Derecho Civil / Contratos**: contratos, responsabilidad civil, daños y perjuicios.
- **Derecho Comercial**: constitución de sociedades, contratos comerciales, asesoramiento empresarial.
---
 
## 2. Objetivo del proyecto
 
Construir un **sitio web institucional e informativo** que:
 
1. Presente al estudio y sus profesionales de forma cálida y confiable.
2. Describa claramente las áreas de práctica.
3. Facilite el contacto de potenciales clientes (formulario + WhatsApp).
4. Funcione correctamente en **dispositivos móviles** (prioridad) y desktop.
El sitio **no vende productos, no tiene login, no tiene CMS ni panel de administración.**
El contenido es estático. Cualquier cambio de copy requiere modificar el código.
 
---
 
## 3. Público objetivo
 
Personas particulares y empresas de Santa Fe y zona que buscan asesoramiento legal en:
- Situaciones familiares (separaciones, herencias, custodia de hijos).
- Conflictos contractuales o civiles.
- Constitución o gestión de sociedades comerciales.
El visitante típico **no es técnico**, llega desde Google o por recomendación,
y lo primero que hace es abrir el sitio desde el celular.
 
---
 
## 4. Alcance del proyecto (v1.0)
 
### Incluido
 
- [x] Sitio web responsive (mobile-first)
- [x] Sección Hero / presentación del estudio
- [x] Sección Áreas de Práctica (3 áreas)
- [x] Sección Equipo (Carolina + Martín)
- [x] Sección Contacto con formulario (vía Formspree)
- [x] Mapa de ubicación de la oficina
- [x] Botón flotante de WhatsApp
- [x] Navegación suave entre secciones (CSS Scroll Snap)
- [x] Navbar con links a cada sección
- [x] Footer con datos básicos de contacto
### Excluido explícitamente de v1.0
 
- [ ] Blog o sección de novedades legales
- [ ] Panel de administración de contenido (CMS)
- [ ] Sistema de turnos o agenda online
- [ ] Chat en vivo
- [ ] Autenticación o área de clientes
- [ ] Backend propio (Node/Express u otro)
- [ ] Multilenguaje
> Estas funcionalidades pueden evaluarse para una v2.0 si el cliente las solicita.
 
---
 
## 5. Arquitectura técnica
 
### Decisión: sitio estático con React
 
El sitio es 100% frontend. No hay servidor propio.
Esta decisión es correcta porque:
- El contenido no cambia frecuentemente.
- No hay datos sensibles que gestionar.
- Reduce costo de infraestructura a cero.
- El deploy en Vercel/Netlify es instantáneo y gratuito.
### Stack completo
 
| Capa | Tecnología | Motivo |
|---|---|---|
| Framework | React 18 + Vite | Estándar moderno, rápido en dev |
| Routing | React Router v6 | SPA con navegación por secciones |
| Estilos | Tailwind CSS | Utilidades CSS, mobile-first por defecto |
| Scroll UX | CSS Scroll Snap (nativo) | Sin dependencias, funciona en mobile |
| Animaciones | CSS transitions + Intersection Observer | Liviano, sin librerías extras |
| Formulario | Formspree | Evita backend para emails de contacto |
| Mapa | Google Maps Embed (iframe) | Sin API key expuesta en frontend |
| Íconos | Lucide React | Tree-shakeable, consistente |
| Deploy | Vercel (subdominio gratuito) | CI/CD automático desde Git |
| Control de versiones | Git + GitHub | Estándar |
 
### Lo que NO se usa y por qué
 
| Descartado | Motivo |
|---|---|
| `fullPage.js` | Licencia comercial paga. CSS Scroll Snap lo reemplaza. |
| TypeScript | Overhead innecesario para este alcance. Revisar en v2. |
| Material UI / Chakra / Ant Design | El diseño es custom. Las librerías UI imponen su estética. |
| Node/Express backend | No hay necesidad. Formspree cubre el formulario. |
| Next.js | SSR innecesario para contenido estático sin SEO dinámico crítico. |
 
---
 
## 6. Estructura de carpetas
 
```
estudio-juridico/
├── .github/
│   └── copilot-instructions.md   ← contexto para GitHub Copilot
├── docs/
│   ├── PROJECT_CONTEXT.md        ← este archivo
│   ├── DESIGN_SYSTEM.md          ← paleta, tipografía, scroll UX, componentes
│   └── COMPONENTS_SPEC.md        ← especificación detallada de componentes (pendiente)
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   └── images/               ← fotos del equipo, imágenes de secciones
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ScrollContainer.jsx
│   │   │   └── ScrollSection.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── WhatsAppButton.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── AreasCard.jsx
│   │       ├── TeamMember.jsx
│   │       ├── ContactForm.jsx
│   │       └── MapEmbed.jsx
│   ├── hooks/
│   │   └── useFadeIn.js          ← Intersection Observer para animaciones de entrada
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Areas.jsx
│   │   ├── Equipo.jsx
│   │   └── Contacto.jsx
│   ├── styles/
│   │   └── index.css             ← variables CSS, reset, clases globales
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```
 
---
 
## 7. Secciones del sitio
 
### 7.1 Hero (Inicio)
- Ocupa el 100% del viewport al cargar.
- Tagline principal del estudio (a definir con el cliente).
- Subtítulo con las tres áreas de práctica resumidas.
- Botón CTA: "Consultanos" → scroll a sección Contacto.
- Fondo: imagen cálida de la ciudad de Santa Fe o textura abstracta neutra.
### 7.2 Áreas de Práctica
- Tres cards: Derecho de Familia, Derecho Civil, Derecho Comercial.
- Cada card: ícono + título + descripción breve (2-3 líneas).
- Layout: columna única en mobile, tres columnas en desktop.
### 7.3 El Equipo
- Dos perfiles: Carolina Vagner y Martín Perezlindo.
- Cada perfil: foto + nombre + rol + breve bio profesional.
- Layout: columna única en mobile, dos columnas en desktop.
- **Copy pendiente**: el texto de las bios lo provee el cliente.
### 7.4 Contacto
- Formulario con campos: Nombre, Email, Teléfono (opcional), Área de consulta (select), Mensaje.
- Submit vía Formspree. Estados: enviando / éxito / error.
- Mapa de la oficina (Google Maps Embed).
- Datos de contacto adicionales: email, teléfono, dirección.
---
 
## 8. Contenido pendiente de recibir del cliente
 
Los siguientes elementos **no pueden desarrollarse hasta recibirlos**:
 
| Elemento | Responsable | Estado |
|---|---|---|
| Fotos profesionales de Carolina y Martín | Cliente | ⏳ Pendiente |
| Bio profesional de cada socio | Cliente | ⏳ Pendiente |
| Texto de presentación del estudio (Hero) | Cliente | ⏳ Pendiente |
| Descripción detallada de cada área | Cliente | ⏳ Pendiente |
| Dirección exacta de la oficina | Cliente | ⏳ Pendiente |
| Teléfono / WhatsApp de contacto | Cliente | ⏳ Pendiente |
| Email de contacto (para Formspree) | Cliente | ⏳ Pendiente |
| Logo del estudio (si existe) | Cliente | ⏳ Pendiente |
 
> Mientras no se reciba este contenido, usar **placeholders** claramente marcados
> con comentarios `{/* TODO: reemplazar con contenido real */}`.
 
---
 
## 9. Deploy y entornos
 
| Entorno | URL | Descripción |
|---|---|---|
| Producción | `[nombre].vercel.app` (a definir) | Deploy automático desde rama `main` |
| Preview | Generado por Vercel en cada PR | Para revisión antes de publicar |
| Local | `http://localhost:5173` | Desarrollo con `npm run dev` |
 
### Flujo de deploy
1. Desarrollar en rama feature o directamente en `main` para v1.
2. Push a GitHub → Vercel hace deploy automático.
3. Verificar en URL de preview antes de confirmar como producción.
---
 
## 10. Decisiones tomadas y su razonamiento
 
| Decisión | Alternativa descartada | Motivo |
|---|---|---|
| React + Vite | Next.js | Sin necesidad de SSR. Menor complejidad. |
| Tailwind CSS | CSS Modules / Styled Components | Velocidad de desarrollo, mobile-first nativo. |
| Formspree | Backend propio con Nodemailer | Elimina servidor. Gratis hasta 50 envíos/mes. |
| CSS Scroll Snap | fullPage.js | Sin licencia paga. Nativo del navegador. |
| Google Maps Embed | React Google Maps API | Sin API key expuesta. Iframe simple. |
| Lucide React | Font Awesome / Material Icons | Más liviano, tree-shakeable, estética consistente. |
| JavaScript | TypeScript | Reduce overhead para este alcance y perfil del equipo. |
 
---
 
## 11. Convenciones del proyecto
 
Ver detalles completos en `.github/copilot-instructions.md`.
 
Resumen rápido:
- Componentes en **PascalCase**: `TeamMember.jsx`
- Archivos utilitarios en **camelCase**: `useFadeIn.js`
- Comentarios de lógica de negocio en **español**
- Comentarios técnicos estándar en **inglés**
- Sin hardcodeo de colores — siempre usar variables CSS del Design System
- Sin `var`, preferir `const` sobre `let`
- Componentes funcionales con hooks, sin clases
---
 
## 12. Contacto del proyecto
 
| Rol | Nombre | Responsabilidad |
|---|---|---|
| Project Leader / Dev | Ivan | Desarrollo, decisiones técnicas, deploy |
| Cliente | Carolina Vagner | Validación de diseño y contenido |
| Cliente | Martín Perezlindo | Validación de contenido jurídico |
 