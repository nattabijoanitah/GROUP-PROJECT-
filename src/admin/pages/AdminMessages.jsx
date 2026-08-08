
import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://127.0.0.1:5000';

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('all');

  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  const loadMessages = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `${API_BASE_URL}/api/contact-messages`,
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      const text = await response.text();

      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          'The server returned an invalid response.'
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            `Failed to load messages (${response.status})`
        );
      }

      setMessages(
        Array.isArray(data)
          ? data
          : data.messages ||
              data.items ||
              data.contact_messages ||
              []
      );
    } catch (err) {
      console.error('MESSAGES ERROR:', err);

      setError(
        err.message ||
          'Failed to load messages.'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const getMessageStatus = (message) => {
    return String(
      message.status || 'unread'
    ).toLowerCase();
  };

  const filteredMessages =
    filter === 'all'
      ? messages
      : messages.filter(
          (message) =>
            getMessageStatus(message) === filter
        );

  const unreadCount = messages.filter(
    (message) =>
      getMessageStatus(message) === 'unread'
  ).length;

  const readCount = messages.filter(
    (message) =>
      getMessageStatus(message) === 'read'
  ).length;

  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* HEADER */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '20px',
          marginBottom: '28px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'linear-gradient(135deg, #d4af37, #9d781b)',
                color: '#071124',
                fontSize: '18px',
                fontWeight: '900',
                boxShadow:
                  '0 8px 20px rgba(212,175,55,0.14)',
              }}
            >
              ✉
            </div>

            <div>
              <p
                style={{
                  margin: 0,
                  color: '#d4af37',
                  fontSize: '10px',
                  fontWeight: '700',
                  letterSpacing: '1.3px',
                  textTransform: 'uppercase',
                }}
              >
                IHEMA Administration
              </p>

              <h1
                style={{
                  margin: '4px 0 0',
                  color: '#ffffff',
                  fontSize: '28px',
                  fontWeight: '800',
                  letterSpacing: '-0.5px',
                }}
              >
                Messages
              </h1>
            </div>
          </div>

          <p
            style={{
              margin: 0,
              color: 'rgba(255,255,255,0.52)',
              fontSize: '13px',
            }}
          >
            View and manage messages submitted
            through the IHEMA website.
          </p>
        </div>

        {/* ONLINE */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            padding: '9px 13px',
            borderRadius: '10px',
            background:
              'rgba(74,222,128,0.07)',
            border:
              '1px solid rgba(74,222,128,0.12)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow:
                '0 0 8px rgba(74,222,128,0.7)',
            }}
          />

          <span
            style={{
              color:
                'rgba(255,255,255,0.65)',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            Online
          </span>
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div
          style={{
            marginBottom: '20px',
            padding: '13px 16px',
            borderRadius: '11px',
            background:
              'rgba(239,68,68,0.08)',
            border:
              '1px solid rgba(239,68,68,0.18)',
            color: '#fca5a5',
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <span>{error}</span>

          <button
            onClick={loadMessages}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#d4af37',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '11px',
            }}
          >
            Try Again
          </button>
        </div>
      )}

      {/* STAT CARDS */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(190px, 1fr))',
          gap: '15px',
          marginBottom: '24px',
        }}
      >
        <StatCard
          label="Total Messages"
          value={messages.length}
          icon="✉"
        />

        <StatCard
          label="Unread"
          value={unreadCount}
          icon="●"
        />

        <StatCard
          label="Read"
          value={readCount}
          icon="✓"
        />
      </div>

      {/* MESSAGES SECTION */}
      <section
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
          border:
            '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow:
            '0 15px 40px rgba(0,0,0,0.12)',
        }}
      >
        {/* SECTION HEADER */}
        <div
          style={{
            padding: '22px 24px',
            borderBottom:
              '1px solid rgba(255,255,255,0.07)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '750',
              }}
            >
              Website Messages
            </h2>

            <p
              style={{
                margin: '5px 0 0',
                color:
                  'rgba(255,255,255,0.4)',
                fontSize: '11px',
              }}
            >
              Messages submitted by visitors
              through the contact form.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {['all', 'unread', 'read'].map(
              (item) => (
                <button
                  key={item}
                  onClick={() =>
                    setFilter(item)
                  }
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border:
                      filter === item
                        ? '1px solid rgba(212,175,55,0.3)'
                        : '1px solid rgba(255,255,255,0.08)',
                    background:
                      filter === item
                        ? 'rgba(212,175,55,0.12)'
                        : 'rgba(255,255,255,0.035)',
                    color:
                      filter === item
                        ? '#d4af37'
                        : 'rgba(255,255,255,0.55)',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: '700',
                    textTransform:
                      'capitalize',
                  }}
                >
                  {item}
                </button>
              )
            )}

            <button
              onClick={loadMessages}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border:
                  '1px solid rgba(255,255,255,0.08)',
                background:
                  'rgba(255,255,255,0.035)',
                color:
                  'rgba(255,255,255,0.65)',
                cursor: 'pointer',
                fontSize: '10px',
                fontWeight: '600',
              }}
            >
              ↻ Refresh
            </button>
          </div>
        </div>

        {/* CONTENT */}
        {loading ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
              color:
                'rgba(255,255,255,0.42)',
              fontSize: '12px',
            }}
          >
            Loading messages...
          </div>
        ) : filteredMessages.length === 0 ? (
          <div
            style={{
              padding: '70px 20px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '58px',
                height: '58px',
                margin:
                  '0 auto 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'rgba(212,175,55,0.07)',
                border:
                  '1px solid rgba(212,175,55,0.12)',
                color: '#d4af37',
                fontSize: '24px',
              }}
            >
              ✉
            </div>

            <h3
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              No messages
            </h3>

            <p
              style={{
                margin: '7px 0 0',
                color:
                  'rgba(255,255,255,0.4)',
                fontSize: '11px',
              }}
            >
              There are currently no
              messages to display.
            </p>
          </div>
        ) : (
          <div
            style={{
              overflowX: 'auto',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse:
                  'collapse',
                minWidth: '850px',
              }}
            >
              <thead>
                <tr>
                  {[
                    'Name',
                    'Email',
                    'Subject',
                    'Message',
                    'Status',
                    'Date',
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        padding:
                          '13px 20px',
                        textAlign:
                          'left',
                        color:
                          'rgba(255,255,255,0.35)',
                        fontSize:
                          '10px',
                        fontWeight:
                          '700',
                        letterSpacing:
                          '0.8px',
                        textTransform:
                          'uppercase',
                        borderBottom:
                          '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {filteredMessages.map(
                  (message, index) => {
                    const status =
                      getMessageStatus(
                        message
                      );

                    return (
                      <tr
                        key={
                          message.id ||
                          index
                        }
                      >
                        <td
                          style={
                            tableCell
                          }
                        >
                          {message.name ||
                            message.full_name ||
                            'Anonymous'}
                        </td>

                        <td
                          style={{
                            ...tableCell,
                            color:
                              'rgba(255,255,255,0.5)',
                            fontWeight:
                              '400',
                          }}
                        >
                          {message.email ||
                            '—'}
                        </td>

                        <td
                          style={
                            tableCell
                          }
                        >
                          {message.subject ||
                            message.title ||
                            'No subject'}
                        </td>

                        <td
                          style={{
                            ...tableCell,
                            maxWidth:
                              '350px',
                          }}
                        >
                          <div
                            style={{
                              whiteSpace:
                                'nowrap',
                              overflow:
                                'hidden',
                              textOverflow:
                                'ellipsis',
                            }}
                            title={
                              message.message ||
                              message.content ||
                              ''
                            }
                          >
                            {message.message ||
                              message.content ||
                              'No message'}
                          </div>
                        </td>

                        <td
                          style={
                            tableCell
                          }
                        >
                          <span
                            style={{
                              display:
                                'inline-flex',
                              padding:
                                '5px 9px',
                              borderRadius:
                                '7px',
                              background:
                                status ===
                                'read'
                                  ? 'rgba(74,222,128,0.08)'
                                  : 'rgba(251,191,36,0.08)',
                              border:
                                status ===
                                'read'
                                  ? '1px solid rgba(74,222,128,0.14)'
                                  : '1px solid rgba(251,191,36,0.14)',
                              color:
                                status ===
                                'read'
                                  ? '#4ade80'
                                  : '#fbbf24',
                              fontSize:
                                '10px',
                              fontWeight:
                                '700',
                            }}
                          >
                            {status ===
                            'read'
                              ? 'Read'
                              : 'Unread'}
                          </span>
                        </td>

                        <td
                          style={{
                            ...tableCell,
                            color:
                              'rgba(255,255,255,0.45)',
                            fontWeight:
                              '400',
                          }}
                        >
                          {message.created_at
                            ? new Date(
                                message.created_at
                              ).toLocaleDateString()
                            : '—'}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}) {
  return (
    <div
      style={{
        padding: '18px',
        borderRadius: '14px',
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018))',
        border:
          '1px solid rgba(255,255,255,0.065)',
        boxShadow:
          '0 10px 30px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent:
            'space-between',
          alignItems: 'center',
          marginBottom: '14px',
        }}
      >
        <span
          style={{
            color:
              'rgba(255,255,255,0.43)',
            fontSize: '10px',
            fontWeight: '700',
            letterSpacing:
              '0.7px',
            textTransform:
              'uppercase',
          }}
        >
          {label}
        </span>

        <span
          style={{
            color: '#d4af37',
            fontSize: '16px',
          }}
        >
          {icon}
        </span>
      </div>

      <strong
        style={{
          color: '#ffffff',
          fontSize: '25px',
          fontWeight: '800',
        }}
      >
        {value}
      </strong>
    </div>
  );
}

const tableCell = {
  padding: '17px 20px',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '650',
  borderBottom:
    '1px solid rgba(255,255,255,0.045)',
};
