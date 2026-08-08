import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import heroImg from '../assets/about-ihema.jpg';

export default function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      
      const payload = {
        ...formData,
        date: new Date().toISOString()
      };
      
      submissions.push(payload);
      localStorage.setItem('contact_submissions', JSON.stringify(submissions));
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', details: '' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '116px' }}>
      {/* 1. Hero Banner */}
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
            CONNECT WITH US
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            Reach out to us or visit us in person. There is always room for you at Ihema.
          </p>
        </div>
      </section>

      {/* 2. Service Times and Contacts strip */}
      <section className="light-section" style={{ padding: '4rem 0', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '2rem' }}>
            
            {/* Service times */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color-light)', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}><Clock size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.35rem' }}>Weekly Services</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>
                <li><strong>English Service:</strong> 9:00 AM – 11:00 AM</li>
                <li><strong>Main Service:</strong> 12:00 PM – 3:00 PM</li>
                <li><strong>Tuesday Bible Study:</strong> 6:30 PM (Online/In-person)</li>
                <li><strong>Prayer Night (Friday):</strong> 7:00 PM – 9:00 PM (Main Sanctuary)</li>
              </ul>
            </div>

            {/* In-Person Address */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color-light)', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}><MapPin size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.35rem' }}>Main Sanctuary</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Ntebetebe, Bweyogerere, Wakiso District, Uganda
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ntebetebe%2C+Bweyogerere%2C+Wakiso+District%2C+Uganda"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textDecoration: 'none' }}
              >
                Get Directions in Google Maps →
              </a>
            </div>

            {/* Quick Contacts */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color-light)', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}><Phone size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.35rem' }}>General Contacts</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', marginBottom: '0.5rem' }}>
                <strong>Phone:</strong> +0705 109 975
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', marginBottom: '0.5rem' }}>
                <strong>Email:</strong> ihemacfl018@gmail.com
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>
                <strong>Counseling Hours:</strong> Wed & Thurs 10am - 3pm
              </p>
            </div>

          </div>

          {/* Embedded Map */}
          <div style={{ marginTop: '3rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color-light)', boxShadow: 'var(--shadow-sm)' }}>
            <iframe
              title="Ihema Christian Fellowship International Location"
              src="https://www.google.com/maps?q=Ntebetebe,+Bweyogerere,+Wakiso+District,+Uganda&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 3. Contact Form Area */}
      <section className="dark-section section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>

          {/* Actual Form Container */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', color: 'var(--accent-gold)', padding: '2rem 0' }}>
                <Check size={48} style={{ margin: '0 auto 1.5rem auto', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>Submission Received!</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  Thank you for reaching out to us! We have forwarded your message to the administration office.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                
                {/* Form descriptions */}
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>
                  <Mail size={20} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                  General Contact Inquiry
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }} className="form-row-grid">
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                {/* Details TextArea */}
                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                  <label>Write your query or prayer request details</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Enter details..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Details
                </button>

              </form>
            )}
          </div>
          
        </div>
      </section>

      {/* Styled inline components */}
      <style>{`
        @media (max-width: 600px) {
          .form-row-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
