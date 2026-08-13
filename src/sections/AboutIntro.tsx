import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, slideRight, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const differentiators = [
  {
    title: 'Gestión de Crisis',
    description: 'Estabilizamos la empresa cuando los márgenes caen o la dirección pierde el rumbo.',
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={staggerItem} className="type-eyebrow text-[0.95rem] text-koob-gold mb-5">
              Sobre KOOB
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              <motion.h2 variants={staggerItem} className="text-[clamp(2.35rem,3.25vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white">
                Consultoría estratégica,<br className="hidden lg:block" /> hecha por directivos
              </motion.h2>
              <motion.div variants={staggerItem}>
                <p className="text-pretty text-[1.05rem] leading-relaxed text-gray-300 max-w-xl mb-3">
                  Profesionales que han estado en tu lugar, liderando transformaciones, crisis y decisiones clave desde la primera línea del negocio.
                </p>
                <Link
                  to="/contacto"
                  className="type-inline-link group relative inline-flex items-center overflow-hidden text-white transition-colors duration-300 hover:text-black"
                >
                  <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="relative flex items-center gap-2 py-3 pl-0 pr-5 transition-[padding-left] duration-300 group-hover:pl-5">
                    <span>Hablemos de tu empresa</span>
                    <svg
                      aria-hidden="true"
                      className="h-4 w-7 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      viewBox="0 0 32 20"
                      fill="none"
                    >
                      <path
                        d="M1 10H30M24 4L30 10L24 16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid items-center gap-wide lg:grid-cols-[1.1fr_1fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideRight}
            >
              <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                {differentiators.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={staggerItem}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="border-koob-gold/40 hover:border-koob-gold cursor-default border-l-2 py-1 pl-5 shadow-none transition-[border-color,box-shadow] duration-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.6)]"
                  >
                    <h3 className="text-[1.35rem] font-bold tracking-[-0.02em] text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-300 max-w-md">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="relative mx-auto w-full max-w-lg overflow-hidden"
            >
              <img
                src={`${import.meta.env.BASE_URL}images/equipo-sesion-estrategica-koob.png`}
                alt="Equipo de KOOB Advisory en una sesión estratégica de trabajo"
                width="968"
                height="840"
                loading="lazy"
                decoding="async"
                className="w-full h-auto grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
