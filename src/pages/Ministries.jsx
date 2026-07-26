import React, { useState } from 'react';
import { Flame, Music, Sparkles, Baby, HeartHandshake, Shield, Heart, Compass, BookOpen, Clock, User, X, Check } from 'lucide-react';
import { ministriesData } from '../data/churchData';
import heroImg from '../assets/church_hero.png';

// Icon mapper helper
const IconMap = {
  Flame: Flame,
  Music: Music,
  Sparkles: Sparkles,
  Baby: Baby,
  HeartHandshake: HeartHandshake,
  Shield: Shield,
  Heart: Heart,
  Compass: Compass,
  BookOpen: BookOpen
};

export default function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = useState(null);
  const [joinForm, setJoinForm] = useState({ name: '', email: '', phone: '', comments: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleJoinSubmit = (e) => {
    e.preventDefault();
    if (joinForm.name.trim()) {
      const applications = JSON.parse(localStorage.getItem('ministry_joins') || '[]');
      applications.push({
        ministryId: selectedMinistry.id,
        ministryName: selectedMinistry.name,
        ...joinForm,
        date: new Date().toISOString()
      });
      localStorage.setItem('ministry_joins', JSON.stringify(applications));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedMinistry(null);
        setJoinForm({ name: '', email: '', phone: '', comments: '' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero Section */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0',
          textAlign: 'center',
          color: 'var(--text-light)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            OUR MINISTRIES
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            "For as we have many members in one body, but all the members do not have the same function, so we, being many, are one body in Christ." (Romans 12:4-5)
          </p>
        </div>
      </section>

      {/* 2. Grid of Ministries */}
      <section className="dark-section section-padding">
        <div className="container">
          <div className="grid-3">
            {ministriesData.map((min, idx) => {
              const MinistryIcon = IconMap[min.iconName] || BookOpen;
              return (
                <div
                  key={idx}
                  className="glass-card"
                  style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}
                >
                  {/* Photo Banner */}
                  <div style={{ height: '150px', width: '100%', position: 'relative' }}>
                    <img src={min.image} alt={min.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                    {/* Icon Circle overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-20px',
                        left: '1.5rem',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--accent-gold)',
                        color: 'var(--bg-dark)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-md)',
                        zIndex: 2
                      }}
                    >
                      <MinistryIcon size={20} />
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '2rem 1.5rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontSize: '1.35rem', marginBottom: '0.75rem', marginTop: '0.5rem' }}>
                      {min.name}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem', flex: 1 }}>
                      {min.shortDesc}
                    </p>
                    <button
                      onClick={() => setSelectedMinistry(min)}
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', width: '100%' }}
                    >
                      Learn More & Join
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="light-section section-padding" style={{ borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
            FIND YOUR PLACE TODAY
          </h2>
          <p style={{ color: 'var(--text-dark-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            Not sure where you fit in? Need counseling on how to leverage your spiritual callings? Speak to one of our department coordinators today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/join" className="btn btn-primary">Join a Fellowship</a>
            <a href="/join" className="btn btn-dark">Contact Leader</a>
          </div>
        </div>
      </section>

      {/* 4. Detailed Ministry Modal & Signup Form */}
      {selectedMinistry && (
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
              maxWidth: '650px',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '2.5rem',
              position: 'relative',
              animation: 'fadeIn 0.3s forwards'
            }}
          >
            <button
              onClick={() => setSelectedMinistry(null)}
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

            {/* Modal Title */}
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              {selectedMinistry.name}
            </h3>

            {/* Information Info Rows */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <User size={16} className="text-gold" />
                <span>Leader: <strong>{selectedMinistry.leader}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <Clock size={16} className="text-gold" />
                <span>Meets: <strong>{selectedMinistry.meetingTime}</strong></span>
              </div>
            </div>

            {/* Main Desc */}
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {selectedMinistry.longDesc}
            </p>

            {/* Application Signup Section */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
              <h4 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
                Sign Up for this Ministry
              </h4>
              {submitted ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', backgroundColor: 'rgba(230, 200, 117, 0.1)', padding: '1rem', borderRadius: '4px' }}>
                  <Check size={18} />
                  <span>Your request to join has been submitted! The coordinator will contact you shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleJoinSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="modal-form-grid">
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John Doe"
                        value={joinForm.name}
                        onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label>Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="john@example.com"
                        value={joinForm.email}
                        onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Phone Number (Optional)</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+1 (555) 000-0000"
                      value={joinForm.phone}
                      onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Comments / Spiritual background (Optional)</label>
                    <textarea
                      rows="2"
                      className="form-control"
                      placeholder="Why do you want to join?"
                      value={joinForm.comments}
                      onChange={(e) => setJoinForm({ ...joinForm, comments: e.target.value })}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                    Submit Registration
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 500px) {
          .modal-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
