import { motion } from 'framer-motion';
import { fadeUp, slideRight, staggerContainer, viewportOnce } from '../lib/animations';
import SweepArrowLink from '../components/SweepArrowLink';

const boardMembers = [
  { name: 'Josep Manel Ventosa', role: 'Founder', image: 'josep-manel-ventosa-koob.png' },
  { name: 'Jordi Fontanals', role: 'Sistemas de la Información', image: 'jordi-fontanals-koob.png' },
  { name: 'Joan Llonch', role: '', image: 'joan-llonch-koob.png' },
];

const TeamPreview = () => {
  return (
    <section id="comite-asesor" aria-label="Comité asesor" className="section-space overflow-hidden bg-black text-white">
      <div className="page-container">
        <div className="content-container">
          <div className="grid items-start gap-wide lg:grid-cols-[0.9fr_2.1fr]">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={slideRight}
            >
              <p className="type-eyebrow text-[0.95rem] text-koob-gold mb-5">
                Nuestro equipo
              </p>
              <h2 className="text-[clamp(2rem,2.6vw,3rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white">
                Comité asesor de KOOB
              </h2>
              <p className="text-pretty mt-6 max-w-sm text-[1.05rem] leading-relaxed text-gray-300">
                Directivos con trayectoria contrastada que aportan criterio externo a los proyectos de KOOB Advisory.
              </p>

              <SweepArrowLink to="/equipo" variant="dark" className="mt-8">
                Conocer al resto del equipo
              </SweepArrowLink>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid grid-cols-3 gap-5"
            >
              {boardMembers.map((member) => (
                <motion.figure key={member.name} variants={fadeUp} className="m-0">
                  <div
                    className="relative w-full overflow-hidden border border-white/10 bg-white/5"
                    style={{ aspectRatio: '1/1' }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.image}`}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
                    />
                  </div>
                  <figcaption className="mt-4 border-t border-white/10 pt-3">
                    <span className="block text-base font-semibold tracking-[-0.02em] text-white">
                      {member.name}
                    </span>
                    {member.role && (
                      <span className="mt-0.5 block text-sm leading-relaxed text-gray-400">
                        {member.role}
                      </span>
                    )}
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
