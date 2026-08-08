const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

export async function getEvents() {
  const res = await fetch(`${API_BASE_URL}/api/events/`);
  if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`);
  return res.json();
}

export async function createPrayerRequest(data) {
  const res = await fetch(`${API_BASE_URL}/api/prayer-requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const result = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(result.message || `Failed to submit prayer request: ${res.status}`);
  }
  return result;
}
