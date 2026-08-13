import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Clock } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import { insights } from '../data/insights';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const InsightPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = insights.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/insights" replace />;

  const related = insights.filter(
    (p) => post.related.includes(p.slug) && p.slug !== post.slug
  );

  const paragraphs = post.content
    .trim()
    .split('\n')
    .filter((line) => line.trim() !== '');

  return (
    <div className="page-root">
      <SeoMeta
        title={`${post.title} — KOOB Insights`}
        description={post.excerpt}
        url={`https://koobadvisory.com/insights/${post.slug}`}
      />
      <Navigation variant="dark" />

      {/* Hero del artículo */}
      <section className="page-intro-space-article bg-koob-beige">
        <div className="page-container">
          <div className="content-container-narrow">
            {/* Breadcrumb */}
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex items-center gap-2 text-sm text-gray-400 mb-8"
              aria-label="Breadcrumb"
            >
              <Link to="/insights" className="hover:text-black transition-colors">
                Insights
              </Link>
              <span>/</span>
              <span className="text-gray-600 truncate">{post.title}</span>
            </motion.nav>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={staggerItem} className="flex items-center gap-3 mb-6">
                <span className="text-sm font-medium text-koob-gold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="w-px h-4 bg-gray-300" />
                <span className="flex items-center gap-1 text-sm text-gray-400">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime} de lectura
                </span>
              </motion.div>

              <motion.h1
                variants={staggerItem}
                className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-black mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-xl text-gray-600 leading-relaxed"
              >
                {post.excerpt}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Imagen placeholder */}
      <div className="w-full h-64 lg:h-96 bg-gray-100 flex items-center justify-center">
        <span className="text-gray-300 text-sm uppercase tracking-wider">
          Imagen — {post.category}
        </span>
      </div>

      {/* Contenido */}
      <article className="section-space-editorial">
        <div className="page-container">
          <div className="content-container-narrow">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="prose prose-lg max-w-none"
            >
              {paragraphs.map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <motion.h2
                      key={i}
                      variants={staggerItem}
                      className="text-2xl font-semibold text-black mt-10 mb-4"
                    >
                      {line.replace('## ', '')}
                    </motion.h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <motion.h3
                      key={i}
                      variants={staggerItem}
                      className="text-xl font-semibold text-black mt-8 mb-3"
                    >
                      {line.replace('### ', '')}
                    </motion.h3>
                  );
                }
                return (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-gray-600 leading-relaxed mb-6"
                  >
                    {line}
                  </motion.p>
                );
              })}
            </motion.div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="border-hairline-light mt-12 flex flex-wrap gap-2 border-t pt-8"
              >
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-gray-300 text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* CTA en artículo */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="mt-12 p-8 bg-black text-white"
            >
              <p className="text-sm font-medium text-koob-gold uppercase tracking-wider mb-3">
                ¿Reconoces esta situación en tu empresa?
              </p>
              <h3 className="text-2xl font-semibold mb-4">
                Hablemos sin compromiso
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Una primera conversación puede ser el inicio del cambio.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-koob-gold text-black font-semibold hover:bg-yellow-400 transition-colors"
              >
                Contactar con KOOB
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Artículos relacionados */}
      {related.length > 0 && (
        <section className="section-space-editorial bg-koob-beige">
          <div className="page-container">
            <div className="content-container">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                className="text-2xl font-semibold text-black mb-10"
              >
                También puede interesarte
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {related.map((rel) => (
                  <motion.article
                    key={rel.slug}
                    variants={staggerItem}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="border-hairline-light border bg-white p-8 transition-colors duration-300 hover:border-black"
                  >
                    <p className="text-xs font-medium text-koob-gold uppercase tracking-wider mb-3">
                      {rel.category}
                    </p>
                    <h3 className="text-lg font-semibold text-black mb-3 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <Link
                      to={`/insights/${rel.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-koob-gold transition-colors"
                    >
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Volver */}
      <div className="border-hairline-light utility-bar-space border-t">
        <div className="page-container">
          <div className="content-container-narrow">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver a Insights
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InsightPost;
