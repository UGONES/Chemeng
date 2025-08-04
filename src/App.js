import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./compontents/header";
import Footer from './compontents/Footer';
import Loader from './compontents/Loader';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Vision from "./pages/extra/Vision";
import Legals from './pages/extra/Legal';
import OrganizationChart from './pages/extra/Organization';
import TheExperts from './pages/extra/Experts';
import Consulting from './pages/extra/Consultation';
import Testing from './pages/extra/Testing';
import Training from './pages/extra/Training';
import './App.css'; // Import your main CSS file
import './styles/globals.css'; // Ensure Tailwind CSS is imported


function App() {
  return (
    <Router>
      <Loader />
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/vision-mission" element={<Vision />} />
          <Route path="/about/legals" element={<Legals />} />
          <Route path="/about/organization-chart" element={<OrganizationChart />} />
          <Route path="/about/the-experts" element={<TheExperts />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/testing" element={<Testing />} />
          <Route path="/services/training" element={<Training />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
