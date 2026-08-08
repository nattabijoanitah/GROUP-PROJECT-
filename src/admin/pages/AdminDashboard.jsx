
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminHeader from '../components/AdminHeader';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const loadDashboard = async () => {
    const token = localStorage.getItem('access_token');

    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        'http://127.0.0.1:5000/api/admin/dashboard',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      console.log('ADMIN DASHBOARD RESPONSE:', data);

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.msg ||
            data.error ||
            'Failed to load dashboard.'
        );
      }

      setDashboard(data);
    } catch (err) {
      console.error('DASHBOARD ERROR:', err);

      if (
        err.message?.toLowerCase().includes('token') ||
        err.message?.toLowerCase().includes('authorization')
      ) {
        localStorage.removeItem('access_token');
        localStorage.removeItem('admin_user');
        navigate('/admin/login');
        return;
      }

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#070f1f',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '15px',
        }}
      >
        Loading IHEMA Administration...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#070f1f',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
        }}
      >
        <div
          style={{
            maxWidth: '450px',
            width: '100%',
            padding: '35px',
            borderRadius: '18px',
            background: '#101b30',
            border: '1px solid rgba(255,255,255,0.08)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '40px',
              marginBottom: '15px',
            }}
          >
            ⚠
          </div>

          <h2>Unable to load dashboard</h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            {error}
          </p>

          <button
            onClick={loadDashboard}
            style={{
              marginTop: '15px',
              padding: '11px 20px',
              border: 'none',
              borderRadius: '8px',
              background: '#d4af37',
              color: '#071124',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const stats = [
    {
      title: 'Total Events',
      value: dashboard?.total_events ?? 0,
      icon: '◫',
      path: '/admin/events',
    },
    {
      title: 'Total Sermons',
      value: dashboard?.total_sermons ?? 0,
      icon: '◉',
      path: '/admin/sermons',
    },
    {
      title: 'Gallery Items',
      value: dashboard?.total_gallery_items ?? 0,
      icon: '▧',
      path: '/admin/gallery',
    },
    {
      title: 'Prayer Requests',
      value: dashboard?.total_prayer_requests ?? 0,
      icon: '♡',
      path: '/admin/prayer-requests',
    },
    {
      title: 'Messages',
      value: dashboard?.total_messages ?? 0,
      icon: '✉',
      path: '/admin/messages',
    },
    {
      title: 'Users',
      value: dashboard?.total_users ?? 0,
      icon: '♙',
      path: '/admin/dashboard',
    },
  ];

  const quickActions = [
    {
      title: 'Create Event',
      description: 'Add a new church event',
      icon: '◫',
      path: '/admin/events',
    },
    {
      title: 'Add Sermon',
      description: 'Publish a new sermon',
      icon: '◉',
      path: '/admin/sermons',
    },
    {
      title: 'Upload Gallery',
      description: 'Add photos to the gallery',
      icon: '▧',
      path: '/admin/gallery',
    },
    {
      title: 'View Prayer Requests',
      description: 'Review submitted requests',
      icon: '♡',
      path: '/admin/prayer-requests',
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#070f1f',
        color: '#ffffff',
      }}
    >
      <AdminSidebar />

      <div
        style={{
          marginLeft: '250px',
          minHeight: '100vh',
        }}
      >
        <AdminHeader />

        <main
          style={{
            padding: '35px',
            maxWidth: '1600px',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          {/* WELCOME */}
          <section
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '30px',
              padding: '30px',
              borderRadius: '18px',
              background:
                'linear-gradient(135deg, #101d35, #0c172b)',
              border:
                '1px solid rgba(212,175,55,0.12)',
              boxShadow:
                '0 15px 40px rgba(0,0,0,0.18)',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '7px 11px',
                  borderRadius: '20px',
                  background:
                    'rgba(212,175,55,0.08)',
                  color: '#d4af37',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                  marginBottom: '15px',
                }}
              >
                <span>●</span>
                Administration
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: '30px',
                  lineHeight: 1.2,
                  fontWeight: '700',
                }}
              >
                Welcome to IHEMA Admin
              </h1>

              <p
                style={{
                  margin:
                    '10px 0 0',
                  color:
                    'rgba(255,255,255,0.55)',
                  fontSize: '14px',
                  maxWidth: '600px',
                  lineHeight: 1.6,
                }}
              >
                Manage your church website, content
                and communications from one place.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                borderRadius: '10px',
                background:
                  'rgba(34,197,94,0.07)',
                border:
                  '1px solid rgba(34,197,94,0.14)',
                color: '#86efac',
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              <span>●</span>
              System Online
            </div>
          </section>

          {/* STATISTICS */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '16px',
              marginBottom: '35px',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.title}
                onClick={() =>
                  navigate(stat.path)
                }
                style={{
                  padding: '22px',
                  borderRadius: '16px',
                  background: '#101b30',
                  border:
                    '1px solid rgba(255,255,255,0.07)',
                  cursor: 'pointer',
                  transition:
                    'transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent:
                      'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <span
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background:
                        'rgba(212,175,55,0.09)',
                      color: '#d4af37',
                      fontSize: '21px',
                    }}
                  >
                    {stat.icon}
                  </span>

                  <span
                    style={{
                      color:
                        'rgba(255,255,255,0.35)',
                      fontSize: '11px',
                    }}
                  >
                    VIEW →
                  </span>
                </div>

                <p
                  style={{
                    margin: 0,
                    color:
                      'rgba(255,255,255,0.5)',
                    fontSize: '12px',
                  }}
                >
                  {stat.title}
                </p>

                <h2
                  style={{
                    margin:
                      '6px 0 0',
                    fontSize: '30px',
                    color: '#ffffff',
                  }}
                >
                  {stat.value}
                </h2>
              </div>
            ))}
          </section>

          {/* TWO COLUMN AREA */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(0, 1.5fr) minmax(300px, 1fr)',
              gap: '20px',
              marginBottom: '20px',
            }}
          >
            {/* QUICK ACTIONS */}
            <div
              style={{
                padding: '25px',
                borderRadius: '16px',
                background: '#101b30',
                border:
                  '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div
                style={{
                  marginBottom: '22px',
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: '18px',
                  }}
                >
                  Quick Actions
                </h2>

                <p
                  style={{
                    margin:
                      '6px 0 0',
                    color:
                      'rgba(255,255,255,0.45)',
                    fontSize: '12px',
                  }}
                >
                  Frequently used administration
                  tools.
                </p>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(2, minmax(0, 1fr))',
                  gap: '12px',
                }}
              >
                {quickActions.map(
                  (action) => (
                    <button
                      key={action.title}
                      onClick={() =>
                        navigate(action.path)
                      }
                      style={{
                        textAlign: 'left',
                        padding: '18px',
                        borderRadius: '12px',
                        border:
                          '1px solid rgba(255,255,255,0.07)',
                        background:
                          '#0c1729',
                        color: '#ffffff',
                        cursor: 'pointer',
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems:
                            'center',
                          justifyContent:
                            'center',
                          background:
                            'rgba(212,175,55,0.08)',
                          color: '#d4af37',
                          fontSize: '18px',
                          marginBottom:
                            '12px',
                        }}
                      >
                        {action.icon}
                      </div>

                      <strong
                        style={{
                          display:
                            'block',
                          fontSize:
                            '13px',
                        }}
                      >
                        {action.title}
                      </strong>

                      <span
                        style={{
                          display:
                            'block',
                          marginTop:
                            '5px',
                          color:
                            'rgba(255,255,255,0.42)',
                          fontSize:
                            '11px',
                        }}
                      >
                        {action.description}
                      </span>
                    </button>
                  )
                )}
              </div>
            </div>

            {/* CONTENT OVERVIEW */}
            <div
              style={{
                padding: '25px',
                borderRadius: '16px',
                background: '#101b30',
                border:
                  '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: '18px',
                }}
              >
                Content Overview
              </h2>

              <p
                style={{
                  margin:
                    '6px 0 20px',
                  color:
                    'rgba(255,255,255,0.45)',
                  fontSize: '12px',
                }}
              >
                Current website content.
              </p>

              {stats
                .slice(0, 5)
                .map((stat) => (
                  <div
                    key={stat.title}
                    style={{
                      display: 'flex',
                      alignItems:
                        'center',
                      justifyContent:
                        'space-between',
                      padding:
                        '12px 0',
                      borderBottom:
                        '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span
                      style={{
                        color:
                          'rgba(255,255,255,0.6)',
                        fontSize:
                          '12px',
                      }}
                    >
                      {stat.title}
                    </span>

                    <strong
                      style={{
                        color:
                          '#d4af37',
                        fontSize:
                          '14px',
                      }}
                    >
                      {stat.value}
                    </strong>
                  </div>
                ))}
            </div>
          </section>

          {/* SYSTEM STATUS */}
          <section
            style={{
              display: 'grid',
              gridTemplateColumns:
                'minmax(0, 1.5fr) minmax(300px, 1fr)',
              gap: '20px',
            }}
          >
            <div
              style={{
                padding: '25px',
                borderRadius: '16px',
                background: '#101b30',
                border:
                  '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: '18px',
                }}
              >
                System Status
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(2, 1fr)',
                  gap: '12px',
                  marginTop: '20px',
                }}
              >
                {[
                  ['Website', 'Online'],
                  ['Backend API', 'Connected'],
                  ['Database', 'Connected'],
                  ['Authentication', 'Active'],
                ].map(
                  ([label, status]) => (
                    <div
                      key={label}
                      style={{
                        padding:
                          '15px',
                        borderRadius:
                          '11px',
                        background:
                          '#0c1729',
                        border:
                          '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div
                        style={{
                          display:
                            'flex',
                          justifyContent:
                            'space-between',
                          alignItems:
                            'center',
                        }}
                      >
                        <span
                          style={{
                            color:
                              'rgba(255,255,255,0.55)',
                            fontSize:
                              '12px',
                          }}
                        >
                          {label}
                        </span>

                        <span
                          style={{
                            color:
                              '#4ade80',
                            fontSize:
                              '11px',
                            fontWeight:
                              '700',
                          }}
                        >
                          ● {status}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ADMIN */}
            <div
              style={{
                padding: '25px',
                borderRadius: '16px',
                background:
                  'linear-gradient(135deg, #111f37, #0d182c)',
                border:
                  '1px solid rgba(212,175,55,0.12)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: '18px',
                }}
              >
                Administrator
              </h2>

              <p
                style={{
                  margin:
                    '7px 0 20px',
                  color:
                    'rgba(255,255,255,0.45)',
                  fontSize: '12px',
                }}
              >
                IHEMA Christian Fellowship
                International
              </p>

              <div
                style={{
                  padding: '15px',
                  borderRadius: '11px',
                  background:
                    'rgba(255,255,255,0.035)',
                }}
              >
                <span
                  style={{
                    display: 'block',
                    color:
                      'rgba(255,255,255,0.4)',
                    fontSize: '10px',
                    textTransform:
                      'uppercase',
                    letterSpacing:
                      '1px',
                  }}
                >
                  Account Status
                </span>

                <strong
                  style={{
                    display: 'block',
                    marginTop: '7px',
                    color: '#ffffff',
                    fontSize: '13px',
                  }}
                >
                  Administrator Account
                </strong>

                <span
                  style={{
                    display: 'block',
                    marginTop: '7px',
                    color: '#4ade80',
                    fontSize: '11px',
                  }}
                >
                  ● Active
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
