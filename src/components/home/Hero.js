import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1 className="hero-title">PELICAN Project</h1>
        <p className="hero-subtitle">
          Valutazione prospettica del ruolo della PET PSMA nella risposta alle terapie sistemiche del carcinoma prostatico.
        </p>
        <div className="hero-btn-group">
          {/* Pulsante primario per i pazienti */}
          <Link to="/patients" className="btn-accent">
            For Patients
          </Link>
          {/* Pulsante secondario per i ricercatori */}
          <Link to="/science" className="btn-secondary">
            For Researchers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;