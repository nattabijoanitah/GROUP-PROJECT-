import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { eventsData } from '../data/churchData';

export default function EventsMarquee() {
  if (!eventsData || eventsData.length === 0) return null;

  // Duplicate the list so the scroll loop has no visible seam
  const items = [...eventsData, ...eventsData];

  return (
    <div className="events-marquee">
      <Link to="/events" className="events-marquee-label">
        <Calendar size={14} /> UPCOMING
      </Link>
      <div className="events-marquee-track-wrap">
        <div className="events-marquee-track">
          {items.map((event, idx) => (
            <span className="events-marquee-item" key={`${event.id}-${idx}`}>
              <strong>{event.title}</strong>
              <span className="events-marquee-dot">•</span>
              <span>{event.date}</span>
              <span className="events-marquee-sep">|</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .events-marquee {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          height: 36px;
          z-index: 999;
          display: flex;
          align-items: center;
          background: rgba(230, 200, 117, 0.08);
          backdropFilter: blur(6px);
          border-bottom: 1px solid rgba(230, 200, 117, 0.2);
          overflow: hidden;
          white-space: nowrap;
        }
        .events-marquee-label {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          height: 100%;
          padding: 0 1rem;
          background: var(--bg-dark);
          color: var(--accent-gold);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-decoration: none;
          border-right: 1px solid rgba(230, 200, 117, 0.2);
          z-index: 1;
        }
        .events-marquee-track-wrap {
          flex: 1;
          overflow: hidden;
        }
        .events-marquee-track {
          display: inline-flex;
          align-items: center;
          animation: events-marquee-scroll 40s linear infinite;
        }
        .events-marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0 1rem;
          font-size: 0.8rem;
          color: var(--text-light);
        }
        .events-marquee-item strong {
          color: var(--accent-gold);
          font-weight: 600;
        }
        .events-marquee-dot {
          color: var(--accent-gold);
          opacity: 0.6;
        }
        .events-marquee-sep {
          margin-left: 1rem;
          color: rgba(255,255,255,0.15);
        }
        @keyframes events-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (max-width: 640px) {
          .events-marquee-label span { display: none; }
        }
      `}</style>
    </div>
  );
}
