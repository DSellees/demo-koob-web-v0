import { Building2, Smartphone, Landmark, Briefcase } from 'lucide-react';

const cases = [
  {
    industry: 'Banca de Particulares',
    icon: Building2,
    title: 'Proceso comercial de captación',
    description: 'Revisión y afinamiento del proceso comercial de captación de clientes premium y gestión de equipos comerciales.',
    result: '+35%',
    metric: 'captación clientes premium',
    timeline: '6 meses',
  },
  {
    industry: 'Telecomunicaciones',
    icon: Smartphone,
    title: 'Estrategia IT y reducción de costes',
    description: 'Redefinición de la estrategia IT para reducir costes de explotación y desarrollo de aplicaciones.',
    result: '2.4M€',
    metric: 'ahorro anual',
    timeline: '12 meses',
  },
  {
    industry: 'Banca de Empresas',
    icon: Landmark,
    title: 'Plan global de reducción de costes',
    description: 'Implantación de plan global de reducción de costes mediante análisis de procesos.',
    result: '-18%',
    metric: 'costes operativos',
    timeline: '8 meses',
  },
  {
    industry: 'Sector Industrial',
    icon: Briefcase,
    title: 'Transformación operacional',
    description: 'Rediseño de procesos productivos y optimización de la cadena de suministro.',
    result: '+28%',
    metric: 'productividad',
    timeline: '9 meses',
  },
];

const Results = () => {
  return (
    <section id="resultados" className="py-20 lg:py-32 bg-koob-beige">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Resultados
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
              Casos de éxito en sectores exigentes
            </h2>
            <p className="text-lg text-gray-600">
              Estos son algunos ejemplos de resultados concretos que hemos conseguido 
              para nuestros clientes en sectores tan competitivos como la banca y las telecomunicaciones.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((caseItem) => (
              <div
                key={caseItem.title}
                className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-300"
              >
                {/* Industry */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 flex items-center justify-center">
                    <caseItem.icon className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-sm text-gray-500">{caseItem.industry}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-black mb-3">{caseItem.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{caseItem.description}</p>

                {/* Result */}
                <div className="flex items-end justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="text-4xl font-semibold text-black">{caseItem.result}</p>
                    <p className="text-sm text-gray-500 mt-1">{caseItem.metric}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Timeline</p>
                    <p className="text-sm font-medium text-black">{caseItem.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
