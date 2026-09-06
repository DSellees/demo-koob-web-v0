import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { reveal, revealViewport } from '../lib/animations';

interface RevealProps {
  children: ReactNode;
  /** Retardo en segundos, para encadenar varios elementos ya visibles. */
  delay?: number;
  /** Fracción del elemento que debe verse para disparar (0–1). Por defecto 0.25. */
  amount?: number;
  className?: string;
}

/**
 * Envoltorio de aparición con scroll. Cada <Reveal> observa SU PROPIA
 * visibilidad: la animación solo arranca cuando este elemento entra en pantalla.
 * Ver "La Regla de la Animación Visible" en src/lib/animations.ts.
 */
const Reveal = ({ children, delay = 0, amount, className }: RevealProps) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="visible"
    viewport={amount != null ? { once: false, amount, margin: '-100px 0px 0px 0px' } : revealViewport}
    custom={delay}
    variants={reveal}
  >
    {children}
  </motion.div>
);

export default Reveal;
