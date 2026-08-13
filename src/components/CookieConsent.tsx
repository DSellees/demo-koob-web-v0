import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const STORAGE_KEY = 'koob-cookie-consent';
export const OPEN_PREFERENCES_EVENT = 'koob:open-cookie-preferences';

type CategoryKey = 'functional' | 'analytics' | 'performance' | 'advertising';

interface ConsentPreferences {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  performance: boolean;
  advertising: boolean;
}

interface StoredConsent {
  preferences: ConsentPreferences;
  updatedAt: string;
}

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  performance: false,
  advertising: false,
};

const categories: { key: CategoryKey; title: string; description: string }[] = [
  {
    key: 'functional',
    title: 'Funcional',
    description: 'Permiten funciones adicionales, como reproducir vídeos incrustados o compartir contenido en redes sociales.',
  },
  {
    key: 'analytics',
    title: 'Analítica',
    description: 'Nos ayudan a entender cómo se usa el sitio, de forma agregada, para poder mejorarlo.',
  },
  {
    key: 'performance',
    title: 'Rendimiento',
    description: 'Miden indicadores de rendimiento clave del sitio para ayudarnos a ofrecer una mejor experiencia.',
  },
  {
    key: 'advertising',
    title: 'Publicidad',
    description: 'Se usarían para mostrar anuncios relevantes. Actualmente no mostramos publicidad en este sitio.',
  },
];

const readStoredConsent = (): StoredConsent | null => {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredConsent) : null;
  } catch {
    return null;
  }
};

const CookieConsent = () => {
  const [initialConsent] = useState(readStoredConsent);
  const [visible, setVisible] = useState(initialConsent === null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(
    initialConsent?.preferences ?? defaultPreferences,
  );

  useEffect(() => {
    const onOpenPreferences = () => {
      const current = readStoredConsent();
      if (current) setPreferences(current.preferences);
      setVisible(true);
      setShowPreferences(true);
    };
    window.addEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, onOpenPreferences);
  }, []);

  const persist = (next: ConsentPreferences) => {
    const payload: StoredConsent = { preferences: next, updatedAt: new Date().toISOString() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setPreferences(next);
    setVisible(false);
    setShowPreferences(false);
  };

  const acceptAll = () => {
    persist({ necessary: true, functional: true, analytics: true, performance: true, advertising: true });
  };

  const rejectAll = () => {
    persist({ ...defaultPreferences });
  };

  const savePreferences = () => {
    persist(preferences);
  };

  const toggleCategory = (key: CategoryKey) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-label="Preferencias de cookies"
          className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/10 bg-white"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="page-container max-h-[80vh] overflow-y-auto py-6">
            <div className="content-container">
              <h2 className="text-lg font-bold tracking-[-0.01em] text-black">
                Valoramos tu privacidad
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-koob-gray-700">
                Usamos cookies necesarias para que el sitio funcione y, solo con tu consentimiento, cookies opcionales para mejorar tu experiencia. Puedes aceptarlas, rechazarlas o personalizarlas. Más información en nuestra{' '}
                <Link to="/cookies" className="underline underline-offset-2 hover:text-black">
                  política de cookies
                </Link>
                .
              </p>

              <AnimatePresence initial={false}>
                {showPreferences && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 divide-y divide-black/10 border-y border-black/10">
                      <div className="flex items-center justify-between gap-4 py-4">
                        <div>
                          <p className="text-sm font-semibold text-black">Necesaria</p>
                          <p className="mt-1 max-w-xl text-xs leading-relaxed text-koob-gray-500">
                            Imprescindibles para el funcionamiento básico del sitio. No pueden desactivarse.
                          </p>
                        </div>
                        <span className="type-module-label shrink-0 text-koob-gold-ink">Siempre activa</span>
                      </div>

                      {categories.map((category) => (
                        <div key={category.key} className="flex items-center justify-between gap-4 py-4">
                          <div>
                            <p className="text-sm font-semibold text-black">{category.title}</p>
                            <p className="mt-1 max-w-xl text-xs leading-relaxed text-koob-gray-500">
                              {category.description}
                            </p>
                          </div>
                          <button
                            type="button"
                            role="switch"
                            aria-checked={preferences[category.key]}
                            aria-label={category.title}
                            onClick={() => toggleCategory(category.key)}
                            className={`relative h-6 w-11 shrink-0 border transition-colors duration-200 ${
                              preferences[category.key] ? 'border-black bg-black' : 'border-black/20 bg-white'
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 h-4 w-4 bg-white transition-transform duration-200 ${
                                preferences[category.key] ? 'translate-x-[1.375rem]' : 'translate-x-0.5'
                              } ${preferences[category.key] ? '' : 'border border-black/20'}`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <button
                  type="button"
                  onClick={() => setShowPreferences((s) => !s)}
                  className="order-3 text-sm font-semibold text-koob-gray-700 underline underline-offset-2 hover:text-black sm:order-1 sm:mr-auto"
                >
                  {showPreferences ? 'Ocultar opciones' : 'Personalizar'}
                </button>

                {showPreferences ? (
                  <button
                    type="button"
                    onClick={savePreferences}
                    className="order-1 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-koob-gray-900 sm:order-2"
                  >
                    Guardar mis preferencias
                  </button>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={rejectAll}
                      className="order-1 border border-black/20 px-6 py-3 text-sm font-semibold text-black transition-colors duration-200 hover:border-black sm:order-2"
                    >
                      Rechazar todo
                    </button>
                    <button
                      type="button"
                      onClick={acceptAll}
                      className="order-2 bg-black px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-koob-gray-900 sm:order-3"
                    >
                      Aceptar todo
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
