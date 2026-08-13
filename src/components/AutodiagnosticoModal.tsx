import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const QUESTIONS = [
  {
    prompt: 'Pregunta 1',
    options: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
  },
  {
    prompt: 'Pregunta 2',
    options: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
  },
  {
    prompt: 'Pregunta 3',
    options: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
  },
  {
    prompt: 'Pregunta 4',
    options: ['Respuesta A', 'Respuesta B', 'Respuesta C'],
  },
];

const TOTAL_STEPS = QUESTIONS.length + 2; // preguntas + datos + confirmación

interface AutodiagnosticoModalProps {
  open: boolean;
  onClose: () => void;
}

const AutodiagnosticoModal = ({ open, onClose }: AutodiagnosticoModalProps) => {
  const [step, setStep] = useState(0);
  const [confirmingClose, setConfirmingClose] = useState(false);

  useEffect(() => {
    if (!open) {
      const timeout = setTimeout(() => {
        setStep(0);
        setConfirmingClose(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const hasProgress = step > 0 && step < TOTAL_STEPS - 1;

  const requestClose = () => {
    if (hasProgress) {
      setConfirmingClose(true);
    } else {
      onClose();
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') requestClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open, hasProgress]);

  const selectAnswer = () => {
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const isQuestionStep = step < QUESTIONS.length;
  const isDataStep = step === QUESTIONS.length;
  const isConfirmationStep = step === TOTAL_STEPS - 1;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70"
            onClick={requestClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="autodiagnostico-modal-title"
            className="relative flex w-full max-w-2xl flex-col border border-black bg-white p-8 sm:p-12"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={requestClose}
              aria-label="Cerrar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-black/50 transition-colors hover:text-black"
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>

            <p className="type-eyebrow text-[0.8rem] text-koob-gold-ink">
              Autodiagnóstico
            </p>

            <div className="mt-5 h-px w-full bg-black/10">
              <motion.div
                className="h-[3px] bg-koob-gold-ink"
                animate={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            <div className="mt-8 h-[27rem] sm:h-[26rem]">
              <AnimatePresence mode="wait">
                {confirmingClose && (
                  <motion.div
                    key="confirm-close-step"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col justify-center"
                  >
                    <h3
                      id="autodiagnostico-modal-title"
                      className="text-2xl font-bold leading-tight tracking-[-0.03em]"
                    >
                      ¿Salir del autodiagnóstico?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-koob-gray-700">
                      Perderás el progreso y no recibirás tu diagnóstico.
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        onClick={() => setConfirmingClose(false)}
                        className="bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
                      >
                        Seguir con el autodiagnóstico
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="border border-black/15 px-7 py-4 text-sm font-semibold text-black transition-colors hover:border-black"
                      >
                        Salir sin guardar
                      </button>
                    </div>
                  </motion.div>
                )}

                {!confirmingClose && isQuestionStep && (
                  <motion.div
                    key={`question-${step}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col justify-center"
                  >
                    <h3
                      id="autodiagnostico-modal-title"
                      className="text-2xl font-bold leading-tight tracking-[-0.03em]"
                    >
                      {QUESTIONS[step].prompt}
                    </h3>

                    <div className="mt-6 flex flex-col gap-3">
                      {QUESTIONS[step].options.map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => selectAnswer()}
                          className="group relative flex w-full items-center overflow-hidden border border-black/15 px-5 py-4 text-left text-base font-medium text-black transition-colors duration-300 hover:border-black hover:text-white"
                        >
                          <span className="absolute inset-0 origin-left scale-x-0 bg-black transition-transform duration-300 group-hover:scale-x-100" />
                          <span className="relative">{option}</span>
                        </button>
                      ))}
                    </div>

                    {step > 0 && (
                      <button
                        type="button"
                        onClick={() => setStep((s) => s - 1)}
                        className="type-inline-link mt-6 text-sm text-koob-gray-700 hover:text-black"
                      >
                        Volver
                      </button>
                    )}
                  </motion.div>
                )}

                {!confirmingClose && isDataStep && (
                  <motion.div
                    key="data-step"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col justify-center"
                  >
                    <h3
                      id="autodiagnostico-modal-title"
                      className="text-2xl font-bold leading-tight tracking-[-0.03em]"
                    >
                      Casi lo tenemos
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-koob-gray-700">
                      Déjanos tus datos para enviarte la lectura de tu diagnóstico.
                    </p>

                    <form
                      className="mt-6 flex flex-col gap-4"
                      onSubmit={(event) => {
                        event.preventDefault();
                        setStep((s) => s + 1);
                      }}
                    >
                      <div>
                        <label htmlFor="autodiag-nombre" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-koob-gray-700">
                          Nombre
                        </label>
                        <input
                          id="autodiag-nombre"
                          type="text"
                          required
                          className="w-full border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="autodiag-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-koob-gray-700">
                          Email
                        </label>
                        <input
                          id="autodiag-email"
                          type="email"
                          required
                          className="w-full border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                        />
                      </div>
                      <div>
                        <label htmlFor="autodiag-empresa" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.1em] text-koob-gray-700">
                          Empresa
                        </label>
                        <input
                          id="autodiag-empresa"
                          type="text"
                          className="w-full border border-black/15 px-4 py-3 text-black outline-none transition-colors focus:border-black"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-2 bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
                      >
                        Recibir mi diagnóstico
                      </button>
                    </form>

                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="type-inline-link mt-4 text-sm text-koob-gray-700 hover:text-black"
                    >
                      Volver
                    </button>
                  </motion.div>
                )}

                {isConfirmationStep && (
                  <motion.div
                    key="confirmation-step"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-full flex-col justify-center"
                  >
                    <h3
                      id="autodiagnostico-modal-title"
                      className="text-2xl font-bold leading-tight tracking-[-0.03em]"
                    >
                      Gracias
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-koob-gray-700">
                      Hemos recibido tus respuestas. En breve nos pondremos en contacto contigo con la lectura de tu diagnóstico.
                    </p>

                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-6 self-start bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-gray-900"
                    >
                      Cerrar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AutodiagnosticoModal;
