import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, MessageSquare, Network, BarChart2, Compass, HeartHandshake, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { fadeUp, staggerContainer, staggerItem, viewportOnce, slideRight } from '../lib/animations';

const areas = [
  {
    icon: Zap,
    title: 'Transformación empresarial',
    description:
      'Acompañamos a empresas en procesos de cambio profundo: reorganización, redefinición del modelo de negocio, gestión de crisis y reimpulso estratégico.',
    keywords: ['Reimpulso', 'Gestión del cambio', 'Reestructuración'],
    href: '/reimpulso',
    highlight: true,
  },
  {
    icon: Compass,
    title: 'Dirección estratégica',
    description:
      'Apoyamos a la dirección en la definición del rumbo, la toma de decisiones clave y el diseño de planes de acción que se puedan ejecutar.',
    keywords: ['Planificación estratégica', 'Toma de decisiones', 'Hoja de ruta'],
    href: '/contacto',
  },
  {
    icon: Users,
    title: 'Personas, cultura y organización',
    description:
      'Ayudamos a las organizaciones a evolucionar culturalmente: liderazgo, valores, estructura organizativa y transformación de comportamientos.',
    keywords: ['Cultura organizativa', 'Desarrollo del liderazgo', 'Estructura'],
    href: '/contacto',
  },
  {
    icon: Building2,
    title: 'Recursos Humanos estratégico',
    description:
      'Transformamos el rol de RRHH dentro de la organización para que se convierta en un socio estratégico del negocio, con voz propia en la dirección.',
    keywords: ['RRHH', 'Talento', 'Employer Branding'],
    href: '/contacto',
  },
  {
    icon: MessageSquare,
    title: 'Comunicación interna y eventos',
    description:
      'Diseñamos estrategias de comunicación interna y experiencias corporativas que generan alineación, cultura y compromiso real.',
    keywords: ['Comunicación interna', 'Eventos corporativos', 'Cultura'],
    href: '/contacto',
  },
  {
    icon: HeartHandshake,
    title: 'Experiencia de cliente y empleado',
    description:
      'Mejoramos la experiencia de las personas que trabajan en la empresa y de los clientes que la eligen, diseñando interacciones coherentes con los valores de marca.',
    keywords: ['Employee Experience', 'Customer Experience', 'Fidelización'],
    href: '/contacto',
  },
  {
    icon: BarChart2,
    title: 'Gestión, eficiencia y planificación',
    description:
      'Apoyamos en la mejora de procesos, control de gestión, eficiencia operativa y planificación para que la empresa funcione con más claridad y menos fricción.',
    keywords: ['Control de gestión', 'Procesos', 'Planificación'],
    href: '/contacto',
  },
  {
    icon: Network,
    title: 'Ecosistema estratégico de expertos',
    description:
      'Conectamos cada proyecto con los especialistas más adecuados, combinando experiencia ejecutiva con conocimiento técnico específico sin estructuras pesadas.',
    keywords: ['Especialistas', 'Talento externo', 'Multidisciplinar'],
    href: '/contacto',
  },
];

const QueHacemos = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <SeoMeta
        title="Qué hacemos — KOOB Advisory | Consultoría estratégica para empresas"
        description="Consultoría multidisciplinar para empresas: transformación empresarial, KOOB Reimpulso, RRHH estratégico, comunicación interna, cultura organizativa y ecosistema de expertos."
        url="https://koobadvisory.com/que-hacemos"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                  Qué hacemos
                </motion.p>
                <motion.h1 variants={staggerItem} className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6 leading-tight">
                  Consultoría multidisciplinar para empresas que quieren avanzar
                </motion.h1>
                <motion.p variants={staggerItem} className="text-lg text-gray-600 leading-relaxed">
                  No somos especialistas en una única cosa. Somos el partner que acompaña a tu
                  empresa en diferentes frentes, con la experiencia de haber estado en tu lugar.
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideRight}
                transition={{ delay: 0.3 }}
                className="aspect-[4/3] bg-gray-100 flex items-center justify-center"
              >
                <span className="text-xs text-gray-300 uppercase tracking-wider">
                  Imagen corporativa
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro editorial */}
      <section className="py-20 lg:py-24 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold mb-6">
                No venimos con recetas estándar
              </motion.h2>
              <motion.p variants={staggerItem} className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Cada empresa tiene su propia historia, su propia cultura y sus propios retos.
                Por eso trabajamos siempre desde el diagnóstico y el acompañamiento real,
                no desde plantillas genéricas.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid de áreas */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="max-w-3xl mb-16"
            >
              <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                Áreas de especialización
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-black">
                En qué podemos ayudarte
              </h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {areas.map((area) => (
                <motion.div
                  key={area.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`p-8 border transition-all duration-300 group relative overflow-hidden ${
                    area.highlight
                      ? 'border-koob-gold bg-black text-white'
                      : 'border-gray-200 hover:border-black bg-white'
                  }`}
                >
                  {area.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-medium text-koob-gold border border-koob-gold px-2 py-1 uppercase tracking-wider">
                        Servicio estrella
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 flex items-center justify-center mb-6 transition-colors duration-300 ${
                    area.highlight
                      ? 'bg-white/10 group-hover:bg-koob-gold'
                      : 'bg-gray-50 group-hover:bg-black'
                  }`}>
                    <area.icon className={`w-6 h-6 transition-colors duration-300 ${
                      area.highlight
                        ? 'text-white group-hover:text-black'
                        : 'text-gray-600 group-hover:text-white'
                    }`} />
                  </div>

                  <h3 className={`text-lg font-semibold mb-3 ${area.highlight ? 'text-white' : 'text-black'}`}>
                    {area.title}
                  </h3>
                  <p className={`leading-relaxed text-sm mb-6 ${area.highlight ? 'text-gray-400' : 'text-gray-600'}`}>
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {area.keywords.map((kw) => (
                      <span
                        key={kw}
                        className={`text-xs px-2 py-1 border ${
                          area.highlight
                            ? 'border-white/20 text-gray-400'
                            : 'border-gray-200 text-gray-400'
                        }`}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={area.href}
                    className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                      area.highlight
                        ? 'text-koob-gold hover:text-white'
                        : 'text-black hover:text-koob-gold'
                    }`}
                  >
                    Más información
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                ¿No sabes exactamente qué necesitas?
              </motion.h2>
              <motion.p variants={staggerItem} className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                No pasa nada. Muchas veces el primer paso es simplemente explicar
                la situación. Nos adaptamos a dónde estás.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Hablemos de tu empresa
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/reimpulso"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
                >
                  Ver KOOB Reimpulso
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QueHacemos;
