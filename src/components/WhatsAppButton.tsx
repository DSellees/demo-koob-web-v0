import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Headset, MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20KOOB.';
const PROMPT_DELAY_MS = 7000;
// Además del aviso al entrar, si el usuario se queda quieto (sin tocar
// ratón/teclado) este tiempo, se le vuelve a mostrar el mensaje.
const IDLE_DELAY_MS = 20000;
const ACTIVITY_EVENTS = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'wheel'] as const;

const WhatsAppButton = () => {
  const [showPrompt, setShowPrompt] = useState(false);
  const showPromptRef = useRef(showPrompt);
  showPromptRef.current = showPrompt;

  // Si el mensaje se ha abierto solo (por el aviso de entrada o por
  // inactividad), quitar el cursor NO lo cierra: hay que usar la cruz. El
  // cierre al quitar el cursor solo se activa cuando lo abre el propio hover.
  const openedByHoverRef = useRef(false);

  // Aviso al entrar: siempre a los 7s de cargar la página, en cada visita
  // (sin guardar nada en sessionStorage que lo silencie después).
  useEffect(() => {
    const timer = window.setTimeout(() => {
      openedByHoverRef.current = false;
      setShowPrompt(true);
    }, PROMPT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  // Aviso por inactividad: además del anterior, si el usuario se queda 20s
  // sin tocar el ratón, el teclado ni la pantalla, reaparece. Cada
  // interacción reinicia la cuenta.
  useEffect(() => {
    let idleTimer: number;

    const resetIdleTimer = () => {
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => {
        if (!showPromptRef.current) {
          openedByHoverRef.current = false;
          setShowPrompt(true);
        }
      }, IDLE_DELAY_MS);
    };

    ACTIVITY_EVENTS.forEach((event) =>
      window.addEventListener(event, resetIdleTimer, { passive: true }),
    );
    resetIdleTimer();

    return () => {
      window.clearTimeout(idleTimer);
      ACTIVITY_EVENTS.forEach((event) => window.removeEventListener(event, resetIdleTimer));
    };
  }, []);

  const dismissPrompt = () => {
    openedByHoverRef.current = false;
    setShowPrompt(false);
  };

  // Cierre al quitar el cursor: solo se aplica cuando el propio hover fue
  // quien abrió la tarjeta. Un pequeño margen evita que se cierre al cruzar
  // el hueco entre el botón y la tarjeta.
  const closeTimerRef = useRef<number | undefined>(undefined);

  const cancelHoverClose = () => {
    window.clearTimeout(closeTimerRef.current);
  };

  const openOnHover = () => {
    cancelHoverClose();
    if (!showPromptRef.current) openedByHoverRef.current = true;
    setShowPrompt(true);
  };

  const scheduleHoverClose = () => {
    cancelHoverClose();
    if (!openedByHoverRef.current) return;
    closeTimerRef.current = window.setTimeout(() => setShowPrompt(false), 200);
  };

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

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
            onMouseEnter={cancelHoverClose}
            onMouseLeave={scheduleHoverClose}
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
              <Headset aria-hidden="true" className="mb-3 h-6 w-6 text-koob-gold" strokeWidth={1.75} />
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
        onMouseEnter={openOnHover}
        onMouseLeave={scheduleHoverClose}
        onFocus={openOnHover}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-black mix-blend-difference sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
      </a>
    </>
  );
};

export default WhatsAppButton;
