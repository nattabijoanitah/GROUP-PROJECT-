import React from 'react';
import { Clock, Calendar, MapPin, ChevronRight, Radio, Laptop, Users } from 'lucide-react';
import heroImg from '../assets/church_hero.png';
import gatheringImg from '../assets/about_gathering.png';

const services = [
  {
    name: 'Sunday Celebration Service',
    time: '9:00 AM & 11:00 AM',
    day: 'Every Sunday',
    location: 'Main Sanctuary & YouTube Live',
    type: 'Main Service',
    description:
      'Our flagship weekly gathering filled with anointed praise & worship, expository bible preaching, altar calls, and a powerful time of fellowship.'
  },
  {
    name: 'Tuesday Bible Study',
    time: '6:30 PM — 8:00 PM',
    day: 'Every Tuesday',
    location: 'Main Sanctuary & Zoom (Online)',
    type: 'Bible Study',
    description:
      'An in-depth, verse-by-verse study of the scriptures led by the Senior Pastors and departmental leaders. Bring your bible and a notebook!'
  },
  {
    name: 'Friday Breakthrough Night',
    time: '9:00 PM — 11:30 PM',
    day: 'Every Friday',
    location: 'Main Sanctuary',
    type: 'Prayer Night',
    description:
      'A fervent night of intercession, spiritual warfare prayers, and prophetic declarations to close the week and position the congregation for a glorious weekend.'
  },
  {
    name: 'Monthly Night Vigil',
    time: '10:00 PM — 4:00 AM',
    day: 'First Friday of every month',
    location: 'Main Sanctuary',
    type: 'Vigil',
    description:
      'Our all-night tarrying meeting — one of the most powerful spiritual gatherings of the church. Come prepared to encounter the living God and receive divine answers.'
  },
  {
    name: 'Wednesday Workers Meeting',
    time: '7:00 PM — 9:00 PM',
    day: 'Every Wednesday',
    location: 'Conference Hall',
    type: 'Leadership',
    description:
      'A focused gathering for all church workers, department heads, and ministry leaders for training, coordination, prayer, and strategic planning.'
  },
  {
    name: 'Online Sunday Service (Global)',
    time: '9:00 AM WAT / 8:00 AM GMT',
    day: 'Every Sunday',
    location: 'YouTube, Facebook, & Church Website',
    type: 'Online',
    description:
      'Can\'t make it in person? Join our global livestream on YouTube and Facebook. Thousands from around the world worship together in real-time.'
  }
];

const typeColors = {
  'Main Service': '#e6c875',
  'Bible Study': '#7dd3fc',
  'Prayer Night': '#f9a8d4',
  'Vigil': '#c4b5fd',
  'Leadership': '#6ee7b7',
  'Online': '#fcd34d'
};

export default function ChurchServices() {
  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.82), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
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
            CHURCH SERVICES
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            "Not forsaking the assembling of ourselves together..." (Hebrews 10:25). See our full weekly schedule and join us!
          </p>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="dark-section section-padding">
        <div className="container">
          <div className="grid-3">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}
              >
                {/* Type badge */}
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.2rem 0.75rem',
                    backgroundColor: typeColors[svc.type] + '22',
                    border: `1px solid ${typeColors[svc.type]}55`,
                    color: typeColors[svc.type],
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    alignSelf: 'flex-start'
                  }}
                >
                  {svc.type}
                </span>

                <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', fontSize: '1.35rem' }}>
                  {svc.name}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, flex: 1 }}>
                  {svc.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
                    <Calendar size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span>{svc.day}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-light)' }}>
                    <Clock size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span>{svc.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                    <MapPin size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0 }} />
                    <span>{svc.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Online Section Info Banner */}
      <section className="light-section section-padding" style={{ borderTop: '1px solid #e5e7eb' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '4rem' }}>
            <div>
              <span
                className="text-gold"
                style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}
              >
                Stream Anywhere
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
                JOIN US ONLINE GLOBALLY
              </h2>
              <p style={{ color: 'var(--text-dark-muted)', marginBottom: '1.5rem' }}>
                Distance is no barrier to worship. Whether you are in Lagos, London, Atlanta, or Accra — you can experience the full Sunday service live through our online streaming platforms, complete with an interactive chat for prayer requests.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}><Laptop size={22} /></div>
                  <span style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>
                    <strong>YouTube:</strong> youtube.com/@IhemaFellowship (Live on Sundays)
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}><Radio size={22} /></div>
                  <span style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>
                    <strong>Facebook:</strong> facebook.com/IhemaFellowshipInt (Concurrent Stream)
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ color: 'var(--accent-gold)', flexShrink: 0 }}><Users size={22} /></div>
                  <span style={{ color: 'var(--text-dark-muted)', fontSize: '0.9rem' }}>
                    <strong>Zoom:</strong> Join code shared via WhatsApp broadcast on service days.
                  </span>
                </div>
              </div>
            </div>

            <div>
              <img
                src={gatheringImg}
                alt="Church congregation in worship"
                style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
