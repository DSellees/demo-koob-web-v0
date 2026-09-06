import { motion } from 'framer-motion';
import { reveal, revealViewport } from '../lib/animations';
import SweepArrowLink from '../components/SweepArrowLink';
import BeforeAfterChart from '../components/BeforeAfterChart';
import KoobMessageCard from '../components/KoobMessageCard';

// Casos anónimos destacados (del documento del cliente). Sin cifras: el impacto
// se cuenta en lenguaje natural y la mejora se ve en el gráfico, no escrita.
const featuredCases = [
  {
    sector: 'Servicios energéticos',
    kicker: 'Eficiencia operativa y organizativa',
    title: 'De la dependencia a procesos que se sostienen solos',
    summary:
      'Detrás de la facturación había una organización sostenida por personas, no por procesos: penalizaciones de un cliente clave, roles sin backup y finanzas sin visibilidad.',
    quote: 'No nos dijeron lo que queríamos oír, nos dijeron lo que pasaba. Llevábamos años sin saber si el negocio era rentable de verdad.',
    chartCaption:
      'Comparación del punto de partida y el potencial identificado tras la intervención de KOOB.',
    metrics: [
      { label: 'Rentabilidad', before: 0.5, after: 0.75 },
      { label: 'Confianza del cliente', before: 0.55, after: 0.72 },
      { label: 'Organización sólida', before: 0.45, after: 0.66 },
      { label: 'Pulso del negocio', before: 0.42, after: 0.63 },
    ],
  },
  {
    sector: 'Industria metalúrgica',
    kicker: 'Optimización de la producción',
    title: 'De las mermas y los retrabajos a más capacidad real',
    summary:
      'Retrabajos y mermas proporcionales a la producción: un techo real al crecimiento. Analizamos la cadena y el desempeño con indicadores para saber dónde intervenir.',
    quote: 'Pensábamos que era cuestión de apretar. KOOB nos demostró que el problema estaba en el proceso, no en la gente.',
    chartCaption:
      'Comparación de la situación de partida y la prevista al finalizar el proyecto con KOOB.',
    metrics: [
      { label: 'Producción', before: 0.6, after: 0.75 },
      { label: 'Calidad', before: 0.52, after: 0.72 },
      { label: 'Decisión en planta', before: 0.48, after: 0.68 },
      { label: 'Tiempo útil', before: 0.55, after: 0.72 },
    ],
  },
];

// Cada elemento observa su propia visibilidad — ver "La Regla de la Animación
// Visible" en src/lib/animations.ts.
const revealProps = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: revealViewport,
  variants: reveal,
} as const;

const CasosExito = () => (
  <section id="casos-exito" aria-label="Casos de éxito" className="section-space overflow-hidden bg-koob-beige text-black">
    <div className="page-container">
      <div className="content-container">

        <div className="mb-14 flex flex-wrap items-end justify-between gap-10">
          <motion.div {...revealProps} className="max-w-xl">
            <p className="type-eyebrow text-[0.95rem] text-koob-gold-ink mb-5">
              Casos de éxito
            </p>
            <h2 className="text-[clamp(2.35rem,3.25vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-black">
              Proyectos reales.<br />Impacto medible.
            </h2>
          </motion.div>
          <motion.p {...revealProps} custom={0.08} className="max-w-md text-base leading-relaxed text-koob-gray-500">
            Detrás de cada proyecto hay una empresa que hoy funciona distinto. Eso es lo único que nos interesa contar.
          </motion.p>
        </div>

        <div className="grid-frame-light grid grid-cols-1 lg:grid-cols-3">
          {featuredCases.map((item) => (
            <motion.article
              key={item.sector}
              {...revealProps}
              className="grid-cell-light flex flex-col bg-white p-8 lg:row-span-2"
            >
              <div className="mb-5 h-0.5 w-10 bg-koob-gold-ink" />
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-koob-gray-400">
                {item.kicker}
              </p>
              <h3 className="text-2xl font-bold leading-tight tracking-[-0.035em] text-black">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-koob-gray-500">
                {item.summary}
              </p>

              <p className="mt-5 border-l-2 border-koob-gold-ink pl-4 text-sm italic leading-relaxed text-koob-gray-500">
                «{item.quote}»
              </p>

              <div className="mt-auto pt-5">
                <BeforeAfterChart metrics={item.metrics} caption={item.chartCaption} />
              </div>
            </motion.article>
          ))}

          {/* Columna derecha: mensaje de KOOB + CTA */}
          <KoobMessageCard />

          <motion.div
            {...revealProps}
            custom={0.12}
            className="grid-cell-light flex flex-col justify-center gap-6 bg-black p-9 text-white sm:p-10"
          >
            <div className="h-0.5 w-10 bg-koob-gold" />
            <h3 className="text-[1.85rem] font-bold leading-[1.1] tracking-[-0.025em] text-white">
              ¿Tu empresa podría ser el próximo caso?
            </h3>
            <SweepArrowLink to="/contacto" variant="dark" className="self-start">
              Cuéntanos tu reto
            </SweepArrowLink>
          </motion.div>
        </div>

      </div>
    </div>
  </section>
);

export default CasosExito;
