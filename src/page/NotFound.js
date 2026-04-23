import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="page-header" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <h1 className="page-title" style={{ fontSize: '6rem', marginBottom: '0' }}>404</h1>
        <h2 style={{ color: 'var(--primary-white)' }}>Pagina non trovata</h2>
        <p style={{ marginBottom: '40px' }}>
          Ops! Sembra che la pagina che stai cercando sia stata spostata o non esista più.
        </p>
        <Link to="/" className="btn-accent">
          Torna alla Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;