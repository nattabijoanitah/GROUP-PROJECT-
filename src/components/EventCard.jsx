import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({ event, onRegister }) {
  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Banner */}
      <div style={{ height: '180px', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <img
          src={event.banner}
          alt={event.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
          className="event-banner-img"
        />
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'var(--accent-gold)',
            color: 'var(--bg-dark)',
            padding: '0.25rem 0.75rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            textTransform: 'uppercase'
          }}
        >
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '1rem' }}>
          {event.title}
        </h3>
        
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>
          {event.description}
        </p>

        {/* Details Row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-light)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={14} className="text-gold" />
            <span>{event.date}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={14} className="text-gold" />
            <span>{event.time}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={14} className="text-gold" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => onRegister(event)}
          className="btn btn-dark"
          style={{ width: '100%', padding: '0.65rem' }}
        >
          Register for Event
        </button>
      </div>

      <style>{`
        .glass-card:hover .event-banner-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
