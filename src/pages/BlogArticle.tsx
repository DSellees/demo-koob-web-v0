import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  MessagesSquare,
  Route,
  Sprout,
  Tag,
  Users,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import NewsletterBar from '../sections/NewsletterBar';
import SeoMeta from '../components/SeoMeta';
import PostCover from '../components/PostCover';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { blogPosts } from '../data/blog';
import { reveal, revealViewport } from '../lib/animations';

/**
 * Plantilla estándar del detalle de un post del blog (Blog).
 * Cabecera a la izquierda, portada al ancho del texto, cuerpo en dos columnas
 * (artículo + barra lateral: Sobre KOOB, Destacados, Explora por tema), rejilla
 * de relacionados y newsletter. Sistema plano de KOOB (esquinas rectas,
 * hairlines, sin sombras). Ruta /blog/:slug.
 */

const formatDate = (iso: string) =>
  new Date(iso)
    .toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })
    .replace('.', '')
    .toUpperCase();

const TOPIC_ICON: Record<string, LucideIcon> = {
  'Transformación empresarial': Workflow,
  'Recursos Humanos': Users,
  'Cultura organizativa': Sprout,
  'Comunicación interna': MessagesSquare,
  'Empresa familiar': Building2,
  'Gestión del cambio': Route,
};

const Chip = ({ children, dark = true }: { children: string; dark?: boolean }) => (
  <span
    className={`inline-block px-2.5 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] ${
      dark ? 'bg-koob-black text-white' : 'bg-koob-white text-koob-black'
    }`}
  >
    {children}
  </span>
);

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const byDate = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featured = byDate.filter((p) => p.slug !== post.slug).slice(0, 3);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 6);
  const topics = [...new Set(blogPosts.map((p) => p.category))];

  const lines = post.content
    .trim()
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  let firstParagraph = true;

  return (
    <div className="page-root bg-koob-white">
      <SeoMeta
        title={`${post.title} — KOOB Blog`}
        description={post.excerpt}
        url={`https://koobadvisory.com/blog/${post.slug}`}
      />
      <Navigation variant="dark" />

      {/* ── Cabecera ──────────────────────────────────────────────── */}
      <header className="page-intro-space-article bg-koob-beige">
        <div className="page-container">
          <div className="content-container">
            <nav
              aria-label="Ruta de navegación"
              className="flex items-center gap-2 type-body-small text-koob-gray-500"
            >
              <Link to="/blog" className="shrink-0 transition-colors hover:text-koob-black">
                Blog
              </Link>
              <span aria-hidden="true" className="shrink-0">
                ›
              </span>
              <Link to="/blog" className="shrink-0 transition-colors hover:text-koob-black">
                {post.category}
              </Link>
              <span aria-hidden="true" className="shrink-0">
                ›
              </span>
              <span className="truncate text-koob-gray-700" aria-current="page">
                {post.title}
              </span>
            </nav>

            <h1 className="mt-8 text-balance text-[clamp(2.1rem,5.2vw,4rem)] font-bold leading-[1.03] tracking-[-0.04em] text-koob-black">
              {post.title}
            </h1>

            <p className="mt-6 type-lead-flagship text-koob-gray-700 [text-wrap:pretty]">
              {post.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center bg-koob-black text-sm font-bold text-white"
              >
                K
              </span>
              <div className="type-body-small text-koob-gray-500">
                <p className="font-semibold text-koob-black">Equipo de KOOB</p>
                <p>
                  {formatDate(post.date)} · {post.readTime} de lectura
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Artículo + barra lateral ─────────────────────────────── */}
      <div className="section-space-editorial !pt-12 lg:!pt-16">
        <div className="page-container">
          <div className="content-container grid gap-x-14 gap-y-16 lg:grid-cols-[minmax(0,1fr)_19rem]">

            {/* Artículo */}
            <article className="min-w-0">
              {/* Portada — al ancho del texto, justo antes de leer. Si el post tiene
                  vídeo de YouTube, la portada es el reproductor (se carga al pulsar). */}
              {post.video ? (
                <div className="relative mb-12 aspect-video w-full overflow-hidden bg-koob-black">
                  <YouTubeEmbed
                    videoId={post.video}
                    title={post.title}
                    posterSrc={
                      post.image
                        ? /^https?:\/\//.test(post.image)
                          ? post.image
                          : `${import.meta.env.BASE_URL}${post.image}`
                        : undefined
                    }
                  />
                </div>
              ) : (
                <PostCover
                  slug={post.slug}
                  image={post.image}
                  alt={post.title}
                  eager
                  className="mb-12 aspect-[16/8] w-full"
                />
              )}

              {lines.map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <h2
                      key={i}
                      className="mb-4 mt-14 text-[1.5rem] font-bold leading-tight tracking-[-0.025em] text-koob-black first:mt-0"
                    >
                      {line.slice(3)}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3
                      key={i}
                      className="mb-3 mt-9 text-[1.15rem] font-bold tracking-[-0.02em] text-koob-black"
                    >
                      {line.slice(4)}
                    </h3>
                  );
                }
                if (/^[-*•]\s+/.test(line)) {
                  return (
                    <p key={i} className="mb-3 flex gap-3 type-module-body text-koob-gray-700">
                      <span aria-hidden="true" className="mt-3 h-1 w-2 shrink-0 bg-koob-gold-ink" />
                      <span>{line.replace(/^[-*•]\s+/, '')}</span>
                    </p>
                  );
                }
                if (line.startsWith('Source:') || line.startsWith('Fuente:')) {
                  return (
                    <p
                      key={i}
                      className="mt-10 type-body-small text-koob-gray-400 [overflow-wrap:anywhere]"
                    >
                      {line}
                    </p>
                  );
                }

                const isLead = firstParagraph;
                firstParagraph = false;
                return (
                  <p
                    key={i}
                    className={
                      isLead
                        ? 'mb-6 text-[1.15rem] leading-[1.7] text-koob-black [text-wrap:pretty]'
                        : 'mb-6 type-module-body text-koob-gray-700 [text-wrap:pretty]'
                    }
                  >
                    {line}
                  </p>
                );
              })}

              {/* Llamada intercalada */}
              <motion.aside
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                variants={reveal}
                className="my-14 bg-koob-black p-8 text-white sm:p-10"
              >
                <p className="type-module-label text-koob-gold">El siguiente paso</p>
                <p className="mt-4 text-[1.6rem] font-bold leading-snug tracking-[-0.03em] text-white">
                  ¿Hablamos de tu situación?
                </p>
                <p className="mt-3 type-body text-koob-gray-300">
                  Una conversación sin compromiso es la forma más rápida de ver si podemos
                  ayudarte.
                </p>
                <Link
                  to="/contacto"
                  className="mt-7 inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-koob-black transition-colors hover:bg-koob-gold"
                >
                  Contactar con KOOB
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </motion.aside>

              {post.tags.length > 0 && (
                <p className="border-hairline-light mt-4 border-t pt-8 type-body-small text-koob-gray-500">
                  <span className="text-koob-gray-700">Temas</span>
                  {' — '}
                  {post.tags.join('  ·  ')}
                </p>
              )}
            </article>

            {/* Barra lateral */}
            <aside className="border-hairline-light flex flex-col divide-y divide-[color:var(--line-light)] border lg:sticky lg:top-28 lg:self-start">
              {/* Sobre KOOB */}
              <div className="p-6">
                <p className="type-module-label text-koob-gray-400">Sobre KOOB</p>
                <p className="mt-4 type-body-small text-koob-gray-700">
                  Consultoría estratégica para empresas en momentos de transformación, crecimiento
                  y cambio. Experiencia ejecutiva real, implicación directa en la ejecución.
                </p>
                <Link
                  to="/quienes-somos"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-koob-black transition-colors hover:text-koob-gold-ink"
                >
                  Conócenos
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>

              {/* Destacados */}
              <div className="p-6">
                <p className="type-module-label mb-5 text-koob-gray-400">Destacados</p>
                <ul className="flex flex-col gap-5">
                  {featured.map((f) => (
                    <li key={f.slug}>
                      <Link to={`/blog/${f.slug}`} className="group block">
                        <PostCover slug={f.slug} image={f.image} className="aspect-[16/10] w-full" />
                        <p className="mt-3 type-caption text-koob-gray-400">
                          <span className="text-koob-gold-ink">{f.category}</span>
                          {'  ·  '}
                          {formatDate(f.date)}
                        </p>
                        <p className="mt-1 text-[0.95rem] font-bold leading-snug tracking-[-0.02em] text-koob-black transition-colors group-hover:text-koob-gold-ink">
                          {f.title}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Explora por tema */}
              <div className="p-6">
                <p className="type-module-label mb-5 text-koob-gray-400">Explora por tema</p>
                <ul className="flex flex-col gap-3.5">
                  {topics.map((topic) => {
                    const Icon = TOPIC_ICON[topic] ?? Tag;
                    return (
                      <li key={topic}>
                        <Link
                          to="/blog"
                          className="group flex items-center gap-3 text-koob-black"
                        >
                          <span className="border-hairline-light flex size-10 shrink-0 items-center justify-center border transition-colors group-hover:border-koob-black">
                            <Icon aria-hidden="true" className="h-[18px] w-[18px]" strokeWidth={1.6} />
                          </span>
                          <span className="text-sm font-bold leading-tight tracking-[-0.01em] transition-colors group-hover:text-koob-gold-ink">
                            {topic}
                          </span>
                          <ArrowRight
                            aria-hidden="true"
                            className="ml-auto h-4 w-4 shrink-0 text-koob-gray-400 transition-transform group-hover:translate-x-0.5"
                          />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to="/blog"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-koob-black transition-colors hover:text-koob-gold-ink"
                >
                  Más categorías
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* ── Relacionados ─────────────────────────────────────────── */}
      <section className="section-space-editorial bg-koob-beige">
        <div className="page-container">
          <div className="content-container">
            <h2 className="mb-10 text-[1.75rem] font-bold tracking-[-0.03em] text-koob-black">
              Sigue leyendo
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel, i) => (
                <motion.article
                  key={rel.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={revealViewport}
                  variants={reveal}
                  custom={(i % 3) * 0.05}
                  className="border-hairline-light group relative flex flex-col border bg-koob-white transition-colors hover:border-koob-black"
                >
                  <div className="relative">
                    <PostCover slug={rel.slug} image={rel.image} className="aspect-[16/9] w-full" />
                    <span className="absolute left-3 top-3">
                      <Chip dark={false}>{rel.category}</Chip>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="type-caption text-koob-gray-400">{formatDate(rel.date)}</p>
                    <h3 className="mt-1.5 text-[1.05rem] font-bold leading-snug tracking-[-0.02em] text-koob-black">
                      {rel.title}
                    </h3>
                    <p className="mt-2 type-body-small text-koob-gray-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <Link
                      to={`/blog/${rel.slug}`}
                      aria-label={`Leer: ${rel.title}`}
                      className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-koob-black transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-koob-gold-ink"
                    >
                      Leer más
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>

            <Link
              to="/blog"
              className="mt-10 inline-flex items-center gap-2 bg-koob-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-koob-gray-900"
            >
              Ver todo el blog
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <NewsletterBar />

      <Footer />
    </div>
  );
};

export default BlogArticle;
