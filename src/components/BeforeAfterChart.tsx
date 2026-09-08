import { useEffect, useRef, useState } from 'react';

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
  shown,
  instant,
}: {
  x: number;
  level: number;
  fill: string;
  delay: number;
  shown: boolean;
  instant: boolean;
}) => {
  const height = Math.max(4, level * MAX_H);
  return (
    <rect
      x={x}
      width={BAR_W}
      height={height}
      y={BASELINE - height}
      fill={fill}
      style={{
        transformBox: 'fill-box',
        transformOrigin: 'bottom',
        transform: shown ? 'scaleY(1)' : 'scaleY(0)',
        transition: instant
          ? 'none'
          : `transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
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
 * KOOB. Sin cifras: la lectura es la forma, no un número.
 *
 * Las barras crecen desde la base, escalonadas, cuando el gráfico entra en
 * pantalla (IntersectionObserver + transición CSS — funciona aunque el motor de
 * animación por JS esté en pausa). Red de seguridad: si el observador no
 * dispara, se muestran igualmente pasado un instante, así nunca quedan en blanco.
 */
const BeforeAfterChart = ({
  metrics,
  beforeLegend = 'Antes',
  afterLegend = 'Con KOOB',
  caption,
}: BeforeAfterChartProps) => {
  const width = metrics.length * GROUP;
  const ref = useRef<SVGSVGElement>(null);
  const [shown, setShown] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    // Red de seguridad: si la transición no ha podido reproducirse (p. ej. el
    // documento está oculto y el motor de animación pausado), forzar el estado
    // final sin transición para que nunca queden en blanco.
    const fallback = window.setTimeout(() => {
      setInstant(true);
      setShown(true);
    }, 1600);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <figure className="m-0">
      <div className="mb-3 flex flex-wrap gap-x-5 gap-y-1 text-xs">
        <Swatch className="bg-koob-gray-300">{beforeLegend}</Swatch>
        <Swatch className="bg-koob-black">{afterLegend}</Swatch>
      </div>

      <svg
        ref={ref}
        viewBox={`0 0 ${width} ${BASELINE + 4}`}
        className="w-full"
        role="img"
        aria-label={caption}
      >
        <line
          x1={0}
          y1={BASELINE}
          x2={width}
          y2={BASELINE}
          stroke="var(--line-light-strong)"
          strokeWidth={1}
        />
        {metrics.map((m, i) => {
          const cx = i * GROUP + GROUP / 2;
          return (
            <g key={m.label}>
              <Bar
                x={cx - BAR_W - 2}
                level={m.before}
                fill="#d1d1d1"
                delay={i * 0.09}
                shown={shown}
                instant={instant}
              />
              <Bar
                x={cx + 2}
                level={m.after}
                fill="#0c0c0c"
                delay={0.12 + i * 0.09}
                shown={shown}
                instant={instant}
              />
            </g>
          );
        })}
      </svg>

      <figcaption
        className="mt-2 grid gap-2 text-center"
        style={{ gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))` }}
      >
        {metrics.map((m) => (
          <span key={m.label} className="type-caption text-koob-gray-500">
            {m.label}
          </span>
        ))}
      </figcaption>
    </figure>
  );
};

export default BeforeAfterChart;
