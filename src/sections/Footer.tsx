import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 bg-white border-t border-gray-200">
      <div className="w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer */}
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4C4 4 8 12 16 16C8 20 4 28 4 28" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M12 4C12 4 16 12 24 16C16 20 12 28 12 28" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M20 4C20 4 24 12 32 16C24 20 20 28 20 28" stroke="black" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
                </svg>
                <span className="text-lg font-semibold">KOOB</span>
              </Link>
              <p className="text-sm text-gray-500 leading-relaxed">
                Consultoría estratégica de dirección para empresas que necesitan resultados.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-black mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/quienes-somos" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link to="/equipo" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/reimpulso" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Reimpulso
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-black mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-500 hover:text-black transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-black mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:info@koobadvisory.com" className="text-sm text-gray-500 hover:text-black transition-colors">
                    info@koobadvisory.com
                  </a>
                </li>
                <li>
                  <a href="tel:+34609483114" className="text-sm text-gray-500 hover:text-black transition-colors">
                    609 483 114
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/koob-advisory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition-colors mt-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-400 text-center">
              © 2024 KOOB Advisory. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
