---
name: KOOB Advisory
description: Consultoría estratégica ejecutiva — sobriedad plana en negro, blanco y beige, con un acento blush-champán y esquinas siempre rectas.
colors:
  ink-black: "#0c0c0c"
  paper-white: "#ffffff"
  warm-beige: "#f8f6f3"
  warm-beige-strong: "#ede8e1"
  blush-champagne: "#DCCEC2"
  blush-champagne-ink: "#7E5E44"
  charcoal-900: "#1a1a1a"
  graphite-700: "#4a4a4a"
  slate-500: "#6b6b6b"
  mist-300: "#d1d1d1"
  fog-100: "#f5f5f5"
typography:
  hero-display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.5rem → 2.9rem → clamp(3.1rem, 3.5vw, 4.25rem)"
    fontWeight: 800
    lineHeight: "1.1 → 0.98"
    letterSpacing: "-0.025em → -0.04em"
  flagship-display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "2.75rem → 3rem → 3.75rem → clamp(3.75rem, 4.2vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  flagship-lead:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
  section-title:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.25rem → 3rem"
    fontWeight: 600
    lineHeight: "1.25 → 1"
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.25rem"
    letterSpacing: "0.2em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "56px"
layout:
  gutter: "24px → 48px → 80px"
  contentMax: "1280px"
  contentMedium: "896px"
  contentNarrow: "768px"
  navigationHeight: "86.4px"
  pageIntro: "128px top / 80px bottom"
  sectionDefault: "96px → 144px"
  sectionCompact: "80px → 128px"
  sectionEditorial: "64px → 96px"
  sectionEditorialLead: "80px → 96px"
  sectionFeature: "96px → 160px"
  sectionIntro: "80px → 96px → 112px"
  sectionFooter: "64px"
lines:
  width: "1px"
  light: "#e5e7eb"
  subtle: "#f3f4f6"
  strong: "#d1d1d1"
  ink: "rgba(0,0,0,0.10)"
  dark: "rgba(255,255,255,0.10)"
components:
  button-primary:
    backgroundColor: "{colors.ink-black}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.charcoal-900}"
  button-inverted:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink-black}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-inverted-hover:
    backgroundColor: "{colors.blush-champagne}"
  input-dark:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: KOOB Advisory

## 1. Overview

**Creative North Star: "La Mesa sin Paredes"**

KOOB no tiene oficina fija ni estructura tradicional de consultora: reúne especialistas de dirección real en torno a un mismo proyecto, como quien se sienta a una mesa a hablar claro. El sistema visual traduce eso literalmente: sobriedad ejecutiva en negro, blanco y beige cálido — nunca fría ni distante — con esquinas siempre rectas (nada se "suaviza" para parecer amable) y bloques de color de borde a borde en vez de tarjetas encajonadas. La cercanía no viene de curvas ni de decoración, viene de la claridad: mucho aire, tipografía directa, un único acento blush-champán que aparece con moderación.

El sistema rechaza explícitamente la estética de consultora de stock (azules corporativos, iconografía de gráficos ascendentes, fotografía genérica de oficina) y el andamiaje SaaS/startup (gradientes, hero-metrics, glassmorphism, tarjetas idénticas repetidas). Tampoco usa nunca cifras, porcentajes o estadísticas como argumento — la autoridad se transmite por trayectoria y lenguaje, no por números en pantalla.

**Key Characteristics:**
- Paleta neutra (negro / blanco / beige cálido) con un único acento blush-champán, nunca dorado saturado ni corporativo.
- Radius cero en todo el sistema: cada botón, input y bloque termina en esquina recta.
- Secciones que invierten a fondo negro completo (no tarjetas oscuras) para marcar los momentos de mayor peso — el featured de Servicios, el bloque de Contacto.
- Plano en reposo; una sombra sutil solo aparece como respuesta a scroll o interacción (nav al hacer scroll, dropdown abierto), nunca decorativa.
- Bloques de color a borde de sección, separados por líneas de 1px, en vez de tarjetas con sombra individual.

## 2. Colors

Paleta contenida: neutros cálidos que hacen de escenario, un único acento que nunca compite con el negro.

### Primary
- **Negro Tinta** (#0C0C0C): color dominante de marca — texto, botones primarios, fondos de sección invertida (Contacto, bloque destacado de Servicios). Transmite autoridad ejecutiva sin recurrir a azul corporativo.

### Secondary
- **Blush Champán** (#DCCEC2): acento cálido para usos **sobre fondo negro/grafito** — hover de botones invertidos, bordes finos de énfasis (`border-koob-gold/20`), texto sobre negro (13.65:1). Aparece con moderación deliberada; nunca cubre superficies grandes.
- **Blush Champán Tinta** (`koob-gold-ink`, #7E5E44): variante de texto de la misma familia cálida, para **eyebrows sobre fondo claro** (beige o blanco) donde el blush champán puro falla el contraste AA (1.4:1–1.5:1, medido). Pasa ≥5.5:1 sobre blanco y beige. Es el mismo rol de marca (etiqueta de sección), solo con la luminosidad ajustada para ser legible.

### Neutral
- **Blanco Papel** (#ffffff): fondo por defecto, texto sobre negro.
- **Beige Cálido** (#f8f6f3): fondo de sección alternativo (Hero) — cálido sin caer en el "cream AI-default"; se combina siempre con negro/gris, nunca solo.
- **Beige Fuerte** (#ede8e1): variante más saturada del beige, para acentos de fondo puntuales.
- **Grafito 900** (#1a1a1a): fondo de bloques oscuros internos (tarjeta destacada de Servicios), ligeramente más suave que el negro puro.
- **Grafito 700** (#4a4a4a): texto secundario sobre fondo claro en contextos de mayor peso.
- **Pizarra 500** (#6b6b6b): cuerpo de texto secundario estándar sobre blanco.
- **Niebla 300 / 100** (#d1d1d1 / #f5f5f5): bordes, separadores, fondos de scrollbar.

*(El proyecto también usa la escala gris estándar de Tailwind — `gray-400`, `gray-600`, `gray-200` — para pasos intermedios que la escala `koob-gray` no cubre. Tratarla como extensión de la misma familia neutra, no como un segundo sistema.)*

### Named Rules
**La Regla del Acento Único.** El blush champán no decora superficies; marca un único punto de atención por vista (una etiqueta, un hover, un borde). Si aparece dos veces compitiendo en la misma composición, hay que retirar una.

## 3. Typography

**Display / Body Font:** Inter (con `-apple-system, BlinkMacSystemFont, sans-serif` de respaldo) — una sola familia en todo el sistema, ninguna serif. La personalidad no viene de mezclar tipos, viene del contraste de peso (400 → 500 → 600 → 700 → 800) y del tracking negativo en los titulares.

**Character:** Directa y ejecutiva sin ser fría — el peso bold en los titulares transmite convicción; el cuerpo a 1.7 de interlineado y gris pizarra transmite la calidez cercana de una conversación, no un informe.

### Hierarchy

La jerarquía HTML y la jerarquía visual son independientes: `h1`, `h2` y `h3` describen el contenido; las clases `type-*` describen su presencia. La implementación vive en `src/index.css`.

- **Hero display — `type-display-hero`:** 40px → 46.4px → `clamp(49.6px, 3.5vw, 68px)`, peso 800. Reservado al mensaje principal de portada.
- **Flagship display — `type-display-flagship`:** 44px → 48px → 60px → `clamp(60px, 4.2vw, 72px)`, peso 700. Reservado al nombre aislado de la propuesta insignia de KOOB; no se utiliza para cualquier producto, servicio o titular largo.
- **Section title — `type-section-title`:** 36px → 48px, peso 600. Título principal de una sección.
- **Compact section title — `type-section-title-compact`:** 30px → 36px, peso 600. Secciones de apoyo y llamadas a la acción.
- **Lead / entradilla — `type-lead-flagship`:** 20px, peso 500, leading 1.6. Clase única para toda entradilla destacada del sitio (Hero incluido); ya no existe una variante `type-lead-hero` independiente.
- **Card title:** escala semántica de 16px, 20px, 24px y display de conversión de 28px → 30px.
- **Body — `type-module-body` / `type-card-body`:** 16px como mínimo de lectura; 17px en módulos amplios de escritorio.
- **Small body — `type-body-small`:** 14px solo para información secundaria y tarjetas, nunca como párrafo principal largo en móvil.
- **Eyebrow — `type-eyebrow`:** 14px, peso 600, tracking 0.2em, uppercase.
- **Module label — `type-module-label`:** 12px, peso 600, tracking 0.22em, uppercase.
- **Actions — `type-button*` / `type-inline-link`:** 14–18px según jerarquía y superficie.

### Named Rules
**La Regla del Tracking Negativo.** Todo titular (display/headline) lleva `letter-spacing` negativo (-0.02em a -0.025em); nunca positivo. El tracking positivo (`0.2em`) queda reservado exclusivamente a los labels en mayúscula.

**La Regla del Rol, no de la Etiqueta.** Nunca aplicar tamaños globales por `h1`, `h2` o `h3`. Cada elemento conserva el nivel semántico correcto y recibe una clase `type-*` según su función visual.

## 4. Layout, Spacing & Borders

El header establece el carril exterior de toda la web. La implementación vive en `src/index.css`: las clases semánticas centralizan el macro-layout —gutter, ancho, ritmo de sección, separación de cabecera, padding de módulos y hairlines—. Los ajustes locales quedan reservados a composiciones o estados con una función propia.

### Carriles horizontales

| Rol | Clase | Medida | Uso |
|---|---|---|---|
| Gutter de página | `page-container` | 24px → 48px → 80px | Header y todas las secciones |
| Contenido estándar | `content-container` | máximo 1280px, centrado | Contenido principal de sección |
| Contenido medio | `content-container-medium` | máximo 896px, centrado | Heroes interiores y CTAs centrados |
| Contenido estrecho | `content-container-narrow` | máximo 768px, centrado | Secciones editoriales o centradas |
| Medida estrecha | `content-measure-narrow` | máximo 768px, sin centrar | Cabeceras alineadas a la izquierda |
| Altura de navegación | `nav-height` | 86.4px | Única altura del header |

El header y las secciones utilizan los dos niveles: `page-container` fija el gutter y `content-container` alinea el carril visible con un máximo de 1280px. El fondo, el borde y la sombra del header siguen ocupando todo el ancho.

Las páginas interiores parten de `page-root`: conserva el fondo blanco, asegura la altura mínima de viewport y recorta únicamente el desbordamiento horizontal temporal de las animaciones de entrada.

### Ritmo vertical de secciones

| Rol | Clase | Móvil | Escritorio | Casos |
|---|---|---:|---:|---|
| Apertura interior | `page-intro-space` | 128px arriba / 80px abajo | igual | Hero de páginas bajo el header fijo |
| Apertura de artículo | `page-intro-space-article` | 128px arriba / 64px abajo | igual | Artículo que desemboca en una imagen |
| Introducción | `section-space-intro` | 80px | 96px → 112px | Entrada de producto |
| Destacada | `section-space-feature` | 96px | 160px | Producto principal, sección negra |
| Estándar | `section-space` | 96px | 144px | Servicios, metodología, resultados, equipo, insights |
| Compacta | `section-space-compact` | 80px | 128px | CTA y contacto |
| Editorial | `section-space-editorial` | 64px | 96px | Artículos y listados de lectura |
| Editorial amplia | `section-space-editorial-lead` | 80px | 96px | Bloque editorial de apertura |
| Pie | `footer-space` | 64px | 64px | Footer |

Las barras utilitarias —filtros y navegación entre artículos— usan `utility-bar-space` (32px). No se confunden con una sección de contenido.

### Distancias internas

- `title-lead-gap`: 24px entre un título de producto y su entradilla.
- `section-content-gap`: 48px → 56px → 64px entre cabecera y cuerpo principal.
- `section-heading-row`: cabecera de sección con 24px de separación y 56px de margen inferior.
- `section-heading-gap`: 64px después de una cabecera apilada.
- `section-heading-gap-large`: 80px para una apertura editorial amplia.
- `gap-actions`: 16px entre acciones relacionadas.
- `gap-grid`: 24px entre tarjetas independientes.
- `gap-wide`: 48px → 80px en composiciones de dos columnas.
- `gap-section`: 64px entre áreas principales.
- `module-padding`: 32px → 40px; `module-padding-compact`: 28px → 32px; `module-padding-grid`: 32px; `module-padding-large`: 40px.

### Bordes y divisores

Todos los bordes estructurales son de 1px. El tono depende del fondo, no del componente:

- Claro estándar — `border-hairline-light` / `divide-hairline-light`: `#e5e7eb`.
- Claro secundario — `border-hairline-subtle`: `#f3f4f6`.
- Claro marcado — `border-hairline-strong`: `#d1d1d1`.
- Sobre beige — `border-hairline-ink`: negro al 10%.
- Sobre negro — `border-hairline-dark` / `divide-hairline-dark`: blanco al 10%.
- Tramas conectadas — `grid-frame-light` + `grid-cell-light`: una sola cuadrícula continua, sin dobles bordes.

### Named Rules

**La Regla del Carril.** Toda sección comienza con `page-container`. Solo después se elige `content-container` o `content-container-narrow`; nunca se repiten a mano los paddings del header.

**La Regla del Rol Espacial.** Cada sección elige uno de los cinco ritmos verticales. No se crea un `py-*` nuevo para corregir una sección aislada.

**La Regla de la Línea Única.** Los límites estructurales usan los tokens `hairline`; los subrayados interactivos de enlaces pueden conservar su tratamiento propio.

**Excepciones compositivas.** El Hero mantiene su retícula asimétrica, la banda social y su altura visual; Reimpulso conserva la esquina cortada; las tarjetas conectadas conservan su trama. Son excepciones de composición, no nuevos sistemas de margen o borde.

## 5. Elevation

El sistema es plano por defecto: sin `box-shadow` decorativo, jerarquía resuelta por color de fondo y espacio, no por volumen simulado. Las únicas sombras existentes son respuestas puntuales a estado — scroll de navegación y menús desplegables — nunca un adorno permanente en botones o tarjetas.

### Shadow Vocabulary
- **Nav en scroll** (`shadow-sm`): aparece solo cuando la navegación deja de estar en el tope de página, junto con `bg-white/95 backdrop-blur-sm`.
- **Dropdown / menú abierto** (`shadow-lg`): sombra media al desplegar un submenú de navegación, se retira al cerrar.

### Named Rules
**La Regla del Reposo Plano.** Ningún elemento en su estado por defecto lleva sombra. Una sombra solo se justifica como reacción a scroll, hover o apertura — nunca como estética de "tarjeta flotante" permanente.

## 5b. Motion

El movimiento acompaña a la lectura; no la precede. Entradas suaves, ascendentes (`y` positiva → 0), con `ease` `[0.22, 1, 0.36, 1]` y duración ~1.1s (los vídeos, algo más). El Hero se anima también en ambas direcciones: al cargar y cada vez que se vuelve a él con scroll (`whileInView`, `once: false`). `prefers-reduced-motion` reduce toda animación a ~0ms (ver `src/index.css`).

### Named Rules

**La Regla de la Animación Visible.** Ningún elemento se anima si el usuario no lo tiene en pantalla. **Cada elemento** que entra con scroll observa **su propia** visibilidad — nunca un contenedor `staggerContainer` que dispara a todos los hijos a la vez (eso anima elementos que aún están bajo el fold). La animación es **bidireccional**: se hace al entrar y se **deshace al salir** (`once: false`), de modo que hay movimiento tanto al bajar como al subir.

Implementación (`src/lib/animations.ts` + `src/components/Reveal.tsx`):
- Envuelve cada elemento en `<Reveal>` **o** pon `initial="hidden" whileInView="visible" viewport={revealViewport} variants={reveal}` en cada `motion.*`.
- Para una cascada entre elementos **ya visibles**, pasa `custom={<segundos>}` (retardo por elemento; no adelanta nada que no se vea).
- `staggerContainer` / `staggerItem` quedan **solo** para bloques que siempre entran completos en el viewport (p. ej. la cabecera del Hero, que anima con `animate` al cargar, no con scroll).

## 6. Components

### Buttons
- **Shape:** esquinas siempre rectas (`border-radius: 0`), sin excepción.
- **Primary (sobre fondo claro):** fondo negro, texto blanco, `px-7/8 py-4`, peso semibold, tracking amplio. Hover: `bg-gray-900` (oscurece ligeramente, no cambia de color).
- **Inverted (sobre fondo negro):** fondo blanco, texto negro. Hover: `bg-koob-gold` (blush champán) — el único punto donde el acento cubre un botón entero.
- **Ghost:** texto gris-500 subrayado (`underline underline-offset-4`), sin fondo ni borde; hover pasa a negro.

### Inline directional action
- **Componente único:** `InlineArrowLink`. Toda acción editorial con el patrón «texto + flecha lineal» reutiliza este componente; no se dibujan líneas ni flechas locales.
- **Geometría fija:** SVG continuo de 48 × 20px. El asta y la punta forman un solo trazo; su longitud no cambia por sección ni breakpoint.
- **Separación:** 12px entre el texto y el símbolo. El área clicable conserva una altura mínima de 44px.
- **Alcance:** se usa en acciones editoriales sobre fondo claro. Botones, enlaces subrayados y acciones compactas dentro de franjas conservan sus patrones propios.

### Cards / Containers
- **Corner Style:** recto, sin excepción (mismo radius 0 que los botones).
- **Background:** bloques de color a borde de sección (negro / grafito-900 / blanco) en vez de tarjetas individuales flotantes.
- **Shadow Strategy:** ninguna — ver Elevación. La separación entre bloques es una línea de 1px (`border-gray-200`), no una sombra.
- **Border:** líneas finas de 1px como único recurso de separación entre bloques adyacentes.
- **Internal Padding:** generoso, `p-10` a `p-14` en bloques destacados, `p-4` a `p-6` en elementos de contacto.

### Inputs / Fields
- **Style:** sobre fondo negro, relleno `bg-white/5`, borde `border-white/10`, sin radius, placeholder en gris-500.
- **Focus:** el borde cambia a blush champán (`focus:border-koob-gold`) y se retira el outline nativo — único momento en que el input "se ilumina".
- **Error / Disabled:** no implementado todavía; al añadirlo, mantener el mismo lenguaje (borde de color, sin relleno de fondo distinto) en vez de introducir iconografía nueva.

### Navigation
- Transparente sobre el Hero; al hacer scroll pasa a `bg-white/95 backdrop-blur-sm` con `shadow-sm` y borde inferior gris-200. Enlaces en `text-sm`, activo en negro medium, inactivo en gray-600 con hover a negro. Dropdown desciende con fade + translateY de 6px en 0.18s. En móvil, colapsa a menú de pantalla completa (mismo lenguaje tipográfico, sin adaptación decorativa).

## 7. Do's and Don'ts

### Do:
- **Do** usar radius 0 en absolutamente todo: botones, inputs, bloques de color, imágenes recortadas.
- **Do** invertir secciones completas a negro (no tarjetas oscuras) para marcar los momentos de mayor peso comunicativo.
- **Do** reservar el blush champán (#DCCEC2) para un único punto de atención por vista: eyebrow, hover o borde de énfasis.
- **Do** mantener el cuerpo de texto en pizarra-500/gray-400, nunca gris claro de baja legibilidad, y verificar contraste AA en cada combinación fondo/texto.
- **Do** usar `koob-gold-ink` (#7E5E44), no `koob-gold` (#DCCEC2), para cualquier eyebrow/label en texto sobre fondo beige o blanco — el blush champán puro solo es texto válido sobre negro/grafito.
- **Do** transmitir autoridad mediante trayectoria y lenguaje concreto — nunca con cifras, porcentajes o estadísticas en la interfaz.

### Don't:
- **Don't** usar azul corporativo, iconografía de gráficos ascendentes ni fotografía de stock de oficina — es la estética de consultora genérica que KOOB rechaza explícitamente.
- **Don't** introducir gradientes, hero-metrics (número grande + label), glassmorphism decorativo ni tarjetas idénticas repetidas — es el andamiaje SaaS/startup que el proyecto evita.
- **Don't** redondear ninguna esquina, ni siquiera "un poco" para suavizar — el radius 0 es una regla, no un valor por defecto que se pueda ajustar por gusto.
- **Don't** añadir sombras decorativas permanentes a botones o tarjetas en reposo; una sombra solo existe como respuesta a scroll o interacción.
- **Don't** mostrar ningún número, porcentaje, año o estadística como argumento comercial en ninguna superficie del sitio.
- **Don't** usar tono de venta agresiva o urgencia artificial en CTAs — el cliente ideal llega escéptico y necesita confianza, no presión.
