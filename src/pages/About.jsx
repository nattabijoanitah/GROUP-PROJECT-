import React from 'react';
import logoImg from '../assets/logo_gold.png';
import gatheringImg from '../assets/about_gathering.png';
import pastorImg from '../assets/pastor_welcome.png';
import { ShieldAlert, Eye, Target, Sparkles, BookOpen, Heart, Flame } from 'lucide-react';

export default function About() {
  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Branding Header */}
      <section style={{ backgroundColor: '#070b16', padding: '4rem 0 3rem 0', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <img src={logoImg} alt="Ihema Gold Crest Logo" style={{ height: '120px', width: 'auto', marginBottom: '1.5rem' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', textTransform: 'uppercase', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Ihema Christian Fellowship International
          </h2>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.8 }}>
            A Sanctuary of Faith, Family, and Restoration
          </span>
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
                Founded with a strong mandate to preach the uncompromised Word of God, Ihema Christian Fellowship International has grown from a small family prayer group into a thriving global assembly. We are centered on family restoration, spiritual alignment, and raising dedicated workers for the vineyard of God.
              </p>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.5rem' }}>
                Our services are anchored on the Holy Scriptures, and we invite people of all nations, backgrounds, and ages to experience the life-changing power of Jesus Christ.
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
                src={gatheringImg}
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
            OUR DESIRE IS TO SEE LIVES TRANSFORMED BY THE GOSPEL, FAMILIES STRENGTHENED, AND COMMUNITIES CHANGED THROUGH THE POWER OF JESUS CHRIST.
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
            <div className="glass-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(230, 200, 117, 0.1)', display: 'flex', alignItems: 'center', justifyContainer: 'center', border: '1px solid var(--border-color)', justifyContent: 'center' }}>
                <Eye size={28} className="text-gold" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>OUR VISION</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                To raise a generational congregation of spirit-filled, biblically-grounded believers who shine the light of the gospel, dominate their career paths with integrity, and lead families into spiritual restoration.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(230, 200, 117, 0.1)', display: 'flex', alignItems: 'center', justifyContainer: 'center', border: '1px solid var(--border-color)', justifyContent: 'center' }}>
                <Target size={28} className="text-gold" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>OUR MISSION</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                To passionately reach out to the unsaved, make disciples through rigorous scriptural teaching, nurture strong marriages, support community health, and cultivate platforms for expressive praise and worship.
              </p>
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
                src={gatheringImg}
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
