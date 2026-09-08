import { motion } from 'framer-motion';
import { EASE } from '../lib/animations';

/**
 * Aviso de validación de formulario con estilo KOOB. NO flota sobre el
 * contenido: ocupa su sitio en el flujo y anima la altura al aparecer/salir,
 * empujando lo que tiene debajo. Envolver siempre en <AnimatePresence>.
 */
const ValidationNote = ({ id, children }: { id?: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: 'auto', opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.2, ease: EASE }}
    className="overflow-hidden"
  >
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-2 bg-white/[0.06] px-3 py-2 text-xs leading-snug text-white/90"
    >
      <span
        aria-hidden="true"
        className="mt-px flex h-4 w-4 shrink-0 items-center justify-center bg-koob-gold text-[0.65rem] font-bold text-koob-black"
      >
        !
      </span>
      <span>{children}</span>
    </p>
  </motion.div>
);

export default ValidationNote;
