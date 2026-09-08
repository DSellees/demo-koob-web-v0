import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { insights, categories } from '../data/insights';
import InsightCover from '../components/InsightCover';
import PostCover from '../components/PostCover';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const formatDate = (iso: string) =>
  new Date(iso)
    .toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    .replace('.', '')
    .toUpperCase();

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Arrastrar la barra de filtros con el ratón (no hay scrollbar visible).
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.button !== 0) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!drag.current.down || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) {
      drag.current.moved = true;
      el.setPointerCapture(e.pointerId);
    }
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
  };
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const filtered = activeCategory
    ? insights.filter((p) => p.category === activeCategory)
    : insights;

  const byDate = [...insights].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = byDate[0];
  const highlights = byDate.slice(1, 4);

  return (
    <div className="page-root">
      <SeoMeta
        title="Insights — KOOB Advisory | Ideas para empresas en cambio"
        description="Reflexiones y análisis sobre transformación empresarial, liderazgo, cultura organizativa y gestión del cambio. El conocimiento de quienes lo han vivido desde dentro."
        url="https://koobadvisory.com/insights"
      />
      <Navigation />

      {/* Portada de Insights: destacado + últimos */}
      <section className="page-intro-space-article bg-koob-beige !pb-10">
        <div className="page-container">
          <div className="content-container">
            <h1 className="type-eyebrow text-koob-gold-ink">Insights KOOB</h1>

            {/* Fila de últimos artículos */}
            <div className="border-hairline-light mt-8 grid grid-cols-1 divide-y divide-[color:var(--line-light)] border-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {highlights.map((post) => (
                <Link
                  key={post.slug}
                  to={`/insights/${post.slug}`}
                  className="group flex gap-4 py-6 sm:px-6 sm:py-7 sm:first:pl-0 sm:last:pr-0"
                >
                  <InsightCover
                    slug={post.slug}
                    className="aspect-square w-20 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="type-caption text-koob-gray-400">
                      {formatDate(post.date)} · <span className="text-koob-gold-ink">{post.category}</span>
                    </p>
                    <h2 className="mt-1.5 text-[0.95rem] font-bold leading-snug tracking-[-0.02em] text-koob-black transition-colors group-hover:text-koob-gold-ink">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>

            {/* Artículo destacado */}
            <Link
              to={`/insights/${featured.slug}`}
              className="group relative mt-4 block aspect-[16/10] overflow-hidden bg-koob-black sm:aspect-[16/7]"
            >
              <PostCover
                slug={featured.slug}
                image={featured.image}
                alt={featured.title}
                eager
                className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-koob-black via-koob-black/40 to-transparent" />
              <span className="absolute left-5 top-5 bg-koob-white px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-koob-black">
                {featured.category}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <p className="type-caption text-white/70">
                  {formatDate(featured.date)} · POR EL EQUIPO DE KOOB
                </p>
                <h2 className="mt-2 max-w-2xl text-balance text-[clamp(1.5rem,3vw,2.4rem)] font-bold leading-tight tracking-[-0.03em] text-white">
                  {featured.title}
                </h2>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] motion-reduce:transition-none">
                  <p className="overflow-hidden text-white/80 type-body-small [transition:margin_300ms_ease-out] group-hover:mt-3 motion-reduce:transition-none">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Filtros por categoría — ya sobre el fondo blanco del listado */}
      <section className="sticky top-[72px] z-30 bg-koob-white py-4">
        <div className="page-container">
          <div className="content-container">
            <div
              ref={scrollRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerLeave={endDrag}
              onClickCapture={onClickCapture}
              className="scrollbar-hide flex cursor-grab gap-2 overflow-x-auto overscroll-x-contain pb-1 select-none active:cursor-grabbing"
            >
              {[null, ...categories].map((cat) => {
                const active = activeCategory === cat;
                return (
                  <button
                    key={cat ?? 'todos'}
                    onClick={() => setActiveCategory(active ? null : cat)}
                    className={`flex-shrink-0 whitespace-nowrap border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? 'border-koob-black bg-koob-black text-white'
                        : 'border-koob-gray-300 text-koob-gray-500 hover:border-koob-black hover:text-koob-black'
                    }`}
                  >
                    {cat ?? 'Todos'}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="section-space-editorial !pt-8 lg:!pt-10">
        <div className="page-container">
          <div className="content-container">
            <motion.div
              key={activeCategory}
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((post) => (
                <motion.article
                  key={post.slug}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="border-hairline-light group relative overflow-hidden border transition-colors duration-300 hover:border-black"
                >
                  <InsightCover
                    slug={post.slug}
                    category={post.category}
                    className="aspect-[16/9]"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-koob-gold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="w-px h-3 bg-gray-300" />
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-semibold text-black mb-3 leading-snug group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/insights/${post.slug}`}
                      aria-label={`Leer: ${post.title}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-black transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-koob-gold"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 text-gray-400"
              >
                No hay artículos en esta categoría todavía.
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="page-container">
          <div className="content-container-medium text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
            >
              <motion.h2 variants={staggerItem} className="text-3xl lg:text-4xl font-semibold mb-6">
                ¿Alguno de estos temas resuena con tu empresa?
              </motion.h2>
              <motion.p variants={staggerItem} className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                Hablemos. Una conversación sin compromiso puede ser el primer paso.
              </motion.p>
              <motion.div variants={staggerItem}>
                <Link
                  to="/contacto"
                  className="group inline-flex min-h-14 items-center gap-2 bg-white px-7 py-4 text-sm font-semibold tracking-[0.01em] text-black transition-[background-color,transform] duration-200 hover:scale-[1.03] hover:bg-white/85 active:scale-[0.98]"
                >
                  Hablar con KOOB
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Insights;
