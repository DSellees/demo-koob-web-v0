import Reveal from '../components/Reveal';
import SweepArrowLink from '../components/SweepArrowLink';
import { insights } from '../data/insights';

/**
 * Franja fina que recomienda un artículo de Insights, con el mismo formato
 * horizontal que la franja de newsletter (texto a la izquierda, acción a la
 * derecha) pero en claro y mucho más compacta. Sin cifras: no muestra tiempo
 * de lectura. Si no se indica `slug`, recomienda el artículo más reciente.
 */
const InsightPromo = ({ slug }: { slug?: string }) => {
  const post =
    insights.find((p) => p.slug === slug) ??
    [...insights].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  if (!post) return null;

  return (
    <section aria-label="Lectura recomendada" className="overflow-hidden bg-koob-beige text-black">
      <div className="page-container">
        <div className="content-container">
          <div className="flex flex-col gap-5 py-9 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <Reveal className="max-w-2xl">
              <p className="type-module-label text-koob-gold-ink">
                Lectura recomendada · {post.category}
              </p>
              <p className="mt-3 text-[1.35rem] font-bold leading-tight tracking-[-0.025em] text-black">
                {post.title}
              </p>
            </Reveal>
            <Reveal delay={0.08} className="shrink-0">
              <SweepArrowLink
                to={`/insights/${post.slug}`}
                variant="light"
                ariaLabel={`Leer el artículo: ${post.title}`}
              >
                Leer el artículo
              </SweepArrowLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightPromo;
