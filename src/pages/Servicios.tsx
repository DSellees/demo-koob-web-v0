import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Plus } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';
import InsightInviteImage from '../sections/InsightInviteImage';
import SeoMeta from '../components/SeoMeta';
import SweepArrowLink from '../components/SweepArrowLink';
import { reveal, revealViewport } from '../lib/animations';

/**
 * Qué ofrecemos — servicios de KOOB, estructurados como la lámina "Nuestras
 * líneas estratégicas" del cliente: siete líneas en rejilla y, aparte, las
 * bandas de Data e IA y de Tecnología. KOOB Reimpulso se presenta como
 * servicio insignia con su propia página.
 *
 * Mismo lenguaje visual que el resto: bandas alternas, esquinas rectas,
 * hairlines, sin sombras, un único acento champán. Cada elemento observa su
 * propia visibilidad (ver "La Regla de la Animación Visible").
 */

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

// Los cuatro servicios "completos" del briefing del cliente.
const servicios = [
  {
    title: 'KOOB Reimpulso',
    audience:
      'Empresas con tensión de tesorería, con oportunidades de crecimiento sin un plan claro, o ante un proceso de transformación.',
    description:
      'Visión estratégica, acompañamiento ejecutivo y capacidad de implementación en los momentos clave de la evolución de una empresa: estabilidad financiera, crecimiento y transformación.',
    points: [] as string[],
    to: '/reimpulso' as string | null,
    cta: 'Conocer KOOB Reimpulso' as string | null,
  },
  {
    title: 'Recursos Humanos',
    audience:
      'Empresas que necesitan que RRHH deje de gestionar personas y empiece a impulsar el negocio.',
    description:
      'Convertimos la función de RRHH en un socio estratégico: proactivo, que anticipa y lidera los cambios, que habla en términos de resultados y tiene voz en el Comité de Dirección.',
    points: [] as string[],
    to: null,
    cta: null,
  },
  {
    title: 'Comunicación Interna y Eventos',
    audience:
      'Empresas que quieren ser un lugar donde las personas quieran trabajar, crecer y permanecer.',
    description:
      'Comunicación interna como herramienta estratégica, no como canal informativo: cultura sólida y coherente, mejor diálogo entre equipos y liderazgo, y experiencias internas que refuerzan el sentimiento de pertenencia.',
    points: [] as string[],
    to: null,
    cta: null,
  },
  {
    title: 'Ecosistema Estratégico de Expertos',
    audience: 'Proyectos que piden una mirada multidisciplinar, específica de su sector.',
    description:
      'Conectamos a tu empresa con especialistas y colaboradores expertos según las necesidades concretas de cada proyecto y sector.',
    points: [] as string[],
    to: null,
    cta: null,
  },
];

// Las siete líneas de la lámina del cliente, en su orden.
const lineas = [
  {
    title: 'Experiencia de cliente',
    resumen: 'Estrategias centradas en el cliente y en su experiencia en cada punto de contacto.',
    items: [
      'Diseño de estrategias centradas en el cliente',
      'Diseño, análisis y auditoría de programas de la voz del cliente (VoC)',
      'Optimización de la experiencia digital en todos los canales',
      'Auditoría de la experiencia en puntos críticos',
    ],
  },
  {
    title: 'Estrategia empresarial',
    resumen: 'Rumbo, crecimiento y diversificación, con la tecnología y lo digital como palanca.',
    items: [
      'Estrategia de crecimiento orgánico e inorgánico',
      'Diversificación',
      'Estrategia comercial',
      'Estrategia de tecnología',
      'Estrategia de digitalización',
    ],
  },
  {
    title: 'Finanzas y control interno',
    resumen: 'Mejora del rendimiento, procesos económico-financieros y gestión del riesgo.',
    items: [
      'Reestructuración y mejora del rendimiento',
      'Reingeniería de procesos económico-financieros',
      'Control y gestión del riesgo',
    ],
  },
  {
    title: 'Comercial y marketing',
    resumen: 'Planes de marketing, procesos comerciales y los sistemas que los sostienen.',
    items: [
      'Plan de marketing',
      'Algoritmia',
      'Sistemas de gestión y dinamización de redes',
      'Procesos comerciales',
    ],
  },
  {
    title: 'Operaciones y procesos',
    resumen: 'Procesos más ágiles: análisis, automatización y cadena de suministro.',
    items: [
      'Análisis de procesos',
      'Automatización y robotización',
      'Sistemas de planificación y control',
      'Soporte tecnológico',
      'Supply Chain',
      'Programas de cost cutting',
    ],
  },
  {
    title: 'Organización y personas',
    resumen: 'Organización, talento y cultura, y cómo gestionar el cambio.',
    items: [
      'Diseño organizacional',
      'Integración organizativa y post-deal',
      'Evaluación y análisis organizacional',
      'Gestión del cambio',
      'Cultura organizacional',
      'Gestión del talento y desarrollo',
      'Gestión de directivos',
    ],
  },
  {
    title: 'Comunicación y eventos',
    resumen: 'Comunicación interna y externa, cultura y experiencias corporativas.',
    items: [
      'Plan de comunicación interna y externa',
      'Comunicación estratégica',
      'Cultura y transformación organizativa',
      'Diseño y gestión de organización de eventos',
    ],
  },
];

// Las dos bandas de la lámina, aparte de las siete líneas.
const bandas = [
  {
    title: 'Data e IA',
    resumen: 'Gobierno del dato, analítica e inteligencia artificial aplicada a decisiones de negocio.',
    items: [
      'Data audit',
      'Análisis y estructuración de datos',
      'Data Governance',
      'Data Driven Strategy',
      'Business Intelligence',
      'Analítica descriptiva',
      'Machine Learning',
      'Deep Learning',
      'IA generativa',
      'AI Driven Strategy',
      'IA Lab',
      'IA humanista',
    ],
  },
  {
    title: 'Tecnología',
    resumen: 'Auditoría de sistemas, arquitecturas y estrategia tecnológica.',
    items: [
      'Auditoría de sistemas',
      'Migración y evolución de arquitecturas',
      'Tech Stack definition',
      'Tech Strategy',
    ],
  },
];

const WHATSAPP_NUMBER = '34609483114';
const CONTACT_EMAIL = 'info@koobadvisory.com';

/**
 * "Saber más" de cada servicio: abre un mensaje ya escrito. En móvil y tablets
 * (puntero táctil) lo más natural es WhatsApp; en un ordenador de sobremesa
 * puede no haber WhatsApp instalado, así que se abre el correo. No hay forma
 * fiable de saber si el equipo tiene WhatsApp, por eso se decide por el tipo
 * de dispositivo.
 */
const prefiereWhatsApp = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent));

const contactoServicio = (titulo: string) => {
  const mensaje = `Hola, me interesa el servicio «${titulo}». Me encantaría cerrar una primera reunión de contacto para hablar de ello.`;
  if (prefiereWhatsApp()) {
    return {
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`,
      canal: 'WhatsApp',
      externo: true,
    };
  }
  return {
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Me interesa: ${titulo}`,
    )}&body=${encodeURIComponent(mensaje)}`,
    canal: 'correo',
    externo: false,
  };
};

/**
 * Fila desplegable: título + una frase, y el detalle (los puntos de la lámina)
 * oculto hasta que se pulsa. El detalle sigue en el DOM (solo colapsado con
 * la técnica grid 0fr → 1fr), así que sigue siendo texto indexable.
 */
const Linea = ({
  title,
  resumen,
  items,
  dark = false,
}: {
  title: string;
  resumen: string;
  items: string[];
  dark?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const id = `linea-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className={`group/fila ${
        dark ? 'border-b border-hairline-dark' : 'border-b border-hairline-strong'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full cursor-pointer items-center gap-6 py-7 text-left lg:grid lg:grid-cols-[17rem_1fr_auto] lg:gap-10"
      >
        <span
          className={`text-[1.35rem] font-bold leading-tight tracking-[-0.025em] ${
            dark ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </span>
        <span
          className={`hidden text-base leading-snug lg:block ${
            dark ? 'text-gray-300' : 'text-koob-gray-500'
          }`}
        >
          {resumen}
        </span>
        <Plus
          aria-hidden="true"
          className={`ml-auto h-6 w-6 shrink-0 transition-transform duration-300 group-hover/fila:scale-125 ${
            open ? 'rotate-45 group-hover/fila:rotate-45' : ''
          } ${dark ? 'text-koob-gold' : 'text-koob-gold-ink'}`}
          strokeWidth={1.75}
        />
      </button>

      <div
        id={id}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`pb-5 text-base leading-snug lg:hidden ${
              dark ? 'text-gray-300' : 'text-koob-gray-500'
            }`}
          >
            {resumen}
          </p>
          <ul className="grid gap-x-10 gap-y-3 pb-8 sm:grid-cols-2 lg:grid-cols-3 lg:pl-[calc(17rem+2.5rem)]">
            {items.map((item) => (
              <li
                key={item}
                className={`flex items-start gap-3 text-[0.95rem] leading-snug ${
                  dark ? 'text-gray-300' : 'text-koob-gray-700'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-[0.45rem] h-1.5 w-1.5 shrink-0 ${
                    dark ? 'bg-koob-gold' : 'bg-koob-gold-ink'
                  }`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Servicios = () => {
  // Las cuatro cards comparten dos alturas: la de reposo (la de la más larga cerrada)
  // y un MÁXIMO al desplegarse (la de la más larga abierta), de modo que todas
  // llegan por igual hasta el mismo punto. Cada una se abre por su cuenta sin
  // estirar a las demás: la rejilla es `items-start` y la igualdad se fija con
  // las variables --min-closed / --min-open, que usa el `min-height` de la card.
  // Solo se mide en carga y al redimensionar (nunca con una card abierta).
  const cardsRef = useRef<HTMLDivElement>(null);
  const muchoMasRef = useRef<HTMLSpanElement>(null);
  const muchoMasVisible = useInView(muchoMasRef);
  useEffect(() => {
    const igualar = () => {
      const cards = Array.from(cardsRef.current?.querySelectorAll('article') ?? []);
      if (cards.length === 0) return;
      const paneles = cards.map((c) =>
        Array.from(c.querySelectorAll<HTMLElement>('div')).find((d) =>
          d.className.includes('grid-rows-'),
        ),
      );
      const altura = () => Math.ceil(Math.max(...cards.map((c) => c.getBoundingClientRect().height)));

      // Todo el proceso se hace con las transiciones apagadas y forzando un reflow
      // antes de restaurarlas: así no se ve ninguna animación al cargar/medir.
      const raiz = cardsRef.current as HTMLElement;
      cards.forEach((c) => (c.style.transition = 'none'));
      paneles.forEach((p) => p && (p.style.transition = 'none'));
      cards.forEach((c) => {
        c.style.setProperty('--min-closed', '0px');
        c.style.setProperty('--min-open', '0px');
      });
      void raiz.offsetHeight;
      const cerrada = altura();

      paneles.forEach((p) => p && (p.style.gridTemplateRows = '1fr'));
      const abierta = altura();
      paneles.forEach((p) => p && (p.style.gridTemplateRows = ''));

      cards.forEach((c) => {
        c.style.setProperty('--min-closed', `${cerrada}px`);
        c.style.setProperty('--min-open', `${abierta}px`);
      });
      void raiz.offsetHeight;
      cards.forEach((c) => (c.style.transition = ''));
      paneles.forEach((p) => p && (p.style.transition = ''));
    };
    igualar();
    window.addEventListener('resize', igualar);
    document.fonts?.ready.then(igualar);
    return () => window.removeEventListener('resize', igualar);
  }, []);

  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title="Qué ofrecemos — KOOB Advisory"
        description="Nuestras líneas estratégicas: experiencia de cliente, estrategia empresarial, finanzas y control interno, comercial y marketing, operaciones y procesos, organización y personas, comunicación y eventos, además de Data e IA y Tecnología. Y KOOB Reimpulso, nuestro servicio insignia."
        url="https://koobadvisory.com/servicios"
      />
      <Navigation />

      {/* ── Hero (negro) ──────────────────────────────────────────── */}
      <header className="page-intro-space overflow-hidden bg-black text-white pt-[calc(var(--layout-nav-height)+var(--section-y))]">
        <div className="page-container">
          <div className="content-container">
            <motion.p {...revealProps} className="type-eyebrow mb-5 text-koob-gold">
              Qué ofrecemos
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              <div>
                <motion.h1 {...revealProps} custom={0.06} className="type-section-title text-white">
                  Un partner estratégico para tu empresa
                </motion.h1>
              </div>
              <div>
                <motion.p
                  {...revealProps}
                  custom={0.12}
                  className="type-section-lead max-w-xl text-gray-300"
                >
                  Pensamos, decidimos y ejecutamos contigo, y nos quedamos hasta que el cambio
                  funciona por sí solo.
                </motion.p>
                <motion.div {...revealProps} custom={0.18} className="mt-6">
                  <SweepArrowLink to="/contacto" variant="dark">
                    Hablemos de tu situación
                  </SweepArrowLink>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Servicios completos (claro) ───────────────────────────── */}
      <section className="section-space relative overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold-ink">Servicios</p>
                <h2 className="type-section-title text-black">Nuestros servicios destacados</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-koob-gray-500"
              >
                Somos una consultora multidisciplinar. Estas son nuestras áreas de mayor impulso.
              </motion.p>
            </div>

            <div
              ref={cardsRef}
              className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {servicios.map((servicio, index) => {
                // KOOB Reimpulso es el servicio insignia: su celda va en oscuro.
                const dark = servicio.to === '/reimpulso';
                const contacto = contactoServicio(servicio.title);
                return (
                  <motion.article
                    key={servicio.title}
                    {...revealProps}
                    custom={index * 0.08}
                    className={`group/card relative flex min-h-[var(--min-closed,0px)] flex-col border p-7 transition-[min-height] duration-300 ease-out [@media(hover:hover)]:focus-within:min-h-[var(--min-open,0px)] [@media(hover:hover)]:hover:min-h-[var(--min-open,0px)] ${
                      dark
                        ? 'border-black bg-black text-white'
                        : 'border-hairline-light bg-white'
                    }`}
                  >
                    <div
                      className={`mb-6 h-0.5 w-10 ${dark ? 'bg-koob-gold' : 'bg-koob-gold-ink'}`}
                    />
                    <h3
                      className={`text-[1.5rem] font-bold leading-[1.1] tracking-[-0.03em] ${
                        dark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {servicio.title}
                    </h3>
                    <p
                      className={`mt-4 text-xs font-semibold uppercase tracking-[0.16em] ${
                        dark ? 'text-koob-gold' : 'text-koob-gold-ink'
                      }`}
                    >
                      Para quién
                    </p>
                    <p
                      className={`mt-1.5 text-[0.95rem] leading-relaxed ${
                        dark ? 'text-gray-200' : 'text-koob-gray-700'
                      }`}
                    >
                      {servicio.audience}
                    </p>

                    {/* Descripción: se despliega al pasar el cursor (o al enfocar con teclado)
                        empujando hacia abajo lo que hay debajo; el botón queda siempre al final.
                        En dispositivos sin hover (móvil/tablet) va siempre visible. Colapsada
                        sigue en el DOM. `group/card` (con nombre) evita que el hover de la card
                        active también el barrido del botón, que es otro `group`. */}
                    <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-focus-within/card:grid-rows-[1fr] [@media(hover:hover)]:group-hover/card:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <p
                          className={`pt-4 text-[0.95rem] leading-relaxed ${
                            dark ? 'text-gray-400' : 'text-koob-gray-500'
                          }`}
                        >
                          {servicio.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto pt-5">
                      <SweepArrowLink
                        {...(servicio.to
                          ? { to: servicio.to }
                          : { href: contacto.href, external: contacto.externo })}
                        ariaLabel={`Saber más sobre ${servicio.title}${
                          servicio.to ? '' : `, por ${contacto.canal}`
                        }`}
                        variant={dark ? 'dark' : 'light'}
                      >
                        Saber más
                      </SweepArrowLink>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.p
              {...revealProps}
              className="mt-6 text-xs leading-relaxed text-koob-gray-400"
            >
              * En un mismo proyecto pueden activarse varias a la vez.
            </motion.p>
          </div>
        </div>

        {/* "Mucho más": pegado al borde inferior de esta sección, justo encima de la
            punta del divisor. */}
        <span
          ref={muchoMasRef}
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          {/* Bota cada 5 s. Solo se anima mientras está en pantalla (Regla de la
              Animación Visible) y se detiene con prefers-reduced-motion. */}
          <span
            style={{ animationPlayState: muchoMasVisible ? 'running' : 'paused' }}
            className="flex animate-bote-cada-5s items-center gap-2.5 whitespace-nowrap text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-koob-gray-400 motion-reduce:animate-none"
          >
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
            Mucho más
            <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
        </span>
      </section>

      {/* ── Líneas estratégicas (negro): las siete líneas + Data e IA + Tecnología ── */}
      <section className="section-space relative -mt-px overflow-hidden bg-black text-white">
        {/* Divisor con forma: una punta beige que se clava en el negro — avisa de que
            la página sigue. `-mt-px` en la sección y `-top-px` en la punta tapan la
            costura de subpíxel entre bandas. */}
        <div
          aria-hidden="true"
          className="absolute -top-px left-1/2 -translate-x-1/2"
        >
          <div className="h-[calc(2.5rem+1px)] w-24 bg-koob-beige [clip-path:polygon(0_0,100%_0,50%_100%)] sm:h-[calc(3rem+1px)] sm:w-28" />
        </div>
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold">Especialidades</p>
                <h2 className="type-section-title text-white">Nuestras líneas estratégicas</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-gray-300"
              >
                Las áreas de conocimiento desde las que trabajamos. Y cuando el proyecto lo pide,
                sumamos especialistas expertos de cada sector.
              </motion.p>
            </div>

            <div className="border-t border-hairline-dark">
              {[...lineas, ...bandas].map((linea, index) => (
                <motion.div key={linea.title} {...revealProps} custom={(index % 5) * 0.04}>
                  <Linea title={linea.title} resumen={linea.resumen} items={linea.items} dark />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <InsightInviteImage />

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default Servicios;
