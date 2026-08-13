import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'framer-motion';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ClientSituation from './sections/ClientSituation';
import AboutIntro from './sections/AboutIntro';
import ReimpulsoFlagshipCards from './sections/ReimpulsoFlagshipCards';
import TeamPreview from './sections/TeamPreview';
import CasosExito from './sections/CasosExito';
import InsightsTeaser from './sections/InsightsTeaser';
import SeoMeta from './components/SeoMeta';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieConsent from './components/CookieConsent';

import Insights from './pages/Insights';
import InsightPost from './pages/InsightPost';
import Legal from './pages/Legal';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import EnConstruccion from './pages/EnConstruccion';

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
      <CasosExito />
      <ClientSituation />
      <InsightsTeaser />
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
              <Route path="/reimpulso" element={<EnConstruccion section="KOOB Reimpulso" url="https://koobadvisory.com/reimpulso" />} />
              <Route path="/que-hacemos" element={<EnConstruccion section="Qué hacemos" url="https://koobadvisory.com/que-hacemos" />} />
              <Route path="/quienes-somos" element={<EnConstruccion section="Quiénes somos" url="https://koobadvisory.com/quienes-somos" />} />
              <Route path="/equipo" element={<EnConstruccion section="Equipo de consultores" url="https://koobadvisory.com/equipo" />} />
              <Route path="/contacto" element={<EnConstruccion section="Contacto" url="https://koobadvisory.com/contacto" />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:slug" element={<InsightPost />} />
              <Route path="/podcast" element={<EnConstruccion section="Podcast" url="https://koobadvisory.com/podcast" />} />
              <Route path="/legal" element={<Legal />} />
              <Route path="/privacidad" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
            </Routes>
            <WhatsAppButton />
            <CookieConsent />
          </div>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;
