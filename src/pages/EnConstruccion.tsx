import { motion } from 'framer-motion';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import SeoMeta from '../components/SeoMeta';
import SweepArrowLink from '../components/SweepArrowLink';
import { staggerContainer, staggerItem } from '../lib/animations';

interface EnConstruccionProps {
  section: string;
  url: string;
}

const EnConstruccion = ({ section, url }: EnConstruccionProps) => {
  return (
    <div className="page-root">
      <SeoMeta
        title={`${section} — KOOB Advisory`}
        description="Estamos terminando de dar forma a esta página."
        url={url}
      />
      <Navigation />

      <section className="page-intro-space flex min-h-[70vh] items-center bg-black text-white">
        <div className="page-container w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="content-container-medium text-center"
          >
            <motion.p variants={staggerItem} className="type-eyebrow mb-5 text-koob-gold">
              {section}
            </motion.p>
            <motion.h1
              variants={staggerItem}
              className="text-[clamp(2.35rem,4vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white"
            >
              Estamos terminando de dar forma a esta página
            </motion.h1>
            <motion.p
              variants={staggerItem}
              className="text-pretty mx-auto mt-6 max-w-xl text-[1.05rem] leading-relaxed text-gray-300"
            >
              Estamos puliendo los últimos detalles para contarte esto como se merece. Mientras tanto, escríbenos y hablamos directamente.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-8 flex justify-center">
              <SweepArrowLink
                onClick={() => window.open('https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20con%20KOOB.', '_blank', 'noopener,noreferrer')}
                variant="dark"
              >
                Hablemos por WhatsApp
              </SweepArrowLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnConstruccion;
