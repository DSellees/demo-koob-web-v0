import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import InlineArrowLink from '../components/InlineArrowLink';
import YouTubeEmbed from '../components/YouTubeEmbed';
import SocialLinks from '../components/SocialLinks';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '../lib/animations';

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
            <SocialLinks gapClassName="flex-col gap-5" />
            <span
              className="type-micro-label text-koob-gray-500 select-none mt-3"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Conecta
            </span>
          </aside>

          {/* Text content — centrado verticalmente y con una segunda capa de aire respecto al borde */}
          <motion.div
            className="flex-1 flex flex-col justify-center pr-6 sm:pr-8 lg:pr-10 xl:pr-10 pl-8 sm:pl-12 lg:pl-[calc(var(--layout-gutter)+1.5rem)]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Eyebrow label */}
            <motion.p
              variants={staggerItem}
              className="type-eyebrow text-koob-gold-ink mb-6"
            >
              Consultoría estratégica para pymes
            </motion.p>

            {/* Headline — bold, authoritative */}
            <motion.h1
              variants={fadeUp}
              className="type-display-hero text-black mb-8"
            >
              Recupera el control.<br />Reimpulsa tu empresa.
            </motion.h1>

            {/* Body — lg size for readability */}
            <motion.p
              variants={fadeUp}
              className="type-lead-flagship text-koob-gray-700 mb-10 max-w-xl"
            >
              Trabajamos junto a propietarios y equipos directivos para detectar bloqueos,
              tomar decisiones con claridad e implantar los cambios que la empresa necesita.
            </motion.p>

            {/* CTA block */}
            <motion.div variants={fadeUp} className="flex items-stretch gap-4 self-start">
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
          animate="visible"
          variants={scaleIn}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
        viewport={{ once: true, amount: 0.2 }}
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
          animate="visible"
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
