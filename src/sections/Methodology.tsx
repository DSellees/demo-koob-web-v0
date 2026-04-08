import { Search, Map, Users, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico Express',
    duration: '72 horas',
    description: 'Foto completa de tu negocio. Identificamos los puntos críticos, oportunidades de mejora y palancas de crecimiento con un análisis exhaustivo pero ágil.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan de Acción',
    duration: '2 semanas',
    description: 'Diseñamos una hoja de ruta clara y priorizada con objetivos medibles, timelines realistas y responsables definidos para cada iniciativa.',
    icon: Map,
  },
  {
    number: '03',
    title: 'Acompañamiento',
    duration: '3-6 meses',
    description: 'Trabajamos codo a codo con tu equipo en la ejecución del plan, resolviendo obstáculos en tiempo real y ajustando la estrategia según los resultados.',
    icon: Users,
  },
  {
    number: '04',
    title: 'Medición de Resultados',
    duration: 'Continua',
    description: 'Establecemos KPIs claros desde el inicio y realizamos seguimiento continuo para medir el impacto real de nuestras intervenciones en tu negocio.',
    icon: BarChart3,
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-20 lg:py-32 bg-black text-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Metodología
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Un proceso probado que genera resultados
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-gray-400 leading-relaxed">
                Nuestra metodología combina el rigor analítico de las grandes consultoras 
                con la agilidad y pragmatismo que necesitan las empresas en momentos críticos. 
                No entregamos informes: ejecutamos contigo.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-semibold text-sm">
                    {step.number}
                  </div>
                  <span className="text-sm text-gray-500">{step.duration}</span>
                </div>

                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-300">
                  <step.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
