import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20KOOB.';
const PROMPT_SEEN_KEY = 'koob-whatsapp-prompt-seen';
const PROMPT_DELAY_MS = 7000;

const markPromptAsSeen = () => {
  try {
    window.sessionStorage.setItem(PROMPT_SEEN_KEY, 'true');
  } catch {
    // El mensaje sigue funcionando aunque el navegador bloquee sessionStorage.
  }
};

const WhatsAppButton = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        if (window.sessionStorage.getItem(PROMPT_SEEN_KEY)) return;
      } catch {
        // Si no hay almacenamiento disponible, mostramos igualmente la ayuda.
      }

      setShowPrompt(true);
      markPromptAsSeen();
    }, PROMPT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  const dismissPrompt = () => {
    markPromptAsSeen();
    setShowPrompt(false);
  };

  return (
    <>
      <AnimatePresence>
        {showPrompt && (
          <motion.aside
            aria-label="Ayuda de KOOB"
            className="fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] max-w-80 border border-white/15 bg-black text-white sm:bottom-24 sm:right-6"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={dismissPrompt}
              aria-label="Cerrar mensaje de ayuda"
              className="absolute right-2 top-2 z-10 flex h-11 w-11 cursor-pointer items-center justify-center text-gray-400 transition-colors duration-200 hover:text-white"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismissPrompt}
              className="group block p-5 pr-12"
            >
              <span className="mb-3 block h-px w-8 bg-koob-gold" aria-hidden="true" />
              <strong className="block text-base font-semibold tracking-[-0.01em]">
                ¿Necesitas ayuda con tu empresa?
              </strong>
              <span className="mt-2 block text-sm leading-relaxed text-gray-300">
                Cuéntanos tu situación y hablamos sin compromiso.
              </span>
              <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-white">
                Hablar con KOOB
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </span>
            </a>
          </motion.aside>
        )}
      </AnimatePresence>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-whatsapp="true"
        aria-label="Contactar por WhatsApp"
        onClick={dismissPrompt}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-black mix-blend-difference sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </>
  );
};

export default WhatsAppButton;
