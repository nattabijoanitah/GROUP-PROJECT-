
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:5000/api/admin/events';

export default function AdminEvents() {
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
  });

  const getToken = () =>
    localStorage.getItem('access_token');

  const loadEvents = async () => {
    const token = getToken();

    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      console.log('ADMIN EVENTS RESPONSE:', data);

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.msg ||
            data.error ||
            'Failed to load events.'
        );
      }

      setEvents(
        Array.isArray(data)
          ? data
          : data.items || data.events || []
      );
    } catch (err) {
      console.error('EVENTS ERROR:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setForm({
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      location: '',
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getToken();

    if (!token) {
      navigate('/admin/login');
      return;
    }

    try {
      setSaving(true);
      setError('');
      setSuccess('');

      const method = editingId ? 'PUT' : 'POST';

      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      console.log('SAVE EVENT RESPONSE:', data);

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.msg ||
            data.error ||
            'Failed to save event.'
        );
      }

      setSuccess(
        editingId
          ? 'Event updated successfully.'
          : 'Event created successfully.'
      );

      resetForm();
      await loadEvents();
    } catch (err) {
      console.error('SAVE EVENT ERROR:', err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (event) => {
    setEditingId(event.id);

    setForm({
      title: event.title || '',
      description: event.description || '',
      start_date: event.start_date
        ? event.start_date.substring(0, 16)
        : '',
      end_date: event.end_date
        ? event.end_date.substring(0, 16)
        : '',
      location: event.location || '',
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this event?'
    );

    if (!confirmed) return;

    const token = getToken();

    try {
      setError('');
      setSuccess('');

      const response = await fetch(
        `${API_URL}/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.msg ||
            data.error ||
            'Failed to delete event.'
        );
      }

      setSuccess('Event deleted successfully.');

      await loadEvents();
    } catch (err) {
      console.error('DELETE EVENT ERROR:', err);
      setError(err.message);
    }
  };

  const formatDate = (date) => {
    if (!date) return '—';

    const parsed = new Date(date);

    if (Number.isNaN(parsed.getTime())) {
      return date;
    }

    return parsed.toLocaleDateString(
      'en-US',
      {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }
    );
  };

  return (
    <div
      style={{
        color: '#ffffff',
        minHeight: '100vh',
      }}
    >
      {/* PAGE HEADER */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '30px',
        }}
      >
        <div>
          <button
            onClick={() =>
              navigate('/admin/dashboard')
            }
            style={{
              border: 'none',
              background: 'transparent',
              color:
                'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              padding: 0,
              marginBottom: '12px',
              fontSize: '12px',
            }}
          >
            ← Dashboard
          </button>

          <h1
            style={{
              margin: 0,
              fontSize: '30px',
            }}
          >
            Events Management
          </h1>

          <p
            style={{
              margin: '8px 0 0',
              color:
                'rgba(255,255,255,0.5)',
              fontSize: '13px',
            }}
          >
            Create, edit and manage church
            events.
          </p>
        </div>

        <div
          style={{
            padding: '10px 15px',
            borderRadius: '10px',
            background:
              'rgba(212,175,55,0.08)',
            border:
              '1px solid rgba(212,175,55,0.14)',
            color: '#d4af37',
            fontSize: '12px',
            fontWeight: '700',
          }}
        >
          {events.length} Events
        </div>
      </div>

      {/* ALERTS */}
      {error && (
        <div
          style={{
            padding: '13px 16px',
            marginBottom: '18px',
            borderRadius: '10px',
            background:
              'rgba(239,68,68,0.08)',
            border:
              '1px solid rgba(239,68,68,0.18)',
            color: '#fca5a5',
            fontSize: '13px',
          }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          style={{
            padding: '13px 16px',
            marginBottom: '18px',
            borderRadius: '10px',
            background:
              'rgba(34,197,94,0.08)',
            border:
              '1px solid rgba(34,197,94,0.18)',
            color: '#86efac',
            fontSize: '13px',
          }}
        >
          {success}
        </div>
      )}

      {/* CREATE / EDIT FORM */}
      <section
        style={{
          padding: '25px',
          marginBottom: '25px',
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
            {editingId
              ? 'Edit Event'
              : 'Add New Event'}
          </h2>

          <p
            style={{
              margin: '6px 0 0',
              color:
                'rgba(255,255,255,0.45)',
              fontSize: '12px',
            }}
          >
            {editingId
              ? 'Update the event information below.'
              : 'Create a new event for the church website.'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(2, minmax(0, 1fr))',
              gap: '16px',
            }}
          >
            <div
              style={{
                gridColumn: '1 / -1',
              }}
            >
              <label style={labelStyle}>
                Event Title
              </label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Annual Fire Conference 2026"
                required
                style={inputStyle}
              />
            </div>

            <div
              style={{
                gridColumn: '1 / -1',
              }}
            >
              <label style={labelStyle}>
                Description
              </label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter event description..."
                rows="4"
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
              />
            </div>

            <div>
              <label style={labelStyle}>
                Start Date
              </label>

              <input
                type="datetime-local"
                name="start_date"
                value={form.start_date}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>
                End Date
              </label>

              <input
                type="datetime-local"
                name="end_date"
                value={form.end_date}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            <div
              style={{
                gridColumn: '1 / -1',
              }}
            >
              <label style={labelStyle}>
                Location
              </label>

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="IHEMA Church, Bweyogerere"
                style={inputStyle}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              marginTop: '22px',
            }}
          >
            <button
              type="submit"
              disabled={saving}
              style={{
                padding: '12px 20px',
                border: 'none',
                borderRadius: '9px',
                background:
                  'linear-gradient(135deg, #d4af37, #b58c25)',
                color: '#071124',
                cursor: saving
                  ? 'not-allowed'
                  : 'pointer',
                fontWeight: '800',
                opacity: saving ? 0.7 : 1,
              }}
            >
              {saving
                ? 'Saving...'
                : editingId
                ? 'Update Event'
                : 'Create Event'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                style={{
                  padding: '12px 20px',
                  borderRadius: '9px',
                  border:
                    '1px solid rgba(255,255,255,0.1)',
                  background:
                    'transparent',
                  color: '#ffffff',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* EVENTS TABLE */}
      <section
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
            display: 'flex',
            alignItems: 'center',
            justifyContent:
              'space-between',
            marginBottom: '20px',
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontSize: '18px',
              }}
            >
              Existing Events
            </h2>

            <p
              style={{
                margin: '6px 0 0',
                color:
                  'rgba(255,255,255,0.4)',
                fontSize: '12px',
              }}
            >
              Manage all events currently stored
              in the system.
            </p>
          </div>

          <button
            onClick={loadEvents}
            style={{
              padding: '9px 13px',
              borderRadius: '8px',
              border:
                '1px solid rgba(255,255,255,0.08)',
              background:
                'rgba(255,255,255,0.03)',
              color:
                'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              fontSize: '12px',
            }}
          >
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              color:
                'rgba(255,255,255,0.45)',
            }}
          >
            Loading events...
          </div>
        ) : events.length === 0 ? (
          <div
            style={{
              padding: '45px',
              textAlign: 'center',
              borderRadius: '12px',
              background:
                'rgba(255,255,255,0.025)',
              color:
                'rgba(255,255,255,0.45)',
            }}
          >
            No events found.
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
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>
                    Event
                  </th>

                  <th style={thStyle}>
                    Start
                  </th>

                  <th style={thStyle}>
                    End
                  </th>

                  <th style={thStyle}>
                    Location
                  </th>

                  <th
                    style={{
                      ...thStyle,
                      textAlign: 'right',
                    }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td
                      style={tdStyle}
                    >
                      <strong
                        style={{
                          display:
                            'block',
                          color:
                            '#ffffff',
                          fontSize:
                            '13px',
                        }}
                      >
                        {event.title ||
                          'Untitled Event'}
                      </strong>

                      {event.description && (
                        <span
                          style={{
                            display:
                              'block',
                            marginTop:
                              '5px',
                            color:
                              'rgba(255,255,255,0.4)',
                            fontSize:
                              '11px',
                            maxWidth:
                              '350px',
                            overflow:
                              'hidden',
                            textOverflow:
                              'ellipsis',
                            whiteSpace:
                              'nowrap',
                          }}
                        >
                          {event.description}
                        </span>
                      )}
                    </td>

                    <td
                      style={tdStyle}
                    >
                      {formatDate(
                        event.start_date
                      )}
                    </td>

                    <td
                      style={tdStyle}
                    >
                      {formatDate(
                        event.end_date
                      )}
                    </td>

                    <td
                      style={tdStyle}
                    >
                      {event.location ||
                        '—'}
                    </td>

                    <td
                      style={{
                        ...tdStyle,
                        textAlign:
                          'right',
                      }}
                    >
                      <button
                        onClick={() =>
                          handleEdit(event)
                        }
                        style={{
                          marginRight:
                            '7px',
                          padding:
                            '7px 11px',
                          borderRadius:
                            '7px',
                          border:
                            '1px solid rgba(212,175,55,0.2)',
                          background:
                            'rgba(212,175,55,0.07)',
                          color:
                            '#d4af37',
                          cursor:
                            'pointer',
                          fontSize:
                            '11px',
                          fontWeight:
                            '700',
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            event.id
                          )
                        }
                        style={{
                          padding:
                            '7px 11px',
                          borderRadius:
                            '7px',
                          border:
                            '1px solid rgba(239,68,68,0.18)',
                          background:
                            'rgba(239,68,68,0.06)',
                          color:
                            '#fca5a5',
                          cursor:
                            'pointer',
                          fontSize:
                            '11px',
                          fontWeight:
                            '700',
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  marginBottom: '7px',
  color: 'rgba(255,255,255,0.65)',
  fontSize: '12px',
  fontWeight: '600',
};

const inputStyle = {
  width: '100%',
  padding: '12px 13px',
  boxSizing: 'border-box',
  borderRadius: '9px',
  border: '1px solid rgba(255,255,255,0.09)',
  background: '#0a1527',
  color: '#ffffff',
  outline: 'none',
  fontSize: '13px',
};

const thStyle = {
  padding: '12px',
  textAlign: 'left',
  borderBottom:
    '1px solid rgba(255,255,255,0.08)',
  color: 'rgba(255,255,255,0.4)',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
};

const tdStyle = {
  padding: '15px 12px',
  borderBottom:
    '1px solid rgba(255,255,255,0.05)',
  color: 'rgba(255,255,255,0.65)',
  fontSize: '12px',
};
