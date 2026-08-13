import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';
import AutodiagnosticoModal from '../components/AutodiagnosticoModal';
import SweepArrowLink from '../components/SweepArrowLink';

const drawVariants = (duration: number, delay: number, ease: 'linear' | readonly [number, number, number, number] = 'linear') => ({
  hidden: { strokeDashoffset: 600 },
  visible: {
    strokeDashoffset: 0,
    transition: { duration, delay, ease },
  },
});

const fadeVariants = (duration: number, delay: number) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration, delay, ease: 'easeOut' as const } },
});

const popVariants = (duration: number, delay: number) => ({
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration, delay, ease: [0.34, 1.4, 0.64, 1] as const },
  },
});

const ReimpulsoFlagshipCards = () => {
  const [autodiagnosticoOpen, setAutodiagnosticoOpen] = useState(false);

  return (
    <section
      id="reimpulso-cards"
      aria-labelledby="reimpulso-flagship-cards-title"
      className="section-space overflow-hidden bg-koob-beige text-black"
    >
      <div className="page-container">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={staggerItem} className="type-eyebrow mb-0 text-[0.95rem] text-koob-gold-ink">
              Nuestro servicio insignia
            </motion.p>
            <div className="grid items-end gap-wide lg:grid-cols-[3fr_2fr]">
              <motion.h2
                id="reimpulso-flagship-cards-title"
                variants={staggerItem}
                className="text-black"
              >
                <span className="type-display-flagship block">KOOB Reimpulso</span>
                <span className="type-section-title mt-1 block text-[1.55rem] leading-tight lg:text-[2.1rem]">
                  Foco y dirección para la empresa
                </span>
              </motion.h2>
              <motion.div variants={staggerItem}>
                <p className="text-pretty text-[1.05rem] leading-relaxed text-koob-gray-700 max-w-xl mb-3">
                  Cuando los resultados se tensan o las oportunidades crecen sin una dirección clara, ayudamos a tu empresa a volver a avanzar.
                </p>
                <SweepArrowLink to="/reimpulso" variant="light">
                  Conocer KOOB Reimpulso
                </SweepArrowLink>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mt-12 grid grid-cols-1 gap-4 lg:mt-14 lg:grid-cols-[0.92fr_1.3fr_0.92fr] lg:items-stretch"
          >
            {/* Left column: two diagnostic cards */}
            <div className="flex flex-col gap-3">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerItem}
                className="flex min-h-[10rem] flex-col border border-black/15 bg-white/60 p-6 sm:p-7 lg:flex-1"
              >
                <div>
                  <span className="text-2xl font-bold tracking-[0.05em] text-koob-gold-ink">01</span>
                  <div className="mt-2 h-px w-6 bg-koob-gold-ink" />
                </div>

                <div className="flex flex-1 items-center justify-center py-4">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 360 130"
                    className="h-auto w-full max-w-[16rem] overflow-visible"
                    fill="none"
                  >
                    <motion.polyline
                      points="6,112 34,86 58,78 80,52 100,60 122,44 146,30 168,28 188,40 202,25 216,33 240,30 256,33"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeDasharray={600}
                      className="text-koob-black"
                      variants={drawVariants(2.2, 0)}
                    />
                    <defs>
                      <mask id="reimpulso-tail-mask">
                        <motion.path
                          d="M256,33 C 288,44 306,64 340,92"
                          fill="none"
                          stroke="white"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeDasharray={600}
                          variants={drawVariants(1.3, 2.2)}
                        />
                      </mask>
                    </defs>
                    <path
                      d="M256,33 C 288,44 306,64 340,92"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeDasharray="1.5 5"
                      className="text-koob-gold-ink"
                      mask="url(#reimpulso-tail-mask)"
                    />
                    <motion.circle
                      cx="344"
                      cy="95"
                      r="8"
                      fill="currentColor"
                      className="text-koob-gold-ink"
                      style={{ transformOrigin: '344px 95px' }}
                      variants={popVariants(0.2, 3.5)}
                    />
                  </svg>
                </div>

                <h3 className="max-w-xs text-2xl font-bold leading-tight tracking-[-0.035em]">
                  Resultados bajo presión
                </h3>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerItem}
                className="flex min-h-[10rem] flex-col border border-black/15 bg-white/60 p-6 sm:p-7 lg:flex-1"
              >
                <div>
                  <span className="text-2xl font-bold tracking-[0.05em] text-koob-gold-ink">02</span>
                  <div className="mt-2 h-px w-6 bg-koob-gold-ink" />
                </div>

                <div className="flex flex-1 items-center justify-center py-4">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 360 130"
                    className="h-auto w-full max-w-[16rem] overflow-visible"
                    fill="none"
                  >
                    <motion.path
                      d="M14,72 C 130,66 250,42 330,12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeDasharray={600}
                      className="text-koob-black"
                      variants={drawVariants(1.1, 0.25, [0.4, 0, 0.2, 1])}
                    />
                    <motion.path
                      d="M-9,-5 L0,0 L-9,5"
                      transform="translate(330,12) rotate(-20.6)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-koob-black"
                      variants={fadeVariants(0.35, 1.3)}
                    />

                    <motion.path
                      d="M14,72 C 130,72 240,60 330,46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray={600}
                      className="text-koob-gold-ink"
                      variants={drawVariants(1.1, 0.5, [0.4, 0, 0.2, 1])}
                    />
                    <motion.path
                      d="M-9,-5 L0,0 L-9,5"
                      transform="translate(330,46) rotate(-8.8)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-koob-gold-ink"
                      variants={fadeVariants(0.35, 1.55)}
                    />

                    <motion.path
                      d="M14,72 C 130,74 240,76 330,80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray={600}
                      className="text-koob-gray-300"
                      variants={drawVariants(1.1, 0.75, [0.4, 0, 0.2, 1])}
                    />
                    <motion.path
                      d="M-9,-5 L0,0 L-9,5"
                      transform="translate(330,80) rotate(2.5)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-koob-gray-300"
                      variants={fadeVariants(0.35, 1.8)}
                    />

                    <motion.path
                      d="M14,72 C 140,80 250,98 322,118"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeDasharray={600}
                      className="text-koob-gold-ink"
                      variants={drawVariants(1.1, 1, [0.4, 0, 0.2, 1])}
                    />
                    <motion.path
                      d="M-9,-5 L0,0 L-9,5"
                      transform="translate(322,118) rotate(15.5)"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-koob-gold-ink"
                      variants={fadeVariants(0.35, 2.05)}
                    />

                    <motion.circle
                      cx="14"
                      cy="72"
                      r="5.5"
                      fill="currentColor"
                      className="text-koob-black"
                      style={{ transformOrigin: '14px 72px' }}
                      variants={popVariants(0.4, 0)}
                    />
                  </svg>
                </div>

                <h3 className="max-w-xs text-2xl font-bold leading-tight tracking-[-0.035em]">
                  Oportunidades sin dirección
                </h3>
              </motion.div>
            </div>

            {/* Middle column: black flagship card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="relative flex min-h-[25rem] flex-col overflow-hidden border border-black bg-black p-6 text-white sm:p-7 lg:min-h-full lg:p-8"
            >
              <div className="relative z-10">
                <p className="type-module-label text-koob-gold">Qué hace KOOB Reimpulso</p>
              </div>

              <div className="relative z-10 mt-6 flex flex-1 flex-col">
                <h3 className="max-w-lg text-[clamp(1.8rem,2.3vw,2.6rem)] font-bold leading-[0.98] tracking-[-0.045em]">
                  Del diagnóstico al cambio, acompañados en cada paso
                </h3>

                <div className="flex flex-1 flex-col justify-center">
                  <ol className="border-t border-white/25">
                    {[
                      ['Diagnóstico estratégico', 'Hacer visible qué frena o dispersa.'],
                      ['Prioridades empresariales', 'Ordenar decisiones, objetivos y recursos.'],
                      ['Implantación del cambio', 'Activar el avance junto al equipo directivo.'],
                    ].map(([title, description], index) => (
                      <li
                        key={title}
                        className="grid grid-cols-[3rem_1fr] items-center gap-4 border-b border-white/25 py-4"
                      >
                        <span className="text-3xl font-bold tracking-[0.05em] text-koob-gold/50">
                          0{index + 1}
                        </span>
                        <div>
                          <h4 className="text-base font-bold leading-tight tracking-[-0.025em] text-white">
                            {title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-gray-300">{description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>

            {/* Right column: outcome card + autodiagnóstico CTA card */}
            <div className="flex flex-col gap-3 lg:h-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerItem}
                className="flex flex-col border border-black/15 bg-white/60 p-6 sm:p-7 lg:basis-[30%] lg:justify-center"
              >
                <p className="type-eyebrow text-[0.8rem] text-koob-gold-ink">Autodiagnóstico</p>
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-[-0.03em]">
                  ¿Es KOOB Reimpulso para tu empresa?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-koob-gray-700">
                  Responde a unas preguntas sobre tu situación y recibe una lectura inicial de si este servicio encaja contigo.
                </p>

                <SweepArrowLink
                  onClick={() => setAutodiagnosticoOpen(true)}
                  variant="light"
                  layout="block"
                  className="-mx-6 -mb-6 mt-5 border-t border-black/15 sm:-mx-7 sm:-mb-7"
                >
                  Empezar el autodiagnóstico
                </SweepArrowLink>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerItem}
                className="flex min-h-[10rem] flex-col justify-center border border-black/15 bg-white/60 p-6 sm:p-7 lg:basis-[70%]"
              >
                <div className="space-y-6">
                  {[
                    ['Foco', 'w-1/2'],
                    ['Dirección', 'w-3/4'],
                    ['Ejecución', 'w-full'],
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-3 flex items-center justify-between gap-4">
                        <span className="text-sm font-bold uppercase tracking-[0.16em]">{label}</span>
                        <ArrowRight aria-hidden="true" className="h-4 w-4" />
                      </div>
                      <div className="h-px bg-black/15">
                        <motion.div
                          className={`h-[3px] bg-black ${width}`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={viewportOnce}
                          transition={{ duration: 0.7, ease: 'easeOut' }}
                          style={{ transformOrigin: 'left' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <AutodiagnosticoModal
        open={autodiagnosticoOpen}
        onClose={() => setAutodiagnosticoOpen(false)}
      />
    </section>
  );
};

export default ReimpulsoFlagshipCards;
