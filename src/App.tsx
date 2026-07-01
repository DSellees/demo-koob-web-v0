import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import SeoMeta from './components/SeoMeta';
// import Methodology from './sections/Methodology';
// import Results from './sections/Results';
// import Team from './sections/Team';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Reimpulso from './pages/Reimpulso';
import QuienesSomos from './pages/QuienesSomos';
import Equipo from './pages/Equipo';
import Contacto from './pages/Contacto';
import Insights from './pages/Insights';
import InsightPost from './pages/InsightPost';
import QueHacemos from './pages/QueHacemos';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';

import './App.css';

const LandingPage = () => (
  <>
    <SeoMeta
      title="KOOB Advisory — Consultoría estratégica para empresas"
      description="Acompañamos a empresas en momentos de transformación. Experiencia ejecutiva real, acompañamiento práctico e implicación directa en la ejecución."
      url="https://koobadvisory.com/"
    />
    <Navigation />
    <main>
      <Hero />
      <About />
      <Services />
      {/* <Methodology />
      <Results />
      <Team /> */}
      <ContactCTA />
    </main>
    <Footer />
  </>
);

function App() {
  useEffect(() => {
    const block = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-whatsapp]')) return;
      if (target.closest('a, button')) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener('click', block, true);
    return () => document.removeEventListener('click', block, true);
  }, []);

  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <div className="relative bg-white min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/reimpulso" element={<Reimpulso />} />
            <Route path="/que-hacemos" element={<QueHacemos />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/equipo" element={<Equipo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightPost />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
          </Routes>
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
