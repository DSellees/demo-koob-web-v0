import { useState } from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con backend / formspree / emailjs
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="section-space-compact bg-black text-white">
      <div className="page-container">
        <div className="content-container">
          <div className="grid gap-section lg:grid-cols-2">

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
              <motion.h2 variants={staggerItem} className="type-section-title-compact mb-6">
                El cambio empieza con una conversación
              </motion.h2>
              <motion.p variants={staggerItem} className="text-gray-400 leading-relaxed mb-8">
                Cuéntanos tu situación. Sin compromiso, sin formularios complejos. Solo una
                conversación honesta sobre los retos de tu empresa y cómo podemos acompañarte.
              </motion.p>

              <motion.div variants={staggerItem} className="space-y-4">
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

              <motion.div variants={staggerItem} className="mt-8">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-koob-gold transition-colors"
                >
                  Ver formulario completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="border-hairline-dark border bg-white/5 p-6"
                >
                  <h4 className="text-lg font-semibold mb-2">Mensaje recibido</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Gracias por ponerte en contacto. Revisaremos tu mensaje y te responderemos
                    lo antes posible para coordinar una primera conversación.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <motion.div variants={staggerItem}>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      className="border-hairline-dark w-full border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-koob-gold focus:outline-none"
                      placeholder="Tu nombre"
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                      Empresa *
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      className="border-hairline-dark w-full border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-koob-gold focus:outline-none"
                      placeholder="Nombre de tu empresa"
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-hairline-dark w-full border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-koob-gold focus:outline-none"
                      placeholder="tu@empresa.com"
                    />
                  </motion.div>

                  <motion.div variants={staggerItem}>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Cuéntanos tu situación *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="border-hairline-dark w-full resize-none border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-koob-gold focus:outline-none"
                      placeholder="Breve descripción de los retos de tu empresa..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={staggerItem}
                    className="w-full px-6 py-3 bg-white text-black font-medium hover:bg-koob-gold transition-colors"
                  >
                    Enviar mensaje
                  </motion.button>

                  <motion.p variants={staggerItem} className="text-xs text-gray-400 text-center">
                    Al enviar aceptas nuestra{' '}
                    <Link to="/privacidad" className="underline hover:text-white transition-colors">
                      política de privacidad
                    </Link>.
                  </motion.p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
