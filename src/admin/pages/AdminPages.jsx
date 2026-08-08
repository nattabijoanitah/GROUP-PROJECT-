
import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'http://127.0.0.1:5000';

export default function AdminPages() {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    title: '',
    slug: '',
    content: '',
    status: 'published',
  });

  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  const loadPages = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(`${API_BASE_URL}/api/pages`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      const text = await response.text();

      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          'The server returned an invalid response. Please check the Pages API.'
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            `Failed to load pages (${response.status})`
        );
      }

      setPages(
        Array.isArray(data)
          ? data
          : data.pages || data.items || []
      );
    } catch (err) {
      console.error('PAGES ERROR:', err);
      setError(err.message || 'Failed to load pages.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPages();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const createSlug = () => {
    const slug = form.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');

    setForm((previous) => ({
      ...previous,
      slug,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError('Please enter a page title.');
      return;
    }

    try {
      setSaving(true);
      setError('');

      const response = await fetch(`${API_BASE_URL}/api/pages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(form),
      });

      const text = await response.text();

      let data = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        throw new Error(
          'The server returned an invalid response. Please check the backend API.'
        );
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            `Failed to create page (${response.status})`
        );
      }

      setForm({
        title: '',
        slug: '',
        content: '',
        status: 'published',
      });

      await loadPages();
    } catch (err) {
      console.error('CREATE PAGE ERROR:', err);
      setError(err.message || 'Failed to create page.');
    } finally {
      setSaving(false);
    }
  };

  const deletePage = async (id) => {
    if (!id) {
      setError('This page does not have a valid ID.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this page?')) {
      return;
    }

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/pages/${id}`,
        {
          method: 'DELETE',
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
        data = {};
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            data.error ||
            `Failed to delete page (${response.status})`
        );
      }

      await loadPages();
    } catch (err) {
      console.error('DELETE PAGE ERROR:', err);
      setError(err.message || 'Failed to delete page.');
    }
  };

  const publishedPages = pages.filter(
    (page) =>
      page.status === 'published' ||
      page.is_published === true
  ).length;

  const draftPages = pages.filter(
    (page) =>
      page.status === 'draft' ||
      page.is_published === false
  ).length;

  return (
    <div
      style={{
        maxWidth: '1400px',
        margin: '0 auto',
      }}
    >
      {/* PAGE HEADER */}
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
              ▤
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
                Pages
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
            Create, edit and manage website pages.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '9px',
            padding: '9px 13px',
            borderRadius: '10px',
            background: 'rgba(74,222,128,0.07)',
            border: '1px solid rgba(74,222,128,0.12)',
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
              color: 'rgba(255,255,255,0.65)',
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
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.18)',
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
            onClick={loadPages}
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
          label="Total Pages"
          value={pages.length}
          icon="▤"
        />

        <StatCard
          label="Published"
          value={publishedPages}
          icon="✓"
        />

        <StatCard
          label="Drafts"
          value={draftPages}
          icon="◷"
        />
      </div>

      {/* CREATE PAGE */}
      <section
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          padding: '24px',
          marginBottom: '24px',
          boxShadow:
            '0 15px 40px rgba(0,0,0,0.14)',
        }}
      >
        <div style={{ marginBottom: '22px' }}>
          <h2
            style={{
              margin: 0,
              color: '#ffffff',
              fontSize: '17px',
              fontWeight: '750',
            }}
          >
            Create New Page
          </h2>

          <p
            style={{
              margin: '6px 0 0',
              color: 'rgba(255,255,255,0.42)',
              fontSize: '12px',
            }}
          >
            Add a new page to your IHEMA website.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '17px',
            }}
          >
            <FormField label="Page Title">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. About IHEMA"
                style={inputStyle}
              />
            </FormField>

            <FormField
              label="Page Slug"
              action={
                <button
                  type="button"
                  onClick={createSlug}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#d4af37',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: '700',
                  }}
                >
                  Generate
                </button>
              }
            >
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                placeholder="about-ihema"
                style={inputStyle}
              />
            </FormField>

            <FormField label="Status">
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="published">
                  Published
                </option>

                <option value="draft">
                  Draft
                </option>
              </select>
            </FormField>
          </div>

          <div style={{ marginTop: '17px' }}>
            <FormField label="Page Content">
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Write the page content here..."
                rows={7}
                style={{
                  ...inputStyle,
                  resize: 'vertical',
                  minHeight: '150px',
                  lineHeight: '1.6',
                }}
              />
            </FormField>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '20px',
            }}
          >
            <button
              type="submit"
              disabled={saving}
              style={{
                border: 'none',
                borderRadius: '10px',
                padding: '12px 20px',
                background:
                  'linear-gradient(135deg, #d4af37, #b89124)',
                color: '#071124',
                fontSize: '12px',
                fontWeight: '800',
                cursor: saving
                  ? 'not-allowed'
                  : 'pointer',
                opacity: saving ? 0.65 : 1,
                boxShadow:
                  '0 8px 20px rgba(212,175,55,0.16)',
              }}
            >
              {saving
                ? 'Creating...'
                : '+ Create Page'}
            </button>
          </div>
        </form>
      </section>

      {/* EXISTING PAGES */}
      <section
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow:
            '0 15px 40px rgba(0,0,0,0.12)',
        }}
      >
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
              Existing Pages
            </h2>

            <p
              style={{
                margin: '5px 0 0',
                color: 'rgba(255,255,255,0.4)',
                fontSize: '11px',
              }}
            >
              Manage pages currently available on the website.
            </p>
          </div>

          <button
            onClick={loadPages}
            style={{
              padding: '9px 13px',
              borderRadius: '8px',
              border:
                '1px solid rgba(255,255,255,0.08)',
              background:
                'rgba(255,255,255,0.035)',
              color:
                'rgba(255,255,255,0.65)',
              cursor: 'pointer',
              fontSize: '11px',
              fontWeight: '600',
            }}
          >
            ↻ Refresh
          </button>
        </div>

        {loading ? (
          <div
            style={{
              padding: '55px 20px',
              textAlign: 'center',
              color:
                'rgba(255,255,255,0.42)',
              fontSize: '12px',
            }}
          >
            Loading pages...
          </div>
        ) : pages.length === 0 ? (
          <div
            style={{
              padding: '60px 20px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                width: '55px',
                height: '55px',
                margin: '0 auto 15px',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background:
                  'rgba(212,175,55,0.07)',
                border:
                  '1px solid rgba(212,175,55,0.12)',
                color: '#d4af37',
                fontSize: '22px',
              }}
            >
              ▤
            </div>

            <h3
              style={{
                margin: 0,
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '700',
              }}
            >
              No pages yet
            </h3>

            <p
              style={{
                margin: '7px 0 0',
                color:
                  'rgba(255,255,255,0.4)',
                fontSize: '11px',
              }}
            >
              Create your first website page
              using the form above.
            </p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                minWidth: '650px',
              }}
            >
              <thead>
                <tr>
                  {[
                    'Page',
                    'Slug',
                    'Status',
                    'Actions',
                  ].map((heading) => (
                    <th
                      key={heading}
                      style={{
                        padding: '13px 20px',
                        textAlign: 'left',
                        color:
                          'rgba(255,255,255,0.35)',
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.8px',
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
                {pages.map((page, index) => (
                  <tr
                    key={page.id || index}
                  >
                    <td style={tableCell}>
                      {page.title ||
                        page.name ||
                        'Untitled'}
                    </td>

                    <td
                      style={{
                        ...tableCell,
                        color:
                          'rgba(255,255,255,0.45)',
                        fontWeight: '400',
                      }}
                    >
                      /{page.slug || '—'}
                    </td>

                    <td style={tableCell}>
                      <span
                        style={{
                          display:
                            'inline-flex',
                          padding: '5px 9px',
                          borderRadius: '7px',
                          background:
                            page.status === 'draft'
                              ? 'rgba(251,191,36,0.08)'
                              : 'rgba(74,222,128,0.08)',
                          border:
                            page.status === 'draft'
                              ? '1px solid rgba(251,191,36,0.14)'
                              : '1px solid rgba(74,222,128,0.14)',
                          color:
                            page.status === 'draft'
                              ? '#fbbf24'
                              : '#4ade80',
                          fontSize: '10px',
                          fontWeight: '700',
                        }}
                      >
                        {page.status === 'draft'
                          ? 'Draft'
                          : 'Published'}
                      </span>
                    </td>

                    <td style={tableCell}>
                      <button
                        onClick={() =>
                          deletePage(page.id)
                        }
                        style={{
                          border:
                            '1px solid rgba(239,68,68,0.14)',
                          background:
                            'rgba(239,68,68,0.06)',
                          color: '#fca5a5',
                          borderRadius: '7px',
                          padding: '6px 10px',
                          cursor: 'pointer',
                          fontSize: '10px',
                          fontWeight: '650',
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

function StatCard({ label, value, icon }) {
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
          justifyContent: 'space-between',
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
            letterSpacing: '0.7px',
            textTransform: 'uppercase',
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

function FormField({ label, action, children }) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '7px',
        }}
      >
        <label
          style={{
            color:
              'rgba(255,255,255,0.62)',
            fontSize: '11px',
            fontWeight: '650',
          }}
        >
          {label}
        </label>

        {action}
      </div>

      {children}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '12px 13px',
  borderRadius: '9px',
  border:
    '1px solid rgba(255,255,255,0.08)',
  outline: 'none',
  background: 'rgba(0,0,0,0.18)',
  color: '#ffffff',
  fontSize: '12px',
  fontFamily: 'inherit',
};

const tableCell = {
  padding: '17px 20px',
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '650',
  borderBottom:
    '1px solid rgba(255,255,255,0.045)',
};
