import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { insights, categories } from '../data/insights';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? insights.filter((p) => p.category === activeCategory)
    : insights;

  return (
    <div className="page-root">
      <SeoMeta
        title="Insights — KOOB Advisory | Ideas para empresas en cambio"
        description="Reflexiones y análisis sobre transformación empresarial, liderazgo, cultura organizativa y gestión del cambio. El conocimiento de quienes lo han vivido desde dentro."
        url="https://koobadvisory.com/insights"
      />
      <Navigation />

      {/* Hero */}
      <section className="page-intro-space bg-black text-white">
        <div className="page-container">
          <div className="content-container-medium">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-4 text-sm font-medium uppercase tracking-wider text-koob-gold"
            >
              Insights KOOB
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="mb-6 text-4xl font-semibold leading-tight text-white lg:text-5xl xl:text-6xl"
            >
              Ideas para empresas en cambio
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-xl leading-relaxed text-gray-300"
            >
              Reflexiones y análisis sobre transformación, liderazgo, cultura y gestión
              desde la experiencia de quienes han estado en primera línea.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filtros por categoría */}
      <section className="border-hairline-light utility-bar-space sticky top-[72px] z-30 border-b bg-white">
        <div className="page-container">
          <div className="content-container">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
              <button
                onClick={() => setActiveCategory(null)}
                className={`flex-shrink-0 px-4 py-2 text-sm font-medium border transition-colors whitespace-nowrap ${
                  activeCategory === null
                    ? 'bg-black text-white border-black'
                    : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
                }`}
              >
                Todos
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium border transition-colors whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-black text-white border-black'
                      : 'border-gray-300 text-gray-600 hover:border-black hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid de artículos */}
      <section className="section-space-editorial">
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
                  className="border-hairline-light group overflow-hidden border transition-colors duration-300 hover:border-black"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-koob-beige group-hover:bg-gray-200 transition-colors duration-300">
                      <span className="text-xs text-gray-400 uppercase tracking-wider">{post.category}</span>
                    </div>
                  </div>

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
                      className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-koob-gold transition-colors"
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
