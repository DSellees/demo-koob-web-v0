import { Search, TrendingDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { reveal, revealViewport, EASE } from '../lib/animations';
import InlineArrowLink from '../components/InlineArrowLink';

const signals = [
  {
    icon: Search,
    title: 'Señales de bloqueo',
    description: 'Los resultados empresariales pierden fuerza, los proyectos estratégicos no avanzan y la toma de decisiones depende demasiado de la dirección.',
  },
  {
    icon: TrendingDown,
    title: 'Crecimiento sin estructura',
    description: 'El crecimiento empresarial supera la estructura organizativa, desordena los procesos internos y frena la transformación del negocio.',
  },
];

// Cada elemento observa su propia visibilidad — ver "La Regla de la Animación
// Visible" en src/lib/animations.ts.
const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

// Columna derecha de imágenes: entra desde ARRIBA (contrapunto a la izquierda,
// que sube desde abajo). Se deshace hacia arriba al salir.
const revealFromTop = {
  hidden: { opacity: 0, y: -28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay },
  }),
};

const ClientSituation = () => {
  return (
    <section id="situacion" className="section-space bg-black text-white overflow-hidden">
      <div className="page-container">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-12 items-center">

            {/* Izquierda: tesis + señales */}
            <div>
              <motion.p {...revealProps} className="type-eyebrow text-[0.95rem] text-koob-gold mb-5">
                Señales de alerta empresarial
              </motion.p>
              <motion.h2 {...revealProps} custom={0.06} className="text-[clamp(2.35rem,3.25vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white mb-6">
                El bloqueo no aparece de repente
              </motion.h2>
              <motion.p {...revealProps} custom={0.12} className="text-pretty text-[1.05rem] leading-relaxed text-gray-300 mb-14 max-w-xl">
                Decisiones que se posponen, crecimiento sin estructura y cambios que no arrancan. Reconocerlo a tiempo permite recuperar el control.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-10">
                {signals.map((signal, index) => (
                  <motion.div key={signal.title} {...revealProps} custom={index * 0.1}>
                    <signal.icon className="w-9 h-9 text-white mb-4" strokeWidth={2} />
                    <h3 className="text-[1.35rem] font-bold tracking-[-0.02em] text-white mb-2.5">
                      {signal.title}
                    </h3>
                    <p className="text-base leading-relaxed text-gray-300">
                      {signal.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Derecha: cita + placeholders de foto */}
            <div className="grid grid-cols-2 gap-3 items-start">
              <motion.div {...revealProps} className="flex flex-col gap-3 mt-8 lg:mt-16">
                <div className="bg-white/5 p-5 lg:p-6">
                  <p className="font-accent text-pretty text-[clamp(1.4rem,1.75vw,2.1rem)] font-normal text-white leading-[1.15] tracking-[-0.02em]">
                    ¿Y si el <em className="italic text-[clamp(1.55rem,1.95vw,2.35rem)]">bloqueo</em> no está donde crees que está?
                  </p>
                </div>
                <div className="border-hairline-dark relative overflow-hidden border" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/oficina-koob-sala-reuniones.png`}
                    alt="Sala de reuniones de KOOB Advisory con vistas a la ciudad"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={revealFromTop}
                className="flex flex-col gap-3"
              >
                <div className="border-hairline-dark relative overflow-hidden border" style={{ aspectRatio: '3/5' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}images/equipo-directivo-experimentado-traje-koob.png`}
                    alt="Profesionales con experiencia analizando el crecimiento y la estrategia de su empresa"
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
                  />
                </div>
                <InlineArrowLink
                  to="/contacto"
                  className="!text-black flex items-center justify-center bg-white px-6 text-base font-bold hover:!bg-white/85 hover:scale-[1.03] active:scale-[0.98] transition-[background-color,transform] duration-200"
                  style={{ aspectRatio: '16/4' }}
                >
                  Solicita un diagnóstico
                </InlineArrowLink>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSituation;
