import { TrendingDown, TrendingUp, Target, Users } from 'lucide-react';

const services = [
  {
    icon: TrendingDown,
    title: 'Recuperación de Rentabilidad',
    description: 'Para empresas con tensión en resultados. Analizamos tu estructura de costes, identificamos ineficiencias y diseñamos un plan de acción para recuperar márgenes y viabilidad.',
    features: ['Diagnóstico financiero', 'Reducción de costes', 'Optimización de procesos'],
  },
  {
    icon: TrendingUp,
    title: 'Aceleración del Crecimiento',
    description: 'Para empresas con potencial sin explotar. Definimos la estrategia de crecimiento, estructuramos equipos comerciales y establecemos KPIs para escalar con solidez.',
    features: ['Estrategia de crecimiento', 'Estructura comercial', 'Plan de escalado'],
  },
  {
    icon: Target,
    title: 'Transformación Operacional',
    description: 'Rediseñamos procesos críticos de tu negocio para mejorar eficiencia, reducir tiempos de ejecución y aumentar la productividad de tus equipos.',
    features: ['Mapeo de procesos', 'Lean Management', 'Automatización'],
  },
  {
    icon: Users,
    title: 'Desarrollo de Equipos Directivos',
    description: 'Formamos y acompañamos a tus equipos directivos para liderar la transformación con las herramientas y metodologías que necesitan.',
    features: ['Coaching ejecutivo', 'Formación de equipos', 'Gestión del cambio'],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Servicios
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
              Soluciones adaptadas a la realidad de tu empresa
            </h2>
            <p className="text-lg text-gray-600">
              Cada empresa es diferente. Por eso nuestros servicios se adaptan a tu situación 
              específica, ya sea que necesites recuperar rentabilidad o acelerar el crecimiento.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-black mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1 h-1 bg-black rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
