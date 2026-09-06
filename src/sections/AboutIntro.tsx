import { motion } from 'framer-motion';
import SweepArrowLink from '../components/SweepArrowLink';
import LocalVideoEmbed from '../components/LocalVideoEmbed';

const EASE = [0.22, 1, 0.36, 1] as const;

// Cada elemento se observa por separado: la animación solo arranca cuando ESE
// elemento entra en pantalla (nunca antes). Ascienden desde abajo, lento y con
// recorrido, mismo carácter que el hero.
const rise = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

// El vídeo entra igual, pero arranca un poco después (cuando ya es visible).
const riseVideo = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE, delay: 0.55 } },
};

// Cada elemento se anima al entrar y se deshace al salir (movimiento en ambas
// direcciones) — ver "La Regla de la Animación Visible" en src/lib/animations.ts.
const NAV_MARGIN = '-100px 0px 0px 0px';
const inView = { once: false, amount: 0.4, margin: NAV_MARGIN } as const;
const inViewCard = { once: false, amount: 0.5, margin: NAV_MARGIN } as const;

const differentiators = [
  {
    title: 'Desbloqueo y Reimpulso',
    description: 'Recuperamos el rumbo cuando la empresa se estanca, pierde margen o necesita tomar decisiones.',
  },
  {
    title: 'Crecimiento & Lanzamiento',
    description: 'Te acompañamos en cada fase del lanzamiento de un nuevo producto o línea de negocio.',
  },
  {
    title: 'Integración & M&A',
    description: 'Unificamos culturas y procesos tras una fusión o adquisición, sin fricción.',
  },
  {
    title: 'Internacionalización',
    description: 'Abrimos nuevos mercados con seguridad estratégica, legal y comercial.',
  },
];

const AboutIntro = () => {
  return (
    <section id="por-que-koob" aria-label="Por qué KOOB" className="section-space overflow-hidden bg-black text-white">
      <div className="page-container">
        <div className="content-container">

          <div className="mb-12">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={rise}
              className="type-eyebrow text-[0.95rem] text-koob-gold mb-5"
            >
              Sobre KOOB
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                variants={rise}
                className="text-[clamp(2.35rem,3.25vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white"
              >
                La experiencia de quienes<br className="hidden lg:block" /> han liderado empresas
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={inView}
                variants={rise}
              >
                <p className="text-pretty text-[1.05rem] leading-relaxed text-gray-300 max-w-xl mb-3">
                  Todo el equipo de KOOB viene del mundo de la empresa. Hemos liderado
                  negocios, tomado decisiones difíciles, cometido errores y aprendido a
                  responder por cada una de ellas.
                </p>
                <SweepArrowLink to="/quienes-somos" variant="dark">
                  Conoce KOOB
                </SweepArrowLink>
              </motion.div>
            </div>
          </div>

          <div className="grid items-center gap-wide lg:grid-cols-[1.1fr_1fr]">

            <div className="flex flex-col gap-6">
              {differentiators.map((item) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={inViewCard}
                  variants={rise}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="border-koob-gold/40 hover:border-koob-gold cursor-default border-l-2 py-1 pl-5 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)]"
                >
                  <h3 className="text-[1.35rem] font-bold tracking-[-0.02em] text-white mb-[0.315rem]">
                    {item.title}
                  </h3>
                  <p className="text-base leading-[1.39] text-gray-300 max-w-md">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={inView}
              variants={riseVideo}
              className="relative mx-auto w-full max-w-xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
            >
              <LocalVideoEmbed
                src={`${import.meta.env.BASE_URL}videos/sobre-koob-nosotros.mp4`}
                poster={`${import.meta.env.BASE_URL}images/equipo-sesion-estrategica-koob.png`}
                title="KOOB Advisory — Nosotros"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
