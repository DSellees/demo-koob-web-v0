import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-hairline-light footer-space border-t bg-white">
      <div className="page-container">
        <div className="content-container">
          {/* Main Footer */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <img src="./logo-koob-black.svg" alt="KOOB Advisory" className="h-6 w-auto" />
              </Link>
              <p className="text-sm text-koob-gray-700 leading-relaxed mb-4 max-w-xs">
                Consultoría estratégica para empresas en momentos de transformación, crecimiento
                y cambio. Experiencia ejecutiva real, implicación directa.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/koob-advisory/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-koob-gray-500 hover:text-black transition-colors"
                  aria-label="LinkedIn KOOB Advisory"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/koob.advisory/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-koob-gray-500 hover:text-black transition-colors"
                  aria-label="Instagram KOOB Advisory"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@KOOB_ADVISORY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-koob-gray-500 hover:text-black transition-colors"
                  aria-label="YouTube KOOB Advisory"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Servicios */}
            <div>
              <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">Servicios</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/reimpulso" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    KOOB Reimpulso
                  </Link>
                </li>
                <li>
                  <Link to="/que-hacemos" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Recursos Humanos
                  </Link>
                </li>
                <li>
                  <Link to="/que-hacemos" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Comunicación Interna
                  </Link>
                </li>
                <li>
                  <Link to="/que-hacemos" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Ecosistema de Expertos
                  </Link>
                </li>
                <li>
                  <Link to="/que-hacemos" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Ver todas las áreas
                  </Link>
                </li>
              </ul>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/quienes-somos" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link to="/equipo" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Insights
                  </Link>
                </li>
                <li>
                  <Link to="/contacto" className="text-sm text-koob-gray-700 hover:text-black transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="font-semibold text-black mb-4 text-sm uppercase tracking-wider">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:info@koobadvisory.com"
                    className="flex items-center gap-2 text-sm text-koob-gray-700 hover:text-black transition-colors"
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    info@koobadvisory.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+34609483114"
                    className="flex items-center gap-2 text-sm text-koob-gray-700 hover:text-black transition-colors"
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    609 483 114
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-xs text-koob-gray-500">España · atención nacional</p>
                  <p className="text-xs text-koob-gray-500">Presencial y remota</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-hairline-light flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
            <p className="text-sm text-koob-gray-500">
              © 2026 KOOB Advisory. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/legal" className="text-xs text-koob-gray-500 hover:text-black transition-colors">
                Aviso Legal
              </Link>
              <Link to="/privacidad" className="text-xs text-koob-gray-500 hover:text-black transition-colors">
                Privacidad
              </Link>
              <Link to="/cookies" className="text-xs text-koob-gray-500 hover:text-black transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
