import { Building2, Crown, Puzzle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { slideRight, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const pills = [
  {
    icon: Building2,
    title: 'PYME y empresa familiar',
    text: 'Empresas con voluntad de crecer o transformarse que necesitan estructura, metodología y acompañamiento para convertir sus oportunidades en proyectos reales.',
  },
  {
    icon: Crown,
    title: 'Gran empresa',
    text: 'Organizaciones que necesitan impulsar procesos de transformación en áreas concretas, con visión externa, experiencia ejecutiva y capacidad real de implantación.',
  },
  {
    icon: Puzzle,
    title: 'Estructura ágil por proyecto',
    text: 'Sin estructura tradicional de oficina. Reunimos a los mejores especialistas para cada proyecto, con mayor agilidad y costes optimizados sin renunciar a la calidad.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromiso alineado al éxito',
    text: 'En determinados proyectos, alineamos parte de nuestra remuneración a la consecución de objetivos — compartiendo el compromiso y el riesgo contigo.',
  },
];

const About = () => {
  return (
    <section id="diferencial" className="py-24 lg:py-36 bg-koob-beige" aria-label="Quiénes somos">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Izquierda */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideRight}
              className="lg:sticky lg:top-32"
            >
              <p className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-5">
                Por qué KOOB es diferente
              </p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
                La consultoría que se queda hasta que el cambio es real
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-md">
                El modelo tradicional entrega metodologías. KOOB entra con tus equipos, trabaja junto a ellos y acompaña la ejecución día a día. En determinados proyectos, alineamos parte de nuestra remuneración a la consecución de objetivos — compartiendo el compromiso y el riesgo con el cliente.
              </p>
            </motion.div>

            {/* Derecha — 4 pills en 2×2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {pills.map((pill) => (
                <motion.div
                  key={pill.title}
                  variants={staggerItem}
                  className="bg-white p-6 group hover:shadow-sm transition-shadow duration-200"
                >
                  <div className="w-9 h-9 bg-black flex items-center justify-center mb-4 group-hover:bg-koob-gold transition-colors duration-200">
                    <pill.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-black mb-2 leading-snug">
                    {pill.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {pill.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
