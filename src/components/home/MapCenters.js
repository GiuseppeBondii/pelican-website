import React from 'react';
import data from '../../data/pelicanData.json';

const MapCenters = () => {
  const { mapCenters } = data.home;

  return (
    <section className="section">
      <div className="container">
        <h2>{mapCenters.title}</h2>
        <div className="centers-list">
          {mapCenters.centers.map((center, idx) => (
            <div key={idx} className="center-item">
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