import React, { useState } from 'react';
import { CreditCard, ShieldCheck, Heart, Sparkles, Building, Landmark, Check } from 'lucide-react';
import heroImg from '../assets/sermons_hero.png';

export default function Give() {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [giveType, setGiveType] = useState('Tithe'); // 'Tithe', 'Offering', 'Missions', 'Building'
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card', 'bank', 'mobile'
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', cardNumber: '', cardExpiry: '', cardCvv: '' });

  const presets = ['10', '25', '50', '100', '250', '500'];

  const handleGiveSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    if (finalAmount && parseFloat(finalAmount) > 0) {
      // Save giving records
      const records = JSON.parse(localStorage.getItem('giving_records') || '[]');
      records.push({
        name: form.name || 'Anonymous Giver',
        email: form.email,
        amount: finalAmount,
        type: giveType,
        method: paymentMethod,
        date: new Date().toISOString()
      });
      localStorage.setItem('giving_records', JSON.stringify(records));
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setAmount('50');
        setCustomAmount('');
        setForm({ name: '', email: '', cardNumber: '', cardExpiry: '', cardCvv: '' });
      }, 3000);
    } else {
      alert('Please enter a valid donation amount.');
    }
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
            ONLINE GIVING
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', fontWeight: 300 }}>
            "Honor the Lord with thy substance, and with the firstfruits of all thine increase." (Proverbs 3:9). Thank you for sowing into the ministry.
          </p>
        </div>
      </section>

      {/* 2. Scripture and Donation Core */}
      <section className="dark-section section-padding">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            
            {/* Left Scripture Card */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span className="text-gold" style={{ fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                  Stewardship
                </span>
                <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', color: 'var(--text-light)' }}>
                  PARTNER WITH OUR MANDATE
                </h2>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  Your tithes and offerings directly power our weekly services, community medical outreaches, global missions, radio broadcasts, and the upkeep of the local assembly sanctuary.
                </p>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  We believe that giving is an act of worship. Every seed you sow is prayed over by our leadership and deployed responsibly to expand the kingdom of God.
                </p>
              </div>

              {/* Tithing Scripture Box */}
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-card-dark)', borderLeft: '3px solid var(--accent-gold)', borderRadius: '0 4px 4px 0' }}>
                <h4 style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', fontSize: '1.15rem' }}>
                  The Promise of the Tithe
                </h4>
                <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0 }}>
                  "Bring ye all the tithes into the storehouse... and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it." (Malachi 3:10)
                </p>
              </div>

              {/* Security assurances */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                <ShieldCheck size={28} className="text-gold" style={{ flexShrink: 0 }} />
                <span>SSL Encrypted Connection. All financial information is processed securely through audited portals.</span>
              </div>
            </div>

            {/* Right Interactive Portal Card */}
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', color: 'var(--accent-gold)', padding: '3rem 0' }}>
                  <Check size={48} style={{ margin: '0 auto 1.5rem auto', display: 'block' }} />
                  <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '0.75rem' }}>Offering Received!</h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                    Thank you for your generous partnership! We pray that God blesses the work of your hands and multiplies your seed sown.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleGiveSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  
                  {/* Category selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Select Fund Category</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                      {['Tithe', 'Offering', 'Missions', 'Building'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setGiveType(type)}
                          style={{
                            padding: '0.5rem 0.25rem',
                            border: '1px solid',
                            borderColor: giveType === type ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                            backgroundColor: giveType === type ? 'rgba(230,200,117,0.1)' : 'transparent',
                            color: giveType === type ? 'var(--accent-gold)' : 'var(--text-muted)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            textAlign: 'center'
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preset Amount Grid */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Select Amount ($)</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
                      {presets.map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => { setAmount(p); setCustomAmount(''); }}
                          style={{
                            padding: '0.75rem 0',
                            border: '1px solid',
                            borderColor: amount === p ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                            backgroundColor: amount === p ? 'rgba(230,200,117,0.1)' : 'transparent',
                            color: amount === p ? 'var(--accent-gold)' : 'var(--text-light)',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '1rem',
                            fontWeight: 'bold'
                          }}
                        >
                          ${p}
                        </button>
                      ))}
                    </div>
                    {/* Custom amount trigger */}
                    <button
                      type="button"
                      onClick={() => setAmount('custom')}
                      style={{
                        width: '100%',
                        padding: '0.75rem',
                        border: '1px solid',
                        borderColor: amount === 'custom' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                        backgroundColor: amount === 'custom' ? 'rgba(230,200,117,0.1)' : 'transparent',
                        color: amount === 'custom' ? 'var(--accent-gold)' : 'var(--text-muted)',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        marginBottom: '0.75rem'
                      }}
                    >
                      Or Enter Custom Amount
                    </button>
                    
                    {amount === 'custom' && (
                      <input
                        type="number"
                        placeholder="Enter amount in USD"
                        className="form-control"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        required
                        min="1"
                      />
                    )}
                  </div>

                  {/* Payment Method Selector */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-gold)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Payment Method</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        style={{
                          padding: '0.5rem',
                          border: '1px solid',
                          borderColor: paymentMethod === 'card' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                          backgroundColor: paymentMethod === 'card' ? 'rgba(230,200,117,0.05)' : 'transparent',
                          color: paymentMethod === 'card' ? 'var(--accent-gold)' : 'var(--text-muted)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem'
                        }}
                      >
                        <CreditCard size={12} /> Card
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('bank')}
                        style={{
                          padding: '0.5rem',
                          border: '1px solid',
                          borderColor: paymentMethod === 'bank' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                          backgroundColor: paymentMethod === 'bank' ? 'rgba(230,200,117,0.05)' : 'transparent',
                          color: paymentMethod === 'bank' ? 'var(--accent-gold)' : 'var(--text-muted)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem'
                        }}
                      >
                        <Landmark size={12} /> Bank
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('mobile')}
                        style={{
                          padding: '0.5rem',
                          border: '1px solid',
                          borderColor: paymentMethod === 'mobile' ? 'var(--accent-gold)' : 'rgba(255,255,255,0.05)',
                          backgroundColor: paymentMethod === 'mobile' ? 'rgba(230,200,117,0.05)' : 'transparent',
                          color: paymentMethod === 'mobile' ? 'var(--accent-gold)' : 'var(--text-muted)',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                          fontSize: '0.75rem'
                        }}
                      >
                        <Heart size={12} /> Mobile Money
                      </button>
                    </div>
                  </div>

                  {/* Card Payment Form details */}
                  {paymentMethod === 'card' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label>Name on Card</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John Doe"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label>Email Address (For Receipt)</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label>Card Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="4111 2222 3333 4444"
                          value={form.cardNumber}
                          onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
                          required
                        />
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM / YY"
                            value={form.cardExpiry}
                            onChange={(e) => setForm({ ...form, cardExpiry: e.target.value })}
                            required
                          />
                        </div>
                        <div className="form-group" style={{ marginBottom: 0 }}>
                          <label>CVV</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="***"
                            value={form.cardCvv}
                            onChange={(e) => setForm({ ...form, cardCvv: e.target.value })}
                            required
                            maxLength="4"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank detail details */}
                  {paymentMethod === 'bank' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <p>To give via wire transfer, please transfer to the following account details. Include category (e.g. "Tithe") in the reference.</p>
                      <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <p><strong>Bank:</strong> Grace International Bank</p>
                        <p><strong>Account Name:</strong> Ihema Christian Fellowship Int'l</p>
                        <p><strong>Account Number:</strong> 9876543210</p>
                        <p><strong>Routing Number:</strong> 021000021</p>
                        <p><strong>SWIFT Code:</strong> GRIBUS33XXX</p>
                      </div>
                    </div>
                  )}

                  {/* Mobile Money info */}
                  {paymentMethod === 'mobile' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      <p>Send mobile donations directly via merchant channels. Select network below:</p>
                      <div style={{ padding: '1rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                        <p><strong>MTN MoMo Merchant ID:</strong> 421098</p>
                        <p><strong>AirtelTigo Money ID:</strong> 842101</p>
                        <p><strong>Reference Code:</strong> "IHEMA-GIVE"</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem' }}>
                    Sow Seed of ${amount === 'custom' ? (customAmount || '0') : amount}
                  </button>

                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
