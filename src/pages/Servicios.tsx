import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';
import SeoMeta from '../components/SeoMeta';
import SweepArrowLink from '../components/SweepArrowLink';
import { reveal, revealViewport } from '../lib/animations';

/**
 * Qué ofrecemos — página de servicios de KOOB.
 * Contenido a partir del briefing del cliente (~/Downloads/briefing-koob.json):
 * cuatro áreas de servicio + cómo trabaja KOOB (los 5 puntos de diferenciación).
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

const servicios = [
  {
    title: 'KOOB Reimpulso',
    audience:
      'Empresas con tensión de tesorería, con oportunidades de crecimiento sin un plan claro, o ante un proceso de transformación.',
    description:
      'Visión estratégica, acompañamiento ejecutivo y capacidad de implementación en los momentos clave de la evolución de una empresa: estabilidad financiera, crecimiento y transformación.',
    points: [],
    to: '/reimpulso',
    cta: 'Conocer KOOB Reimpulso',
  },
  {
    title: 'Recursos Humanos',
    audience:
      'Empresas que necesitan que RRHH deje de gestionar personas y empiece a impulsar el negocio.',
    description:
      'Convertimos la función de RRHH en un socio estratégico: proactivo, que anticipa y lidera los cambios, que habla en términos de resultados y tiene voz en el Comité de Dirección.',
    points: [],
    to: null,
    cta: null,
  },
  {
    title: 'Comunicación Interna y Eventos',
    audience:
      'Empresas que quieren ser un lugar donde las personas quieran trabajar, crecer y permanecer.',
    description:
      'Comunicación interna como herramienta estratégica, no como canal informativo: cultura sólida y coherente, mejor diálogo entre equipos y liderazgo, y experiencias internas que refuerzan el sentimiento de pertenencia.',
    points: [
      'Estrategia de cultura y comunicación',
      'Diseño de experiencias y eventos internos',
      'Narrativa corporativa y employer branding interno',
      'Dinamización y acompañamiento',
    ],
    to: null,
    cta: null,
  },
  {
    title: 'Ecosistema Estratégico de Expertos',
    audience: 'Proyectos que piden una mirada multidisciplinar, específica de su sector.',
    description:
      'Conectamos a tu empresa con especialistas y colaboradores expertos según las necesidades concretas de cada proyecto y sector.',
    points: [],
    to: null,
    cta: null,
  },
];

const Servicios = () => {
  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title="Qué ofrecemos — KOOB Advisory"
        description="Consultoría multidisciplinar: KOOB Reimpulso, Recursos Humanos, Comunicación Interna y Eventos, y un ecosistema de expertos. Estrategia que se ejecuta, desde la experiencia real de quienes han dirigido empresas."
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
                  Un partner estratégico para los momentos que definen tu empresa
                </motion.h1>
                <motion.div {...revealProps} custom={0.12} className="mt-8">
                  <SweepArrowLink to="/contacto" variant="dark">
                    Hablemos de tu situación
                  </SweepArrowLink>
                </motion.div>
              </div>
              <motion.p
                {...revealProps}
                custom={0.18}
                className="type-section-lead max-w-xl text-gray-300"
              >
                Más que una consultora. Nos implicamos en cada proyecto como parte del equipo —
                desde la experiencia real de quienes han dirigido empresas— y acompañamos hasta que
                los cambios están en marcha.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Servicios (claro) ─────────────────────────────────────── */}
      <section className="section-space overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold-ink">Servicios</p>
                <h2 className="type-section-title text-black">Cuatro formas de acompañarte</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-koob-gray-500"
              >
                Somos una consultora multidisciplinar. Estas son nuestras áreas de mayor impulso.
              </motion.p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {servicios.map((servicio, index) => (
                <motion.article
                  key={servicio.title}
                  {...revealProps}
                  custom={index * 0.08}
                  className="relative flex flex-col border border-hairline-light bg-white p-8 transition-colors duration-200 hover:border-black"
                >
                  <div className="mb-6 h-0.5 w-10 bg-koob-gold-ink" />
                  <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-black">
                    {servicio.title}
                  </h3>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-koob-gold-ink">
                    Para quién
                  </p>
                  <p className="mt-1.5 type-section-lead text-koob-gray-700">{servicio.audience}</p>
                  <p className="mt-4 type-section-lead text-koob-gray-500">{servicio.description}</p>

                  {servicio.points.length > 0 && (
                    <ul className="mt-5 space-y-2.5 border-t border-hairline-light pt-5">
                      {servicio.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-koob-gray-700"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 bg-koob-gold-ink"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  {servicio.to && servicio.cta && (
                    <Link
                      to={servicio.to}
                      className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-6 text-sm font-semibold text-black transition-colors after:absolute after:inset-0 after:content-[''] hover:text-koob-gold-ink"
                    >
                      {servicio.cta}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  )}
                </motion.article>
              ))}
            </div>

            <motion.p
              {...revealProps}
              className="mt-6 text-xs leading-relaxed text-koob-gray-400"
            >
              * En un mismo proyecto pueden activarse varias a la vez.
            </motion.p>
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default Servicios;
