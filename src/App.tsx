import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ClientSituation from './sections/ClientSituation';
import AboutIntro from './sections/AboutIntro';
import ReimpulsoFlagshipCards from './sections/ReimpulsoFlagshipCards';
import TeamPreview from './sections/TeamPreview';
import InsightsTeaser from './sections/InsightsTeaser';
import InsightsVariants from './sections/InsightsVariants';
import SeoMeta from './components/SeoMeta';
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
    <main className="bg-koob-beige">
      <Hero />
      <AboutIntro />
      <ReimpulsoFlagshipCards />
      <TeamPreview />
      <ClientSituation />
      <InsightsTeaser />
      <InsightsVariants />
      <ContactCTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
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
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
