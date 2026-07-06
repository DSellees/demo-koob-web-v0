import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '../lib/animations';

const pillars = [
  { title: 'Experiencia ejecutiva real', desc: 'Profesionales que han dirigido empresas y equipos' },
  { title: 'Acompañamiento en la ejecución', desc: 'No solo diagnóstico, sino implantación real' },
  { title: 'Enfoque práctico', desc: 'Soluciones aplicables al día a día de tu empresa' },
];

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-koob-beige h-screen flex flex-col pt-20 overflow-hidden">

      {/* Main row */}
      <div className="flex flex-1 min-h-0">

        {/* LEFT: social strip + text content */}
        <div className="flex w-[46%] min-w-0">

          {/* Social strip */}
          <aside className="hidden lg:flex flex-col items-center justify-center w-16 xl:w-20 shrink-0 gap-5">
            <div className="flex flex-col items-center gap-5">
              <a
                href="https://www.linkedin.com/company/koob-advisory/"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/koob.advisory/"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@KOOB_ADVISORY"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-black transition-colors duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <span
              className="text-[10px] font-medium text-gray-400 tracking-[0.25em] uppercase select-none mt-3"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Social Media
            </span>
          </aside>

          {/* Text content — centrado verticalmente */}
          <motion.div
            className="flex-1 flex flex-col justify-center px-8 lg:px-10 xl:px-14"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Eyebrow label */}
            <motion.p
              variants={staggerItem}
              className="text-xs font-semibold text-koob-gold uppercase tracking-[0.2em] mb-5"
            >
              Partner estratégico de transformación
            </motion.p>

            {/* Headline — bold, authoritative */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] sm:text-5xl xl:text-[3.75rem] font-bold text-black leading-[1.0] tracking-tight mb-6"
            >
              Reimpulsa<br />tu empresa<br />cuando más lo necesita
            </motion.h1>

            {/* Body — lg size for readability */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-sm"
            >
              Acompañamos a empresas en momentos de transformación y cambio.
              Experiencia ejecutiva real, implicación directa en la ejecución.
            </motion.p>

            {/* CTA block */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                {/* Primary CTA — solid, high contrast */}
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-black text-white text-sm font-semibold tracking-wide hover:bg-gray-900 transition-colors duration-200 cursor-pointer"
                >
                  Pide tu diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Ghost link */}
                <Link
                  to="/quienes-somos"
                  className="text-sm text-gray-500 hover:text-black transition-colors duration-200 underline underline-offset-4 cursor-pointer"
                >
                  Quiénes somos
                </Link>
              </div>

              {/* Trust line */}
              <p className="text-xs text-gray-400 tracking-wide">
                Consulta inicial · Sin compromiso · Totalmente confidencial
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* RIGHT: video 5:4 alineado a la izquierda de su columna */}
        <motion.div
          className="hidden lg:flex items-center justify-start w-[54%] px-6 xl:px-8 py-28"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="relative bg-gray-900 overflow-hidden shadow-xl"
            style={{ aspectRatio: '5/4', height: '100%', maxWidth: '100%' }}
          >
            <YouTubeEmbed videoId="gwcGSkRZ1YM" title="KOOB Advisory — Quiénes somos" />
          </div>
        </motion.div>

      </div>

      {/* BOTTOM: barra negra parcial + enlace a la derecha */}
      <div className="relative h-28">

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
          <div className="grid grid-cols-3 h-full divide-x divide-white/10">
            {pillars.map((p) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="group flex items-start justify-between gap-3 px-5 xl:px-8 py-5 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                <div>
                  <div className="w-5 h-px bg-koob-gold mb-3" />
                  <p className="text-sm font-semibold text-white mb-1 leading-tight">{p.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-3" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ver servicios — pegado a la izquierda, justo tras la barra negra */}
        <Link
          to="/que-hacemos"
          className="absolute left-[calc(63%+3rem)] top-1/2 -translate-y-1/2 flex items-center gap-3 group cursor-pointer"
        >
          <span className="text-sm text-gray-500 tracking-wide group-hover:text-black transition-colors duration-200">Ver servicios</span>
          <div className="w-16 h-px bg-gray-300 group-hover:bg-black transition-colors duration-200" />
          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200" />
        </Link>

      </div>

    </section>
  );
};

export default Hero;
