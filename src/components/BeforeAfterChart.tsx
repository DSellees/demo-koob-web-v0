import { motion } from 'framer-motion';
import { revealViewport, EASE } from '../lib/animations';

export interface BeforeAfterMetric {
  /** Qué mide esta barra (se muestra debajo del grupo). */
  label: string;
  /** Nivel "antes", de 0 a 1. */
  before: number;
  /** Nivel "después", de 0 a 1. Siempre mayor que `before`. */
  after: number;
}

interface BeforeAfterChartProps {
  metrics: BeforeAfterMetric[];
  beforeLegend?: string;
  afterLegend?: string;
  /** Solo para lectores de pantalla; no se muestra. */
  caption: string;
}

const GROUP = 56;
const BASELINE = 58;
const MAX_H = 50;
const BAR_W = 16;

const Bar = ({
  x,
  level,
  fill,
  delay,
}: {
  x: number;
  level: number;
  fill: string;
  delay: number;
}) => {
  const height = Math.max(4, level * MAX_H);
  return (
    <motion.rect
      x={x}
      width={BAR_W}
      fill={fill}
      initial={{ height: 0, y: BASELINE }}
      whileInView={{ height, y: BASELINE - height }}
      viewport={revealViewport}
      transition={{ duration: 0.8, ease: EASE, delay }}
    />
  );
};

const Swatch = ({ className, children }: { className: string; children: string }) => (
  <span className="inline-flex items-center gap-2 text-koob-gray-500">
    <span className={`h-2.5 w-2.5 shrink-0 ${className}`} aria-hidden="true" />
    {children}
  </span>
);

/**
 * Gráfico "antes / después" agrupado: por cada aspecto, una barra gris (antes) y
 * una negra (después), siempre más alta — la mejora que deja la intervención de
 * KOOB. Sin cifras: la lectura es la forma, no un número. Se anima al entrar y se
 * deshace al salir (ver "La Regla de la Animación Visible" en lib/animations.ts).
 */
const BeforeAfterChart = ({
  metrics,
  beforeLegend = 'Antes',
  afterLegend = 'Con KOOB',
  caption,
}: BeforeAfterChartProps) => {
  const width = metrics.length * GROUP;

  return (
    <figure className="m-0">
      <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
        <Swatch className="bg-koob-gray-300">{beforeLegend}</Swatch>
        <Swatch className="bg-koob-black">{afterLegend}</Swatch>
      </div>

      <svg
        viewBox={`0 0 ${width} ${BASELINE + 4}`}
        className="w-full"
        role="img"
        aria-label={caption}
      >
        <line x1={0} y1={BASELINE} x2={width} y2={BASELINE} stroke="var(--line-light-strong)" strokeWidth={1} />
        {metrics.map((m, i) => {
          const cx = i * GROUP + GROUP / 2;
          return (
            <g key={m.label}>
              <Bar x={cx - BAR_W - 2} level={m.before} fill="#d1d1d1" delay={i * 0.07} />
              <Bar x={cx + 2} level={m.after} fill="#0c0c0c" delay={0.3 + i * 0.07} />
            </g>
          );
        })}
      </svg>

      <figcaption
        className="mt-2 grid gap-2 text-center"
        style={{ gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))` }}
      >
        {metrics.map((m) => (
          <span key={m.label} className="text-[0.7rem] leading-tight text-koob-gray-500">
            {m.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
};

export default BeforeAfterChart;
