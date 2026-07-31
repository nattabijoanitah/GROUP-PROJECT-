import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimony }) {
  return (
    <div
      className="glass-card"
      style={{
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        justifyContent: 'space-between',
        border: '1px solid rgba(230, 200, 117, 0.25)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      {/* Quote Icon Background */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        opacity: 0.12,
        color: 'var(--accent-gold)'
      }}>
        <Quote size={48} />
      </div>

      {/* Testimony Text */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        marginBottom: '2rem'
      }}>
        <p style={{
          fontStyle: 'italic',
          fontSize: '1.05rem',
          color: 'var(--text-light)',
          lineHeight: 1.8,
          letterSpacing: '0.01em'
        }}>
          "{testimony.text}"
        </p>
      </div>

      {/* Author info */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '1.5rem'
      }}>
        <div>
          <h4 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            color: 'var(--accent-gold)',
            marginBottom: '0.25rem',
            letterSpacing: '0.01em'
          }}>
            {testimony.name}
          </h4>
          <span style={{
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.02em'
          }}>
            {testimony.location}
          </span>
        </div>
        <span style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          {testimony.date}
        </span>
      </div>
    </div>
  );
}
