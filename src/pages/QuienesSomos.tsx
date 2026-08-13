import { ArrowRight, Target, Users, Lightbulb, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { fadeUp, staggerContainer, staggerItem, slideRight, slideLeft, viewportOnce } from '../lib/animations';

const valores = [
  {
    icon: Target,
    title: 'Resultados',
    description:
      'Nos obsesionan los resultados tangibles. No entregamos informes que se quedan en un cajón: nos implicamos hasta ver el impacto real.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description:
      'Trabajamos codo a codo con nuestros clientes. Somos parte de tu equipo durante todo el proyecto, no observadores externos.',
  },
  {
    icon: Lightbulb,
    title: 'Pragmatismo',
    description:
      'Soluciones prácticas adaptadas a tu realidad. Nada de teorías académicas ni plantillas genéricas desconectadas del día a día.',
  },
  {
    icon: Award,
    title: 'Experiencia real',
    description:
      'Cada proyecto está liderado por profesionales que han ocupado posiciones de dirección y conocen los retos de gestionar una empresa desde dentro.',
  },
];

const sectores = [
  {
    name: 'Banca y Finanzas',
    description:
      'Acompañamos a entidades financieras en proyectos de transformación comercial, eficiencia operativa y mejora de procesos.',
  },
  {
    name: 'Telecomunicaciones',
    description:
      'Trabajamos con operadores en la redefinición de estrategias tecnológicas, captación de clientes y eficiencia operativa.',
  },
  {
    name: 'Industrial y B2B',
    description:
      'Ayudamos a empresas industriales a profesionalizar sus operaciones, optimizar la cadena de suministro y mejorar la productividad.',
  },
];

const QuienesSomos = () => {
  return (
    <div className="page-root">
      <SeoMeta
        title="Quiénes Somos — KOOB Advisory"
        description="Somos una consultoría multidisciplinar con experiencia real en dirección de empresas. Conocemos los retos porque los hemos vivido desde dentro."
        url="https://koobadvisory.com/quienes-somos"
      />
      <Navigation />

      {/* Hero */}
      <section className="page-intro-space bg-koob-beige">
        <div className="page-container">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                  Quiénes Somos
                </motion.p>
                <motion.h1 variants={staggerItem} className="text-4xl lg:text-5xl font-semibold text-black mb-6 leading-tight">
                  Consultoría estratégica con experiencia real
                </motion.h1>
                <motion.p variants={staggerItem} className="text-lg text-gray-600 leading-relaxed mb-8">
                  KOOB es una consultoría multidisciplinar formada íntegramente por personas
                  que han desempeñado cargos de responsabilidad y dirección en diferentes
                  sectores y organizaciones. Por eso entendemos los retos reales a los que se
                  enfrentan las empresas.
                </motion.p>
                <motion.div variants={staggerItem}>
                  <Link
                    to="/reimpulso"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                  >
                    Conocer nuestro servicio
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideLeft}
                className="aspect-[4/3] bg-gray-100"
              >
                <img
                  src="/images/about-team.jpg"
                  alt="Equipo KOOB Advisory en reunión estratégica"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="section-space-compact">
        <div className="page-container">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={slideRight}
              >
                <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  No nos sentimos identificados con el modelo tradicional
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    No buscamos entregar únicamente informes o recomendaciones teóricas, sino
                    implicarnos en cada proyecto, trabajar junto a los equipos y acompañar a las
                    empresas en la ejecución e implantación de soluciones que generen impacto
                    real.
                  </p>
                  <p>
                    KOOB nació con una visión distinta: ofrecer un servicio más flexible,
                    eficiente y cercano. Nuestro modelo de trabajo, basado en la colaboración por
                    proyectos y sin una estructura tradicional de oficina, nos permite reunir a
                    los mejores especialistas en cada área, adaptándonos a las necesidades reales
                    de cada cliente.
                  </p>
                  <p>
                    Elegir KOOB significa contar con talento experto, atención personalizada y
                    una manera más moderna e inteligente de desarrollar proyectos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={slideLeft}
                className="bg-gray-50 p-8"
              >
                <h3 className="text-xl font-semibold text-black mb-6">Lo que nos diferencia</h3>
                <ul className="space-y-4 text-gray-600">
                  {[
                    'Experiencia real en empresa, en múltiples sectores y posiciones de dirección',
                    'Enfoque práctico orientado a soluciones aplicables, no solo teóricas',
                    'Trabajo integrado con los equipos del cliente, dejando capacidades instaladas',
                    'Acompañamiento activo durante la implantación, no solo en el diseño',
                    'Compromiso compartido: en algunos proyectos alineamos parte de nuestra remuneración a los resultados',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-koob-gold rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-space-compact bg-black text-white">
        <div className="page-container">
          <div className="content-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">Nuestros valores</h2>
              <p className="text-gray-400 leading-relaxed">
                Estos son los principios que guían cada proyecto que emprendemos y cada
                relación que construimos con nuestros clientes.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {valores.map((valor) => (
                <motion.div key={valor.title} variants={staggerItem} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-koob-gold transition-colors duration-300">
                    <valor.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{valor.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{valor.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section className="section-space-compact bg-koob-beige">
        <div className="page-container">
          <div className="content-container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Sectores en los que trabajamos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nuestra experiencia multidisciplinar nos permite aportar valor en sectores
                exigentes donde la eficiencia operativa y la rentabilidad son críticas.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {sectores.map((sector) => (
                <motion.div
                  key={sector.name}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="border-hairline-light border bg-white p-8 transition-colors duration-300 hover:border-black"
                >
                  <h3 className="text-xl font-semibold text-black mb-4">{sector.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{sector.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space-compact bg-black text-white">
        <div className="page-container">
          <div className="content-container-medium text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold mb-6">
                ¿Quieres conocer más sobre nosotros?
              </motion.h2>
              <motion.p variants={staggerItem} className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Estamos disponibles para una conversación sin compromiso. Cuéntanos tu situación
                y vemos cómo podemos ayudarte.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-koob-gold transition-colors"
                >
                  Contactar con nosotros
                  <ArrowRight className="w-4 h-4" />
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

export default QuienesSomos;
