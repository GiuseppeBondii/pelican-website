import React from 'react';

const Contributors = () => {
  const centers = [
    { city: 'Bologna', role: 'Coordinating Center', pi: 'Dr. Andrea Farolfi, Dr. Andrea Di Giorgio' },
    { city: 'Cuneo', role: 'Participant Center', pi: 'Dr. Virginia Liberini' },
    { city: 'Genova', role: 'Participant Center', pi: 'Dr. Matteo Bauckneht' },
    { city: 'Messina', role: 'Participant Center', pi: 'Dr. Riccardo Laudicella' }
  ];

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contributors</h1>
          <p>I centri di ricerca e i referenti che partecipano al progetto PELICAN.</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="team-grid">
            {centers.map((center, index) => (
              <div key={index} className="number-card" style={{ textAlign: 'left', padding: '30px' }}>
                <h3 style={{ color: 'var(--ocean-blue)', marginBottom: '5px' }}>{center.city}</h3>
                <p style={{ color: 'var(--sunset-orange)', fontWeight: 'bold', marginBottom: '15px' }}>{center.role}</p>
                <p style={{ color: 'var(--primary-black)' }}><strong>PI:</strong> {center.pi}</p>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '50px', textAlign: 'center' }}>
            <p style={{ color: 'var(--ocean-blue)', fontWeight: 'bold' }}>Possibilità di aggiungere nuovi centri secondo criteri definiti dal protocollo.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contributors;