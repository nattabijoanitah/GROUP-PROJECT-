import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsMarquee from './components/EventsMarquee';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Ministries from './pages/Ministries';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Testimonies from './pages/Testimonies';
import JoinUs from './pages/JoinUs';
import Give from './pages/Give';
import PastorMessage from './pages/PastorMessage';
import ChurchServices from './pages/ChurchServices';

// Scroll to top on every navigation change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-light)' }}>
        <Navbar />
        <EventsMarquee />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/join" element={<JoinUs />} />
            <Route path="/give" element={<Give />} />
            <Route path="/pastor" element={<PastorMessage />} />
            <Route path="/services" element={<ChurchServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
