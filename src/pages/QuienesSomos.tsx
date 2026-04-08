import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const valores = [
  {
    icon: Target,
    title: 'Resultados',
    description: 'Nos obsesionan los resultados tangibles y medibles. No entregamos informes que se quedan en un cajón.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description: 'Trabajamos codo a codo con nuestros clientes. Somos parte de tu equipo durante el proyecto.',
  },
  {
    icon: Lightbulb,
    title: 'Pragmatismo',
    description: 'Soluciones prácticas adaptadas a tu realidad. No teorías académicas ni templates genéricos.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Cada proyecto está liderado por socios con décadas de experiencia en dirección de empresas.',
  },
];

const hitos = [
  { year: '2004', evento: 'Fundación de KOOB Advisory por Jordi Fontanals' },
  { year: '2008', evento: 'Apertura de oficina en Madrid y expansión del equipo' },
  { year: '2012', evento: 'Superamos los 50 proyectos ejecutados con éxito' },
  { year: '2016', evento: 'Incorporación de María García y Carlos Ruiz como socios' },
  { year: '2020', evento: 'Lanzamiento del programa KOOB Reimpulso' },
  { year: '2024', evento: 'Más de 150 proyectos y 50 empresas asesoradas' },
];

const sectores = [
  {
    name: 'Banca y Finanzas',
    description: 'Hemos trabajado con las principales entidades bancarias españolas en proyectos de transformación comercial, reducción de costes y optimización de procesos.',
    clientes: 'BBVA, Santander, CaixaBank',
  },
  {
    name: 'Telecomunicaciones',
    description: 'Acompañamos a operadores de telecomunicaciones en la redefinición de estrategias IT, mejora de la captación de clientes y eficiencia operativa.',
    clientes: 'Movistar, Vodafone, Orange',
  },
  {
    name: 'Industrial y B2B',
    description: 'Ayudamos a empresas industriales a profesionalizar sus operaciones, optimizar la cadena de suministro y mejorar la productividad.',
    clientes: 'Grupos industriales medianos',
  },
];

const QuienesSomos = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                  Quiénes Somos
                </p>
                <h1 className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
                  Consultoría estratégica con experiencia real
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  KOOB Advisory es una firma de consultoría de dirección fundada en 2004. 
                  Desde entonces, hemos acompañado a más de 50 empresas en momentos críticos 
                  de transformación, ayudándolas a recuperar crecimiento y rentabilidad.
                </p>
                <a
                  href="/reimpulso"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Conocer nuestro servicio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="aspect-[4/3] bg-gray-100">
                <img
                  src="/images/about-team.jpg"
                  alt="Equipo KOOB Advisory en reunión estratégica"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  Nuestra historia
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    KOOB Advisory nació en 2004 de la mano de Jordi Fontanals, tras más de 
                    15 años liderando equipos en el sector bancario. La visión era clara: 
                    crear una consultora diferente, más cercana y pragmática, que realmente 
                    entendiera la presión a la que se enfrentan los directivos.
                  </p>
                  <p>
                    Durante los primeros años, nos especializamos en el sector financiero, 
                    trabajando con las principales entidades bancarias españolas en proyectos 
                    de transformación comercial y optimización de costes.
                  </p>
                  <p>
                    En 2016, con la incorporación de María García y Carlos Ruiz como socios, 
                    ampliamos nuestro alcance a otros sectores como telecomunicaciones e 
                    industria, manteniendo siempre nuestro enfoque en resultados tangibles.
                  </p>
                  <p>
                    En 2020 lanzamos KOOB Reimpulso, un programa específicamente diseñado 
                    para empresas en momentos críticos que necesitan un acompañamiento 
                    integral para recuperar el rumbo.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-xl font-semibold text-black mb-8">Hitos</h3>
                <div className="space-y-6">
                  {hitos.map((hito, index) => (
                    <div key={index} className="flex gap-6">
                      <span className="text-lg font-semibold text-black w-16 flex-shrink-0">
                        {hito.year}
                      </span>
                      <p className="text-gray-600">{hito.evento}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                Nuestros valores
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Estos son los principios que guían cada proyecto que emprendemos 
                y cada relación que construimos con nuestros clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {valores.map((valor, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <valor.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{valor.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{valor.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="py-20 lg:py-32 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Sectores en los que trabajamos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestra experiencia se concentra en sectores exigentes donde la eficiencia 
                operativa y la rentabilidad son críticas para el éxito.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {sectores.map((sector, index) => (
                <div key={index} className="bg-white p-8 border border-gray-200">
                  <h3 className="text-xl font-semibold text-black mb-4">{sector.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{sector.description}</p>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-400 mb-2">Clientes representativos</p>
                    <p className="text-sm font-medium text-black">{sector.clientes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-8 border border-gray-200">
                <p className="text-4xl lg:text-5xl font-semibold text-black mb-2">20</p>
                <p className="text-gray-500">Años de trayectoria</p>
              </div>
              <div className="p-8 border border-gray-200">
                <p className="text-4xl lg:text-5xl font-semibold text-black mb-2">150+</p>
                <p className="text-gray-500">Proyectos ejecutados</p>
              </div>
              <div className="p-8 border border-gray-200">
                <p className="text-4xl lg:text-5xl font-semibold text-black mb-2">50+</p>
                <p className="text-gray-500">Empresas asesoradas</p>
              </div>
              <div className="p-8 border border-gray-200">
                <p className="text-4xl lg:text-5xl font-semibold text-black mb-2">3</p>
                <p className="text-gray-500">Socios fundadores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              ¿Quieres conocer más sobre nosotros?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Estamos disponibles para una conversación sin compromiso. Cuéntanos tu 
              situación y vemos cómo podemos ayudarte.
            </p>
            <a
              href="https://wa.me/34609483114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Contactar con nosotros
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
