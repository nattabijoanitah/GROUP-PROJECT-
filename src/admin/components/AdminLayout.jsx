
import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

export default function AdminLayout({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#060c18',
        color: '#ffffff',
        display: 'flex',
      }}
    >
      <AdminSidebar />

      <div
        style={{
          marginLeft: '240px',
          width: 'calc(100% - 240px)',
          minHeight: '100vh',
        }}
      >
        <AdminHeader />

        <main
          style={{
            minHeight: 'calc(100vh - 70px)',
            padding: '30px',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
