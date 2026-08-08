import React, { useState, useEffect } from 'react';
import { testimoniesData } from '../data/churchData';
import TestimonialCard from '../components/TestimonialCard';
import { MessageSquare, Check, Sparkles } from 'lucide-react';
import heroImg from '../assets/about-ihema.jpg';

export default function Testimonies() {
  const [testimonies, setTestimonies] = useState(testimoniesData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', location: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  // Load custom testimonies from localStorage if they exist
  useEffect(() => {
    const customTestimonies = JSON.parse(localStorage.getItem('testimonies') || '[]');
    if (customTestimonies.length > 0) {
      setTestimonies([...customTestimonies, ...testimoniesData]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.text.trim()) {
      const newTestimony = {
        id: `custom-test-${Date.now()}`,
        name: form.name || 'Anonymous Member',
        location: form.location || 'In-Person Sanctuary',
        text: form.text,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      };

      const existingCustom = JSON.parse(localStorage.getItem('testimonies') || '[]');
      const updatedCustom = [newTestimony, ...existingCustom];
      localStorage.setItem('testimonies', JSON.stringify(updatedCustom));

      // Update state
      setTestimonies([newTestimony, ...testimonies]);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setShowModal(false);
        setForm({ name: '', location: '', text: '' });
      }, 3000);
    }
  };

  return (
    <div className="fade-in" style={{ paddingTop: '116px' }}>
      {/* 1. Hero Banner */}
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.85), rgba(11, 17, 32, 0.85)), url(${heroImg})`,
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
            TESTIMONIES OF GRACE
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            "And they overcame him by the blood of the Lamb, and by the word of their testimony." (Revelation 12:11). Read how God is changing lives in our fellowship.
          </p>
        </div>
      </section>

      {/* 2. Grid & CTA */}
      <section className="dark-section section-padding">
        <div className="container">
          {/* CTA Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '3.5rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-light)' }}>
                Stories of Faith and Deliverance
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>
                We believe that sharing your testimony seals your miracle and triggers faith in others.
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-primary"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageSquare size={16} /> Share Your Testimony
            </button>
          </div>

          {/* Testimonies Grid */}
          <div className="grid-3">
            {testimonies.map((test) => (
              <TestimonialCard key={test.id} testimony={test} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Inpirational Quote banner */}
      <section className="light-section section-padding" style={{ borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '1rem' }}>
            <Sparkles size={36} style={{ margin: '0 auto' }} />
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--text-dark)', marginBottom: '1.5rem' }}>
            YOUR MIRACLE IS NEXT
          </h2>
          <p style={{ color: 'var(--text-dark-muted)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            If you need prayer, guidance, or counseling on key life choices, do not carry the load alone. Visit our Connect center or request emergency prayers.
          </p>
          <a href="/join" className="btn btn-dark">Get in Touch</a>
        </div>
      </section>

      {/* 4. Submission Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(7, 11, 22, 0.85)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1100,
            padding: '1rem'
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '2.5rem',
              position: 'relative',
              animation: 'fadeIn 0.3s forwards'
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '1.5rem'
              }}
            >
              &times;
            </button>

            <h3 style={{ fontFamily: 'var(--font-serif)', color: 'var(--accent-gold)', marginBottom: '1.5rem', textAlign: 'center' }}>
              Share Your Story
            </h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--accent-gold)' }}>
                <Check size={36} style={{ margin: '0 auto 1rem auto', display: 'block' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Thank You!</h4>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>Your testimony has been submitted and added to the grace board. God bless you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Your Name (Optional)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter name (or leave empty for Anonymous)"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Your Location (City/State)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. Houston, TX"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label>Share what God did for you</label>
                  <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Write your testimony details..."
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Publish Testimony
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
