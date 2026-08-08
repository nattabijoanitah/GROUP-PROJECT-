
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        'http://127.0.0.1:5000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password,
          }),
        }
      );

      const data = await response.json();

      console.log('LOGIN RESPONSE:', data);

      if (!response.ok) {
        setError(
          data.message ||
          data.msg ||
          data.error ||
          'Invalid email or password.'
        );
        return;
      }

      if (!data.access_token) {
        setError('Login succeeded but no access token was returned.');
        console.error('NO ACCESS TOKEN:', data);
        return;
      }

      // Store JWT token
      localStorage.setItem(
        'access_token',
        data.access_token
      );

      // Store admin information
      if (data.user) {
        localStorage.setItem(
          'admin_user',
          JSON.stringify(data.user)
        );
      } else {
        localStorage.setItem(
          'admin_user',
          JSON.stringify({
            email: email.trim(),
            name: 'IHEMA Administrator',
          })
        );
      }

      console.log(
        'ACCESS TOKEN SAVED:',
        !!localStorage.getItem('access_token')
      );

      navigate('/admin/dashboard');

    } catch (error) {
      console.error('LOGIN ERROR:', error);

      setError(
        'Unable to connect to the server. Make sure the Flask backend is running.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#060c18',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          padding: '40px',
          borderRadius: '18px',
          background: '#101a2d',
          border: '1px solid rgba(212,175,55,0.25)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '65px',
              height: '65px',
              margin: '0 auto 15px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.35)',
              color: '#d4af37',
              fontSize: '28px',
              fontWeight: 'bold',
            }}
          >
            I
          </div>

          <h1
            style={{
              margin: 0,
              color: '#d4af37',
              fontSize: '28px',
            }}
          >
            IHEMA ADMIN
          </h1>

          <p
            style={{
              marginTop: '8px',
              opacity: 0.65,
              color: '#ffffff',
            }}
          >
            Christian Fellowship International
          </p>
        </div>

        {error && (
          <div
            style={{
              padding: '12px',
              marginBottom: '20px',
              borderRadius: '8px',
              background: 'rgba(255,70,70,0.1)',
              border: '1px solid rgba(255,70,70,0.25)',
              color: '#ff8a8a',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#ffffff',
            }}
          >
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@ihema.org"
            required
            style={{
              width: '100%',
              padding: '13px',
              marginBottom: '20px',
              borderRadius: '9px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: '#0a1324',
              color: '#ffffff',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <label
            style={{
              display: 'block',
              marginBottom: '8px',
              color: '#ffffff',
            }}
          >
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
            style={{
              width: '100%',
              padding: '13px',
              marginBottom: '25px',
              borderRadius: '9px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: '#0a1324',
              color: '#ffffff',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              border: 'none',
              borderRadius: '9px',
              background: '#d4af37',
              color: '#071124',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: '700',
              fontSize: '15px',
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}
