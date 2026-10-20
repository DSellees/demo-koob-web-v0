import { useRef, useState } from 'react';
import {
  ArrowDown,
  BarChart3,
  BrainCircuit,
  Coins,
  Compass,
  HeartHandshake,
  Laptop,
  MessagesSquare,
  Plus,
  Settings,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react';
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

// Los cuatro servicios "completos": títulos del briefing, descripciones de la lámina del cliente.
const servicios = [
  {
    title: 'KOOB Reimpulso',
    description:
      'Nuestro acompañamiento estratégico integral para empresas que quieren crecer, mejorar su rentabilidad o abordar un proceso de transformación.',
    to: '/reimpulso' as string | null,
  },
  {
    title: 'Recursos Humanos',
    description:
      'Para empresas que quieren impulsar su talento, mejorar la cultura y alinear a sus equipos con la estrategia del negocio.',
    to: null,
  },
  {
    title: 'Comunicación Interna y Eventos',
    description:
      'Para empresas que quieren crear un entorno donde las personas se informen, se impliquen y vivan el cambio, a través de una comunicación efectiva y experiencias con impacto.',
    to: null,
  },
  {
    title: 'Ecosistema Estratégico de Expertos',
    description:
      'Ponemos a tu disposición una red de profesionales senior y especialistas por sector, para aportar una mirada experta y multidisciplinar a tus retos.',
    to: null,
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

const ICONOS: Record<string, LucideIcon> = {
  'Experiencia de cliente': HeartHandshake,
  'Estrategia empresarial': Compass,
  'Finanzas y control interno': Coins,
  'Comercial y marketing': TrendingUp,
  'Operaciones y procesos': Settings,
  'Organización y personas': Users,
  'Comunicación y eventos': MessagesSquare,
  'Data e IA': BrainCircuit,
  Tecnología: Laptop,
};

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
 * Caja de una línea de negocio: icono, título y una frase. El detalle (los
 * puntos de la lámina) queda colapsado hasta que se pulsa "Ver detalle", pero
 * sigue en el DOM (técnica grid 0fr → 1fr), así que sigue siendo texto indexable.
 */
const Linea = ({
  title,
  resumen,
  items,
}: {
  title: string;
  resumen: string;
  items: string[];
}) => {
  const [open, setOpen] = useState(false);
  const id = `linea-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const Icono = ICONOS[title] ?? BarChart3;

  return (
    <article className="group flex flex-col border border-hairline-dark p-7 transition-colors duration-300 hover:border-hairline-light hover:bg-koob-beige">
      <Icono
        aria-hidden="true"
        className="h-7 w-7 text-koob-gold transition-colors duration-300 group-hover:text-koob-gold-ink"
        strokeWidth={1.5}
      />
      <h3 className="mt-6 text-[1.35rem] font-bold leading-tight tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-black">
        {title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-snug text-gray-300 transition-colors duration-300 group-hover:text-koob-gray-700">
        {resumen}
      </p>

      <div
        id={id}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="grid gap-y-2.5 pt-6">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[0.9rem] leading-snug text-gray-300 transition-colors duration-300 group-hover:text-koob-gray-700"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-koob-gold transition-colors duration-300 group-hover:bg-koob-gold-ink"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={id}
        className="mt-auto flex cursor-pointer items-center gap-2 pt-6 text-sm font-semibold text-white transition-colors duration-300 group-hover:text-black"
      >
        {open ? 'Ocultar detalle' : 'Ver detalle'}
        <Plus
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          strokeWidth={1.75}
        />
      </button>
    </article>
  );
};

const Servicios = () => {
  const muchoMasRef = useRef<HTMLSpanElement>(null);
  const muchoMasVisible = useInView(muchoMasRef);

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
                <h2 className="type-section-title text-black">Nuestras líneas de negocio</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-koob-gray-500"
              >
                Entendemos tu reto, definimos el camino y te acompañamos en la implementación.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {servicios.map((servicio, index) => {
                // KOOB Reimpulso es el servicio insignia: su celda va en oscuro.
                const dark = servicio.to === '/reimpulso';
                const contacto = contactoServicio(servicio.title);
                return (
                  <motion.article
                    key={servicio.title}
                    {...revealProps}
                    custom={index * 0.08}
                    className={`relative flex flex-col border p-7 ${
                      dark
                        ? 'border-black bg-black text-white'
                        : 'border-hairline-light bg-white'
                    }`}
                  >
                    <div
                      className={`mb-6 h-0.5 w-10 ${dark ? 'bg-koob-gold' : 'bg-koob-gold-ink'}`}
                    />
                    <h3
                      className={`text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] lg:min-h-[5.775rem] ${
                        dark ? 'text-white' : 'text-black'
                      }`}
                    >
                      {servicio.title}
                    </h3>
                    <p
                      className={`mt-4 text-[0.95rem] leading-relaxed ${
                        dark ? 'text-gray-300' : 'text-koob-gray-700'
                      }`}
                    >
                      {servicio.description}
                    </p>

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
                <p className="type-eyebrow mb-5 text-koob-gold">Sectores</p>
                <h2 className="type-section-title text-white">Cada realidad pide una mirada propia</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-gray-300"
              >
                Cada sector tiene su propia manera de funcionar. Trabajamos con especialistas que
                la conocen desde dentro para aportar soluciones más rápidas y prácticas.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 items-start gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[...lineas, ...bandas].map((linea, index) => (
                <motion.div key={linea.title} {...revealProps} custom={(index % 3) * 0.06}>
                  <Linea title={linea.title} resumen={linea.resumen} items={linea.items} />
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
