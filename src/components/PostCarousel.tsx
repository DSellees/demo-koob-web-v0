import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'framer-motion';
import PostCover from './PostCover';
import type { BlogPost } from '../data/blog';

interface PostCarouselProps {
  posts: BlogPost[];
  /** Tarjetas visibles a la vez, con decimales: 1.5 → "una y media", 2.5 → "dos y media". */
  visible?: number;
  /** Si se indica, avanza sola una tarjeta cada tantos milisegundos. */
  autoplayMs?: number;
}

const GAP_REM = 0.75;
const GAP_PX = 12;

/**
 * Tira horizontal de artículos con scroll (dedo, arrastre con ratón, rueda
 * horizontal) que deja siempre asomar media tarjeta. Cada tarjeta es un enlace
 * completo. Termina en una tarjeta "Todos nuestros artículos". Bajo la tira, un
 * punto por tarjeta indica la posición y permite saltar.
 *
 * Avance automático (opcional): solo mientras la tira está en pantalla, se pausa
 * al pasar el cursor, al enfocar o al tocar, y no se activa con
 * prefers-reduced-motion. Al llegar al final, vuelve al principio.
 * Sin cifras: no se muestra fecha ni tiempo de lectura.
 */
const PostCarousel = ({ posts, visible = 1.5, autoplayMs }: PostCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const pausado = useRef(false);
  const [dragging, setDragging] = useState(false);
  const [posicion, setPosicion] = useState(0);
  const enPantalla = useInView(scrollRef, { amount: 0.3 });
  const total = posts.length + 1; // artículos + tarjeta de cierre

  // Cada tarjeta mide (ancho − huecos) / visibles → se ve siempre esa proporción.
  const anchoTarjeta = `calc((100% - ${(Math.ceil(visible) - 1) * GAP_REM}rem) / ${visible})`;
  // La tarjeta de cierre es más estrecha: no es un artículo, solo una salida.
  const anchoCierre = `calc(${anchoTarjeta} * 0.55)`;

  const paso = () => {
    const t = scrollRef.current?.firstElementChild as HTMLElement | null;
    return (t?.getBoundingClientRect().width ?? 300) + GAP_PX;
  };
  const alFinal = () => {
    const el = scrollRef.current;
    return !!el && el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
  };
  const actualizarPosicion = () => {
    const el = scrollRef.current;
    if (!el) return;
    setPosicion(alFinal() ? total - 1 : Math.min(total - 1, Math.round(el.scrollLeft / paso())));
  };
  const irA = (i: number) =>
    scrollRef.current?.scrollTo({ left: i * paso(), behavior: 'smooth' });

  // Avance automático
  useEffect(() => {
    if (!autoplayMs || !enPantalla) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      const el = scrollRef.current;
      if (!el || pausado.current) return;
      if (alFinal()) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollTo({ left: Math.round(el.scrollLeft / paso() + 1) * paso(), behavior: 'smooth' });
    }, autoplayMs);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplayMs, enPantalla]);

  // Arrastrar con el ratón (el táctil ya desplaza de forma nativa). Durante el
  // arrastre se apaga el "snap" para que no pelee con el desplazamiento manual.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.pointerType !== 'mouse' || e.button !== 0) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!drag.current.down || !el) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 4) {
      drag.current.moved = true;
      setDragging(true);
      el.setPointerCapture(e.pointerId);
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.down = false;
    setDragging(false);
  };
  // Si hubo arrastre, el clic que sigue no debe abrir el enlace de debajo.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  return (
    <div
      onMouseEnter={() => (pausado.current = true)}
      onMouseLeave={() => (pausado.current = false)}
      onFocus={() => (pausado.current = true)}
      onBlur={() => (pausado.current = false)}
      onTouchStart={() => (pausado.current = true)}
      onTouchEnd={() => window.setTimeout(() => (pausado.current = false), 4000)}
    >
      <div
        ref={scrollRef}
        onScroll={actualizarPosicion}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        role="region"
        aria-label="Artículos del blog, desplazables en horizontal"
        tabIndex={0}
        className={`scrollbar-hide flex gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 select-none ${
          dragging ? 'cursor-grabbing snap-none' : 'cursor-grab snap-x snap-mandatory'
        }`}
      >
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            draggable={false}
            aria-label={`Leer el artículo: ${post.title}`}
            style={{ width: anchoTarjeta }}
            className="group/tarjeta block shrink-0 snap-start border border-hairline-light bg-white"
          >
            <PostCover
              slug={post.slug}
              image={post.image}
              alt=""
              className="pointer-events-none aspect-[5/2] w-full"
            />
            <div className="p-5">
              <p className="type-module-label text-koob-gold-ink">{post.category}</p>
              <h3 className="mt-2 text-lg font-bold leading-tight tracking-[-0.02em] text-black">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[0.85rem] leading-relaxed text-koob-gray-500">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-black">
                Leer el artículo
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover/tarjeta:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}

        {/* Cierre de la tira: también un enlace completo */}
        <Link
          to="/blog"
          draggable={false}
          style={{ width: anchoCierre }}
          className="group/tarjeta flex shrink-0 snap-start flex-col justify-end border border-black bg-black p-5 text-white"
        >
          <div className="mb-5 h-0.5 w-10 bg-koob-gold" />
          <h3 className="text-lg font-bold leading-tight tracking-[-0.02em] text-white">
            Todos nuestros artículos
          </h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Ver el blog
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover/tarjeta:translate-x-1"
            />
          </span>
        </Link>
      </div>

      {/* Posición: un punto por tarjeta; el actual se alarga. Pulsar uno salta a él. */}
      <div className="mt-5 flex items-center gap-2" role="group" aria-label="Posición en la tira">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => irA(i)}
            aria-label={i === total - 1 ? 'Ir al final de la tira' : `Ir al artículo ${i + 1}`}
            aria-current={i === posicion ? 'true' : undefined}
            className={`h-1.5 cursor-pointer transition-[width,background-color] duration-300 ${
              i === posicion
                ? 'w-8 bg-koob-gold-ink'
                : 'w-3 bg-koob-gray-300 hover:bg-koob-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PostCarousel;
