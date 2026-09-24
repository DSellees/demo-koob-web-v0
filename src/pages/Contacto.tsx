import { motion } from 'framer-motion';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import ContactCTA from '../sections/ContactCTA';
import SeoMeta from '../components/SeoMeta';
import SocialLinks from '../components/SocialLinks';
import { reveal, revealViewport } from '../lib/animations';

/**
 * Contacto — cabecera + la sección de contacto de la home (datos directos y
 * formulario con validación propia y casilla RGPD), para que haya un único
 * formulario que mantener. Mismo lenguaje visual que el resto de páginas.
 */

const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

const Contacto = () => {
  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title="Contacto — KOOB Advisory"
        description="Hablemos de lo que necesita tu empresa. Contacta con KOOB Advisory para una primera conversación sin compromiso."
        url="https://koobadvisory.com/contacto"
      />
      <Navigation />

      {/* ── Cabecera (claro) ──────────────────────────────────────── */}
      <header className="page-intro-space overflow-hidden bg-koob-beige text-black">
        <div className="page-container">
          <div className="content-container">
            <motion.p {...revealProps} className="type-eyebrow mb-5 text-koob-gold-ink">
              Contacto
            </motion.p>
            <div className="grid items-start gap-wide lg:grid-cols-[3fr_2fr]">
              {/* w-fit + salto de línea: la caja mide lo que el titular, así los iconos
                  se centran justo bajo él y no bajo toda la columna. */}
              <div className="w-fit">
                <motion.h1 {...revealProps} custom={0.06} className="type-section-title text-black">
                  Hablemos de lo que
                  <br className="hidden sm:block" /> necesita tu empresa
                </motion.h1>
                <motion.div
                  {...revealProps}
                  custom={0.12}
                  className="mt-8 flex justify-center"
                >
                  {/* Los iconos son los que se centran bajo el titular; "Conecta" queda
                      pegado a su izquierda, fuera del centrado. */}
                  <div className="relative">
                    <span className="type-micro-label absolute right-full top-1/2 mr-5 -translate-y-1/2 select-none whitespace-nowrap text-[0.6875rem] text-koob-gray-500">
                      Conecta
                    </span>
                    <SocialLinks gapClassName="gap-6" iconClassName="h-6 w-6" />
                  </div>
                </motion.div>
              </div>
              <div>
                <motion.p
                  {...revealProps}
                  custom={0.18}
                  className="type-section-lead max-w-xl text-koob-gray-700"
                >
                  No es necesario tener todo claro antes de hablar con nosotros. Cuéntanos dónde
                  estás y vemos juntos si tiene sentido avanzar.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ContactCTA />

      <Footer />
    </div>
  );
};

export default Contacto;
