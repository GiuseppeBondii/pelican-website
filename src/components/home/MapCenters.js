import React from 'react';

const MapCenters = () => {
  const centers = [
    { city: 'Bologna', role: 'Centro Coordinatore' },
    { city: 'Cuneo', role: 'Centro Partecipante' },
    { city: 'Genova', role: 'Centro Partecipante' },
    { city: 'Messina', role: 'Centro Partecipante' }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2>Centri Partecipanti</h2>
        <div className="centers-list">
          {centers.map((center, idx) => (
            <div key={idx} className="center-item">
              {/* Il dot ora usa il colore Highlight Lime */}
              <span className="center-dot"></span>
              <div>
                <h4 className="center-city">{center.city}</h4>
                <p className="center-role">{center.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapCenters;