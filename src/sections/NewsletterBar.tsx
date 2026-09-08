import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Reveal from '../components/Reveal';
import ValidationNote from '../components/ValidationNote';

/**
 * Franja de suscripción a la newsletter, entre Reimpulso y Casos de éxito.
 * Fondo negro, disposición horizontal: texto a la izquierda, formulario a la
 * derecha. Consentimiento RGPD con casilla NO premarcada. Validación propia con
 * avisos con estilo de la app: NO flotan sobre el contenido, ocupan su sitio en
 * el flujo y empujan lo de abajo. Sin backend todavía (ver TODO). Cada bloque
 * aparece al entrar en pantalla (ver "La Regla de la Animación Visible" en
 * src/lib/animations.ts).
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterBar = () => {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; consent?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: { email?: string; consent?: string } = {};
    if (!email.trim()) next.email = 'Escribe tu correo para suscribirte.';
    else if (!EMAIL_RE.test(email.trim())) next.email = 'Ese correo no parece válido.';
    if (!accepted) next.consent = 'Necesitamos tu consentimiento para escribirte.';

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    // TODO: conectar con backend / proveedor de email marketing
    setSubmitted(true);
  };

  return (
    <section
      aria-label="Suscripción a la newsletter"
      className="border-y border-hairline-dark bg-koob-black text-white"
    >
      <div className="page-container">
        <div className="content-container">
          <div className="flex flex-col gap-10 py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">

            <Reveal className="max-w-xl">
              <p className="type-eyebrow text-koob-gold">Newsletter</p>
              <h2 className="mt-4 type-section-title-compact font-bold tracking-[-0.03em] text-white">
                Cada mes, una lectura útil sobre tu sector
              </h2>
              <p className="mt-3 type-body text-gray-400">
                Tendencias, criterios de gestión y aprendizajes de proyectos reales. Sin ruido.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="w-full lg:w-auto lg:min-w-[440px]">
              {submitted ? (
                <p className="text-sm leading-relaxed text-gray-400">
                  Suscripción registrada. Te escribiremos cuando publiquemos la próxima edición.
                </p>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="w-full sm:flex-1">
                      <label htmlFor="newsletter-email" className="sr-only">
                        Tu correo electrónico
                      </label>
                      <input
                        id="newsletter-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                        placeholder="tu@empresa.com"
                        className={`w-full border bg-white/5 px-4 py-3 text-white placeholder-gray-500 transition-colors focus:outline-none ${
                          errors.email
                            ? 'border-koob-gold'
                            : 'border-hairline-dark focus:border-koob-gold'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="type-button-prominent inline-flex shrink-0 items-center justify-center gap-2 self-start bg-white px-6 py-3 text-koob-black transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-white/85 active:scale-[0.98] sm:self-auto"
                    >
                      Suscribirme
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {errors.email && (
                      <ValidationNote id="newsletter-email-error">{errors.email}</ValidationNote>
                    )}
                  </AnimatePresence>

                  <label
                    htmlFor="newsletter-consent"
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-gray-400"
                  >
                    <input
                      id="newsletter-consent"
                      name="consent"
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => {
                        setAccepted(e.target.checked);
                        if (errors.consent) setErrors((p) => ({ ...p, consent: undefined }));
                      }}
                      aria-invalid={errors.consent ? true : undefined}
                      className={`mt-0.5 h-4 w-4 shrink-0 accent-koob-gold ${
                        errors.consent ? 'outline outline-1 outline-koob-gold' : ''
                      }`}
                    />
                    <span>
                      He leído y acepto la{' '}
                      <Link to="/privacidad" className="underline transition-colors hover:text-white">
                        política de privacidad
                      </Link>
                      .
                    </span>
                  </label>

                  <AnimatePresence initial={false}>
                    {errors.consent && <ValidationNote>{errors.consent}</ValidationNote>}
                  </AnimatePresence>
                </form>
              )}
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBar;
