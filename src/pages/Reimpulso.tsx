import { ArrowRight, Check, Phone, Mail, MessageCircle } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

const diferenciadores = [
  {
    title: 'Diagnóstico en 72 horas',
    description: 'En tres días laborables tendrás una foto completa de tu situación actual, los puntos críticos identificados y las palancas de mejora priorizadas.',
  },
  {
    title: 'Ejecutivos senior',
    description: 'No trabajarás con consultores junior. Cada proyecto está liderado por un socio con más de 20 años de experiencia en dirección de empresas.',
  },
  {
    title: 'Acompañamiento real',
    description: 'No entregamos un informe y nos vamos. Trabajamos codo a codo con tu equipo durante meses para garantizar la ejecución y los resultados.',
  },
  {
    title: 'Resultados medibles',
    description: 'Establecemos KPIs claros desde el primer día y medimos el impacto real de nuestras intervenciones en tu negocio.',
  },
];

const procesos = [
  {
    fase: 'FASE 1',
    title: 'Diagnóstico Express',
    duration: '72 horas',
    items: [
      'Análisis financiero y operativo de la empresa',
      'Entrevistas con el equipo directivo',
      'Identificación de puntos críticos y oportunidades',
      'Documento de hallazgos y palancas de mejora',
    ],
  },
  {
    fase: 'FASE 2',
    title: 'Plan de Acción',
    duration: '2 semanas',
    items: [
      'Definición de objetivos y KPIs',
      'Diseño de iniciativas prioritarias',
      'Asignación de responsables y timelines',
      'Validación con el equipo directivo',
    ],
  },
  {
    fase: 'FASE 3',
    title: 'Ejecución y Acompañamiento',
    duration: '3-6 meses',
    items: [
      'Reuniones semanales de seguimiento',
      'Resolución de obstáculos en tiempo real',
      'Ajustes al plan según resultados',
      'Formación del equipo interno',
    ],
  },
  {
    fase: 'FASE 4',
    title: 'Consolidación',
    duration: '1-3 meses',
    items: [
      'Medición de resultados vs. objetivos',
      'Documentación de procesos y aprendizajes',
      'Plan de sostenibilidad de mejoras',
      'Cierre y evaluación del proyecto',
    ],
  },
];

const testimonios = [
  {
    quote: 'KOOB no solo nos ayudó a identificar los problemas, sino que estuvieron con nosotros meses ejecutando las soluciones. El resultado superó nuestras expectativas.',
    author: 'Director General',
    company: 'Entidad Bancaria',
  },
  {
    quote: 'En 6 meses recuperamos la rentabilidad que llevábamos años perdiendo. Su metodología es pragmática y sus ejecutivos entienden la realidad del negocio.',
    author: 'CEO',
    company: 'Grupo Industrial',
  },
];

const Reimpulso = () => {
  return (
    <div className="relative bg-white min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
              Servicio
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-black mb-6 leading-tight">
              KOOB Reimpulso
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Programa de acompañamiento ejecutivo para empresas que necesitan recuperar 
              crecimiento, rentabilidad o dirección estratégica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/34609483114?text=Hola,%20me%20interesa%20el%20servicio%20KOOB%20Reimpulso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+34609483114"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-black font-medium hover:border-black transition-colors"
              >
                <Phone className="w-4 h-4" />
                609 483 114
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                  ¿Para quién está diseñado?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  KOOB Reimpulso está pensado para empresas que enfrentan situaciones críticas 
                  y necesitan un acompañamiento experto para salir del punto muerto.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Empresas con tensión en resultados
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Los márgenes se estrechan, la tesorería preocupa y existen dudas sobre 
                    la viabilidad futura del modelo actual. Necesitas actuar con urgencia 
                    pero no sabes por dónde empezar.
                  </p>
                </div>
                <div className="p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Empresas con potencial sin explotar
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tienes el producto y el mercado, pero faltan las estructuras y la hoja 
                    de ruta para escalar. Has crecido con poca sistemática y necesitas 
                    profesionalizar la operación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                ¿Qué hace diferente a KOOB Reimpulso?
              </h2>
              <p className="text-gray-400 leading-relaxed">
                No somos una consultora tradicional. Nuestro modelo está diseñado para 
                generar resultados rápidos y sostenibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {diferenciadores.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 lg:py-32 bg-koob-beige">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-6">
                Cómo funciona el programa
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Un proceso de cuatro fases diseñado para diagnosticar, planificar, ejecutar 
                y consolidar las mejoras en tu empresa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {procesos.map((proceso, index) => (
                <div key={index} className="bg-white p-8 border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      {proceso.fase}
                    </span>
                    <span className="text-xs text-gray-400">{proceso.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-4">{proceso.title}</h3>
                  <ul className="space-y-3">
                    {proceso.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 lg:py-32">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-semibold text-black mb-12 text-center">
              Lo que dicen nuestros clientes
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="p-8 bg-gray-50 border border-gray-200">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{testimonio.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-black">{testimonio.author}</p>
                    <p className="text-sm text-gray-500">{testimonio.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 lg:py-32 bg-black text-white">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
              ¿Listo para reimpulsar tu empresa?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
              Solicita un diagnóstico gratuito de 72 horas. Sin compromiso, sin coste. 
              Solo una conversación honesta sobre la situación de tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://wa.me/34609483114?text=Hola,%20me%20interesa%20el%20servicio%20KOOB%20Reimpulso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="tel:+34609483114"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                <Phone className="w-5 h-5" />
                609 483 114
              </a>
              <a
                href="mailto:info@koobadvisory.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Respuesta en menos de 24 horas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reimpulso;
