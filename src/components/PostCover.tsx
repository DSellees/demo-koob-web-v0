import InsightCover from './InsightCover';

interface PostCoverProps {
  slug: string;
  /** URL de imagen real. Si falta o no es http(s), se usa la portada generada. */
  image?: string;
  alt?: string;
  /** Clases del contenedor: proporción y tamaño (aspect-*, w-full…). */
  className?: string;
  /** true para la portada principal (carga inmediata); resto perezoso. */
  eager?: boolean;
}

/**
 * Portada de un post: usa la foto real (`image`) si existe; si no, cae en la
 * portada generada `InsightCover`. Esquinas rectas, `object-cover`.
 */
const PostCover = ({ slug, image, alt, className = '', eager = false }: PostCoverProps) => {
  if (image && /^https?:\/\//.test(image)) {
    return (
      <img
        src={image}
        alt={alt ?? ''}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`block bg-koob-beige-strong object-cover ${className}`}
      />
    );
  }
  return <InsightCover slug={slug} className={className} />;
};

export default PostCover;
