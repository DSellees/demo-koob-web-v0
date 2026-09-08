interface InsightCoverProps {
  /** Semilla: mismo slug → misma composición. */
  slug: string;
  /** Etiqueta opcional sobreimpresa (categoría del post). */
  category?: string;
  /** Clases para el contenedor: controla proporción y tamaño (aspect-*, h-*). */
  className?: string;
}

const hash = (s: string) => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
};

/**
 * Portada visual generada para los posts del blog: composición plana con la
 * paleta de KOOB (beige, champán, negro) y el motivo de barras verticales del
 * logo. Determinista por `slug`, así cada post tiene una imagen estable y
 * distinta sin necesidad de ficheros.
 */
const InsightCover = ({ slug, category, className = '' }: InsightCoverProps) => {
  const h = hash(slug);
  const barCount = 6 + (h % 4); // 6–9 barras
  const panelX = 168 + ((h >> 2) % 5) * 10; // 168–208
  const ruleY = 116 + ((h >> 5) % 24); // 116–139

  const bars = Array.from({ length: barCount }, (_, i) => {
    const b = hash(`${slug}-${i}`);
    const height = 34 + (b % 92); // 34–125
    return height;
  });
  const barSlot = (panelX - 40) / barCount;
  const barW = Math.min(10, barSlot * 0.55);

  return (
    <div className={`relative overflow-hidden bg-koob-beige-strong ${className}`}>
      <svg
        viewBox="0 0 320 180"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label={category ? `Ilustración de ${category}` : 'Ilustración del artículo'}
      >
        {/* Panel champán a la derecha */}
        <rect x={panelX} y={0} width={320 - panelX} height={180} fill="#DCCEC2" />
        {/* Barras verticales (motivo del logo) */}
        {bars.map((height, i) => (
          <rect
            key={i}
            x={24 + i * barSlot}
            y={150 - height}
            width={barW}
            height={height}
            fill="#0C0C0C"
          />
        ))}
        {/* Filo horizontal */}
        <rect x={0} y={ruleY} width={320} height={1.5} fill="#0C0C0C" opacity={0.18} />
        {/* Punto de acento sobre el panel */}
        <rect x={panelX + 22} y={28} width={22} height={22} fill="#0C0C0C" />
      </svg>

      {category && (
        <span className="absolute bottom-3 left-4 type-caption uppercase tracking-[0.18em] text-koob-black/55">
          {category}
        </span>
      )}
    </div>
  );
};

export default InsightCover;
