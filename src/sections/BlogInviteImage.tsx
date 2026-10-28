import { blogPosts } from '../data/blog';
import PostCarousel from '../components/PostCarousel';
import Reveal from '../components/Reveal';
import SweepArrowLink from '../components/SweepArrowLink';

/**
 * Invitación al blog en Servicios: a la izquierda se presenta el blog y se
 * invita a explorarlo; a la derecha, una tira con los tres artículos más
 * recientes, en la que se ve UNO Y MEDIO. Comparte el carrusel con la home
 * (PostCarousel), aquí sin avance automático.
 */
const BlogInviteImage = () => {
  // Los tres artículos más recientes.
  const posts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      aria-label="Invitación al blog con artículos destacados"
      className="section-space-compact overflow-hidden bg-koob-beige text-black"
    >
      <div className="page-container">
        <div className="content-container">
          <div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="type-eyebrow mb-5 text-koob-gold-ink">Nuestro blog</p>
                <h2 className="type-section-title text-black">Ideas para decidir mejor</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="type-section-lead mt-6 max-w-md text-koob-gray-500">
                  Artículos sobre transformación, personas y cultura, escritos desde la experiencia
                  de quienes han dirigido empresas.
                </p>
                <div className="mt-6">
                  <SweepArrowLink to="/blog" variant="light">
                    Explorar el blog
                  </SweepArrowLink>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="min-w-0 lg:ml-auto lg:w-full lg:max-w-[34rem]">
              <PostCarousel posts={posts} visible={1.5} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInviteImage;
