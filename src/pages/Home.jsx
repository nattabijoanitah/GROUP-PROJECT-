import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, HeartHandshake, Calendar, ShieldCheck, Flame, Compass } from 'lucide-react';
import { ministriesData, sermonsData } from '../data/churchData';

// Image references
import heroImg from '../assets/about ihema.jpg';
import welcomeImg from '../assets/about ihema.jpg';
import sanctuaryImg from '../assets/image (1).png';

export default function Home() {
  const [showPrayerModal, setShowPrayerModal] = useState(false);
  const [prayerForm, setPrayerForm] = useState({ name: '', email: '', phone: '', request: '' });
  const [submitted, setSubmitted] = useState(false);

  // Get first 3 ministries for preview
  const featuredMinistries = ministriesData.slice(0, 3);
  // Get first 3 sermons for preview
  const latestSermons = sermonsData.slice(0, 3);

  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    if (prayerForm.request.trim()) {
      const prayers = JSON.parse(localStorage.getItem('prayer_requests') || '[]');
      prayers.push({ ...prayerForm, date: new Date().toISOString() });
      localStorage.setItem('prayer_requests', JSON.stringify(prayers));
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowPrayerModal(false);
        setPrayerForm({ name: '', email: '', phone: '', request: '' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          height: 'calc(100vh - 80px)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center',
          color: 'var(--text-light)',
          overflow: 'hidden',
          backgroundColor: '#0b1120'
        }}
      >
        {/* Background YouTube Video */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '56.25vw', // maintains 16:9 ratio based on viewport width
            minHeight: '100%',
            minWidth: '177.78vh', // maintains 16:9 ratio based on viewport height
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            pointerEvents: 'none'
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/VLtxJU9A3Uc?autoplay=1&mute=1&loop=1&playlist=VLtxJU9A3Uc&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3"
            title="Background Video"
            allow="autoplay; encrypted-media"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(11, 17, 32, 0.85)',
            zIndex: 1
          }}
        />

        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', zIndex: 2, position: 'relative' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-gold)', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '1rem' }}>
            Welcome to Ihema Christian Fellowship International
          </span>
          <h1 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            EXPERIENCE THE PRESENCE OF GOD
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: 300 }}>
            Join a family of believers dedicated to worship, the study of God's Word, and showing Christ's love to our world. We believe in family restoration, spiritual growth, and power-filled fellowship.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
            <Link to="/join" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Join Our Service <ArrowRight size={16} />
            </Link>
            <button onClick={() => setShowPrayerModal(true)} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HeartHandshake size={16} /> Request Prayer
            </button>
          </div>
        </div>

        {/* Scroll indicator micro-animation */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.7, zIndex: 2 }}>
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Scroll Down</span>
          <div style={{ width: '20px', height: '35px', borderRadius: '10px', border: '2px solid var(--text-light)', display: 'flex', padding: '4px' }}>
            <div style={{ width: '4px', height: '8px', borderRadius: '2px', backgroundColor: 'var(--accent-gold)' }} className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* 2. Sanctuary Section */}
      <section className="light-section section-padding">
        <div className="container">
          <div className="grid-2">
            {/* Image Left */}
            <div style={{ position: 'relative' }}>
              <div style={{ border: '2px solid var(--accent-gold)', borderRadius: '8px', overflow: 'hidden', padding: '0.5rem', backgroundColor: '#fff' }}>
                <img
                  src={sanctuaryImg}
                  alt="Church sanctuary layout"
                  style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block', objectFit: 'cover' }}
                />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1.5rem',
                  right: '-1.5rem',
                  backgroundColor: 'var(--bg-dark)',
                  color: 'var(--accent-gold)',
                  padding: '1.5rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-lg)',
                  display: 'none'
                }}
                className="welcome-badge"
              >
                <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', display: 'block', fontWeight: 'bold' }}>Est. 1998</span>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-light)' }}>Years of Impact</span>
              </div>
            </div>

            {/* Text Right */}
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Our Sanctuary
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                WELCOME TO A SANCTUARY OF FAITH AND FAMILY
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.25rem' }}>
                At Ihema Christian Fellowship International, we provide a peaceful home where everyone is treated like family. Our services are filled with passionate worship, bible-based preaching, and warm fellowships that will nurture your spiritual life and that of your loved ones.
              </p>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.5rem' }}>
                Whether you are seeking answers, looking for a church family, or wanting to activate your spiritual callings, we welcome you with open arms.
              </p>
              
              <div style={{ padding: '1.25rem', backgroundColor: '#f0ede4', borderLeft: '4px solid var(--accent-gold)', borderRadius: '0 4px 4px 0' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-dark)', fontSize: '1rem', fontWeight: 500 }}>
                  "We believe that a church is not a building, but a community of believers growing together in Christ."
                </p>
              </div>

              <Link to="/about" className="btn btn-dark" style={{ marginTop: '2rem' }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip */}
      <section style={{ backgroundColor: '#070b16', borderY: '1px solid var(--border-color)', padding: '3rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              textAlign: 'center'
            }}
            className="stats-grid"
          >
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>15+</h3>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Vibrant Ministries</span>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>5000+</h3>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Total Members</span>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>24+</h3>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Global Missions</span>
            </div>
            <div>
              <h3 style={{ fontSize: '3rem', color: 'var(--accent-gold)', fontWeight: 'bold' }}>120+</h3>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>Workers in Fellowship</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Ministries Section */}
      <section className="dark-section section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
              Our Fellowships
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
              OUR VIBRANT MINISTRIES
            </h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Explore our core groupings and find a place to connect, fellowship, and serve. There is a place for everyone here at Ihema.
            </p>
          </div>

          <div className="grid-3">
            {featuredMinistries.map((min, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(230, 200, 117, 0.25)'
                }}
              >
                <div style={{
                  height: '180px',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundColor: '#070b16'
                }}>
                  <img
                    src={min.image}
                    alt={min.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="ministry-banner-img"
                  />
                </div>
                <div style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--accent-gold)',
                    marginBottom: '0.75rem',
                    fontSize: '1.35rem',
                    letterSpacing: '0.01em'
                  }}>
                    {min.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1.5rem',
                    flex: 1,
                    lineHeight: 1.6
                  }}>
                    {min.shortDesc}
                  </p>
                  <Link
                    to="/ministries"
                    className="btn btn-secondary"
                    style={{
                      padding: '0.6rem 1.25rem',
                      fontSize: '0.85rem',
                      width: 'fit-content',
                      border: '2px solid var(--text-light)'
                    }}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/ministries" className="btn btn-primary">
              View All Ministries
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Latest Sermons Section */}
      <section className="light-section section-padding">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '1.5rem' }}>
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Word of God
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: 0 }}>
                LATEST SERMONS
              </h2>
            </div>
            <Link to="/sermons" className="btn btn-dark">
              Listen to All Messages
            </Link>
          </div>

          <div className="grid-3">
            {latestSermons.map((sermon, idx) => (
              <div
                key={idx}
                className="light-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div style={{
                  height: '180px',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#f3f4f6'
                }}>
                  <img
                    src={sermon.image}
                    alt={sermon.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="sermon-img"
                  />
                  <Link
                    to="/sermons"
                    style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      right: '1.25rem',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-gold)',
                      color: 'var(--bg-dark)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 20px rgba(230, 200, 117, 0.25)',
                      transition: 'transform 0.3s ease',
                      fontWeight: 'bold'
                    }}
                    className="play-btn"
                  >
                    <Play size={20} fill="currentColor" style={{ marginLeft: '2px' }} />
                  </Link>
                </div>
                <div style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                    display: 'block',
                    marginBottom: '0.65rem',
                    letterSpacing: '0.05em'
                  }}>
                    {sermon.category} • {sermon.date}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--text-dark)',
                    fontSize: '1.35rem',
                    marginBottom: '0.75rem',
                    flex: 1,
                    letterSpacing: '0.01em',
                    lineHeight: 1.3
                  }}>
                    {sermon.title}
                  </h3>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-dark-muted)',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    paddingTop: '0.85rem'
                  }}>
                    By {sermon.preacher}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prayer Request Banner */}
      <section style={{ backgroundColor: 'var(--bg-card-dark)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }} className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>
            HOW CAN WE PRAY FOR YOU TODAY?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
            "For where two or three are gathered together in My name, I am there in the midst of them." (Matthew 18:20). Our prayer intercessors are standing by to lift your burdens in prayer.
          </p>
          <button onClick={() => setShowPrayerModal(true)} className="btn btn-primary" style={{ padding: '0.85rem 2rem' }}>
            Submit a Prayer Request
          </button>
        </div>
      </section>

      {/* 7. Prayer Modal */}
      {showPrayerModal && (
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
              onClick={() => setShowPrayerModal(false)}
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
            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Request Prayer
            </h3>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Request Submitted!</h4>
                <p style={{ color: 'var(--text-light)' }}>Our prayer intercessors will lift your requests up to the Lord. God bless you.</p>
              </div>
            ) : (
              <form onSubmit={handlePrayerSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    value={prayerForm.name}
                    onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={prayerForm.email}
                    onChange={(e) => setPrayerForm({ ...prayerForm, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={prayerForm.phone}
                    onChange={(e) => setPrayerForm({ ...prayerForm, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Your Prayer Request</label>
                  <textarea
                    rows="4"
                    className="form-control"
                    placeholder="Share your burden with us..."
                    value={prayerForm.request}
                    onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Styles for scroll indicator */}
      <style>{`
        @keyframes scrollDotMove {
          0% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(14px); opacity: 0.3; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .scroll-dot {
          animation: scrollDotMove 2s infinite ease-in-out;
        }
        @media (min-width: 768px) {
          .welcome-badge {
            display: block !important;
          }
          .stats-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </div>
  );
}
