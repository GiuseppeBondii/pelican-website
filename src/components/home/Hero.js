import React from 'react';
import useScrollObserver from "../layout/ScrollObserver";
import data from '../../data/pelicanData.json'; 

const Hero = () => {
  const heroRef = useScrollObserver();
  const { hero } = data.home;

  return (
    <section className="page-header observed" ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="container hero-content">
        <h1>{hero.title}</h1>
        <p className="p-main-desc">{hero.description}</p>

        <div className="hero-grid" style={{'margin-top':'15px'}}>
          
          {/* SCHEDA 1: PER I PAZIENTI */}
          <div className="hero-grid-item patients">
            <div className="hero-card-header">
              <div className="hero-icon patients-icon" style={{ padding: '15px', borderRadius: '50%', backgroundColor: 'var(--ocean-blue)' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <h3>{hero.patientsCard.title}</h3>
            </div>
            <div className="hero-card-body">
              <p>{hero.patientsCard.description}</p>
              <ul>
                {hero.patientsCard.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <a href="/patients" className="btn btn-secondary">{hero.patientsCard.buttonText}</a>
          </div>

          {/* SCHEDA 2: PER I RICERCATORI */}
          <div className="hero-grid-item researchers">
            <div className="hero-card-header">
              <div className="hero-icon researchers-icon" style={{ padding: '15px', borderRadius: '50%', backgroundColor: 'var(--ocean-blue)' }}>
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                  <path d="M20 12c0-1.1-.9-2-2-2V7c0-1.1-.9-2-2-2h-3V3a1 1 0 0 0-2 0v2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2s.9 2 2 2v3c0 1.1.9 2 2 2h3v2a1 1 0 0 0 2 0v-2h3c1.1 0 2-.9 2-2v-3c1.1 0 2-.9 2-2zm-4 6H8v-3a2 2 0 0 1-2-2 2 2 0 0 1 2-2V7h8v3a2 2 0 0 1 2 2 2 2 0 0 1-2 2v3z"/>
                </svg>
              </div>
              <h3>{hero.researchersCard.title}</h3>
            </div>
            <div className="hero-card-body">
              <p>{hero.researchersCard.description}</p>
              <ul>
                {hero.researchersCard.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <a href="/science" className="btn btn-secondary">{hero.researchersCard.buttonText}</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;