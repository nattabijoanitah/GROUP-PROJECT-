import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Check, User, HeartHandshake } from 'lucide-react';
import heroImg from '../assets/about ihema.jpg';

export default function JoinUs() {
  const [activeForm, setActiveForm] = useState('membership'); // 'membership', 'volunteer', 'contact'
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', details: '' });

  // Volunteer roles list
  const volunteerRoles = [
    'Church Media & Technical Team',
    'Worship Choir & Band',
    'Ushering & Welcoming Committee',
    'Children\'s Sunday School Teacher',
    'Prayer Intercessors Group',
    'Community Outreach & Missions'
  ];
  const [selectedRoles, setSelectedRoles] = useState([]);

  const toggleRole = (role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter(r => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      const collectionName = `${activeForm}_submissions`;
      const submissions = JSON.parse(localStorage.getItem(collectionName) || '[]');
      
      const payload = {
        ...formData,
        roles: activeForm === 'volunteer' ? selectedRoles : undefined,
        date: new Date().toISOString()
      };
      
      submissions.push(payload);
      localStorage.setItem(collectionName, JSON.stringify(submissions));
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', details: '' });
        setSelectedRoles([]);
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
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
            Join our membership, sign up as a volunteer worker, or send us a message. There is always room for you.
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
                <li><strong>Sunday Celebration:</strong> 9:00 AM & 11:00 AM</li>
                <li><strong>Tuesday Bible Study:</strong> 6:30 PM (Online/In-person)</li>
                <li><strong>Friday Breakthrough Night:</strong> 9:00 PM (Main Sanctuary)</li>
              </ul>
            </div>

            {/* In-Person Address */}
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-color-light)', padding: '2rem', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}><MapPin size={28} /></div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1rem', fontSize: '1.35rem' }}>Main Sanctuary</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                Ntebetebe, Bweyogerere, Wakiso District, Uganda
              </p>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Get Directions in Google Maps</span>
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
        </div>
      </section>

      {/* 3. Interactive Toggled Form Area */}
      <section className="dark-section section-padding">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Form Tabs Selector */}
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', marginBottom: '3rem', backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <button
              onClick={() => { setActiveForm('membership'); setSubmitted(false); }}
              style={{
                flex: 1,
                padding: '1.25rem 0.5rem',
                border: 'none',
                background: activeForm === 'membership' ? 'rgba(230,200,117,0.1)' : 'transparent',
                color: activeForm === 'membership' ? 'var(--accent-gold)' : 'var(--text-muted)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.95rem',
                borderBottom: activeForm === 'membership' ? '2px solid var(--accent-gold)' : 'none',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <User size={16} /> Become a Member
            </button>
            
            <button
              onClick={() => { setActiveForm('volunteer'); setSubmitted(false); }}
              style={{
                flex: 1,
                padding: '1.25rem 0.5rem',
                border: 'none',
                background: activeForm === 'volunteer' ? 'rgba(230,200,117,0.1)' : 'transparent',
                color: activeForm === 'volunteer' ? 'var(--accent-gold)' : 'var(--text-muted)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.95rem',
                borderBottom: activeForm === 'volunteer' ? '2px solid var(--accent-gold)' : 'none',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <HeartHandshake size={16} /> Volunteer as Worker
            </button>

            <button
              onClick={() => { setActiveForm('contact'); setSubmitted(false); }}
              style={{
                flex: 1,
                padding: '1.25rem 0.5rem',
                border: 'none',
                background: activeForm === 'contact' ? 'rgba(230,200,117,0.1)' : 'transparent',
                color: activeForm === 'contact' ? 'var(--accent-gold)' : 'var(--text-muted)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.95rem',
                borderBottom: activeForm === 'contact' ? '2px solid var(--accent-gold)' : 'none',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
            >
              <Mail size={16} /> Send a Message
            </button>
          </div>

          {/* Actual Form Container */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', color: 'var(--accent-gold)', padding: '2rem 0' }}>
                <Check size={48} style={{ margin: '0 auto 1.5rem auto', display: 'block' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>Submission Received!</h3>
                <p style={{ color: 'var(--text-light)' }}>
                  {activeForm === 'membership' && 'Thank you for choosing to be part of the Ihema family! The membership board will register details and contact you.'}
                  {activeForm === 'volunteer' && 'Thank you for offering your skills for the kingdom! The department coordinator will email you soon.'}
                  {activeForm === 'contact' && 'Thank you for reaching out to us! We have forwarded your message to the administration office.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                
                {/* Form descriptions */}
                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.6rem' }}>
                  {activeForm === 'membership' && 'Membership Enrollment Form'}
                  {activeForm === 'volunteer' && 'Volunteer Worker Application'}
                  {activeForm === 'contact' && 'General Contact Inquiry'}
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

                {/* Conditional Fields: Volunteer Roles Checkbox List */}
                {activeForm === 'volunteer' && (
                  <div className="form-group" style={{ marginY: '1.5rem' }}>
                    <label style={{ marginBottom: '1rem', display: 'block' }}>Select departments you want to volunteer in:</label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }} className="role-checkboxes">
                      {volunteerRoles.map((role) => (
                        <div
                          key={role}
                          onClick={() => toggleRole(role)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            backgroundColor: selectedRoles.includes(role) ? 'rgba(230, 200, 117, 0.1)' : 'rgba(255,255,255,0.02)',
                            border: '1px solid',
                            borderColor: selectedRoles.includes(role) ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{
                            width: '16px',
                            height: '16px',
                            border: '1px solid var(--accent-gold)',
                            borderRadius: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: selectedRoles.includes(role) ? 'var(--accent-gold)' : 'transparent'
                          }}>
                            {selectedRoles.includes(role) && <Check size={12} style={{ color: 'var(--bg-dark)' }} />}
                          </div>
                          <span style={{ fontSize: '0.9rem', color: selectedRoles.includes(role) ? 'var(--accent-gold)' : 'var(--text-light)' }}>
                            {role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Details TextArea */}
                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                  <label>
                    {activeForm === 'membership' && 'Tell us a bit about your family background or spiritual journey'}
                    {activeForm === 'volunteer' && 'Why are you interested in these departments? (List relevant skills)'}
                    {activeForm === 'contact' && 'Write your query or prayer request details'}
                  </label>
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
        @media (min-width: 768px) {
          .role-checkboxes {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
