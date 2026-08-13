import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, slideRight, staggerContainer, viewportOnce } from '../lib/animations';

const boardMembers = [
  { name: 'Nombre Apellido', role: 'Cargo · Sector' },
  { name: 'Nombre Apellido', role: 'Cargo · Sector' },
  { name: 'Nombre Apellido', role: 'Cargo · Sector' },
];

const TeamPreview = () => {
  return (
    <section id="comite-asesor" aria-label="Comité asesor" className="section-space overflow-hidden bg-black text-white">
      <div className="page-container">
        <div className="content-container">
          <div className="grid items-start gap-wide lg:grid-cols-[1fr_2fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideRight}
            >
              <p className="type-eyebrow text-[0.95rem] text-koob-gold mb-5">
                Nuestro equipo
              </p>
              <h2 className="text-[clamp(2rem,2.6vw,2.75rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
                Comité asesor de KOOB
              </h2>
              <p className="text-pretty mt-6 max-w-sm text-base leading-relaxed text-gray-300">
                Directivos con trayectoria contrastada que aportan criterio externo a los proyectos de KOOB Advisory.
              </p>

              <Link
                to="/equipo"
                className="mt-8 inline-flex items-center gap-3 bg-white px-7 py-4 text-[0.9375rem] font-semibold tracking-[0.02em] text-black transition-colors duration-200 hover:bg-koob-gold"
              >
                Conocer al resto del equipo
                <svg
                  aria-hidden="true"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid grid-cols-3 gap-8"
            >
              {boardMembers.map((member, index) => (
                <motion.figure key={index} variants={fadeUp} className="m-0">
                  <div
                    className="relative w-full border border-white/10 bg-white/5 grayscale transition-[filter] duration-500 hover:grayscale-0"
                    style={{ aspectRatio: '1/1' }}
                  />
                  <figcaption className="mt-4 border-t border-white/10 pt-3">
                    <span className="block text-base font-semibold tracking-[-0.02em] text-white">
                      {member.name}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-gray-400">
                      {member.role}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
