import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { insights } from '../data/insights';
import SweepArrowLink from '../components/SweepArrowLink';

const latest = [...insights]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const InsightsTeaser = () => (
  <section id="insights" className="section-space-editorial bg-koob-beige" aria-labelledby="insights-title">
    <div className="page-container">
      <div className="content-container">
        <div className="section-heading-row">
          <div>
            <p className="type-eyebrow mb-4 text-koob-gold-ink">Insights</p>
            <h2 id="insights-title" className="type-section-title text-black">
              Seguimos pensando en esto
            </h2>
          </div>
          <SweepArrowLink to="/insights" variant="light" className="self-start md:self-auto">
            Ver todos los insights
          </SweepArrowLink>
        </div>

        <div className="grid gap-grid md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr">
          {latest.map((post) => (
            <article
              key={post.slug}
              className="group flex min-h-80 flex-col border border-hairline-light bg-white module-padding transition-colors duration-200 hover:border-black"
            >
              <div className="mb-6 h-px w-9 bg-koob-gold-ink transition-[width] duration-200 group-hover:w-14" />
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-koob-gold-ink">
                  {post.category}
                </span>
                <span className="h-3 w-px bg-black/20" aria-hidden="true" />
                <span className="flex items-center gap-1.5 text-xs text-koob-gray-500">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
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

export default InsightsTeaser;
