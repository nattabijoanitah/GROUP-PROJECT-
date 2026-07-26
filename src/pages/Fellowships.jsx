import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fellowshipsData } from '../data/churchData';
import { Calendar, User, BookOpen, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import heroImg from '../assets/about_gathering.png';

export default function Fellowships() {
  const { type } = useParams();
  const [data, setData] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  // Get dynamic fellowship data when parameter changes
  useEffect(() => {
    if (type && fellowshipsData[type]) {
      setData(fellowshipsData[type]);
    } else {
      // Default to youth if invalid route
      setData(fellowshipsData.youth);
    }
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '' });
  }, [type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.trim()) {
      setSubmitting(true);
      // Save application
      const joins = JSON.parse(localStorage.getItem('fellowship_joins') || '[]');
      joins.push({
        fellowship: type,
        ...form,
        date: new Date().toISOString()
      });
      localStorage.setItem('fellowship_joins', JSON.stringify(joins));
      
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '' });
      }, 1500);
    }
  };

  if (!data) return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading Fellowship Details...</div>;

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero header */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '6rem 0 4rem 0',
          textAlign: 'center',
          color: 'var(--text-light)',
          borderBottom: '1px solid var(--border-color)'
        }}
      >
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
            {data.title}
          </h1>
          <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--text-muted)' }}>
            "{data.motto}"
          </p>
        </div>
      </section>

      {/* 2. Side-By-Side Nav Selector and Content */}
      <section className="dark-section section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'flex-start' }} className="fellowship-layout">
            
            {/* Sidebar Selector */}
            <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem', fontSize: '1.2rem' }}>
                All Fellowships
              </h4>
              <Link
                to="/fellowships/men"
                className={`sidebar-link ${type === 'men' ? 'active-sidebar' : ''}`}
              >
                <span>Men of Honor</span> <ChevronRight size={16} />
              </Link>
              <Link
                to="/fellowships/women"
                className={`sidebar-link ${type === 'women' ? 'active-sidebar' : ''}`}
              >
                <span>Daughters of Destiny</span> <ChevronRight size={16} />
              </Link>
              <Link
                to="/fellowships/youth"
                className={`sidebar-link ${type === 'youth' ? 'active-sidebar' : ''}`}
              >
                <span>Firebrand Youth</span> <ChevronRight size={16} />
              </Link>
              <Link
                to="/fellowships/children"
                className={`sidebar-link ${type === 'children' ? 'active-sidebar' : ''}`}
              >
                <span>Ihema Kids</span> <ChevronRight size={16} />
              </Link>
            </div>

            {/* Central Information */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Overview */}
              <div>
                <span className="text-gold" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  Overview
                </span>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-light)', lineHeight: 1.7 }}>
                  {data.overview}
                </p>
              </div>

              {/* Schedule and Leadership details side-by-side */}
              <div className="grid-2" style={{ gap: '2rem' }}>
                {/* Meeting time */}
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                  <Calendar size={24} className="text-gold" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: 'var(--text-light)', fontWeight: 600, marginBottom: '0.25rem' }}>Meeting Schedule</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{data.schedule}</p>
                  </div>
                </div>

                {/* Coordinator */}
                <div style={{ display: 'flex', gap: '1rem', padding: '1.5rem', backgroundColor: 'var(--bg-card-dark)', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                  <User size={24} className="text-gold" style={{ flexShrink: 0 }} />
                  <div>
                    <h4 style={{ color: 'var(--text-light)', fontWeight: 600, marginBottom: '0.25rem' }}>Fellowship Coordinator</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{data.leaderName}</p>
                  </div>
                </div>
              </div>

              {/* Activities list */}
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.25rem' }}>
                  Key Activities & Scope
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }} className="activity-grid">
                  {data.activities.map((act, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.03)' }}>
                      <CheckCircle2 size={16} className="text-gold" />
                      <span style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>{act}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Join Form inside page */}
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem', marginTop: '1rem' }}>
                <div className="glass-card" style={{ padding: '2.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '0.5rem' }}>
                    Connect with {data.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Interested in attending our next gathering? Submit your info to receive SMS/Email updates about schedule changes and special events.
                  </p>

                  {submitted ? (
                    <div style={{ color: 'var(--accent-gold)', backgroundColor: 'rgba(230, 200, 117, 0.1)', padding: '1rem', borderRadius: '4px', textAlign: 'center' }}>
                      <strong>Thank you!</strong> You have successfully registered for updates. We look forward to fellowshiping with you.
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="grid-3" style={{ gap: '1rem', marginBottom: 0 }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="John Doe"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label>Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="john@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                          />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label>Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            placeholder="+1 (555) 000-0000"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <button type="submit" disabled={submitting} className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
                        {submitting ? 'Registering...' : 'Register for Updates'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <style>{`
        .sidebar-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.85rem 1rem;
          color: var(--text-muted);
          border-radius: 4px;
          transition: all 0.2s;
          border-left: 2px solid transparent;
        }
        .sidebar-link:hover {
          color: var(--accent-gold);
          background-color: rgba(255,255,255,0.02);
          border-left-color: var(--accent-gold);
          padding-left: 1.25rem;
        }
        .active-sidebar {
          color: var(--accent-gold) !important;
          background-color: rgba(230, 200, 117, 0.08) !important;
          border-left-color: var(--accent-gold) !important;
          font-weight: 600;
        }
        @media (min-width: 1024px) {
          .fellowship-layout {
            grid-template-columns: 280px 1fr !important;
          }
          .activity-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
