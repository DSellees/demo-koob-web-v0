import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Instagram, Youtube, ArrowRight, MessageCircle } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { fadeUp, staggerContainer, staggerItem, viewportOnce, slideRight } from '../lib/animations';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con backend / formspree / emailjs
    setSubmitted(true);
  };

  return (
    <div className="page-root">
      <SeoMeta
        title="Contacto — KOOB Advisory"
        description="Hablemos de lo que necesita tu empresa. Contacta con KOOB Advisory para una primera conversación sin compromiso."
        url="https://koobadvisory.com/contacto"
      />
      <Navigation />

      {/* Hero */}
      <section className="page-intro-space bg-black text-white">
        <div className="page-container">
          <div className="content-container-medium">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4"
            >
              Contacto
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-6"
            >
              Hablemos de lo que necesita tu empresa
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 leading-relaxed max-w-2xl"
            >
              Una primera conversación sin compromiso. Cuéntanos dónde estás
              y vemos juntos cómo podemos ayudarte.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Formulario + datos */}
      <section className="section-space-compact">
        <div className="page-container">
          <div className="content-container">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Formulario */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={slideRight}
              >
                <h2 className="text-2xl font-semibold text-black mb-8">
                  Cuéntanos qué necesita tu empresa
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-hairline-light border bg-koob-beige p-8"
                  >
                    <h3 className="text-xl font-semibold text-black mb-3">Mensaje recibido</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Gracias por ponerte en contacto. Revisaremos tu mensaje y te responderemos
                      lo antes posible para coordinar una primera conversación.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-black mb-2">
                          Nombre *
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-black"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-black mb-2">
                          Empresa *
                        </label>
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          required
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-black"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-black"
                          placeholder="tu@empresa.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-black mb-2">
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-black"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-black mb-2">
                        ¿Cómo podemos ayudarte? *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        rows={6}
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors text-black resize-none"
                        placeholder="Cuéntanos brevemente la situación de tu empresa, qué retos afrontas y qué tipo de apoyo estás buscando..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                      Enviar mensaje
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">
                      Al enviar este formulario aceptas nuestra{' '}
                      <a href="/privacidad" className="underline hover:text-black transition-colors">
                        política de privacidad
                      </a>.
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Datos de contacto */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="space-y-10"
              >
                <motion.div variants={staggerItem}>
                  <h2 className="text-2xl font-semibold text-black mb-6">
                    O escríbenos directamente
                  </h2>
                  <div className="space-y-4">
                    <a
                      href="mailto:info@koobadvisory.com"
                      className="border-hairline-light group flex items-center gap-4 border p-4 transition-colors hover:border-black"
                    >
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                        <Mail className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Email</p>
                        <p className="font-medium text-black">info@koobadvisory.com</p>
                      </div>
                    </a>
                    <a
                      href="tel:+34609483114"
                      className="border-hairline-light group flex items-center gap-4 border p-4 transition-colors hover:border-black"
                    >
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                        <Phone className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">Teléfono</p>
                        <p className="font-medium text-black">609 483 114</p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20con%20KOOB."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-hairline-light group flex items-center gap-4 border p-4 transition-colors hover:border-black"
                    >
                      <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-black transition-colors">
                        <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
                        <p className="font-medium text-black">Contactar por WhatsApp</p>
                      </div>
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <h3 className="text-lg font-semibold text-black mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    {[
                      { href: 'https://www.linkedin.com/company/koob-advisory/?viewAsMember=true', icon: Linkedin, label: 'LinkedIn' },
                      { href: 'https://www.instagram.com/koob.advisory/', icon: Instagram, label: 'Instagram' },
                      { href: 'https://www.youtube.com/@KOOB_ADVISORY', icon: Youtube, label: 'YouTube' },
                    ].map(({ href, icon: Icon, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="border-hairline-light flex h-12 w-12 items-center justify-center border text-gray-500 transition-colors hover:border-black hover:text-black"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={staggerItem} className="p-8 bg-koob-beige">
                  <h3 className="text-lg font-semibold text-black mb-3">
                    ¿No sabes por dónde empezar?
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm mb-4">
                    No es necesario tener todo claro antes de hablar con nosotros.
                    Muchas veces, el primer paso es simplemente explicar la situación
                    y ver si tiene sentido avanzar juntos.
                  </p>
                  <a
                    href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20con%20KOOB%20sin%20compromiso."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-koob-gold transition-colors"
                  >
                    Escríbenos por WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
