import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const phases = [
  {
    num: '01',
    title: 'Diagnóstico',
    description: 'Foto real de la situación. Bloqueos, oportunidades y las palancas con mayor impacto.',
  },
  {
    num: '02',
    title: 'Prioridades',
    description: 'Hoja de ruta clara: objetivos concretos, iniciativas ordenadas y responsables por acción.',
  },
  {
    num: '03',
    title: 'Acompañamiento',
    description: 'Ejecutamos junto a tu equipo, resolviendo obstáculos en tiempo real y ajustando el rumbo.',
  },
  {
    num: '04',
    title: 'Implantación',
    description: 'Consolidamos los cambios dentro de la organización. Dejamos capacidades instaladas.',
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 lg:py-36 bg-koob-beige overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header — dos columnas */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-20"
          >
            <div>
              <motion.p variants={staggerItem} className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-5">
                Metodología
              </motion.p>
              <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Un proceso claro para cada momento
              </motion.h2>
            </div>
            <motion.div variants={staggerItem} className="lg:pb-1">
              <div className="w-8 h-px bg-gray-300 mb-5" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                No entregamos informes y nos vamos. Ejecutamos contigo desde el primer día.
              </p>
            </motion.div>
          </motion.div>

          {/* Fases — filas horizontales */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {phases.map((phase) => (
              <motion.div
                key={phase.num}
                variants={staggerItem}
                className="group grid grid-cols-12 gap-4 lg:gap-8 py-10 border-t border-gray-200 hover:bg-white/60 transition-colors duration-300"
              >
                {/* Número */}
                <div className="col-span-2 lg:col-span-1 flex items-center">
                  <span className="text-xs font-mono text-gray-400 tabular-nums">
                    {phase.num}
                  </span>
                </div>

                {/* Título con línea animada */}
                <div className="col-span-10 lg:col-span-4 flex items-center gap-4">
                  <div className="hidden lg:block w-5 h-px bg-gray-300 group-hover:bg-black group-hover:w-8 transition-all duration-300 flex-shrink-0" />
                  <h3 className="text-xl lg:text-2xl font-semibold text-black leading-snug">
                    {phase.title}
                  </h3>
                </div>

                {/* Descripción */}
                <div className="col-span-12 lg:col-span-7 flex items-center">
                  <p className="text-gray-500 text-sm leading-relaxed pl-6 border-l border-gray-200 lg:border-0 lg:pl-0">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-200" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
