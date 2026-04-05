import React from 'react';

const NewsSection = () => {
  return (
    <section className="section news-section">
      <div className="container">
        <h2>Ultime Novità</h2>
        <div className="news-container">
          <div className="news-card">
            <span className="news-date">27 Novembre 2025</span>
            <h3 style={{ marginTop: '10px', color: 'var(--ocean-blue)' }}>Pubblicazione del Protocollo V1.1</h3>
            <p>Approvazione completata dal Comitato Etico AVEC. Inizio della fase di arruolamento.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;