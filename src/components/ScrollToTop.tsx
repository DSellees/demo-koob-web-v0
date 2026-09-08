import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Al cambiar de ruta, lleva la vista al principio de la página.
 * Respeta la navegación con ancla (#seccion) y el botón atrás/adelante.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
