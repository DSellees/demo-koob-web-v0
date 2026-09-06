import { motion } from 'framer-motion';
import { reveal, revealViewport } from '../lib/animations';

// Mensaje de KOOB al lector, en formato cita, como puente hacia el CTA
// "Cuéntanos tu reto". Vive en la columna derecha de Casos de éxito, encima
// del CTA negro.
const koobMessage = {
  statement: 'Si algo de esto te resulta familiar, no es casualidad.',
  support:
    'Antes de cualquier propuesta hay una conversación. Cuéntanos qué no funciona y te decimos si podemos ayudar.',
};

/** Cada elemento observa su propia visibilidad (ver "La Regla de la Animación Visible"). */
const KoobMessageCard = () => (
  <motion.article
    initial="hidden"
    whileInView="visible"
    viewport={revealViewport}
    variants={reveal}
    custom={0.06}
    className="grid-cell-light group flex flex-col justify-center bg-white p-9 transition-colors duration-300 hover:bg-koob-beige sm:p-10"
  >
    <span
      aria-hidden="true"
      className="mb-2 block font-bold leading-[0.6] text-koob-gold-ink text-[3.25rem]"
    >
      &ldquo;
    </span>
    <p className="text-[1.35rem] font-bold leading-snug tracking-[-0.025em] text-black">
      {koobMessage.statement}
    </p>
    <p className="mt-3.5 text-sm leading-relaxed text-koob-gray-500">
      {koobMessage.support}
    </p>
  </motion.article>
);

export default KoobMessageCard;
