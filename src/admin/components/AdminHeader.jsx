
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function AdminHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem('admin_user') || 'null'
  );

  const pageNames = {
    '/admin/dashboard': 'Dashboard',
    '/admin/events': 'Events',
    '/admin/sermons': 'Sermons',
    '/admin/gallery': 'Gallery',
    '/admin/pages': 'Pages',
    '/admin/prayer-requests': 'Prayer Requests',
    '/admin/messages': 'Messages',
  };

  const pageTitle =
    pageNames[location.pathname] || 'Administration';

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  return (
    <header
      style={{
        height: '76px',
        padding: '0 30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '25px',
        background: 'rgba(11,22,43,0.96)',
        borderBottom:
          '1px solid rgba(255,255,255,0.07)',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(14px)',
      }}
    >
      {/* LEFT */}
      <div>
        <div
          style={{
            fontSize: '12px',
            color: '#d4af37',
            fontWeight: '700',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
          }}
        >
          IHEMA Administration
        </div>

        <h2
          style={{
            margin: '4px 0 0',
            fontSize: '20px',
            fontWeight: '600',
            color: '#ffffff',
          }}
        >
          {pageTitle}
        </h2>
      </div>

      {/* RIGHT */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        {/* STATUS */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '7px',
            padding: '8px 12px',
            borderRadius: '8px',
            background:
              'rgba(34,197,94,0.07)',
            border:
              '1px solid rgba(34,197,94,0.15)',
            color: '#86efac',
            fontSize: '12px',
          }}
        >
          <span>●</span>
          Online
        </div>

        {/* NOTIFICATION */}
        <button
          title="Notifications"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            border:
              '1px solid rgba(255,255,255,0.08)',
            background: '#101a2d',
            color: '#ffffff',
            cursor: 'pointer',
            fontSize: '17px',
          }}
        >
          🔔
        </button>

        {/* PROFILE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingLeft: '8px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background:
                'linear-gradient(135deg, #d4af37, #a98420)',
              color: '#071124',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800',
              fontSize: '15px',
            }}
          >
            {(user?.full_name ||
              user?.name ||
              'A')
              .charAt(0)
              .toUpperCase()}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <strong
              style={{
                fontSize: '13px',
                color: '#ffffff',
              }}
            >
              {user?.full_name ||
                user?.name ||
                'IHEMA Administrator'}
            </strong>

            <span
              style={{
                fontSize: '11px',
                color:
                  'rgba(255,255,255,0.5)',
              }}
            >
              Administrator
            </span>
          </div>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          style={{
            padding: '9px 14px',
            borderRadius: '8px',
            border:
              '1px solid rgba(255,255,255,0.1)',
            background: 'transparent',
            color:
              'rgba(255,255,255,0.75)',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
