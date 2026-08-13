import { motion } from 'framer-motion';
import { ArrowRight, Search, Lightbulb, Map, Handshake, TrendingUp, Globe, Merge, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { fadeUp, fadeIn, staggerContainer, staggerItem, viewportOnce, slideLeft, slideRight } from '../lib/animations';

const metodologia = [
  {
    icon: Search,
    title: 'Diagnóstico y Bloqueos',
    description:
      'Analizar la situación e identificar bloqueos financieros o estratégicos. Una foto clara de dónde estás y por qué no avanzas.',
  },
  {
    icon: Lightbulb,
    title: 'Criterio en Decisiones',
    description:
      'Aportar experiencia real para la toma de decisiones críticas. No te decimos qué pensar: te ayudamos a decidir mejor y con más información.',
  },
  {
    icon: Map,
    title: 'Plan de Acción Viable',
    description:
      'Definir una hoja de ruta ejecutable con hitos claros. Sin teorías: un plan que tu organización pueda llevar a cabo.',
  },
  {
    icon: Handshake,
    title: 'Ejecución y Acompañamiento',
    description:
      'Estar a tu lado en la implementación, no solo en el diagnóstico. Nos implicamos hasta que los cambios son reales y sostenibles.',
  },
];

const servicios = [
  {
    icon: ShieldAlert,
    title: 'Gestión de Crisis',
    description:
      'Diseño de planes para estabilizar la situación cuando los márgenes se comprimen, la tesorería presiona o la organización necesita reorientarse.',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento y Lanzamiento',
    description:
      'Estrategias go-to-market para nuevos productos o líneas de negocio. Acompañamiento en cada fase del proceso de crecimiento.',
  },
  {
    icon: Merge,
    title: 'Integración y M&A',
    description:
      'Fusión de culturas corporativas y unificación de procesos tras adquisiciones o integraciones. Gestión del cambio en procesos complejos.',
  },
  {
    icon: Globe,
    title: 'Internacionalización',
    description:
      'Apertura de nuevos mercados y operaciones con seguridad estratégica y comercial. Acompañamiento en la expansión internacional.',
  },
];

const diagnosticFases = [
  {
    step: 'Primero',
    title: 'Foto global del negocio',
    description: 'Obtener una primera visión completa de la situación real de la empresa.',
    items: ['Análisis financiero', 'Control de gestión'],
  },
  {
    step: 'Después',
    title: 'Puntos críticos y oportunidades',
    description: 'Identificar los principales bloqueos, palancas de mejora y posibilidades de crecimiento.',
    items: ['Auditoría de talento', 'Mapa de procesos'],
  },
  {
    step: 'Finalmente',
    title: 'Focos de actuación prioritarios',
    description: 'Definir dónde concentrar la energía y los recursos para generar el mayor impacto.',
    items: ['Propuesta de valor', 'Estrategia comercial'],
  },
];

const Reimpulso = () => {
  return (
    <div className="page-root">
      <SeoMeta
        title="KOOB Reimpulso — Consultoría estratégica de transformación empresarial"
        description="Acompañamiento ejecutivo real para empresas que necesitan recuperar el foco, ordenar prioridades y activar cambios. No venimos a decirte qué hacer. Venimos a hacerlo contigo."
        url="https://koobadvisory.com/reimpulso"
      />
      <Navigation />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[85vh] flex items-center bg-black text-white pt-20 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1 bg-koob-gold opacity-60" />

        <div className="page-container">
          <div className="max-w-5xl mx-auto">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-6"
            >
              KOOB Reimpulso
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight mb-8 tracking-tight"
            >
              Reimpulsa tu empresa
              <br />
              <span className="text-koob-gold">cuando más lo necesita</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.35 }}
              className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
            >
              Acompañamiento ejecutivo real para empresas en momentos críticos de transformación,
              estabilización o crecimiento. No venimos a hacer un informe y marcharnos.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-koob-gold text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Hablemos de tu situación
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20KOOB%20Reimpulso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:border-white transition-colors"
              >
                WhatsApp directo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── ¿Es este el momento? ─── */}
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
              <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                ¿Es este el momento de tu empresa?
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Sé honesto contigo mismo
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Hay señales que las empresas ignoran durante demasiado tiempo.
                Reconocerlas es el primer paso para recuperar el control.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8"
            >
              <motion.div
                variants={staggerItem}
                className="border-hairline-light border bg-white p-8 transition-colors duration-300 hover:border-black"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                  Tensión en resultados
                </p>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Empresas con presión sobre resultados y tesorería
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Organizaciones donde los márgenes se comprimen y la viabilidad del modelo actual genera
                  preguntas difíciles.
                </p>
                <ul className="space-y-3">
                  {[
                    '¿Los resultados no son lo que eran?',
                    '¿Presión creciente sobre la rentabilidad?',
                    '¿Decisiones difíciles sin margen de error?',
                  ].map((signal) => (
                    <li key={signal} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-koob-gold rounded-full mt-2 flex-shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={staggerItem}
                className="border-hairline-light border bg-white p-8 transition-colors duration-300 hover:border-black"
              >
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">
                  Potencial sin desarrollar
                </p>
                <h3 className="text-xl font-semibold text-black mb-4">
                  Empresas con potencial que no terminan de activarse
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  Empresas que saben que tienen capacidad para crecer pero no encuentran
                  la claridad estratégica para hacerlo.
                </p>
                <ul className="space-y-3">
                  {[
                    '¿Crees que tu negocio tiene potencial sin explotar?',
                    '¿Necesitas clarificar distintas posibilidades estratégicas?',
                    '¿Has crecido con poco orden y necesitas estructura?',
                  ].map((signal) => (
                    <li key={signal} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-koob-gold rounded-full mt-2 flex-shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Metodología ─── */}
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
              <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                Nuestra metodología
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-4">
                Acompañamiento ejecutivo real
              </h2>
              <p className="text-xl text-koob-gold font-medium italic mb-6">
                "No venimos a decirte qué hacer. Venimos a hacerlo contigo."
              </p>
              <p className="text-gray-400 leading-relaxed">
                Los momentos críticos no se resuelven con informes. Se resuelven con
                decisiones bien tomadas y bien ejecutadas, desde dentro.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {metodologia.map((fase) => (
                <motion.div
                  key={fase.title}
                  variants={staggerItem}
                  className="group"
                >
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 group-hover:bg-koob-gold transition-colors duration-300">
                    <fase.icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{fase.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{fase.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="border-hairline-dark mt-16 border-t pt-16"
            >
              <blockquote className="text-2xl lg:text-3xl font-medium text-white/80 italic leading-relaxed max-w-4xl">
                "Porque los momentos críticos no se resuelven con informes.
                Se resuelven con decisiones bien tomadas y bien ejecutadas."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Por qué KOOB / Áreas de actuación ─── */}
      <section className="section-space-compact bg-white">
        <div className="page-container">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-16 mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={slideRight}
              >
                <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                  Por qué KOOB
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  Experiencia ejecutiva desde la primera línea
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={slideLeft}
                className="flex items-end"
              >
                <p className="text-gray-600 leading-relaxed text-lg">
                  Profesionales que han estado en tu lugar, liderando transformaciones, crisis y
                  decisiones clave desde la primera línea del negocio.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-6"
            >
              {servicios.map((servicio) => (
                <motion.div
                  key={servicio.title}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="border-hairline-light group border p-8 transition-all duration-300 hover:border-black hover:shadow-sm"
                >
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <servicio.icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-3">{servicio.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{servicio.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Cómo empezamos ─── */}
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
              <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                ¿Cómo empezamos?
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Si nos dejas, haremos un diagnóstico de tu empresa
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Antes de proponer nada, necesitamos entender bien tu situación.
                Nuestro diagnóstico es ágil, orientado a la acción y sin ambigüedades.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {diagnosticFases.map((fase) => (
                <motion.div
                  key={fase.title}
                  variants={staggerItem}
                  className="border-hairline-light border bg-white p-8"
                >
                  <p className="text-xs font-medium text-koob-gold uppercase tracking-wider mb-3">
                    {fase.step}
                  </p>
                  <h3 className="text-lg font-semibold text-black mb-3">{fase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{fase.description}</p>
                  <ul className="space-y-2">
                    {fase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="mt-8 text-sm text-gray-400 text-center italic"
            >
              El alcance del diagnóstico es orientativo. No es una auditoría exhaustiva
              ni incluye trabajo de implantación.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ─── CTA Final ─── */}
      <section className="section-space-feature bg-black text-white">
        <div className="page-container">
          <div className="content-container-medium text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-6">
                El cambio empieza aquí
              </motion.p>
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-5xl font-semibold mb-6 leading-tight">
                Contáctanos.
              </motion.h2>
              <motion.p variants={staggerItem} className="text-xl text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Cuéntanos la situación de tu empresa. En una primera conversación
                evaluamos juntos si podemos ayudarte.
              </motion.p>
              <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-koob-gold text-black font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Solicitar primera conversación
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:info@koobadvisory.com"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-medium hover:border-white transition-colors"
                >
                  info@koobadvisory.com
                </a>
              </motion.div>

              <motion.div variants={staggerItem} className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
                <a href="tel:+34609483114" className="hover:text-white transition-colors">
                  609 483 114
                </a>
                <span className="w-px h-4 bg-gray-700" />
                <a href="https://wa.me/34609483114" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reimpulso;
