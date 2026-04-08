import { Phone, Mail, MessageCircle, ArrowRight, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-black text-white">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - CTA */}
            <div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
                Contacto
              </p>
              <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                El cambio empieza con una conversación
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Cuéntanos tu situación y te propondremos un diagnóstico inicial sin compromiso. 
                En 72 horas tendrás una primera foto de tu negocio y las palancas de mejora identificadas.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4 mb-10">
                <a
                  href="tel:+34609483114"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Llámanos</p>
                    <p className="font-medium">609 483 114</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20el%20servicio%20Reimpulso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="font-medium">Escríbenos</p>
                  </div>
                </a>

                <a
                  href="mailto:info@koobadvisory.com"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-white/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-medium">info@koobadvisory.com</p>
                  </div>
                </a>
              </div>

              {/* CTA Button */}
              <a
                href="https://wa.me/34609483114?text=Hola,%20me%20gustaría%20hablar%20sobre%20el%20servicio%20Reimpulso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
              >
                Solicitar diagnóstico gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right - Info */}
            <div className="lg:pl-12">
              <div className="p-8 bg-white/5 mb-8">
                <h3 className="text-lg font-semibold mb-4">¿Qué incluye el diagnóstico inicial?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-400">Análisis de la situación actual de tu empresa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-400">Identificación de puntos críticos y oportunidades</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-400">Propuesta de palancas de mejora priorizadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-400">Estimación de impacto potencial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-400">Sin compromiso ni coste</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium mb-1">Oficinas</p>
                  <p className="text-gray-400 text-sm">Madrid, España</p>
                  <p className="text-gray-400 text-sm">Atención presencial y remota</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
