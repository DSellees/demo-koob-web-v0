import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InlineArrowLink from '../components/InlineArrowLink';
import YouTubeEmbed from '../components/YouTubeEmbed';
import SocialLinks from '../components/SocialLinks';
import { staggerContainer, staggerItem } from '../lib/animations';

const EASE = [0.22, 1, 0.36, 1] as const;

// Momento (en segundos) en que terminan todas las animaciones de entrada del hero:
// el último item de texto arranca a ~0.81s (1.1s dur → ~1.9s) y el vídeo a 0.6s (1.4s dur → 2.0s).
const HERO_DONE = 2;

// Variantes locales del hero — más lentas y con más recorrido que las globales
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.22, delayChildren: 0.15 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: EASE } },
};

const heroVideo = {
  hidden: { opacity: 0, scale: 0.88, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1.4, ease: EASE, delay: 0.6 },
  },
};

// El hero se anima en ambas direcciones: al cargar, y cada vez que se vuelve a
// él con scroll. `margin` descuenta la navbar fija — ver "La Regla de la
// Animación Visible" en src/lib/animations.ts.
const heroViewport = { once: false, amount: 0.15, margin: '-100px 0px 0px 0px' } as const;

const pillars = [
  { title: 'Dirección estratégica', desc: 'Alineamos objetivos, prioridades y decisiones' },
  { title: 'Ejecución del plan', desc: 'Implantamos los cambios junto al equipo directivo' },
  { title: 'Crecimiento empresarial', desc: 'Soluciones prácticas para avanzar con control' },
];

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-koob-beige flex flex-col pt-24 lg:pt-20 lg:h-screen overflow-hidden">

      {/* Main row */}
      <div className="flex flex-col lg:flex-row lg:flex-1 lg:min-h-0">

        {/* LEFT: social strip + text content */}
        <div className="relative flex w-full lg:w-[50%] min-w-0">

          {/* Social strip — posicionada de forma absoluta: no desplaza el texto, vive dentro del mismo margen que el nav */}
          <aside className="hidden lg:flex flex-col items-center justify-center gap-5 absolute left-0 top-1/2 -translate-y-1/2 lg:w-12 xl:w-20">
            <SocialLinks gapClassName="flex-col gap-5" animated animationDelay={HERO_DONE + 0.15} />
            <motion.span
              className="type-micro-label text-koob-gray-500 select-none mt-3"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={heroViewport}
              transition={{ duration: 0.5, ease: EASE, delay: HERO_DONE }}
            >
              Conecta
            </motion.span>
          </aside>

          {/* Text content — centrado verticalmente y con una segunda capa de aire respecto al borde */}
          <motion.div
            className="flex-1 flex flex-col justify-center pr-6 sm:pr-8 lg:pr-10 xl:pr-10 pl-8 sm:pl-12 lg:pl-[calc(var(--layout-gutter)+1.5rem)]"
            initial="hidden"
            whileInView="visible"
            viewport={heroViewport}
            variants={heroContainer}
          >
            {/* Eyebrow label */}
            <motion.p
              variants={heroItem}
              className="type-eyebrow text-koob-gold-ink mb-6"
            >
              Consultoría estratégica para pymes
            </motion.p>

            {/* Headline — bold, authoritative */}
            <motion.h1
              variants={heroItem}
              className="type-display-hero text-black mb-8"
            >
              Recupera el control.<br />Reimpulsa tu empresa.
            </motion.h1>

            {/* Body — lg size for readability */}
            <motion.p
              variants={heroItem}
              className="type-lead-flagship text-koob-gray-700 mb-4 max-w-2xl"
            >
              Si no sabes qué frena tu empresa, necesitas más que un diagnóstico. En KOOB
              detectamos el bloqueo, tomamos decisiones y las ejecutamos contigo.
            </motion.p>

            {/* Cierre — misma fuente, tamaño y color que el subtítulo */}
            <motion.p
              variants={heroItem}
              className="type-lead-flagship text-koob-gray-700 mb-10 max-w-2xl"
            >
              Estrategia, negocio y experiencia ejecutiva para conseguir resultados.
            </motion.p>

            {/* CTA block */}
            <motion.div variants={heroItem} className="flex items-stretch gap-4 self-start">
              {/* Primary CTA — solid, high contrast — 70% */}
              <Link
                to="/contacto"
                className="type-button-prominent inline-flex items-center gap-2 px-8 2xl:px-10 py-[1.125rem] 2xl:py-5 bg-black text-white hover:bg-koob-gray-900 hover:scale-[1.03] active:scale-[0.98] transition-[background-color,transform] duration-200 cursor-pointer"
              >
                Solicita un diagnóstico
                <ArrowRight className="w-5 h-5" />
              </Link>

              {/* Secondary CTA — outlined, mismo estilo que "KOOB Reimpulso" — 30% */}
              <Link
                to="/quienes-somos"
                className="type-button-prominent inline-flex items-center justify-center px-5 2xl:px-7 py-[1.125rem] 2xl:py-5 border border-black text-black hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Cómo trabajamos
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Video 5:4 — visible en todos los breakpoints; a la derecha en desktop, apilado debajo del texto en mobile/tablet */}
        <motion.div
          className="flex items-center justify-center px-6 pb-10 lg:w-[50%] lg:pl-2 lg:pr-12 xl:pl-3 xl:pr-20 lg:pb-0"
          initial="hidden"
          whileInView="visible"
          viewport={heroViewport}
          variants={heroVideo}
        >
          <div
            className="relative bg-gray-900 overflow-hidden shadow-xl w-full lg:w-auto"
            style={{ aspectRatio: '3/2', maxWidth: '100%', height: 'min(34rem, 78%)' }}
          >
            <YouTubeEmbed
              videoId="gwcGSkRZ1YM"
              title="KOOB Advisory — Quiénes somos"
              posterSrc={`${import.meta.env.BASE_URL}images/portada-video-josep-manel-ventosa-koob.png`}
            />
          </div>
        </motion.div>

      </div>

      {/* BOTTOM: pilares — apilados en mobile/tablet, barra negra parcial + enlace en desktop */}

      {/* Mobile/tablet: pilares apilados a ancho completo */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={heroViewport}
        variants={staggerContainer}
        className="lg:hidden bg-black divide-y divide-hairline-dark"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={staggerItem}
            className="strip-cell-space group flex items-start justify-between gap-3 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
          >
            <div>
              <div className="w-5 h-px bg-koob-gold mb-3" />
              <p className="type-strip-title text-white mb-1">{p.title}</p>
              <p className="type-strip-copy text-gray-400">{p.desc}</p>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-3" />
          </motion.div>
        ))}
        <Link
          to="/que-hacemos"
          className="strip-cell-space flex items-center justify-center gap-3 group cursor-pointer"
        >
          <span className="type-strip-action text-gray-400 group-hover:text-white transition-colors duration-200">Ver servicios de consultoría</span>
          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200" />
        </Link>
      </motion.div>

      {/* Desktop: barra negra parcial + enlace a la derecha */}
      <div className="relative h-28 hidden lg:block">

        {/* Barra negra — esquina cortada top-right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={heroViewport}
          variants={staggerContainer}
          className="absolute left-0 top-0 bottom-0 bg-black"
          style={{
            width: '63%',
            clipPath: 'polygon(0 0, calc(100% - 44px) 0, 100% 44px, 100% 100%, 0 100%)',
          }}
        >
          <div className="grid grid-cols-3 h-full divide-x divide-hairline-dark">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="strip-cell-space group flex items-start justify-between gap-3 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                <div>
                  <div className="w-5 h-px bg-koob-gold mb-3" />
                  <p className="type-strip-title text-white mb-1">{p.title}</p>
                  <p className="type-strip-copy text-gray-400">{p.desc}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-3" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ver servicios de consultoría — pegado a la izquierda, justo tras la barra negra */}
        <InlineArrowLink
          to="/que-hacemos"
          className="absolute left-[calc(63%+3rem)] top-1/2 -translate-y-1/2"
        >
          Ver servicios de consultoría
        </InlineArrowLink>

      </div>

    </section>
  );
};

export default Hero;
