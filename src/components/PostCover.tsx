import BlogCover from './BlogCover';

interface PostCoverProps {
  slug: string;
  /** Imagen real: URL http(s) o ruta relativa a `public/` (p. ej. `images/blog/x.jpg`). Si falta, se usa la portada generada. */
  image?: string;
  alt?: string;
  /** Categoría, solo para la portada generada de reserva. */
  category?: string;
  /** Clases del contenedor: proporción y tamaño (aspect-*, w-full…). */
  className?: string;
  /** true para la portada principal (carga inmediata); resto perezoso. */
  eager?: boolean;
}

/**
 * Portada de un post: usa la imagen real (`image`) si existe; si no, cae en la
 * portada generada `BlogCover`. Esquinas rectas, `object-cover`.
 */
const PostCover = ({ slug, image, alt, category, className = '', eager = false }: PostCoverProps) => {
  if (image) {
    const src = /^https?:\/\//.test(image) ? image : `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`;
    return (
      <img
        src={src}
        alt={alt ?? ''}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={`block bg-koob-beige-strong object-cover ${className}`}
      />
    );
  }
  return <BlogCover slug={slug} category={category} className={className} />;
};

export default PostCover;
