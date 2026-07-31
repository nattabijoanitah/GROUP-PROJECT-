import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import logoImg from '../assets/ark2-removebg-preview.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // Mock save to local storage
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
      subscribers.push({ email, date: new Date().toISOString() });
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <footer style={{ backgroundColor: '#070b16', borderTop: '1px solid var(--border-color)', color: 'var(--text-light)', padding: '5rem 0 2rem 0' }}>
      <div className="container">
        <div className="grid-3" style={{ gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <img src={logoImg} alt="Ihema Logo" style={{ height: '40px', width: 'auto' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--accent-gold)', letterSpacing: '0.05em' }}>
                  IHEMA
                </span>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  Christian Fellowship
                </span>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Experiencing the power of God, changing lives, restoring families, and building communities of hope, faith, and love.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@ihemachristianfellowship2308" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.tiktok.com/@evas1970" className="social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/ministries" className="footer-link">Ministries</Link></li>
                <li><Link to="/services" className="footer-link">Church Services</Link></li>
                <li><Link to="/pastor" className="footer-link">Pastor's Message</Link></li>
                <li><Link to="/sermons" className="footer-link">Sermons</Link></li>
                <li><Link to="/events" className="footer-link">Events</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
                Fellowships
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <li><Link to="/fellowships/men" className="footer-link">Men</Link></li>
                <li><Link to="/fellowships/women" className="footer-link">Women</Link></li>
                <li><Link to="/fellowships/youth" className="footer-link">Youth</Link></li>
                <li><Link to="/fellowships/children" className="footer-link">Children</Link></li>
                <li><Link to="/give" className="footer-link">Give / Tithe</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '1.1rem', letterSpacing: '0.05em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <span>Ntebetebe, Bweyogerere, Wakiso District, Uganda</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Phone size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <span>+256 705 109 975</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Mail size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <span>ihemacfl018@gmail.com</span>
              </div>
            </div>

            {/* Newsletter form */}
            <h4 style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              Newsletter
            </h4>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', position: 'relative' }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 3rem 0.75rem 1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-light)',
                  borderRadius: '4px',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  bottom: 0,
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent-gold)',
                  cursor: 'pointer',
                  padding: '0 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
            {submitted && (
              <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: '0.5rem' }}>
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)' }} className="footer-bottom">
          <p>© {new Date().getFullYear()} Ihema Christian Fellowship International. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link to="/join" className="footer-link">Privacy Policy</Link>
            <Link to="/join" className="footer-link">Terms of Service</Link>
            <Link to="/join" className="footer-link">Contact Support</Link>
          </div>
        </div>
      </div>

      <style>{`
        .footer-link {
          color: var(--text-muted);
          transition: color 0.2s;
        }
        .footer-link:hover {
          color: var(--accent-gold);
        }
        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          color: var(--text-light);
          transition: all 0.2s;
        }
        .social-icon:hover {
          background-color: var(--accent-gold);
          color: var(--bg-dark);
          transform: translateY(-2px);
        }
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row !important;
          }
        }
      `}</style>
    </footer>
  );
}
