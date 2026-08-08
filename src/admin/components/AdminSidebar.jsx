
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function AdminSidebar() {
  const navigate = useNavigate();

  const contentItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: '▦',
    },
    {
      name: 'Events',
      path: '/admin/events',
      icon: '◫',
    },
    {
      name: 'Sermons',
      path: '/admin/sermons',
      icon: '◉',
    },
    {
      name: 'Gallery',
      path: '/admin/gallery',
      icon: '▧',
    },
    {
      name: 'Pages',
      path: '/admin/pages',
      icon: '▤',
    },
  ];

  const communicationItems = [
    {
      name: 'Prayer Requests',
      path: '/admin/prayer-requests',
      icon: '♡',
    },
    {
      name: 'Messages',
      path: '/admin/messages',
      icon: '✉',
    },
  ];

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('admin_user');
    navigate('/admin/login');
  };

  const renderItem = (item) => (
    <NavLink
      key={item.path}
      to={item.path}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '13px',
        padding: '12px 14px',
        marginBottom: '6px',
        borderRadius: '10px',
        textDecoration: 'none',
        color: isActive
          ? '#071124'
          : 'rgba(255,255,255,0.68)',
        background: isActive
          ? 'linear-gradient(135deg, #d4af37, #b89124)'
          : 'transparent',
        fontSize: '13px',
        fontWeight: isActive ? '700' : '500',
        transition: 'all 0.2s ease',
        boxShadow: isActive
          ? '0 8px 20px rgba(212,175,55,0.16)'
          : 'none',
      })}
    >
      <span
        style={{
          width: '24px',
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: 1,
        }}
      >
        {item.icon}
      </span>

      <span>{item.name}</span>
    </NavLink>
  );

  return (
    <aside
      style={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: '24px 16px',
        background:
          'linear-gradient(180deg, #071124 0%, #09152a 55%, #06101f 100%)',
        borderRight:
          '1px solid rgba(255,255,255,0.07)',
        boxShadow:
          '8px 0 30px rgba(0,0,0,0.18)',
        overflowY: 'auto',
      }}
    >
      {/* BRAND */}
      <div
        style={{
          padding: '4px 8px 25px',
          marginBottom: '10px',
          borderBottom:
            '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '11px',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(135deg, #d4af37, #9d781b)',
              color: '#071124',
              fontSize: '20px',
              fontWeight: '900',
              boxShadow:
                '0 6px 18px rgba(212,175,55,0.18)',
            }}
          >
            I
          </div>

          <div>
            <h2
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '17px',
                fontWeight: '800',
                letterSpacing: '0.5px',
              }}
            >
              IHEMA
            </h2>

            <p
              style={{
                margin: '3px 0 0',
                color: '#d4af37',
                fontSize: '9px',
                fontWeight: '700',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              Administration
            </p>
          </div>
        </div>
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          flex: 1,
          paddingTop: '8px',
        }}
      >
        <p
          style={{
            margin: '12px 10px 10px',
            color: 'rgba(255,255,255,0.32)',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '1.3px',
            textTransform: 'uppercase',
          }}
        >
          Main
        </p>

        {contentItems.map(renderItem)}

        <p
          style={{
            margin: '28px 10px 10px',
            color: 'rgba(255,255,255,0.32)',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing: '1.3px',
            textTransform: 'uppercase',
          }}
        >
          Communication
        </p>

        {communicationItems.map(renderItem)}
      </div>

      {/* ADMIN ACCOUNT */}
      <div
        style={{
          padding: '14px 0 0',
          borderTop:
            '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px',
            marginBottom: '8px',
            borderRadius: '10px',
            background:
              'rgba(255,255,255,0.035)',
          }}
        >
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background:
                'linear-gradient(135deg, #d4af37, #a47f20)',
              color: '#071124',
              fontWeight: '800',
              fontSize: '13px',
            }}
          >
            A
          </div>

          <div
            style={{
              minWidth: 0,
              flex: 1,
            }}
          >
            <p
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '700',
              }}
            >
              Administrator
            </p>

            <p
              style={{
                margin: '3px 0 0',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '10px',
              }}
            >
              IHEMA Admin
            </p>
          </div>

          <span
            style={{
              color: '#4ade80',
              fontSize: '10px',
            }}
          >
            ●
          </span>
        </div>

        {/* LOGOUT */}
        <button
          onClick={logout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '9px',
            padding: '11px',
            borderRadius: '9px',
            border:
              '1px solid rgba(255,255,255,0.08)',
            background: 'transparent',
            color: 'rgba(255,255,255,0.6)',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: '600',
          }}
        >
          <span>↪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
