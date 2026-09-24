import { insights } from '../data/insights';
import PostCarousel from '../components/PostCarousel';
import Reveal from '../components/Reveal';
import SweepArrowLink from '../components/SweepArrowLink';

// Todos los artículos, del más reciente al más antiguo: con dos y media tarjetas
// visibles hay recorrido de sobra para que la tira avance sola.
const latest = [...insights].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

/**
 * Insights en la home: tira de artículos con dos tarjetas y media visibles y
 * avance automático (se pausa al interactuar). El titular invita a leer: admite
 * un "nos habría venido bien" propio en vez de señalar al lector.
 */
const InsightsTeaser = () => (
  <section id="insights" className="section-space-editorial overflow-hidden bg-koob-beige" aria-labelledby="insights-title">
    <div className="page-container">
      <div className="content-container">
        <div className="section-heading-row">
          <Reveal>
            <p className="type-eyebrow mb-5 text-koob-gold-ink">Insights</p>
            <h2 id="insights-title" className="type-section-title text-black">
              Lo que nos gustaría<br className="hidden lg:block" /> haber leído antes
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <SweepArrowLink to="/insights" variant="light" className="self-start md:self-auto">
              Ver todos los insights
            </SweepArrowLink>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <PostCarousel posts={latest} visible={2.5} autoplayMs={4500} />
        </Reveal>
      </div>
    </div>
  </section>
);

export default InsightsTeaser;
