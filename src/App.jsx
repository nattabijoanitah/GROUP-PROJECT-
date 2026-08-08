import React, { useEffect } from 'react';
import { getEvents } from './api/api';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

// Public components
import Navbar from './components/Navbar';
import EventsMarquee from './components/EventsMarquee';
import Footer from './components/Footer';

// Public pages
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

// Admin pages
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminEvents from './admin/pages/AdminEvents';
import AdminSermons from './admin/pages/AdminSermons';
import AdminGallery from './admin/pages/AdminGallery';
import AdminPages from './admin/pages/AdminPages';
import AdminPrayerRequests from './admin/pages/AdminPrayerRequests';
import AdminMessages from './admin/pages/AdminMessages';

// Admin layout
import AdminLayout from './admin/components/AdminLayout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PublicLayout() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
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
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/give" element={<Give />} />
          <Route path="/pastor" element={<PastorMessage />} />
          <Route path="/services" element={<ChurchServices />} />
          <Route
            path="/admin/prayer-requests"
            element={
              <AdminLayout>
                <AdminPrayerRequests />
              </AdminLayout>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

function AdminRoutes() {
  return (
    <Routes>
      {/* Admin Login */}
      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* Dashboard */}
      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      {/* Events */}
      <Route
        path="/admin/events"
        element={
          <AdminLayout>
            <AdminEvents />
          </AdminLayout>
        }
      />

      {/* Sermons */}
      <Route
        path="/admin/sermons"
        element={
          <AdminLayout>
            <AdminSermons />
          </AdminLayout>
        }
      />

      {/* Gallery */}
      <Route
        path="/admin/gallery"
        element={
          <AdminLayout>
            <AdminGallery />
          </AdminLayout>
        }
      />

      {/* Pages */}
      <Route
        path="/admin/pages"
        element={
          <AdminLayout>
            <AdminPages />
          </AdminLayout>
        }
      />

      {/* Prayer Requests */}
      <Route
        path="/admin/prayer-requests"
        element={
          <AdminLayout>
            <AdminPrayerRequests />
          </AdminLayout>
        }
      />

      {/* Messages */}
      <Route
        path="/admin/messages"
        element={
          <AdminLayout>
            <AdminMessages />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

function AppContent() {
  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith('/admin');

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-light)',
      }}
    >
      <ScrollToTop />

      {isAdminRoute ? (
        <AdminRoutes />
      ) : (
        <PublicLayout />
      )}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    getEvents()
      .then((data) => {
        console.log('BACKEND EVENTS:', data);
      })
      .catch((error) => {
        console.error(
          'BACKEND CONNECTION ERROR:',
          error
        );
      });
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}
