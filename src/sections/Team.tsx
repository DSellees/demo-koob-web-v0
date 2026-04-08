import { Linkedin } from 'lucide-react';

const advisors = [
  {
    name: 'Jordi Fontanals',
    role: 'Socio Fundador',
    expertise: 'Estrategia y Transformación',
    background: '25+ años en dirección de banca y consultoría estratégica. Ex-director en BBVA y Santander.',
  },
  {
    name: 'María García',
    role: 'Socia',
    expertise: 'Operaciones y Excelencia',
    background: 'Especialista en optimización de procesos y reducción de costes. Ex-McKinsey & Company.',
  },
  {
    name: 'Carlos Ruiz',
    role: 'Socio',
    expertise: 'Desarrollo de Talento',
    background: 'Experto en gestión de equipos de alto rendimiento y cambio organizacional.',
  },
];

const Team = () => {
  return (
    <section id="equipo" className="py-20 lg:py-32 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Equipo
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Profesionales senior con experiencia real
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo combina experiencia en dirección de grandes corporaciones 
                con el conocimiento práctico de quienes han estado en tu lado del negocio. 
                Entendemos la presión, los stakeholders y la necesidad de resultados.
              </p>
            </div>
          </div>

          {/* Advisors */}
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="group">
                {/* Avatar Placeholder */}
                <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center">
                  <span className="text-4xl font-semibold text-gray-300">
                    {advisor.name.charAt(0)}
                  </span>
                </div>

                {/* Info */}
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-black">{advisor.name}</h3>
                    <p className="text-sm text-gray-500">{advisor.role}</p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/koob-advisory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-sm font-medium text-black mb-2">{advisor.expertise}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{advisor.background}</p>
              </div>
            ))}
          </div>

          {/* Stats Banner */}
          <div className="mt-20 p-8 bg-black text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-semibold mb-2">20+</p>
                <p className="text-sm text-gray-400">Años de experiencia media</p>
              </div>
              <div>
                <p className="text-3xl font-semibold mb-2">150+</p>
                <p className="text-sm text-gray-400">Proyectos ejecutados</p>
              </div>
              <div>
                <p className="text-3xl font-semibold mb-2">50+</p>
                <p className="text-sm text-gray-400">Empresas asesoradas</p>
              </div>
              <div>
                <p className="text-3xl font-semibold mb-2">3</p>
                <p className="text-sm text-gray-400">Sectores principales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
