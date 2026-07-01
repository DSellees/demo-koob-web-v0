import { ArrowRight, Zap, Users, MessageSquare, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from '../lib/animations';

const featured = {
  icon: Zap,
  subtitle: 'Transformación empresarial',
  title: 'KOOB Reimpulso',
  description:
    'Para empresas en momentos clave de evolución: estabilidad financiera, crecimiento o transformación. Aportamos visión estratégica, acompañamiento ejecutivo y capacidad real de implementación.',
  cta: { label: 'Conocer Reimpulso', href: '/reimpulso' },
};

const others = [
  {
    icon: Users,
    subtitle: 'RRHH estratégico',
    title: 'Recursos Humanos',
    description: 'Transformamos el rol de RRHH de gestión de personas a socio estratégico del negocio.',
    cta: { href: '/contacto' },
  },
  {
    icon: MessageSquare,
    subtitle: 'Cultura y compromiso',
    title: 'Comunicación Interna',
    description: 'Estrategias de comunicación y experiencias corporativas que fortalecen la cultura.',
    cta: { href: '/contacto' },
  },
  {
    icon: Network,
    subtitle: 'Talento especializado',
    title: 'Ecosistema de Expertos',
    description: 'El especialista exacto para cada proyecto, sin estructuras pesadas ni costes fijos.',
    cta: { href: '/que-hacemos' },
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 lg:py-36 bg-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
          >
            <div className="max-w-2xl">
              <motion.p variants={staggerItem} className="text-sm font-medium text-koob-gold uppercase tracking-widest mb-4">
                Servicios
              </motion.p>
              <motion.h2 variants={staggerItem} className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
                Soluciones para cada momento de transformación
              </motion.h2>
            </div>
            <motion.div variants={staggerItem} className="lg:text-right">
              <Link
                to="/que-hacemos"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors border-b border-gray-200 hover:border-black pb-0.5"
              >
                Ver todas las áreas
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Layout asimétrico */}
          <div className="grid lg:grid-cols-2 border border-gray-200">

            {/* IZQUIERDA: Reimpulso featured */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="bg-koob-gray-900 text-white p-10 lg:p-14 flex flex-col border-b lg:border-b-0 lg:border-r border-koob-gold/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 bg-white/10 flex items-center justify-center">
                  <featured.icon className="w-5 h-5 text-koob-gold" />
                </div>
                <span className="text-xs font-medium text-koob-gold uppercase tracking-widest">
                  {featured.subtitle}
                </span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
                {featured.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-10 flex-1 text-base">
                {featured.description}
              </p>

              <Link
                to={featured.cta.href}
                className="group/btn inline-flex items-center gap-3 text-koob-gold font-medium hover:text-white transition-colors"
              >
                {featured.cta.label}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* DERECHA: Otros 3 servicios */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="divide-y divide-gray-100"
            >
              {others.map((service) => (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  className="group p-8 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <Link to={service.cta.href} className="flex items-start gap-5">
                    <div className="w-9 h-9 bg-gray-100 group-hover:bg-black flex items-center justify-center flex-shrink-0 transition-colors duration-200 mt-0.5">
                      <service.icon className="w-4 h-4 text-black group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">{service.subtitle}</p>
                      <h3 className="font-semibold text-black mb-1.5 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-1" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
