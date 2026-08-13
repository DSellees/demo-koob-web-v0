import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const cases = [
  {
    tag: 'Banca · Empresas',
    title: 'Mejora de productividad mediante mejores prácticas de red',
    description: 'Implantación de un sistema de mejores prácticas comerciales en la red de oficinas. Impacto directo en la productividad de los equipos de la red.',
  },
  {
    tag: 'Telecomunicaciones',
    title: 'Captación de clientes particulares y empresas',
    description: 'Argumentarios diferenciados por segmento y programas de liderazgo para equipos comerciales con impacto en la tasa de conversión.',
  },
  {
    tag: 'Banca retail',
    title: 'Plan Madrid — Refinamiento del proceso comercial',
    description: 'Rediseño del proceso de ventas y gestión de equipos comerciales. Ejecución completa del Plan Madrid con seguimiento de métricas en tiempo real.',
  },
  {
    tag: 'Telecomunicaciones · IT',
    title: 'Redefinición de estrategia IT para reducir costes de explotación',
    description: 'Rediseño completo de la estrategia IT con reducción significativa en costes operativos y de desarrollo, manteniendo la capacidad de innovación.',
  },
  {
    tag: 'Gran banca',
    title: 'Plan integral de reducción de costes operativos',
    description: 'Análisis exhaustivo de procesos y diseño de un plan de eficiencia que garantizara la operatividad futura sin mermar la calidad del servicio.',
  },
];

const CasosExito = () => (
  <section id="casos-exito" aria-label="Casos de éxito" className="section-space overflow-hidden bg-white text-black">
    <div className="page-container">
      <div className="content-container">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mb-14 flex flex-wrap items-end justify-between gap-10"
        >
          <motion.div variants={staggerItem} className="max-w-xl">
            <p className="type-eyebrow text-[0.95rem] text-koob-gold-ink mb-5">
              Casos de éxito
            </p>
            <h2 className="text-[clamp(2.35rem,3.25vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-black">
              Proyectos reales.<br />Impacto medible.
            </h2>
          </motion.div>
          <motion.p variants={staggerItem} className="max-w-md text-base leading-relaxed text-koob-gray-500">
            Detrás de cada proyecto hay una empresa que hoy funciona distinto. Eso es lo único que nos interesa contar.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="grid-frame-light grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {cases.map((item) => (
            <motion.article
              key={item.title}
              variants={staggerItem}
              className="grid-cell-light group p-9 transition-colors duration-300 hover:bg-koob-beige sm:p-10"
            >
              <div className="mb-7 h-0.5 w-10 bg-koob-gold-ink" />
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-koob-gray-400">
                {item.tag}
              </p>
              <h3 className="mb-3.5 text-[1.4rem] font-bold leading-snug tracking-[-0.015em] text-black">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-koob-gray-500">
                {item.description}
              </p>
            </motion.article>
          ))}

          <motion.div
            variants={staggerItem}
            className="grid-cell-light flex flex-col justify-center gap-6 bg-black p-9 text-white sm:p-10"
          >
            <div className="h-0.5 w-10 bg-koob-gold" />
            <h3 className="text-[1.85rem] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              ¿Tu empresa podría ser el próximo caso?
            </h3>
            <Link
              to="/contacto"
              className="inline-flex w-fit items-center gap-2 bg-white px-7 py-4 text-sm font-semibold tracking-[0.01em] text-black transition-[background-color,transform] duration-200 hover:bg-white/85 hover:scale-[1.03] active:scale-[0.98]"
            >
              Cuéntanos tu reto
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default CasosExito;
