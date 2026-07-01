import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, fadeUp, viewportOnce } from '../lib/animations';

const ContactCTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-black text-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Left - CTA */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                Contacto
              </motion.p>
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold mb-6">
                El cambio empieza con una conversación
              </motion.h2>
              <motion.p variants={staggerItem} className="text-gray-400 leading-relaxed mb-8">
                Cuéntanos tu situación. Sin compromiso, sin formularios complejos. Solo una
                conversación honesta sobre los retos de tu empresa y cómo podemos acompañarte.
              </motion.p>

              <motion.div variants={staggerItem} className="space-y-4 mb-10">
                <a
                  href="tel:+34609483114"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Llámanos</p>
                    <p className="font-medium">609 483 114</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20KOOB."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="font-medium">Escríbenos directamente</p>
                  </div>
                </a>

                <a
                  href="mailto:info@koobadvisory.com"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">info@koobadvisory.com</p>
                  </div>
                </a>
              </motion.div>

              <motion.div variants={staggerItem}>
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-koob-gold transition-colors"
                >
                  Contactar con KOOB
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="lg:pl-12"
            >
              <div className="p-8 bg-white/5 mb-8">
                <h3 className="text-lg font-semibold mb-4">¿Cómo es la primera conversación?</h3>
                <ul className="space-y-3">
                  {[
                    'Escuchamos la situación real de tu empresa',
                    'Identificamos los puntos con mayor potencial de mejora',
                    'Proponemos un enfoque adaptado a tu situación concreta',
                    'Sin compromiso ni presión',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-koob-gold rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Oficinas</p>
                  <p className="text-gray-400 text-sm">España</p>
                  <p className="text-gray-400 text-sm">Atención presencial y remota</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
