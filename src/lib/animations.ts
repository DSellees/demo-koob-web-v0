import type { Variants } from 'framer-motion';

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * La Regla de la Animación Visible
 * --------------------------------
 * Ningún elemento se anima si el usuario no lo tiene en pantalla. Cada elemento
 * que entra con scroll observa SU PROPIA visibilidad — nunca un contenedor que
 * dispara a los hijos a la vez (eso anima cosas que aún están bajo el fold).
 *
 * En la práctica:
 *  - Usa el componente <Reveal> (src/components/Reveal.tsx), o
 *  - pon `initial="hidden" whileInView="visible" viewport={revealViewport}
 *    variants={reveal}` en CADA `motion.*` que deba aparecer con scroll.
 *  - Para una cascada, pasa `custom={<segundos>}` como retardo por elemento
 *    (solo secuencia elementos que ya están visibles; no adelanta nada).
 *  - `staggerContainer` / `staggerItem` quedan reservados a bloques que SIEMPRE
 *    entran completos en el viewport (p. ej. la cabecera del hero al cargar).
 *
 * `once: false` → la animación se DESHACE al salir de pantalla y se rehace al
 * volver a entrar: hay movimiento al bajar y al subir. En `prefers-reduced-motion`
 * el CSS lo neutraliza igualmente.
 */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: EASE, delay },
  }),
};

/**
 * Cada elemento se anima al entrar y se deshace al salir (ambas direcciones).
 * `margin` recorta la zona de detección por arriba la altura de la navbar fija
 * (`--layout-nav-height` ≈ 6.2rem): un elemento tapado por la navbar NO cuenta
 * como visible, así que su animación inversa se ve antes de esconderse debajo.
 */
export const revealViewport = { once: false, amount: 0.25, margin: '-100px 0px 0px 0px' } as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.55, ease: 'easeOut' } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const viewportOnce = { once: true, amount: 0.15 } as const;
