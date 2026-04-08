import { ArrowRight, Linkedin, Mail, Award, BookOpen, Briefcase } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const socios = [
  {
    name: 'Jordi Fontanals',
    role: 'Socio Fundador',
    expertise: 'Estrategia y Transformación',
    image: 'J',
    bio: 'Jordi fundó KOOB Advisory en 2004 tras más de 15 años en dirección de banca. Ha liderado la transformación comercial de las principales entidades financieras españolas y ha asesorado a más de 50 empresas en momentos críticos de su desarrollo.',
    experiencia: [
      'Director Comercial en BBVA (1995-2001)',
      'Director de Transformación en Banco Santander (2001-2004)',
      'Fundador de KOOB Advisory (2004-presente)',
      'Más de 100 proyectos de consultoría estratégica ejecutados',
    ],
    formacion: [
      'MBA, IESE Business School',
      'Licenciado en Economía, Universidad de Barcelona',
    ],
    especialidades: ['Estrategia corporativa', 'Transformación comercial', 'Gestión de equipos'],
  },
  {
    name: 'María García',
    role: 'Socia',
    expertise: 'Operaciones y Excelencia',
    image: 'M',
    bio: 'María se unió a KOOB como socia en 2016, aportando su experiencia en optimización de operaciones y reducción de costes. Su enfoque pragmático y su capacidad de ejecución han sido clave en los proyectos más complejos de la firma.',
    experiencia: [
      'Consultora senior en McKinsey & Company (2005-2012)',
      'Directora de Operaciones en Telefónica (2012-2016)',
      'Socia en KOOB Advisory (2016-presente)',
      'Especialista certificada en Lean Six Sigma Black Belt',
    ],
    formacion: [
      'Máster en Ingeniería Industrial, Universidad Politécnica de Madrid',
      'PMP Project Management Professional',
    ],
    especialidades: ['Optimización de procesos', 'Reducción de costes', 'Lean Management'],
  },
  {
    name: 'Carlos Ruiz',
    role: 'Socio',
    expertise: 'Desarrollo de Talento',
    image: 'C',
    bio: 'Carlos complementa el equipo con su expertise en gestión del cambio y desarrollo de equipos directivos. Su capacidad para alinear a las organizaciones detrás de un objetivo común ha sido fundamental en el éxito de los proyectos de transformación.',
    experiencia: [
      'Director de Recursos Humanos en Inditex (2002-2010)',
      'Socio en consultora de executive coaching (2010-2016)',
      'Socio en KOOB Advisory (2016-presente)',
      'Coach ejecutivo certificado (ICF)',
    ],
    formacion: [
      'Máster en Psicología Organizacional, Universidad Complutense',
      'Certificación en Coaching Ejecutivo, IESE',
    ],
    especialidades: ['Coaching ejecutivo', 'Gestión del cambio', 'Desarrollo de liderazgo'],
  },
];

const equipo = [
  {
    name: 'Borja Lozano',
    role: 'Director de Marketing',
    description: 'Estrategia de marca, posicionamiento y comunicación corporativa.',
  },
  {
    name: 'Ana Martínez',
    role: 'Consultora Senior',
    description: 'Análisis de negocio, planificación estratégica y due diligence.',
  },
  {
    name: 'Luis Sánchez',
    role: 'Consultor Senior',
    description: 'Transformación operacional, optimización de procesos y Lean.',
  },
  {
    name: 'Elena Torres',
    role: 'Data Analyst',
    description: 'Business Intelligence, análisis de datos y definición de KPIs.',
  },
  {
    name: 'Pedro Vázquez',
    role: 'Project Manager',
    description: 'Gestión de proyectos, metodologías ágiles y coordinación de equipos.',
  },
  {
    name: 'Laura Jiménez',
    role: 'Business Development',
    description: 'Desarrollo de negocio, relaciones corporativas y captación de clientes.',
  },
];

const reconocimientos = [
  'Top 10 Consultoras de Estrategia España 2023 - Forbes',
  'Mejor Firma de Transformación 2022 - Actualidad Económica',
  'Reconocimiento Excelencia Empresarial 2021 - Cámara de Comercio',
];

const Equipo = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Equipo
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6 leading-tight">
              Profesionales senior con experiencia real
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nuestro equipo combina décadas de experiencia en dirección de grandes 
              corporaciones con el conocimiento práctico de quienes han estado en 
              tu lado del negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Socios */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Socios Fundadores
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cada proyecto está liderado por uno de nuestros socios, garantizando 
                la experiencia senior y el compromiso directo que tu empresa necesita.
              </p>
            </div>

            <div className="space-y-16">
              {socios.map((socio, index) => (
                <div key={index} className="grid lg:grid-cols-3 gap-8 border-b border-gray-200 pb-16 last:border-0">
                  {/* Info básica */}
                  <div>
                    <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center">
                      <span className="text-6xl font-semibold text-gray-300">{socio.image}</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-black mb-1">{socio.name}</h3>
                    <p className="text-gray-500 mb-2">{socio.role}</p>
                    <p className="text-sm font-medium text-black mb-4">{socio.expertise}</p>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="mailto:info@koobadvisory.com" className="w-10 h-10 bg-gray-100 flex items-center justify-center hover:bg-black hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Bio y experiencia */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-600 leading-relaxed mb-8">{socio.bio}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-black mb-4">
                          <Briefcase className="w-4 h-4" />
                          Trayectoria
                        </h4>
                        <ul className="space-y-2">
                          {socio.experiencia.map((exp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              {exp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 font-semibold text-black mb-4">
                          <BookOpen className="w-4 h-4" />
                          Formación
                        </h4>
                        <ul className="space-y-2">
                          {socio.formacion.map((form, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                              {form}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="font-semibold text-black mb-3">Áreas de especialización</h4>
                      <div className="flex flex-wrap gap-2">
                        {socio.especialidades.map((esp, i) => (
                          <span key={i} className="px-4 py-2 bg-gray-100 text-sm text-gray-700">
                            {esp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 lg:py-32 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Equipo
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Profesionales con experiencia en consultoría, banca y grandes corporaciones 
                que aportan conocimiento especializado a cada proyecto.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {equipo.map((miembro, index) => (
                <div key={index} className="bg-white p-8 border border-gray-200">
                  <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-semibold text-gray-300">{miembro.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-1">{miembro.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{miembro.role}</p>
                  <p className="text-sm text-gray-600">{miembro.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Reconocimientos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                La calidad de nuestro trabajo ha sido reconocida por los principales 
                medios especializados en el sector.
              </p>
            </div>

            <div className="space-y-4">
              {reconocimientos.map((rec, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-gray-50">
                  <Award className="w-6 h-6 text-black flex-shrink-0" />
                  <p className="text-black font-medium">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl lg:text-5xl font-semibold mb-2">20+</p>
                <p className="text-gray-400">Años experiencia media</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-semibold mb-2">9</p>
                <p className="text-gray-400">Profesionales en equipo</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-semibold mb-2">3</p>
                <p className="text-gray-400">Socios fundadores</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-semibold mb-2">100%</p>
                <p className="text-gray-400">Proyectos liderados por socios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
              ¿Hablamos?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
              Nuestro equipo está disponible para una conversación inicial sin compromiso. 
              Cuéntanos tu situación y vemos cómo podemos ayudarte.
            </p>
            <a
              href="https://wa.me/34609483114"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Contactar con el equipo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Equipo;
