import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-white pt-20"
    >
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-tight mb-6 tracking-tight">
                Reimpulsa tu empresa cuando más lo necesita
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl">
                En KOOB Advisory acompañamos a empresas en momentos críticos de transformación. 
                Diagnóstico ejecutivo, plan de acción y acompañamiento real para recuperar 
                crecimiento y rentabilidad.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-300 text-black font-medium hover:border-black transition-colors"
                >
                  Conocer servicios
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <p className="text-3xl font-semibold text-black">20+</p>
                  <p className="text-sm text-gray-500 mt-1">Años de experiencia</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-black">150+</p>
                  <p className="text-sm text-gray-500 mt-1">Proyectos ejecutados</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-black">95%</p>
                  <p className="text-sm text-gray-500 mt-1">Clientes satisfechos</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img
                  src="/images/hero-office.jpg"
                  alt="Oficina ejecutiva moderna - KOOB Advisory"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl max-w-xs hidden lg:block">
                <p className="text-sm text-gray-500 mb-2">Resultado promedio</p>
                <p className="text-2xl font-semibold text-black">+35% mejora</p>
                <p className="text-sm text-gray-600 mt-1">en rentabilidad en 6 meses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
