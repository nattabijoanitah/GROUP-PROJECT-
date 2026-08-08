import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function EventCard({ event, onRegister }) {
  return (
    <div
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        border: '1px solid rgba(230, 200, 117, 0.25)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Banner */}
      <div
        style={{
          height: '180px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#070b16'
        }}
      >
        <img
          src={event.banner}
          alt={event.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          className="event-banner-img"
        />
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'var(--accent-gold)',
            color: 'var(--bg-dark)',
            padding: '0.35rem 0.9rem',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            borderRadius: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            boxShadow: '0 4px 12px rgba(230, 200, 117, 0.25)'
          }}
        >
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.35rem',
          color: 'var(--accent-gold)',
          marginBottom: '1rem',
          letterSpacing: '0.01em',
          lineHeight: 1.3
        }}>
          {event.title}
        </h3>

        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginBottom: '1.75rem',
          flex: 1,
          lineHeight: 1.6
        }}>
          {event.description}
        </p>

        {/* Details Row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          fontSize: '0.85rem',
          color: 'var(--text-light)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.25rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <Calendar size={15} className="text-gold" style={{ flexShrink: 0 }} />
            <span>{event.date}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <Clock size={15} className="text-gold" style={{ flexShrink: 0 }} />
            <span>{event.time}</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem'
          }}>
            <MapPin size={15} className="text-gold" style={{ flexShrink: 0 }} />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={() => onRegister(event)}
          className="btn btn-dark"
          style={{
            width: '100%',
            padding: '0.75rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            border: '2px solid var(--accent-gold)'
          }}
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
