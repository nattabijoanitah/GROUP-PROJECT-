import React from 'react';
import logoImg from '../assets/ark2-removebg-preview.png';
import pastorImg from '../assets/prayer-ministry.jpg';
import worshipMinistryImg from '../assets/worship-ministry.jpg';
import sacredImg from '../assets/sacred.jpg';
import aboutIhemaImg from '../assets/about-ihema.jpg';
import { ShieldAlert, Eye, Target, BookOpen, Heart, Flame } from 'lucide-react';

export default function About() {
  return (
    <div className="fade-in" style={{ paddingTop: '116px' }}>
      {/* 1. Branding Header */}
      <section style={{ backgroundColor: '#070b16', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div style={{ textAlign: 'center' }}>
            <img src={logoImg} alt="Ihema Gold Crest Logo" style={{ height: '120px', width: 'auto', marginBottom: '1.5rem' }} />
            <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '0.05em', marginBottom: '2.5rem' }}>
              Ihema Christian Fellowship International
            </h2>
          </div>
          <div className="grid-2">
            <div style={{ color: 'var(--text-light)', textAlign: 'left' }}>
              <p style={{ marginBottom: '1rem', color: 'var(--text-light)' }}>
                <strong>Ihema</strong> means "a tent" — a place of gathering, shelter, and fellowship. In the Bible, the tent of meeting was where God met with His people (Exodus 33:7-11), a reminder that He desires to dwell among us and bring hope, healing, and restoration.
              </p>
              <p style={{ color: 'var(--text-light)' }}>
                Ihema Christian Fellowship International is a Christ-centered ministry committed to preaching the Gospel, transforming lives, and building a community rooted in faith, love, and the Word of God — a spiritual home where the weary find encouragement and the broken find restoration.
              </p>
            </div>
            <img
              src={aboutIhemaImg}
              alt="Ihema Christian Fellowship International congregation gathered in worship"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '420px',
                objectFit: 'cover',
                borderRadius: '8px',
                border: '2px solid var(--accent-gold)',
                display: 'block'
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. About Ihema */}
      <section className="light-section section-padding">
        <div className="container">
          <div className="grid-2">
            {/* Text Left */}
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Our Story
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                ABOUT IHEMA
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.25rem' }}>
                We welcome people from all walks of life to encounter God, grow in faith, and experience the love of Christ — through preaching, evangelism, discipleship, baptism, and worship.
              </p>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.5rem' }}>
                We also serve families through Christian marriage counseling and wedding ceremonies, helping couples build godly, lasting relationships.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', border: '1px solid rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '4px', backgroundColor: '#f9f9f9', marginTop: '1.5rem' }}>
                <ShieldAlert size={28} className="text-gold" style={{ flexShrink: 0 }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)', margin: 0 }}>
                  We hold high the ancient landmarks of scriptures, preaching salvation, sanctification, deliverance, and family healing.
                </p>
              </div>
            </div>

            {/* Image Right */}
            <div>
              <img
                src={worshipMinistryImg}
                alt="Church community worship service"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Quote Block */}
      <section style={{ backgroundColor: 'var(--bg-card-dark)', padding: '5rem 0', borderY: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <span style={{ fontSize: '5rem', lineHeight: '1', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', display: 'block', height: '40px' }}>
            “
          </span>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', color: 'var(--text-light)', fontStyle: 'italic', letterSpacing: '0.02em', marginBottom: '1.5rem', lineHeight: '1.4' }}>
            Our desire is to see lives transformed by the Gospel, families strengthened, and communities changed through the power of Jesus Christ.
          </p>
          <span style={{ fontSize: '5rem', lineHeight: '1', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', display: 'block', height: '40px' }}>
            ”
          </span>
        </div>
      </section>

      {/* 4. Vision & Mission Cards */}
      <section className="dark-section section-padding">
        <div className="container">
          <div className="grid-2">
            {/* Vision */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(230, 200, 117, 0.25)'
              }}
            >
              <div
                style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(230, 200, 117, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(230, 200, 117, 0.4)',
                }}
              >
                <Eye size={32} className="text-gold" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--accent-gold)',
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  OUR VISION
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  "To become a Christ-centered ministry that transforms lives by spreading the Gospel, guiding people into Christian faith, baptizing believers, discipling communities, and restoring the sanctity of marriage by helping couples receive Christian blessings and encouraging godly unions."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div
              className="glass-card"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                border: '1px solid rgba(230, 200, 117, 0.25)'
              }}
            >
              <div
                style={{
                  width: '65px',
                  height: '65px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(230, 200, 117, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(230, 200, 117, 0.4)',
                }}
              >
                <Target size={32} className="text-gold" />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--accent-gold)',
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.05em'
                  }}
                >
                  OUR MISSION
                </h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  "To proclaim the Gospel of Jesus Christ by providing prayer and deliverance, promoting Christian education and discipleship, strengthening families, offering counselling and reconciliation, empowering communities through literacy and development programmes, and serving people with compassion to improve their spiritual, social, and economic well-being."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Sacred Traditions & Family Restoration */}
      <section className="light-section section-padding" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <div className="grid-2">
            {/* Image Left */}
            <div>
              <img
                src={sacredImg}
                alt="Pastors offering prayers and laying hands"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}
              />
            </div>

            {/* Bullet list right */}
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Restore & Nurture
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                SACRED TRADITIONS & FAMILY RESTORATION
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '2rem' }}>
                We believe that the family is God’s design to build a godly legacy. By restoring broken family altars and nurturing children in biblical truths, we can anchor society back to divine templates.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Uncompromised Biblical Teachings</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>We anchor all teachings strictly on the scriptures, fostering personal holiness and deep devotion.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <Flame size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Spiritual Healing & Deliverance</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>Through prayer and the Holy Spirit, we minister deliverance and healing to broken spirits.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}>
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-dark)', fontWeight: 600 }}>Family and Marriage Restoration</h4>
                    <p style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>Offering specialized counseling and fellowships to build loving, covenant marriages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Pastor's Welcome Message (Advanced) */}
      <section className="dark-section section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2">
            {/* Pastor bio text */}
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Senior Pastor's Message
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                A WARM WELCOME FROM THE PULPIT
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                "Greetings to you in the precious name of our Lord and Savior Jesus Christ! I am thrilled that you are exploring Ihema Christian Fellowship online. My wife and I, alongside the entire church board, welcome you."
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                "Our prayer for you is that you experience the fullness of God's presence, discover the unique spiritual gifts given to you, and walk in total favor. We invite you to join us this Sunday for an encounter with the Holy Ghost."
              </p>
              
              <div style={{ marginTop: '2rem' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--accent-gold)', display: 'block', fontStyle: 'italic' }}>
                  Pastor Abraham Ihema
                </span>
                <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  Senior Pastor, Ihema Fellowship Int'l
                </span>
              </div>
            </div>

            {/* Pastor photo */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', maxWidth: '350px', width: '100%' }}>
                <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', right: '1rem', bottom: '1rem', border: '2px solid var(--accent-gold)', borderRadius: '8px' }}></div>
                <img
                  src={pastorImg}
                  alt="Pastor Abraham Ihema"
                  style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 2, borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
