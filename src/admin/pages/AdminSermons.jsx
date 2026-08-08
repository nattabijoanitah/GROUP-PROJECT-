
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = 'http://127.0.0.1:5000/api/admin/sermons';

export default function AdminSermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    scripture_reference: '',
    image_url: '',
  });

  const token = localStorage.getItem('access_token');

  const loadSermons = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || 'Failed to load sermons.'
        );
      }

      setSermons(data.items || []);
    } catch (err) {
      console.error('SERMON LOAD ERROR:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      setError('You are not logged in. Please login again.');
      setLoading(false);
      return;
    }

    loadSermons();
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
      scripture_reference: '',
      image_url: '',
    });

    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError('Sermon title is required.');
      return;
    }

    setSaving(true);
    setError('');

    try {
      const method = editingId ? 'PUT' : 'POST';
      const url = editingId
        ? `${API_URL}/${editingId}`
        : API_URL;

      const formData = new FormData();

      formData.append('title', form.title);
      formData.append('description', form.description);
      formData.append(
        'scripture_reference',
        form.scripture_reference
      );
      formData.append('image_url', form.image_url);

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || 'Failed to save sermon.'
        );
      }

      resetForm();
      await loadSermons();
    } catch (err) {
      console.error('SERMON SAVE ERROR:', err);
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (sermon) => {
    setEditingId(sermon.id);

    setForm({
      title: sermon.title || '',
      description: sermon.description || '',
      scripture_reference:
        sermon.scripture_reference || '',
      image_url: sermon.image_url || '',
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this sermon?'
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || 'Failed to delete sermon.'
        );
      }

      await loadSermons();
    } catch (err) {
      console.error('SERMON DELETE ERROR:', err);
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        padding: '35px',
        color: '#ffffff',
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <Link
            to="/admin/dashboard"
            style={{
              color: '#d4af37',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
            ← Dashboard
          </Link>

          <h1
            style={{
              margin: '12px 0 6px',
              fontSize: '32px',
            }}
          >
            Sermons Management
          </h1>

          <p
            style={{
              margin: 0,
              opacity: 0.65,
            }}
          >
            Create, edit and manage church sermons.
          </p>
        </div>

        <div
          style={{
            padding: '12px 18px',
            borderRadius: '10px',
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            color: '#d4af37',
            fontWeight: '600',
          }}
        >
          {sermons.length} Sermons
        </div>
      </div>

      {error && (
        <div
          style={{
            padding: '15px 18px',
            marginBottom: '25px',
            borderRadius: '10px',
            background: 'rgba(220, 53, 69, 0.12)',
            border: '1px solid rgba(220, 53, 69, 0.3)',
            color: '#ff8f8f',
          }}
        >
          {error}
        </div>
      )}

      <section
        style={{
          background: '#101c32',
          borderRadius: '16px',
          padding: '28px',
          marginBottom: '30px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          {editingId ? 'Edit Sermon' : 'Add New Sermon'}
        </h2>

        <p style={{ opacity: 0.6 }}>
          {editingId
            ? 'Update the sermon information below.'
            : 'Add a new sermon to the church website.'}
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            <div>
              <label>Sermon Title</label>

              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Enter sermon title"
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Scripture Reference</label>

              <input
                name="scripture_reference"
                value={form.scripture_reference}
                onChange={handleChange}
                placeholder="e.g. John 3:16"
                style={inputStyle}
              />
            </div>

            <div
              style={{
                gridColumn: '1 / -1',
              }}
            >
              <label>Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Enter sermon description"
                rows="5"
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                }}
              />
            </div>

            <div
              style={{
                gridColumn: '1 / -1',
              }}
            >
              <label>Image URL</label>

              <input
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                placeholder="https://example.com/sermon-image.jpg"
                style={inputStyle}
              />
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '25px',
            }}
          >
            <button
              type="submit"
              disabled={saving}
              style={{
                padding: '13px 24px',
                border: 'none',
                borderRadius: '9px',
                background: '#d4af37',
                color: '#071124',
                fontWeight: '700',
                cursor: saving ? 'not-allowed' : 'pointer',
              }}
            >
              {saving
                ? 'Saving...'
                : editingId
                ? 'Update Sermon'
                : 'Create Sermon'}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                style={{
                  padding: '13px 24px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '9px',
                  background: 'transparent',
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

      <section
        style={{
          background: '#101c32',
          borderRadius: '16px',
          padding: '28px',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>
              Existing Sermons
            </h2>

            <p
              style={{
                margin: '6px 0 0',
                opacity: 0.6,
              }}
            >
              Manage sermons currently stored in the system.
            </p>
          </div>

          <button
            onClick={loadSermons}
            style={{
              padding: '9px 15px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'transparent',
              color: '#ffffff',
              cursor: 'pointer',
            }}
          >
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <p>Loading sermons...</p>
        ) : sermons.length === 0 ? (
          <p style={{ opacity: 0.6 }}>
            No sermons found.
          </p>
        ) : (
          <div
            style={{
              display: 'grid',
              gap: '15px',
            }}
          >
            {sermons.map((sermon) => (
              <div
                key={sermon.id}
                style={{
                  padding: '20px',
                  borderRadius: '12px',
                  background: '#0b162b',
                  border: '1px solid rgba(255,255,255,0.07)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      margin: '0 0 8px',
                      color: '#d4af37',
                    }}
                  >
                    {sermon.title}
                  </h3>

                  {sermon.scripture_reference && (
                    <p
                      style={{
                        margin: '0 0 7px',
                        fontWeight: '600',
                      }}
                    >
                      📖 {sermon.scripture_reference}
                    </p>
                  )}

                  <p
                    style={{
                      margin: 0,
                      opacity: 0.65,
                    }}
                  >
                    {sermon.description ||
                      'No description provided.'}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    gap: '8px',
                  }}
                >
                  <button
                    onClick={() => handleEdit(sermon)}
                    style={actionButton}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(sermon.id)}
                    style={{
                      ...actionButton,
                      color: '#ff8f8f',
                      borderColor:
                        'rgba(255,100,100,0.25)',
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  marginTop: '8px',
  padding: '13px',
  borderRadius: '9px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: '#0b162b',
  color: '#ffffff',
  outline: 'none',
};

const actionButton = {
  padding: '9px 15px',
  borderRadius: '8px',
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'transparent',
  color: '#ffffff',
  cursor: 'pointer',
};
