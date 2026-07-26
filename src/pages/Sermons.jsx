import React, { useState, useEffect } from 'react';
import { Search, Volume2, Share2, FileText, ArrowRight, Heart, Sparkles, BookOpen } from 'lucide-react';
import { sermonsData } from '../data/churchData';
import SermonPlayer from '../components/SermonPlayer';
import heroImg from '../assets/sermons_hero.png';

export default function Sermons() {
  const [activeSermon, setActiveSermon] = useState(sermonsData[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredSermons, setFilteredSermons] = useState(sermonsData);

  // Apply filters and searches
  useEffect(() => {
    let result = sermonsData;

    // Filter by Category
    if (activeCategory !== 'All') {
      result = result.filter(s => s.category.toLowerCase() === activeCategory.toLowerCase());
    }

    // Filter by Search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        s =>
          s.title.toLowerCase().includes(query) ||
          s.preacher.toLowerCase().includes(query) ||
          s.scripture.toLowerCase().includes(query)
      );
    }

    setFilteredSermons(result);
  }, [searchQuery, activeCategory]);

  const handleShare = (sermon) => {
    if (navigator.share) {
      navigator.share({
        title: sermon.title,
        text: `Listen to "${sermon.title}" by ${sermon.preacher}`,
        url: window.location.href
      }).catch(err => console.log(err));
    } else {
      alert(`Sharing link: ${window.location.origin}/sermons?id=${sermon.id}`);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '80px' }}>
      {/* 1. Hero Section */}
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
            NOURISHING THE SOUL
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            "Thy word is a lamp unto my feet, and a light unto my path." (Psalm 119:105). Discover our sermon catalog.
          </p>
        </div>
      </section>

      {/* 2. Active Featured Sermon & Player */}
      <section className="dark-section section-padding" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            {/* Player Left */}
            <div>
              <SermonPlayer sermon={activeSermon} />
            </div>

            {/* Details Right */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span className="text-gold" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {activeSermon.category} • {activeSermon.date}
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-light)', fontSize: '2.2rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                  {activeSermon.title}
                </h2>
                <p style={{ fontSize: '1.05rem', color: 'var(--accent-gold)', fontWeight: 500 }}>
                  Preacher: {activeSermon.preacher} | Scripture: {activeSermon.scripture}
                </p>
              </div>

              {/* Sermon Notes Bullet Points */}
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card-dark)', borderLeft: '3px solid var(--accent-gold)', borderRadius: '0 4px 4px 0' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} /> Sermon Highlights
                </h4>
                <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {activeSermon.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleShare(activeSermon)}
                  className="btn btn-secondary"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
                >
                  <Share2 size={14} /> Share Sermon
                </button>
                <a
                  href="#podcast-listen"
                  className="btn btn-dark"
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}
                >
                  <Volume2 size={14} /> Listen on Podcast
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search and Catalog Listings */}
      <section className="light-section section-padding">
        <div className="container">
          {/* Controls Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
            {/* Filter buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['All', 'Sermons', 'Devotion', 'Worship'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? 'var(--accent-gold)' : 'rgba(0,0,0,0.1)',
                    backgroundColor: activeCategory === cat ? 'var(--bg-dark)' : 'transparent',
                    color: activeCategory === cat ? 'var(--accent-gold)' : 'var(--text-dark)',
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

            {/* Search Input Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '350px' }}>
              <input
                type="text"
                placeholder="Search preacher, title, scripture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem 1rem 0.65rem 2.5rem',
                  border: '1px solid rgba(0,0,0,0.15)',
                  backgroundColor: '#ffffff',
                  color: 'var(--text-dark)',
                  borderRadius: '4px',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-dark-muted)' }} />
            </div>
          </div>

          {/* Grid list of messages */}
          <div className="grid-3">
            {filteredSermons.map((sermon) => (
              <div
                key={sermon.id}
                onClick={() => {
                  setActiveSermon(sermon);
                  window.scrollTo({ top: 350, behavior: 'smooth' });
                }}
                className="light-card"
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%' }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img src={sermon.image} alt={sermon.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.5rem' }}>
                    {sermon.category} • {sermon.date}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', fontSize: '1.3rem', marginBottom: '0.75rem', flex: 1 }}>
                    {sermon.title}
                  </h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e5e7eb', paddingTop: '0.75rem', fontSize: '0.85rem', color: 'var(--text-dark-muted)' }}>
                    <span>By {sermon.preacher}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      Listen <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSermons.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-dark-muted)' }}>
              No messages found matching your criteria. Try another keyword or filter.
            </div>
          )}
        </div>
      </section>

      {/* 4. Listen on the Go Podcasts Section */}
      <section id="podcast-listen" className="dark-section section-padding" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="grid-2">
            {/* Left Texts */}
            <div>
              <span className="text-gold" style={{ fontSize: '0.9rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
                Podcasts
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1.5rem' }}>
                LISTEN ON THE GO
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                Subscribe to our weekly podcast feed on Spotify, Apple Podcasts, or Google Podcasts. Download audio messages directly to your devices to keep your faith strong on your daily commute or workouts.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Spotify Feed</a>
                <a href="#" className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.85rem' }}>Apple Podcasts</a>
              </div>
            </div>

            {/* Right List of audio downloads */}
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                Audio Quick Playlist
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {sermonsData.map((sermon) => (
                  <div
                    key={sermon.id}
                    onClick={() => {
                      setActiveSermon(sermon);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.75rem 1rem',
                      backgroundColor: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    className="playlist-item"
                  >
                    <div>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-light)', fontWeight: 500, display: 'block' }}>{sermon.title}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sermon.preacher} • {sermon.duration}</span>
                    </div>
                    <Volume2 size={16} className="text-gold" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .playlist-item:hover {
          background-color: rgba(230, 200, 117, 0.1) !important;
          border-color: var(--accent-gold) !important;
        }
      `}</style>
    </div>
  );
}
