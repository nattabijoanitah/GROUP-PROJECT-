import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimony }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        justifyContent: 'space-between'
      }}
    >
      {/* Quote Icon Background */}
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.15, color: 'var(--accent-gold)' }}>
        <Quote size={40} />
      </div>

      {/* Testimony Text */}
      <div style={{ position: 'relative', zIndex: 2, marginBottom: '1.5rem' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--text-light)', lineHeight: 1.6 }}>
          "{testimony.text}"
        </p>
      </div>

      {/* Author info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
        <div>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--accent-gold)' }}>
            {testimony.name}
          </h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            {testimony.location}
          </span>
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          {testimony.date}
        </span>
      </div>
    </div>
  );
}
