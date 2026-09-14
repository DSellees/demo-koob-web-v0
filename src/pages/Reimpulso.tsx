import { motion } from 'framer-motion';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';
import SeoMeta from '../components/SeoMeta';
import SweepArrowLink from '../components/SweepArrowLink';
import { reveal, revealViewport } from '../lib/animations';

/**
 * KOOB Reimpulso — página del servicio insignia.
 * Réplica del contenido de koobadvisory.com/koob-reimpulso: textos literales de
 * la web y el mismo reparto de bandas negras / claras que el original
 * (héroe negro · metodología clara · "mover ficha" negra · "¿es este el
 * momento?" clara · "¿por qué KOOB?" negra · "¿cómo empezamos?" clara).
 * El lenguaje visual sí es el nuevo: esquinas rectas, hairlines, sin sombras,
 * un único acento champán. Cada elemento observa su propia visibilidad
 * (ver "La Regla de la Animación Visible" en src/lib/animations.ts).
 */

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

const metodologia = [
  {
    n: '01',
    title: 'Diagnóstico y Bloqueos',
    description: 'Analizar la situación e identificar bloqueos financieros o estratégicos.',
  },
  {
    n: '02',
    title: 'Criterio en Decisiones',
    description: 'Aportar experiencia real para la toma de decisiones críticas.',
  },
  {
    n: '03',
    title: 'Plan de Acción Viable',
    description: 'Definir una hoja de ruta ejecutable con hitos claros.',
  },
  {
    n: '04',
    title: 'Ejecución y Acompañamiento',
    description: 'Estar a tu lado en la implementación, no solo en el diagnóstico.',
  },
];

const momentos = [
  {
    title: 'Empresas con tensión en resultados',
    icon: 'icons/tension-resultados.svg',
    description:
      'Organizaciones donde los números empiezan a generar tensión. Los márgenes se estrechan, la tesorería preocupa y existen dudas sobre la viabilidad futura del modelo actual.',
    points: [
      '¿Los números ya no acompañan como antes?',
      '¿La rentabilidad pesa cada vez más sobre cada decisión?',
      '¿Te enfrentas a decisiones difíciles sin margen de error?',
    ],
    tone: 'dark' as const,
  },
  {
    title: 'Empresas con potencial',
    icon: 'icons/empresa-potencial.svg',
    description:
      'Compañías listas para crecer pero, con incertidumbre estratégica. Tienen el producto y el mercado, pero faltan las estructuras y la hoja de ruta para escalar.',
    points: [
      '¿Tu negocio tiene potencial que no acaba de despegar?',
      '¿Necesitas claridad para elegir entre varios caminos?',
      '¿Has crecido rápido, pero sin una estructura que lo sostenga?',
    ],
    tone: 'light' as const,
  },
];

const Reimpulso = () => {
  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title="KOOB Reimpulso — Reimpulsa tu empresa cuando más lo necesita"
        description="Acompañamiento ejecutivo real para empresas en momentos críticos de transformación, estabilización o crecimiento. No venimos a decirte qué hacer: venimos a hacerlo contigo."
        url="https://koobadvisory.com/reimpulso"
      />
      <Navigation />

      {/* ── Hero (negro) ──────────────────────────────────────────── */}
      <header className="page-intro-space overflow-hidden bg-black text-white pt-[calc(var(--layout-nav-height)+var(--section-y))]">
        <div className="page-container">
          <div className="content-container">
            <motion.p {...revealProps} className="type-eyebrow mb-5 text-koob-gold">
              KOOB Reimpulso
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              <div>
                <motion.h1
                  {...revealProps}
                  custom={0.06}
                  className="type-section-title text-white"
                >
                  Reimpulsa tu empresa cuando más lo necesita
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
                Hay momentos en los que una empresa deja de avanzar como debería. Los resultados
                empiezan a tensarse. O tienes ideas y oportunidades… pero no claridad sobre cómo
                seguir avanzando. En ambos casos, podemos ayudarte a recuperar foco y dirección.
              </motion.p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Nuestra metodología (claro) ───────────────────────────── */}
      <section className="section-space overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold-ink">Nuestra metodología</p>
                <h2 className="type-section-title text-black">Acompañamiento ejecutivo real</h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-koob-gray-500"
              >
                Porque los momentos críticos no se resuelven con informes. Se resuelven con decisiones
                bien tomadas y bien ejecutadas.
              </motion.p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
              {metodologia.map((fase, index) => (
                <motion.div
                  key={fase.n}
                  {...revealProps}
                  custom={index * 0.08}
                  className={`flex flex-col border border-hairline-light bg-white p-7 transition-colors duration-200 hover:border-black ${
                    index % 2 === 1 ? 'lg:mt-16' : ''
                  }`}
                >
                  <span className="text-3xl font-bold tracking-[0.05em] text-koob-gold-ink">
                    {fase.n}
                  </span>
                  <div className="mt-3 h-px w-8 bg-koob-gold-ink" />
                  <h3 className="mt-6 text-lg font-bold leading-tight tracking-[-0.025em] text-black">
                    {fase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-koob-gray-500">{fase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA · mover ficha (negro, formato franja) ─────────────── */}
      <section
        aria-label="Solicita una primera sesión"
        className="overflow-hidden border-y border-hairline-dark bg-koob-black text-white"
      >
        <div className="page-container">
          <div className="content-container">
            <div className="flex flex-col gap-10 py-16 lg:flex-row lg:items-stretch lg:justify-between lg:gap-16 lg:py-20">
              <motion.div
                {...revealProps}
                className="relative max-w-xl lg:flex lg:flex-col lg:justify-center"
              >
                <p className="type-module-label text-koob-gold lg:absolute lg:bottom-full lg:mb-4">
                  El siguiente paso
                </p>
                <h2 className="mt-4 type-section-title text-white lg:mt-0">
                  Si sientes que es momento de mover ficha, hablemos
                </h2>
              </motion.div>
              <motion.div
                {...revealProps}
                custom={0.08}
                className="shrink-0 lg:flex lg:max-w-sm lg:flex-col lg:justify-center"
              >
                <p className="type-section-lead text-gray-400">
                  La inacción es el mayor riesgo. Agenda una primera sesión exploratoria sin
                  compromiso para evaluar tu caso.
                </p>
                <div className="mt-6">
                  <SweepArrowLink to="/contacto" variant="dark">
                    Solicitar sesión
                  </SweepArrowLink>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ¿Es este el momento de tu empresa? (claro) ────────────── */}
      <section className="section-space overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            <div className="section-heading-row section-heading-gap-large">
              <motion.div {...revealProps} className="max-w-xl">
                <p className="type-eyebrow mb-5 text-koob-gold-ink">Punto de partida</p>
                <h2 className="type-section-title text-black">
                  ¿Es este el momento de tu empresa?
                </h2>
              </motion.div>
              <motion.p
                {...revealProps}
                custom={0.08}
                className="type-section-lead max-w-md text-koob-gray-700"
              >
                Trabajamos con especialistas que afrontan con claridad los retos reales de tu negocio.
              </motion.p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {momentos.map((bloque, index) => {
                const dark = bloque.tone === 'dark';
                return (
                  <motion.div
                    key={bloque.title}
                    {...revealProps}
                    custom={index * 0.08}
                    className={`flex flex-col border pt-12 px-10 pb-8 transition-colors duration-200 ${
                      dark
                        ? 'border-black bg-black text-white hover:border-koob-gold'
                        : 'border-hairline-light bg-white text-black hover:border-black'
                    }`}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${bloque.icon}`}
                      alt=""
                      aria-hidden="true"
                      className={`mb-6 w-auto self-start ${dark ? 'h-7' : 'h-9'}`}
                    />
                    <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em]">
                      {bloque.title}
                    </h3>
                    <p
                      className={`type-section-lead mt-3 ${
                        dark ? 'text-gray-300' : 'text-koob-gray-500'
                      }`}
                    >
                      {bloque.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {bloque.points.map((point) => (
                        <li
                          key={point}
                          className={`type-section-lead flex items-start gap-3 ${
                            dark ? 'text-gray-300' : 'text-koob-gray-700'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`mt-[0.6rem] h-1.5 w-1.5 shrink-0 ${
                              dark ? 'bg-koob-gold' : 'bg-koob-gold-ink'
                            }`}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default Reimpulso;
