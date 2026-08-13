import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { insights } from '../data/insights';
import { staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const latest = [...insights]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3);

const InsightsTeaser = () => {
  const [featured, ...rest] = latest;

  return (
    <section id="insights" className="py-24 lg:py-36 bg-koob-beige">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold-ink uppercase tracking-widest mb-4">
                Insights
              </motion.p>
              <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Seguimos pensando en esto
              </motion.h2>
            </div>
            <motion.div variants={staggerItem} className="lg:text-right">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-sm text-koob-gray-500 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
              >
                Ver todos los insights
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Fila de artículos recientes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="grid gap-4 lg:grid-cols-[1.4fr_1fr_1fr] lg:items-start"
          >
            {featured && (
              <motion.article
                key={featured.slug}
                variants={staggerItem}
                className="group flex flex-col bg-white border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="aspect-square bg-white border-b border-gray-200" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-8 h-px bg-koob-gold-ink mb-4 group-hover:w-12 transition-all duration-300" />
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-koob-gold-ink uppercase tracking-wider">
                      {featured.category}
                    </span>
                    <span className="w-px h-3 bg-gray-300" />
                    <span className="flex items-center gap-1 text-xs text-koob-gray-500">
                      <Clock className="w-3 h-3" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2 leading-snug group-hover:text-gray-700 transition-colors">
                    {featured.title}
                  </h3>
                  <p className="text-koob-gray-700 text-sm leading-relaxed mb-4">
                    {featured.excerpt}
                  </p>
                  <Link
                    to={`/insights/${featured.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-koob-gold-ink transition-colors"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            )}

            {rest.map((post) => (
              <motion.article
                key={post.slug}
                variants={staggerItem}
                className="group flex flex-col bg-white border border-gray-200 hover:border-black transition-colors duration-300"
              >
                <div className="aspect-square bg-white border-b border-gray-200" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-koob-gold-ink uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="w-px h-3 bg-gray-300" />
                    <span className="flex items-center gap-1 text-xs text-koob-gray-500">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-black mb-3 leading-snug group-hover:text-gray-700 transition-colors">
                    {post.title}
                  </h3>
                  <Link
                    to={`/insights/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-black group-hover:text-koob-gold-ink transition-colors"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InsightsTeaser;
