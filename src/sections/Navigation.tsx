import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, slideLeft, slideRight, staggerContainer } from '../lib/animations';

const navLinks = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Consultoría',
    href: '/que-hacemos',
    children: [
      { label: 'KOOB Reimpulso', href: '/reimpulso', desc: 'Transformación empresarial urgente' },
      { label: 'Qué ofrecemos', href: '/que-hacemos', desc: 'Todas las áreas de especialización' },
    ],
  },
  { label: 'Quiénes somos', href: '/quienes-somos' },
  { label: 'Recursos', href: '/insights' },
  { label: 'Podcast', href: '/podcast' },
  { label: 'Contacto', href: '/contacto' },
];

interface NavigationProps {
  variant?: 'light' | 'dark';
}

const Navigation = ({ variant = 'light' }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isDark = variant === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsMobileMenuOpen(false);
      setOpenDropdown(null);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  const navBg = isDark
    ? 'bg-black border-b border-white/10'
    : isScrolled || isMobileMenuOpen
      ? 'bg-white/95 backdrop-blur-sm border-b border-hairline-light shadow-sm'
      : 'bg-white border-b border-hairline-light';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
        <div className="page-container">
          <div className="nav-height flex w-full items-center justify-between">
            {/* Logo */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0"
            >
              <Link to="/" className="flex items-center">
                <img
                  src={`${import.meta.env.BASE_URL}logo-koob-black.svg`}
                  alt="KOOB Advisory"
                  className={`h-[4.4rem] w-auto ${isDark ? 'invert' : ''}`}
                />
              </Link>
            </motion.div>

            {/* Desktop Nav — resto de contenido +8% */}
            <motion.div
              className="hidden lg:flex items-center gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) =>
                link.children ? (
                  <motion.div
                    key={link.label}
                    variants={fadeUp}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 text-[1rem] transition-colors duration-200 cursor-pointer ${
                        isActive(link.href)
                          ? isDark ? 'text-white font-medium' : 'text-black font-medium'
                          : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {link.label}
                      <ChevronDown className={`w-[0.945rem] h-[0.945rem] transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white border border-hairline-light shadow-lg overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              to={child.href}
                              className="flex flex-col px-5 py-4 hover:bg-koob-beige transition-colors border-b border-hairline-subtle last:border-0"
                            >
                              <span className="text-sm font-medium text-black">{child.label}</span>
                              {child.desc && (
                                <span className="text-xs text-koob-gray-500 mt-0.5">{child.desc}</span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div key={link.label} variants={fadeUp}>
                    <Link
                      to={link.href}
                      className={`text-[1rem] transition-colors duration-200 ${
                        isActive(link.href)
                          ? isDark ? 'text-white font-medium' : 'text-black font-medium'
                          : isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* CTA desktop */}
            <motion.div
              className="hidden lg:flex items-center"
              variants={slideLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/reimpulso"
                className={
                  isDark
                    ? 'px-[1.35rem] py-[0.675rem] border border-white bg-white text-black text-[0.945rem] font-bold hover:bg-koob-gold transition-colors'
                    : 'px-[1.35rem] py-[0.675rem] border border-black bg-black text-white text-[0.945rem] font-bold hover:bg-koob-gray-900 transition-colors'
                }
              >
                KOOB Reimpulso
              </Link>
            </motion.div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 cursor-pointer ${isDark ? 'text-white' : 'text-black'}`}
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="w-[1.62rem] h-[1.62rem]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="w-[1.62rem] h-[1.62rem]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-white lg:hidden overflow-y-auto"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col items-start justify-center min-h-full px-8 py-24 gap-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }}
                  className="w-full"
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 text-3xl font-medium transition-colors border-b border-hairline-subtle ${
                      isActive(link.href) ? 'text-black' : 'text-gray-700 hover:text-black'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-2 text-base text-koob-gray-700 hover:text-black transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="mt-8 w-full"
              >
                <Link
                  to="/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-8 py-4 border border-black text-black font-medium text-center text-lg hover:bg-black hover:text-white transition-colors"
                >
                  Hablemos de tu empresa
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
