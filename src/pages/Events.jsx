import React, { useState } from 'react';
import { eventsData } from '../data/churchData';
import EventCard from '../components/EventCard';
import { Check, Info } from 'lucide-react';
import heroImg from '../assets/church-hero.jpg';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [regForm, setRegForm] = useState({ name: '', email: '', phone: '', tickets: '1' });
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Conference', 'Youth', 'Prayer Night', 'Marriage'];

  const filteredEvents = activeTab === 'All'
    ? eventsData
    : eventsData.filter(e => e.category.toLowerCase() === activeTab.toLowerCase());

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (regForm.name.trim()) {
      const registrations = JSON.parse(localStorage.getItem('event_registrations') || '[]');
      registrations.push({
        eventId: selectedEvent.id,
        eventTitle: selectedEvent.title,
        ...regForm,
        date: new Date().toISOString()
      });
      localStorage.setItem('event_registrations', JSON.stringify(registrations));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedEvent(null);
        setRegForm({ name: '', email: '', phone: '', tickets: '1' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '116px' }}>
      {/* 1. Hero */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0 5rem 0',
          textAlign: 'center',
          color: 'var(--text-light)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            UPCOMING EVENTS
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            Join our corporate assemblies, special conferences, and fellowship outings. Save the date and invite a friend.
          </p>
        </div>
      </section>

      {/* 2. Tabs and Grid */}
      <section className="dark-section section-padding">
        <div className="container">
          {/* Tabs bar */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  border: '1px solid',
                  borderColor: activeTab === cat ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  backgroundColor: activeTab === cat ? 'rgba(230,200,117,0.1)' : 'transparent',
                  color: activeTab === cat ? 'var(--accent-gold)' : 'var(--text-muted)',
                  borderRadius: '4px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid listing */}
          <div className="grid-3">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={(ev) => setSelectedEvent(ev)}
              />
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              No events scheduled in this category at the moment. Please check back later.
            </div>
          )}
        </div>
      </section>

      {/* 3. Info Alert */}
      <section className="light-section section-padding" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container" style={{ maxWidth: '800px', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', backgroundColor: '#f0ede4', padding: '2rem', borderRadius: '8px' }}>
          <Info size={32} className="text-gold" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-serif)', fontSize: '1.25rem' }}>
              Special Notice on Online Streaming
            </h4>
            <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.95rem', margin: 0 }}>
              All our conferences and main services are broadcasted live on our YouTube channel. If you are unable to join us in-person due to distance, check our media tabs on service days to join the online stream.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Registration Modal */}
      {selectedEvent && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 11, 22, 0.85)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '1rem'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '2.5rem',
              position: 'relative',
              animation: 'fadeIn 0.3s forwards'
            }}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.5rem'
              }}
            >
              &times;
            </button>

            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '0.5rem', textAlign: 'center' }}>
              Register for Event
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'center', marginBottom: '1.5rem' }}>
              Event: <strong>{selectedEvent.title}</strong>
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0', color: 'var(--accent-gold)' }}>
                <Check size={36} style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Registration Successful!</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>We have sent a confirmation details details to your email. See you there!</p>
              </div>
            ) : (
              <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={regForm.name}
                    onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="john@example.com"
                    value={regForm.email}
                    onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter phone number"
                    value={regForm.phone}
                    onChange={(e) => setRegForm({ ...regForm, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Number of Seats</label>
                  <select
                    className="form-control"
                    value={regForm.tickets}
                    onChange={(e) => setRegForm({ ...regForm, tickets: e.target.value })}
                    style={{ backgroundColor: 'var(--bg-card-dark)' }}
                  >
                    <option value="1">1 Seat</option>
                    <option value="2">2 Seats</option>
                    <option value="3">3 Seats</option>
                    <option value="4">4 Seats</option>
                    <option value="5">5+ Seats</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Confirm Registration
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
