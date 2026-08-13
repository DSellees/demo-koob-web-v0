import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insights, type InsightPost } from '../data/insights';

const latest = [...insights]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const coverLabels = ['Transformación', 'Personas', 'Cultura'];

type VariantLabelProps = {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
};

const VariantLabel = ({ eyebrow, title, description, dark = false }: VariantLabelProps) => (
  <div
    className={`mb-10 flex flex-col gap-3 border-b pb-5 md:flex-row md:items-end md:justify-between ${
      dark ? 'border-white/15' : 'border-black/15'
    }`}
  >
    <div>
      <p className={`type-micro-label mb-2 ${dark ? 'text-koob-gold' : 'text-koob-gold-ink'}`}>
        {eyebrow}
      </p>
      <h3 className={`text-xl font-semibold tracking-tight ${dark ? 'text-white' : 'text-black'}`}>
        {title}
      </h3>
    </div>
    <p className={`max-w-md text-sm leading-relaxed ${dark ? 'text-gray-400' : 'text-koob-gray-500'}`}>
      {description}
    </p>
  </div>
);

type SectionHeadingProps = {
  titleId: string;
  dark?: boolean;
};

const SectionHeading = ({ titleId, dark = false }: SectionHeadingProps) => (
  <div className="section-heading-row">
    <div>
      <p className={`type-eyebrow mb-4 ${dark ? 'text-koob-gold' : 'text-koob-gold-ink'}`}>
        Insights
      </p>
      <h3 id={titleId} className={`type-section-title ${dark ? 'text-white' : 'text-black'}`}>
        Seguimos pensando en esto
      </h3>
    </div>
    <Link
      to="/insights"
      className={`inline-flex min-h-11 items-center gap-2 self-start border-b pb-1 text-sm transition-colors md:self-auto ${
        dark
          ? 'border-white/25 text-gray-300 hover:border-white hover:text-white'
          : 'border-black/20 text-koob-gray-500 hover:border-black hover:text-black'
      }`}
    >
      Ver todos los insights
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  </div>
);

type PostMetaProps = {
  post: InsightPost;
  dark?: boolean;
};

const PostMeta = ({ post, dark = false }: PostMetaProps) => (
  <div className="mb-4 flex flex-wrap items-center gap-3">
    <span
      className={`text-xs font-semibold uppercase tracking-[0.16em] ${
        dark ? 'text-koob-gold' : 'text-koob-gold-ink'
      }`}
    >
      {post.category}
    </span>
    <span className={`h-3 w-px ${dark ? 'bg-white/20' : 'bg-black/20'}`} aria-hidden="true" />
    <span className={`flex items-center gap-1.5 text-xs ${dark ? 'text-gray-400' : 'text-koob-gray-500'}`}>
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      {post.readTime}
    </span>
  </div>
);

type EditorialCoverProps = {
  index: number;
  compact?: boolean;
  darkFrame?: boolean;
};

const EditorialCover = ({ index, compact = false, darkFrame = false }: EditorialCoverProps) => {
  const baseClass = `relative isolate overflow-hidden ${compact ? 'min-h-36 md:min-h-full' : 'min-h-52'} ${
    darkFrame ? 'bg-koob-beige text-black' : index === 1 ? 'bg-koob-beige-strong text-black' : 'bg-black text-white'
  }`;

  if (index === 1) {
    return (
      <div className={baseClass} aria-hidden="true">
        <div className="absolute inset-x-6 top-6 flex items-center justify-between">
          <span className="type-micro-label">KOOB / PERSPECTIVA</span>
          <span className="h-2 w-2 bg-koob-gold-ink" />
        </div>
        <div className="absolute inset-x-6 bottom-6 top-16 border border-black/20">
          <div className="absolute inset-y-0 left-1/3 w-px bg-black/15" />
          <div className="absolute inset-y-0 right-1/3 w-px bg-black/15" />
          <div className="absolute left-1/3 top-1/2 h-px w-1/3 bg-black" />
          <div className="absolute left-[calc(66.666%-0.25rem)] top-[calc(50%-0.25rem)] h-2 w-2 bg-black" />
        </div>
        <span className="absolute bottom-9 left-9 text-sm font-medium">{coverLabels[index]}</span>
      </div>
    );
  }

  if (index === 2) {
    const gridCellClass = darkFrame ? 'border-black/20' : 'border-white/25';
    const activeGridCellClass = darkFrame
      ? 'border-koob-gold-ink bg-koob-gold-ink'
      : 'border-koob-gold bg-koob-gold';

    return (
      <div className={baseClass} aria-hidden="true">
        <div className="absolute inset-x-6 top-6 flex items-center justify-between">
          <span className="type-micro-label">KOOB / PERSPECTIVA</span>
          <span className="h-px w-12 bg-current opacity-40" />
        </div>
        <div className="absolute bottom-8 left-7 grid grid-cols-4 gap-2">
          {Array.from({ length: 12 }).map((_, itemIndex) => (
            <span
              key={itemIndex}
              className={`h-4 w-4 border ${itemIndex === 6 ? activeGridCellClass : gridCellClass}`}
            />
          ))}
        </div>
        <span className="absolute bottom-9 right-7 text-sm font-medium">{coverLabels[index]}</span>
      </div>
    );
  }

  return (
    <div className={baseClass} aria-hidden="true">
      <div className="absolute inset-x-6 top-6 flex items-center justify-between">
        <span className="type-micro-label">KOOB / PERSPECTIVA</span>
        <span className="h-2 w-2 bg-koob-gold" />
      </div>
      <div className={`absolute bottom-7 left-7 h-24 w-24 border ${darkFrame ? 'border-black/20' : 'border-white/25'}`}>
        <div
          className={`absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 border ${
            darkFrame ? 'border-koob-gold-ink' : 'border-koob-gold'
          }`}
        />
        <div
          className={`absolute left-1/2 top-1/2 h-px w-36 -translate-x-1/2 ${
            darkFrame ? 'bg-black/45' : 'bg-white/45'
          }`}
        />
      </div>
      <span className="absolute bottom-9 right-7 text-sm font-medium">{coverLabels[index]}</span>
    </div>
  );
};

const HistoricalVariant = () => (
  <section className="section-space-editorial bg-white" aria-labelledby="insights-historical-title">
    <div className="page-container">
      <div className="content-container">
        <VariantLabel
          eyebrow="Variante histórica"
          title="Tres artículos equivalentes"
          description="Recupera la versión anterior: mismo peso, mismo formato y lectura uniforme."
        />
        <SectionHeading titleId="insights-historical-title" />

        <div className="grid gap-grid md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="group flex min-h-80 flex-col border border-hairline-light bg-white module-padding transition-colors duration-200 hover:border-black"
            >
              <div className="mb-6 h-px w-9 bg-koob-gold-ink transition-[width] duration-200 group-hover:w-14" />
              <PostMeta post={post} />
              <h4 className="type-card-heading mb-4 text-black">{post.title}</h4>
              <p className="type-body-small mb-8 text-koob-gray-500">{post.excerpt}</p>
              <Link
                to={`/insights/${post.slug}`}
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-black transition-colors hover:text-koob-gold-ink"
              >
                Leer más
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const EditorialVariant = () => {
  const [featured, ...secondary] = latest;

  if (!featured) return null;

  return (
    <section className="section-space-editorial bg-koob-beige" aria-labelledby="insights-editorial-title">
      <div className="page-container">
        <div className="content-container">
          <VariantLabel
            eyebrow="Variante editorial"
            title="Una idea principal y dos lecturas complementarias"
            description="Da prioridad al contenido más relevante sin ocultar el resto."
          />
          <SectionHeading titleId="insights-editorial-title" />

          <div className="grid-frame-light grid md:grid-cols-2 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,.85fr)] lg:grid-rows-2">
            <article className="grid-cell-light group flex flex-col md:col-span-2 lg:col-span-1 lg:row-span-2">
              <EditorialCover index={0} />
              <div className="flex flex-1 flex-col module-padding-large">
                <PostMeta post={featured} />
                <h4 className="mb-4 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-black lg:text-4xl">
                  {featured.title}
                </h4>
                <p className="type-card-body mb-7 max-w-2xl text-koob-gray-500">{featured.excerpt}</p>
                <Link
                  to={`/insights/${featured.slug}`}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 self-start border-b border-black pb-1 text-sm font-semibold text-black"
                >
                  Leer el insight
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>

            {secondary.map((post, index) => (
              <article
                key={post.slug}
                className="grid-cell-light group flex min-h-56 flex-col module-padding-compact transition-colors duration-200 hover:bg-white"
              >
                <PostMeta post={post} />
                <h4 className="type-card-heading mb-5 text-black">{post.title}</h4>
                <Link
                  to={`/insights/${post.slug}`}
                  className="mt-auto inline-flex min-h-11 items-center justify-between gap-4 border-t border-black/15 pt-4 text-sm font-semibold text-black"
                  aria-label={`Leer ${post.title}`}
                >
                  <span>{index === 0 ? 'Explorar RRHH estratégico' : 'Explorar cultura organizativa'}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HorizontalVariant = () => (
  <section className="section-space-editorial bg-black text-white" aria-labelledby="insights-horizontal-title">
    <div className="page-container">
      <div className="content-container">
        <VariantLabel
          eyebrow="Variante horizontal"
          title="Tres bandas editoriales para una lectura rápida"
          description="Más visual, más escaneable y con una entrada clara a cada tema."
          dark
        />
        <SectionHeading titleId="insights-horizontal-title" dark />

        <div className="divide-hairline-dark border-y border-white/15 divide-y">
          {latest.map((post, index) => (
            <Link
              key={post.slug}
              to={`/insights/${post.slug}`}
              className="group grid min-h-44 transition-colors duration-200 hover:bg-white/[0.04] md:grid-cols-[minmax(12rem,.72fr)_minmax(0,1.45fr)_4rem]"
            >
              <EditorialCover index={index} compact darkFrame />
              <div className="flex flex-col justify-center px-6 py-7 md:px-10">
                <PostMeta post={post} dark />
                <h4 className="type-card-heading-large mb-3 max-w-2xl text-white">{post.title}</h4>
                <p className="type-body-small max-w-2xl text-gray-400">{post.excerpt}</p>
              </div>
              <div className="hidden items-center justify-center border-l border-white/15 md:flex">
                <ArrowRight
                  className="h-5 w-5 text-koob-gold transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const InsightsVariants = () => (
  <div
    id="insights-variants"
    className="scroll-mt-24 border-t border-hairline-strong"
    aria-label="Variantes comparativas de la sección de Insights"
  >
    <section className="bg-koob-beige-strong py-10">
      <div className="page-container">
        <div className="content-container flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="type-eyebrow mb-3 text-koob-gold-ink">Comparativa de diseño</p>
            <h2 className="type-section-title-compact max-w-2xl text-black">
              Tres alternativas para la sección de Insights
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-koob-gray-500">
            Son propuestas temporales para comparar. Cuando elijamos una, retiraremos las otras dos y la sección actual.
          </p>
        </div>
      </div>
    </section>

    <HistoricalVariant />
    <EditorialVariant />
    <HorizontalVariant />
  </div>
);

export default InsightsVariants;
