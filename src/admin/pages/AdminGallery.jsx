
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminGallery() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const API_URL = 'http://127.0.0.1:5000/api/admin/gallery';

  const getToken = () => {
    return localStorage.getItem('access_token');
  };

  const loadGallery = async () => {
    const token = getToken();

    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || 'Failed to load gallery.'
        );
      }

      setItems(data.items || []);
    } catch (err) {
      console.error('GALLERY ERROR:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGallery();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    setSuccess('');
    setError('');

    if (!selectedFile) {
      setFile(null);
      setPreview('');
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select an image first.');
      return;
    }

    const token = getToken();

    if (!token) {
      navigate('/admin/login');
      return;
    }

    setUploading(true);
    setError('');
    setSuccess('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || data.msg || 'Failed to upload image.'
        );
      }

      setSuccess('Gallery image uploaded successfully.');

      setFile(null);
      setPreview('');

      document.getElementById('gallery-file-input').value = '';

      await loadGallery();
    } catch (err) {
      console.error('UPLOAD ERROR:', err);
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const token = getToken();

    if (!token) {
      navigate('/admin/login');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

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
          data.message || data.msg || 'Failed to delete image.'
        );
      }

      setSuccess('Gallery image deleted successfully.');

      await loadGallery();
    } catch (err) {
      console.error('DELETE ERROR:', err);
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        color: '#ffffff',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <div>
          <button
            onClick={() => navigate('/admin/dashboard')}
            style={{
              border: 'none',
              background: 'transparent',
              color: '#d4af37',
              cursor: 'pointer',
              marginBottom: '10px',
            }}
          >
            ← Dashboard
          </button>

          <h1 style={{ margin: 0 }}>
            Gallery Management
          </h1>

          <p style={{ opacity: 0.65 }}>
            Upload and manage images for the IHEMA website.
          </p>
        </div>

        <div
          style={{
            padding: '10px 16px',
            borderRadius: '20px',
            background: 'rgba(212,175,55,0.12)',
            color: '#d4af37',
          }}
        >
          {items.length} Images
        </div>
      </div>

      {error && (
        <div
          style={{
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            background: 'rgba(220,53,69,0.12)',
            border: '1px solid rgba(220,53,69,0.3)',
            color: '#ff8585',
          }}
        >
          {error}
        </div>
      )}

      {success && (
        <div
          style={{
            padding: '14px',
            marginBottom: '20px',
            borderRadius: '10px',
            background: 'rgba(25,135,84,0.12)',
            border: '1px solid rgba(25,135,84,0.3)',
            color: '#6ee7a0',
          }}
        >
          {success}
        </div>
      )}

      <div
        style={{
          background: '#101c32',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '25px',
          marginBottom: '30px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>
          Upload New Image
        </h2>

        <p style={{ opacity: 0.65 }}>
          Add a photo to the IHEMA church gallery.
        </p>

        <form onSubmit={handleUpload}>
          <input
            id="gallery-file-input"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              borderRadius: '10px',
              border: '1px dashed rgba(255,255,255,0.25)',
              background: '#0b162b',
              color: '#ffffff',
              boxSizing: 'border-box',
            }}
          />

          {preview && (
            <div style={{ marginBottom: '20px' }}>
              <p style={{ opacity: 0.7 }}>
                Image Preview
              </p>

              <img
                src={preview}
                alt="Preview"
                style={{
                  width: '220px',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            style={{
              padding: '13px 22px',
              border: 'none',
              borderRadius: '9px',
              background: '#d4af37',
              color: '#071124',
              fontWeight: 'bold',
              cursor: uploading ? 'not-allowed' : 'pointer',
              opacity: uploading ? 0.7 : 1,
            }}
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      <div
        style={{
          background: '#101c32',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '16px',
          padding: '25px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '25px',
          }}
        >
          <div>
            <h2 style={{ margin: 0 }}>
              Gallery Images
            </h2>

            <p style={{ opacity: 0.6 }}>
              Manage images currently stored in the system.
            </p>
          </div>

          <button
            onClick={loadGallery}
            style={{
              padding: '10px 16px',
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
          <p>Loading gallery...</p>
        ) : items.length === 0 ? (
          <div
            style={{
              padding: '50px',
              textAlign: 'center',
              opacity: 0.6,
            }}
          >
            No gallery images found.
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {items.map((item) => {
              const imageUrl = item.url?.startsWith('http')
                ? item.url
                : `http://127.0.0.1:5000/${item.url}`;

              return (
                <div
                  key={item.id}
                  style={{
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: '#0b162b',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={item.filename || 'Gallery image'}
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  <div style={{ padding: '15px' }}>
                    <p
                      style={{
                        margin: '0 0 12px',
                        fontSize: '14px',
                        opacity: 0.7,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.filename || 'Image'}
                    </p>

                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid rgba(220,53,69,0.35)',
                        borderRadius: '8px',
                        background: 'rgba(220,53,69,0.08)',
                        color: '#ff8585',
                        cursor: 'pointer',
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
