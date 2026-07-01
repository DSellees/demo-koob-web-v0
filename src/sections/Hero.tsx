import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import YouTubeEmbed from '../components/YouTubeEmbed';
import { fadeUp, staggerContainer, staggerItem, scaleIn } from '../lib/animations';

const pillars = [
  { title: 'Experiencia ejecutiva real', desc: 'Profesionales que han dirigido empresas y equipos' },
  { title: 'Acompañamiento en la ejecución', desc: 'No solo diagnóstico, sino implantación real' },
  { title: 'Enfoque práctico', desc: 'Soluciones aplicables al día a día de tu empresa' },
];

const Hero = () => {
  const scrollToServices = () => {
    document.querySelector('#servicios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-white pt-20">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Columna izquierda */}
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={staggerItem}
                className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-6"
              >
                Partner estratégico de transformación
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-[4.25rem] font-semibold text-black leading-[1.05] mb-7"
              >
                Reimpulsa tu empresa cuando más lo necesita
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-500 leading-relaxed mb-9 max-w-lg"
              >
                Acompañamos a empresas en momentos clave de transformación, crecimiento y cambio.
                Experiencia ejecutiva real, implicación directa en la ejecución.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Pide tu diagnóstico inicial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-200 text-black font-medium hover:border-black transition-colors cursor-pointer"
                >
                  Ver servicios
                </button>
              </motion.div>

              {/* Pilares */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-3 gap-6 mt-14 pt-8 border-t border-gray-100"
              >
                {pillars.map((p) => (
                  <motion.div key={p.title} variants={staggerItem}>
                    <p className="text-xs font-semibold text-black leading-snug mb-1">{p.title}</p>
                    <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Columna derecha — vídeo */}
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={scaleIn}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="aspect-[4/3] bg-gray-900 relative overflow-hidden shadow-2xl ring-1 ring-koob-gold/20">
                <YouTubeEmbed videoId="gwcGSkRZ1YM" title="KOOB Advisory — Quiénes somos" />
              </div>
              <div className="h-0.5 bg-gradient-to-r from-koob-gold/60 via-koob-gold to-koob-gold/60" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
