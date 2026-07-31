import React, { useState } from 'react';
import { galleryData } from '../data/churchData';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import heroImg from '../assets/about ihema.jpg';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null); // stores index of currently open image in active items

  const categories = ['All', 'Services', 'Community', 'Fellowships'];

  // Filtered gallery items
  const displayItems = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction) => {
    if (lightboxIndex === null) return;
    let nextIndex = lightboxIndex + direction;
    if (nextIndex < 0) {
      nextIndex = displayItems.length - 1;
    } else if (nextIndex >= displayItems.length) {
      nextIndex = 0;
    }
    setLightboxIndex(nextIndex);
  };

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.8), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
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
            MEDIA GALLERY
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            Capturing key moments of corporate worship, community engagements, outreach camps, and fellowship testimonies.
          </p>
        </div>
      </section>

      {/* 2. Grid & Lightbox */}
      <section className="dark-section section-padding">
        <div className="container">
          {/* Category Selector */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  closeLightbox();
                }}
                style={{
                  padding: '0.5rem 1.25rem',
                  border: '1px solid',
                  borderColor: activeFilter === cat ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                  backgroundColor: activeFilter === cat ? 'rgba(230,200,117,0.1)' : 'transparent',
                  color: activeFilter === cat ? 'var(--accent-gold)' : 'var(--text-muted)',
                  borderRadius: '4px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}>
            {displayItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="glass-card"
                style={{
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  aspectRatio: '4/3',
                  borderRadius: '8px',
                  border: '1px solid rgba(230, 200, 117, 0.25)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-img"
                />

                {/* Overlay hover details */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(7, 11, 22, 0.75)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                  }}
                  className="gallery-overlay"
                >
                  <ZoomIn size={32} className="text-gold" style={{ marginBottom: '0.5rem' }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-light)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {displayItems.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
              No images in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* 3. Lightbox Modal Overlay */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 11, 22, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1200,
            userSelect: 'none'
          }}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--text-light)',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Close Lightbox"
          >
            <X size={36} />
          </button>

          {/* Left Arrow */}
          <button
            onClick={() => navigateLightbox(-1)}
            style={{
              position: 'absolute',
              left: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-light)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Center Image Container */}
          <div style={{ maxWidth: '90%', maxHeight: '80%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative' }}>
            <img
              src={displayItems[lightboxIndex].url}
              alt={displayItems[lightboxIndex].title}
              style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain', border: '1px solid var(--border-color)', borderRadius: '4px' }}
            />
            <div style={{ textAlign: 'center', color: 'var(--text-light)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)' }}>{displayItems[lightboxIndex].title}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Category: {displayItems[lightboxIndex].category}</span>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => navigateLightbox(1)}
            style={{
              position: 'absolute',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-light)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}

      <style>{`
        .glass-card:hover .gallery-img {
          transform: scale(1.05);
        }
        .glass-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
