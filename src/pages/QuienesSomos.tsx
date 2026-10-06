import { motion } from 'framer-motion';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';
import SeoMeta from '../components/SeoMeta';
import SweepArrowLink from '../components/SweepArrowLink';
import LocalVideoEmbed from '../components/LocalVideoEmbed';
import { reveal, revealViewport } from '../lib/animations';

/**
 * Quiénes somos — textos del documento del cliente ("WEB CANVIS INICI",
 * apartado Quiénes somos) mezclados con el briefing (por_que_elegir y los
 * cinco puntos de diferenciación). Por indicación del cliente, la página NO
 * lleva apartado de equipo: solo este relato + vídeo.
 *
 * Mismo lenguaje visual que Reimpulso y Servicios: bandas alternas, esquinas
 * rectas, hairlines, sin sombras, un único acento champán. Cada elemento
 * observa su propia visibilidad (ver "La Regla de la Animación Visible").
 */

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

// Los cuatro puntos de «¿Qué ofrecemos?».
const diferenciales = [
  {
    n: '01',
    title: 'Cocreamos',
    description:
      'La solución con el equipo de la compañía con un enfoque colaborativo.',
  },
  {
    n: '02',
    title: 'Transmitimos',
    description: 'Nuestros conocimientos.',
  },
  {
    n: '03',
    title: 'Te acompañamos',
    description: 'En la implementación del proyecto.',
  },
  {
    n: '04',
    title: 'Nos adaptamos',
    description:
      'Nuestro esquema de trabajo es altamente flexible. Ya sea desde un asesoramiento puntual hasta un proyecto completo.',
  },
];

const QuienesSomos = () => {
  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title="Quiénes somos — KOOB Advisory"
        description="Consultoría estratégica desde la experiencia de quienes han liderado empresas. Todo el equipo de KOOB viene del mundo de la empresa: posiciones de dirección en estrategia, comercial, operaciones, finanzas, tecnología, personas y comunicación."
        url="https://koobadvisory.com/quienes-somos"
      />
      <Navigation />

      {/* ── Cabecera (negro) ──────────────────────────────────────── */}
      <header className="page-intro-space overflow-hidden bg-black text-white pt-[calc(var(--layout-nav-height)+var(--section-y))]">
        <div className="page-container">
          <div className="content-container">
            <motion.p {...revealProps} className="type-eyebrow mb-5 text-koob-gold">
              Quiénes somos
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              <div>
                <motion.h1 {...revealProps} custom={0.06} className="type-section-title text-white">
                  Liderazgo empresarial convertido en consultoría
                </motion.h1>
              </div>
              <motion.p
                {...revealProps}
                custom={0.18}
                className="type-section-lead max-w-xl text-gray-300"
              >
                Hemos liderado negocios, tomado decisiones difíciles, cometido errores y aprendido
                a responder por cada una de ellas.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      {/* ── La experiencia (claro) ────────────────────────────────── */}
      <section className="section-space overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            {/* Declaración: titular a la izquierda, apuntes al pie derecho */}
            <div className="section-heading-row">
              <div className="max-w-xl">
                <motion.p {...revealProps} className="type-eyebrow mb-5 text-koob-gold-ink">
                  Nuestra experiencia
                </motion.p>
                <motion.h2
                  {...revealProps}
                  custom={0.06}
                  className="type-section-title text-balance text-black"
                >
                  Venimos del mundo de la empresa
                </motion.h2>
              </div>

              <motion.p
                {...revealProps}
                custom={0.12}
                className="type-section-lead max-w-md text-koob-gray-500"
              >
                Por eso, en KOOB no nos limitamos a analizar tu empresa. Nos implicamos para
                entender el reto, aportar perspectiva y convertir las decisiones en acción.
              </motion.p>
            </div>
            <motion.div {...revealProps} custom={0.18} className="-mt-4">
              <SweepArrowLink to="/contacto" variant="light">
                Hablar con un experto
              </SweepArrowLink>
            </motion.div>

            {/* Tira horizontal: equipo · vídeo (centro) · oficina. Celdas 16/9. La
                portada es el fotograma del segundo 1 sin las franjas negras; estas solo se ven al dar al play. */}
            <div className="section-content-gap grid grid-cols-1 gap-3 sm:grid-cols-3">
              <motion.div
                {...revealProps}
                className="border-hairline-light relative aspect-video overflow-hidden border"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/en-koob-carretera.webp`}
                  alt="Una carretera abierta hacia el horizonte"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover grayscale contrast-[0.92] brightness-[0.94] transition-[filter] duration-500 hover:grayscale-0"
                />
                {/* Velo suave para igualar el tono apagado del fotograma original */}
                <div className="pointer-events-none absolute inset-0 bg-black/15" aria-hidden="true" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[6%] text-[clamp(1.05rem,1.7vw,1.6rem)] font-bold tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                  En KOOB
                </span>
              </motion.div>

              {/* Vídeo en la celda central. TODO: sustituir por el vídeo de lanzamiento del Drive. */}
              <motion.div
                {...revealProps}
                custom={0.08}
                className="border-hairline-light relative aspect-video overflow-hidden border"
              >
                <LocalVideoEmbed
                  src={`${import.meta.env.BASE_URL}videos/sobre-koob-nosotros.mp4`}
                  poster={`${import.meta.env.BASE_URL}images/portada-sobre-koob-segundo-1.jpg`}
                  title="KOOB Advisory — Quiénes somos"
                />
              </motion.div>

              <motion.div
                {...revealProps}
                custom={0.16}
                className="border-hairline-light relative aspect-video overflow-hidden border"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/acompanamos-bicicleta.webp`}
                  alt="Un adulto acompaña a un niño que aprende a montar en bicicleta al atardecer"
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
                />
                {/* Velo suave y texto centrado, igual que "En KOOB". pointer-events-none
                    para que el hover llegue a la imagen y recupere el color. */}
                <div className="pointer-events-none absolute inset-0 bg-black/15" aria-hidden="true" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center pb-[6%] text-[clamp(1.05rem,1.7vw,1.6rem)] font-bold tracking-[-0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
                  Acompañamos
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lo que nos diferencia (negro) ─────────────────────────── */}
      <section className="section-space overflow-hidden bg-black text-white">
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold">Lo que nos diferencia</p>
                <h2 className="type-section-title text-white">
                  Hacemos que las cosas pasen
                </h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-gray-300"
              >
                No nos identificamos con el modelo tradicional asociado a la palabra «consultoría»:
                nos implicamos en cada proyecto y acompañamos hasta la implantación.
              </motion.p>
            </div>

            <ol className="border-t border-hairline-dark">
              {diferenciales.map((item, index) => (
                <motion.li
                  key={item.n}
                  {...revealProps}
                  custom={index * 0.08}
                  className="group grid gap-x-8 gap-y-2 border-b border-hairline-dark py-7 sm:grid-cols-[3.5rem_1fr] lg:grid-cols-[5rem_minmax(0,18rem)_1fr] lg:items-baseline"
                >
                  <span className="text-2xl font-bold tracking-[0.05em] text-koob-gold/60 transition-colors duration-200 group-hover:text-koob-gold">
                    {item.n}
                  </span>
                  <h3 className="text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="type-section-lead text-gray-300 sm:col-start-2 lg:col-start-3">
                    {item.description}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Cierre · el modelo KOOB (claro, formato franja) ───────── */}
      <section
        aria-label="El modelo de KOOB"
        className="overflow-hidden border-y border-hairline-strong bg-koob-beige text-black"
      >
        <div className="page-container">
          <div className="content-container">
            <div className="flex flex-col gap-10 py-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16 lg:py-20">
              <motion.div
                {...revealProps}
                className="max-w-2xl lg:flex lg:flex-col lg:justify-center"
              >
                <h2 className="type-section-title text-black">
                  Una red de experiencia
                  <br className="hidden sm:block" /> directiva al servicio
                  <br className="hidden sm:block" /> de tu empresa
                </h2>
              </motion.div>
              <motion.div
                {...revealProps}
                custom={0.08}
                className="shrink-0 lg:flex lg:max-w-sm lg:flex-col lg:justify-center"
              >
                <p className="type-section-lead text-koob-gray-500">
                  Un modelo flexible por proyectos, con el equipo de especialistas que tu empresa
                  necesita.
                </p>
                <div className="mt-6">
                  <SweepArrowLink to="/servicios" variant="light">
                    Ver servicios
                  </SweepArrowLink>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default QuienesSomos;
