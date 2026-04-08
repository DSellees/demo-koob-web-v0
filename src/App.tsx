import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Methodology from './sections/Methodology';
import Results from './sections/Results';
import Team from './sections/Team';
import ContactCTA from './sections/ContactCTA';
import Footer from './sections/Footer';

import Reimpulso from './pages/Reimpulso';
import QuienesSomos from './pages/QuienesSomos';
import Equipo from './pages/Equipo';

import './App.css';

// Landing Page Component
const LandingPage = () => (
  <>
    <Navigation />
    <main>
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Results />
      <Team />
      <ContactCTA />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="relative bg-white min-h-screen">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/reimpulso" element={<Reimpulso />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/equipo" element={<Equipo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
