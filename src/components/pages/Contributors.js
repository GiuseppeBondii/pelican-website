import React from 'react';
import data from '../../data/pelicanData.json';

const Contributors = () => {
  const { contributors } = data;

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">{contributors.header.title}</h1>
          <p>{contributors.header.subtitle}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="team-grid">
            {contributors.centers.map((center, index) => (
              <div key={index} className="number-card" style={{ textAlign: 'left', padding: '30px' }}>
                <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '5px' }}>{center.city}</h3>
                <p style={{ color: 'var(--sunset-orange)', fontWeight: 'bold', marginBottom: '15px' }}>{center.role}</p>
                <p style={{ color: 'var(--primary-black)' }}><strong>PI:</strong> {center.pi}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <p style={{ color: 'var(--ocean-blue)', fontWeight: 'bold' }}>{contributors.footer}</p>
          </div>
        </div>
      </section> 
    </div>       
  );
};

export default Contributors;