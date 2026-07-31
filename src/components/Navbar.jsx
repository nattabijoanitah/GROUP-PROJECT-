import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Heart, Flame } from 'lucide-react';
import logoImg from '../assets/ark2-removebg-preview.png';
import menMinistryImg from '../assets/men ministry.png';
import womensMinistryImg from '../assets/womens ministry.png';
import childrenMinistryImg from '../assets/children ministry.png';
import youthMinistryImg from '../assets/youth ministry.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredFellowship, setHoveredFellowship] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Explore',
      path: '#',
      dropdown: [
        { name: 'Ministries', path: '/ministries' },
        { name: 'Church Services', path: '/services' },
        { name: 'Pastor\'s Message', path: '/pastor' },
      ]
    },
    {
      name: 'Fellowships',
      path: '#',
      dropdown: [
        { name: 'Men\'s Fellowship', path: '/fellowships/men', img: menMinistryImg },
        { name: 'Women\'s Fellowship', path: '/fellowships/women', img: womensMinistryImg },
        { name: 'Youth Fellowship', path: '/fellowships/youth', img: youthMinistryImg },
        { name: 'Children\'s Fellowship', path: '/fellowships/children', img: childrenMinistryImg }
      ]
    },
    { name: 'Sermons', path: '/sermons' },
    { name: 'Events', path: '/events' },
    {
      name: 'Media',
      path: '#',
      dropdown: [
        { name: 'Gallery', path: '/gallery' },
        { name: 'Testimonies', path: '/testimonies' }
      ]
    },
    { name: 'Connect', path: '/join' }
  ];

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(11, 17, 32, 0.95)' : 'rgba(11, 17, 32, 0.75)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(230, 200, 117, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src={logoImg} alt="Ihema Logo" style={{ height: scrolled ? '36px' : '44px', width: 'auto', transition: 'height 0.3s ease' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: scrolled ? '1.15rem' : '1.3rem', fontWeight: 'bold', color: 'var(--accent-gold)', letterSpacing: '0.05em', lineHeight: 1.1 }}>
              IHEMA
            </span>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-light)', opacity: 0.8 }}>
              Christian Fellowship
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'none', gap: '1.5rem', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ position: 'relative' }} className="nav-item-container">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeDropdown === link.name ? 'var(--accent-gold)' : 'var(--text-light)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      padding: '0.5rem 0',
                      transition: 'color 0.2s'
                    }}
                  >
                    {link.name} <ChevronDown size={14} />
                  </button>
                  {activeDropdown === link.name && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: 'var(--bg-card-dark)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '4px',
                        minWidth: '200px',
                        boxShadow: 'var(--shadow-lg)',
                        padding: '0.5rem 0',
                        marginTop: '0.5rem',
                        animation: 'fadeIn 0.2s forwards',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                    >
                      {link.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          style={sub.img ? {
                            padding: '1rem 1.25rem',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            transition: 'all 0.15s',
                            borderLeft: '2px solid transparent',
                            minHeight: '56px',
                            display: 'flex',
                            alignItems: 'center',
                            ...(hoveredFellowship === sIdx
                              ? {
                                  backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.35), rgba(11, 17, 32, 0.75)), url(${sub.img})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  color: '#fff'
                                }
                              : { color: 'var(--text-light)' })
                          } : {
                            padding: '0.65rem 1.25rem',
                            fontSize: '0.85rem',
                            color: 'var(--text-light)',
                            transition: 'all 0.2s',
                            borderLeft: '2px solid transparent'
                          }}
                          className={sub.img ? '' : 'dropdown-link'}
                          onClick={() => setActiveDropdown(null)}
                          onMouseEnter={sub.img ? () => setHoveredFellowship(sIdx) : undefined}
                          onMouseLeave={sub.img ? () => setHoveredFellowship(null) : undefined}
                          onTouchStart={sub.img ? () => setHoveredFellowship(sIdx) : undefined}
                          onFocus={sub.img ? () => setHoveredFellowship(sIdx) : undefined}
                          onBlur={sub.img ? () => setHoveredFellowship(null) : undefined}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-light)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '0.5rem 0',
                    transition: 'color 0.2s',
                    position: 'relative'
                  }}
                  className="nav-link-item"
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--accent-gold)' }}></span>
                  )}
                </Link>
              )}
            </div>
          ))}

          {/* Give Button */}
          <Link to="/give" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Heart size={14} fill="currentColor" /> Give
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-light)',
            cursor: 'pointer',
            padding: '0.25rem'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-dark)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s forwards',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: activeDropdown === link.name ? 'var(--accent-gold)' : 'var(--text-light)',
                      fontSize: '1rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      textAlign: 'left',
                      padding: '0.5rem 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {link.name} <ChevronDown size={18} style={{ transform: activeDropdown === link.name ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </button>
                  {activeDropdown === link.name && (
                    <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', borderLeft: '1px solid var(--border-color)', margin: '0.25rem 0 0.5rem 0' }}>
                      {link.dropdown.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          style={sub.img ? {
                            fontSize: '0.9rem',
                            padding: '0.65rem 0.75rem',
                            minHeight: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '4px',
                            transition: 'all 0.15s',
                            ...(hoveredFellowship === `m${sIdx}`
                              ? {
                                  backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.35), rgba(11, 17, 32, 0.75)), url(${sub.img})`,
                                  backgroundSize: 'cover',
                                  backgroundPosition: 'center',
                                  color: '#fff'
                                }
                              : { color: 'var(--text-muted)' })
                          } : {
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            padding: '0.25rem 0'
                          }}
                          onClick={() => setIsOpen(false)}
                          onTouchStart={sub.img ? () => setHoveredFellowship(`m${sIdx}`) : undefined}
                          onMouseEnter={sub.img ? () => setHoveredFellowship(`m${sIdx}`) : undefined}
                          onMouseLeave={sub.img ? () => setHoveredFellowship(null) : undefined}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  style={{
                    color: location.pathname === link.path ? 'var(--accent-gold)' : 'var(--text-light)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    padding: '0.5rem 0'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          {/* Give Button Mobile */}
          <Link
            to="/give"
            className="btn btn-primary"
            style={{ width: '100%', padding: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}
            onClick={() => setIsOpen(false)}
          >
            <Heart size={16} fill="currentColor" /> Give
          </Link>
        </div>
      )}

      {/* Add inline CSS to make desktop nav show and mobile toggle hide on desktop */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .dropdown-link:hover {
          color: var(--accent-gold) !important;
          background-color: rgba(255, 255, 255, 0.02);
          border-left-color: var(--accent-gold);
          padding-left: 1.5rem !important;
        }
        .nav-link-item:hover {
          color: var(--accent-gold) !important;
        }
        .nav-item-container:hover .dropdown-link-container {
          display: flex !important;
        }
      `}</style>
    </nav>
  );
}
