import { useState } from 'react';
import { Phone, Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { reveal, revealViewport } from '../lib/animations';
import ValidationNote from '../components/ValidationNote';

// Cada elemento observa su propia visibilidad — ver "La Regla de la Animación
// Visible" en src/lib/animations.ts.
const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<
  Record<'nombre' | 'empresa' | 'cargo' | 'email' | 'mensaje' | 'consent', string>
>;

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    cargo: '',
    email: '',
    telefono: '',
    mensaje: '',
  });
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const clearError = (field: keyof FieldErrors) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    clearError(e.target.name as keyof FieldErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (!formData.nombre.trim()) next.nombre = 'Dinos cómo te llamas.';
    if (!formData.empresa.trim()) next.empresa = 'Indica el nombre de tu empresa.';
    if (!formData.cargo.trim()) next.cargo = 'Indica tu cargo.';
    if (!formData.email.trim()) next.email = 'Necesitamos un correo para responderte.';
    else if (!EMAIL_RE.test(formData.email.trim())) next.email = 'Ese correo no parece válido.';
    if (!formData.mensaje.trim()) next.mensaje = 'Cuéntanos brevemente tu situación.';
    if (!accepted) next.consent = 'Marca la casilla para poder enviar el mensaje.';

    setErrors(next);
    if (Object.keys(next).some((k) => next[k as keyof FieldErrors])) return;

    // TODO: conectar con backend / formspree / emailjs
    setSubmitted(true);
  };

  const fieldClass = (field?: keyof FieldErrors) =>
    `w-full border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none ${
      field && errors[field] ? 'border-koob-gold' : 'border-hairline-dark focus:border-koob-gold'
    }`;

  return (
    <section id="contacto" className="section-space-compact bg-black text-white">
      <div className="page-container">
        <div className="content-container">
          <div className="grid gap-section lg:grid-cols-2">

            {/* Left - CTA */}
            <div>
              <motion.p {...revealProps} className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-4">
                Contacto
              </motion.p>
              <motion.h2 {...revealProps} custom={0.06} className="type-section-title-compact mb-6 font-bold tracking-[-0.03em]">
                El cambio empieza con una conversación
              </motion.h2>
              <motion.p {...revealProps} custom={0.12} className="type-section-lead text-gray-400 mb-8">
                Cuéntanos tu situación. Sin compromiso, sin formularios complejos. Solo una
                conversación honesta sobre los retos de tu empresa y cómo podemos acompañarte.
              </motion.p>

              <motion.div {...revealProps} custom={0.18} className="space-y-4">
                <a
                  href="tel:+34609483114"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Llámanos</p>
                    <p className="font-medium">+34 609 483 114</p>
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
                    <p className="font-medium">Pulsa aquí</p>
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
            </div>

            {/* Right - Form */}
            <div>
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
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <motion.div {...revealProps}>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      aria-invalid={errors.nombre ? true : undefined}
                      aria-describedby={errors.nombre ? 'error-nombre' : undefined}
                      className={fieldClass('nombre')}
                      placeholder="Tu nombre"
                    />
                    <AnimatePresence initial={false}>
                      {errors.nombre && (
                        <ValidationNote id="error-nombre">{errors.nombre}</ValidationNote>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div {...revealProps} custom={0.06}>
                      <label htmlFor="empresa" className="block text-sm font-medium mb-2">
                        Empresa *
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        value={formData.empresa}
                        onChange={handleChange}
                        aria-invalid={errors.empresa ? true : undefined}
                        aria-describedby={errors.empresa ? 'error-empresa' : undefined}
                        className={fieldClass('empresa')}
                        placeholder="Nombre de tu empresa"
                      />
                      <AnimatePresence initial={false}>
                        {errors.empresa && (
                          <ValidationNote id="error-empresa">{errors.empresa}</ValidationNote>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.div {...revealProps} custom={0.09}>
                      <label htmlFor="cargo" className="block text-sm font-medium mb-2">
                        Cargo *
                      </label>
                      <input
                        id="cargo"
                        name="cargo"
                        type="text"
                        value={formData.cargo}
                        onChange={handleChange}
                        aria-invalid={errors.cargo ? true : undefined}
                        aria-describedby={errors.cargo ? 'error-cargo' : undefined}
                        className={fieldClass('cargo')}
                        placeholder="Tu cargo"
                      />
                      <AnimatePresence initial={false}>
                        {errors.cargo && (
                          <ValidationNote id="error-cargo">{errors.cargo}</ValidationNote>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  <motion.div {...revealProps} custom={0.12}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={errors.email ? true : undefined}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      className={fieldClass('email')}
                      placeholder="tu@empresa.com"
                    />
                    <AnimatePresence initial={false}>
                      {errors.email && (
                        <ValidationNote id="error-email">{errors.email}</ValidationNote>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div {...revealProps} custom={0.18}>
                    <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                      Cuéntanos tu situación *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      aria-invalid={errors.mensaje ? true : undefined}
                      aria-describedby={errors.mensaje ? 'error-mensaje' : undefined}
                      className={`${fieldClass('mensaje')} resize-none`}
                      placeholder="Breve descripción de los retos de tu empresa..."
                    />
                    <AnimatePresence initial={false}>
                      {errors.mensaje && (
                        <ValidationNote id="error-mensaje">{errors.mensaje}</ValidationNote>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div {...revealProps} custom={0.24}>
                    <label
                      htmlFor="contacto-consent"
                      className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-400"
                    >
                      <input
                        id="contacto-consent"
                        name="consent"
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => {
                          setAccepted(e.target.checked);
                          if (e.target.checked) clearError('consent');
                        }}
                        aria-invalid={errors.consent ? true : undefined}
                        aria-describedby={errors.consent ? 'error-consent' : undefined}
                        className={`mt-0.5 h-4 w-4 shrink-0 accent-koob-gold ${
                          errors.consent ? 'outline outline-1 outline-koob-gold' : ''
                        }`}
                      />
                      <span>
                        He leído la{' '}
                        <Link
                          to="/privacidad"
                          className="underline transition-colors hover:text-white"
                        >
                          política de privacidad
                        </Link>{' '}
                        y acepto que KOOB trate mis datos para responder a mi consulta.
                      </span>
                    </label>
                    <AnimatePresence initial={false}>
                      {errors.consent && (
                        <ValidationNote id="error-consent">{errors.consent}</ValidationNote>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.button
                    type="submit"
                    {...revealProps}
                    custom={0.3}
                    className="type-button-prominent inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 text-koob-black transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-white/85 active:scale-[0.98]"
                  >
                    Enviar mensaje
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
