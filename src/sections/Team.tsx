import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, slideRight, viewportOnce } from '../lib/animations';

const differentiators = [
  {
    title: 'Experiencia ejecutiva real',
    description: 'Hemos ocupado posiciones de dirección y liderado equipos. No hablamos de teoría: conocemos los retos desde dentro.',
  },
  {
    title: 'Enfoque práctico, no teórico',
    description: 'Nos implicamos en la ejecución para que los cambios sucedan de verdad, no solo en el papel.',
  },
  {
    title: 'Trabajo integrado con tus equipos',
    description: 'Trabajamos junto a las personas de la organización. Transferimos conocimiento y dejamos capacidades instaladas.',
  },
  {
    title: 'Alineación con tus objetivos',
    description: 'En determinados proyectos, alineamos parte de nuestra remuneración a los resultados. Compartimos el riesgo.',
  },
  {
    title: 'Modelo flexible y ágil',
    description: 'Reunimos a los especialistas adecuados para cada proyecto, sin estructuras pesadas ni costes innecesarios.',
  },
];

const Team = () => {
  return (
    <section id="por-que-koob" className="py-24 lg:py-36 bg-koob-beige overflow-hidden">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

            {/* Izquierda: pull quote */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideRight}
              className="lg:col-span-2 lg:sticky lg:top-32"
            >
              <p className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-8">
                Por qué KOOB
              </p>
              <div className="text-[7rem] text-black/10 leading-none -mb-4 select-none" aria-hidden="true">
                "
              </div>
              <blockquote className="text-2xl lg:text-3xl font-semibold text-black leading-snug mb-6">
                Una manera diferente de entender la consultoría
              </blockquote>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-10">
                Nuestro compromiso nace desde la experiencia real, con implicación genuina en cada proyecto.
              </p>
              <Link
                to="/equipo"
                className="inline-flex items-center gap-2 text-sm font-medium text-black border-b border-black/30 pb-0.5 hover:border-black transition-colors"
              >
                Conocer el equipo
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Derecha: lista numerada */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="lg:col-span-3 divide-y divide-gray-200"
            >
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  className="py-6 flex gap-6 group"
                >
                  <span className="text-xs font-mono text-gray-300 mt-1 w-5 flex-shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-black mb-1.5 group-hover:text-koob-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
