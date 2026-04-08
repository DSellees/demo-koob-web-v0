import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Quiénes Somos', href: '/quienes-somos' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Reimpulso', href: '/reimpulso' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4C4 4 8 12 16 16C8 20 4 28 4 28" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M12 4C12 4 16 12 24 16C16 20 12 28 12 28" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 4C20 4 24 12 32 16C24 20 20 28 20 28" stroke="black" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
              <span className="text-xl font-semibold tracking-tight">KOOB</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-black font-medium' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {isHome && (
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-200"
                >
                  Contacto
                </button>
              )}
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="mailto:info@koobadvisory.com"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/koob-advisory/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-black transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {isHome ? (
                <button
                  onClick={() => scrollToSection('#contacto')}
                  className="px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Hablemos
                </button>
              ) : (
                <Link
                  to="/"
                  onClick={() => setTimeout(() => scrollToSection('#contacto'), 100)}
                  className="px-5 py-2.5 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Hablemos
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-start justify-center h-full px-8 gap-6 pt-20">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-medium text-black"
            >
              {item.label}
            </Link>
          ))}
          {isHome ? (
            <button
              onClick={() => scrollToSection('#contacto')}
              className="text-2xl font-medium text-black"
            >
              Contacto
            </button>
          ) : (
            <Link
              to="/"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => scrollToSection('#contacto'), 100);
              }}
              className="text-2xl font-medium text-black"
            >
              Contacto
            </Link>
          )}
          <Link
            to="/"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setTimeout(() => scrollToSection('#contacto'), 100);
            }}
            className="mt-6 px-8 py-3 bg-black text-white font-medium"
          >
            Hablemos
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
