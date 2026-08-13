import { ArrowRight, Briefcase, Network, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const principios = [
  {
    icon: Briefcase,
    title: 'Experiencia ejecutiva real',
    description:
      'Cada profesional que forma parte de un proyecto KOOB ha ocupado posiciones de responsabilidad y dirección. Conocemos los retos porque los hemos vivido desde dentro.',
  },
  {
    icon: Network,
    title: 'Un modelo sin estructura pesada',
    description:
      'No somos una consultora con una plantilla fija. Reunimos, proyecto a proyecto, a los especialistas más adecuados para cada reto concreto.',
  },
  {
    icon: Target,
    title: 'Implicación directa',
    description:
      'No delegamos en perfiles junior. Quien dirige el proyecto es quien está presente en el día a día junto al cliente.',
  },
  {
    icon: Users,
    title: 'Equipos multidisciplinares',
    description:
      'Combinamos perfiles de estrategia, operaciones, personas y comunicación según lo que cada empresa necesita en cada momento.',
  },
];

const Equipo = () => {
  return (
    <div className="page-root">
      <SeoMeta
        title="Equipo — KOOB Advisory"
        description="Profesionales senior con experiencia real en dirección de empresas. Cada proyecto liderado por quien conoce los retos desde dentro."
        url="https://koobadvisory.com/equipo"
      />
      <Navigation />

      {/* Hero */}
      <section className="page-intro-space bg-koob-beige">
        <div className="page-container">
          <div className="content-container-medium text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                Equipo
              </motion.p>
              <motion.h1 variants={staggerItem} className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6 leading-tight">
                Profesionales senior con experiencia real
              </motion.h1>
              <motion.p variants={staggerItem} className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Nuestro equipo combina experiencia en dirección de empresas con el conocimiento
                práctico de quienes han estado en tu lado del negocio.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section-space-compact">
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
                Cómo trabajamos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En KOOB no existe una jerarquía rígida entre socios y consultores. Cada
                proyecto lo lidera la persona con el perfil más adecuado para ese reto
                concreto, con implicación directa de principio a fin.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              {principios.map((principio) => (
                <motion.div
                  key={principio.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-6 p-8 bg-gray-50 hover:bg-koob-beige transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                    <principio.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-black mb-2">{principio.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {principio.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosistema de expertos */}
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
                Un ecosistema, no una plantilla fija
              </motion.h2>
              <motion.p variants={staggerItem} className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Además del equipo central, KOOB cuenta con una red de especialistas externos a
                los que recurrimos según las necesidades específicas de cada proyecto. Esto nos
                permite aportar exactamente el perfil que cada empresa necesita, sin las
                limitaciones de una estructura cerrada.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-space-compact bg-koob-beige">
        <div className="page-container">
          <div className="content-container-medium text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                ¿Hablamos?
              </motion.h2>
              <motion.p variants={staggerItem} className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Nuestro equipo está disponible para una conversación inicial sin compromiso.
                Cuéntanos tu situación y vemos cómo podemos ayudarte.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Contactar con el equipo
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

export default Equipo;
