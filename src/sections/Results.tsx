import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '../lib/animations';

const profiles = [
  {
    label: 'Empresa familiar · PYME',
    title: 'Empresas que quieren crecer con estructura',
    description:
      'La dirección concentra gran parte de las decisiones y empiezan a aparecer señales que piden acompañamiento externo.',
    signals: [
      'Decisiones muy centralizadas en la propiedad o dirección',
      'Voluntad de crecer, pero sin estructura ni metodología',
      'Tensiones de tesorería o dificultades financieras',
      'Oportunidades que no se convierten en proyectos reales',
    ],
  },
  {
    label: 'Gran empresa',
    title: 'Empresas que necesitan impulsar cambios concretos',
    description:
      'Organizaciones que buscan acompañamiento especializado para acelerar transformaciones en áreas concretas.',
    signals: [
      'Visión externa e independiente sobre un área o proceso',
      'Cambios que internamente no consiguen avanzar',
      'Especialistas con experiencia ejecutiva real',
      'Proyectos estratégicos que necesitan agilidad',
    ],
  },
];

const Results = () => {
  return (
    <section id="para-quien" className="py-24 lg:py-36 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="mb-16 max-w-3xl"
          >
            <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-4">
              Para quién trabajamos
            </motion.p>
            <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6">
              Empresas en momentos que requieren decisión
            </motion.h2>
            <motion.p variants={staggerItem} className="text-gray-500 text-lg leading-relaxed">
              Trabajamos con empresas que han llegado a un punto en el que necesitan apoyo externo para avanzar o afrontar un reto importante.
            </motion.p>
          </motion.div>

          {/* Perfiles — tarjetas con borde superior dorado */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-px bg-gray-200"
          >
            {profiles.map((profile) => (
              <motion.div
                key={profile.title}
                variants={staggerItem}
                className="bg-white p-10 group hover:bg-gray-50 transition-colors duration-300"
              >
                {/* Top accent */}
                <div className="w-10 h-0.5 bg-koob-gold mb-8 group-hover:w-14 transition-all duration-300" />

                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">
                  {profile.label}
                </p>
                <h3 className="text-2xl font-semibold text-black mb-4 leading-snug">
                  {profile.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-8 text-sm">{profile.description}</p>

                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  {profile.signals.map((signal) => (
                    <li key={signal} className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="w-1 h-1 bg-koob-gold rounded-full mt-2 flex-shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="mt-12 text-center"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Hablar con KOOB
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Results;
