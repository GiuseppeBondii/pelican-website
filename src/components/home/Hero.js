import React, { useContext } from 'react';
import useScrollObserver from "../layout/ScrollObserver";
import { LanguageContext } from '../../context/LanguageContext';

import logotBianco from '../../assets/LOGO/LOGO bianco.png';
import pittogrammaGlass from '../../assets/PITTOGRAMMA/PITTOGRAMMA GLASS senza sfondo.png';

const Hero = () => {
  const heroRef = useScrollObserver();
  const { data } = useContext(LanguageContext);
  const { hero } = data.home;

  return (
    <section className="page-header observed hero-section" ref={heroRef}>
      
      {/* BACKGROUND ANIMATO: Pittogramma gigante e semitrasparente */}
      

      <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* LOGO PRINCIPALE IN ALTO */}
        <img 
          src={logotBianco} 
          alt="PELICAN Project" 
          className="hero-main-logo fade-in-up" 
        />
        
        {/* Mantieni l'H1 testuale nascosto per la SEO, oppure lascialo visibile se il logotipo non contiene il testo "Pelican Study" */}
        <h1 className="sr-only">{hero.title}</h1>
        
        <p className="p-main-desc fade-in-up" style={{ animationDelay: '0.2s' }}>
          {hero.description}
        </p>

        <div className="hero-grid" style={{ marginTop: '15px' }}>
          {/* SCHEDA 1: PER I PAZIENTI */}
          <div className="hero-grid-item patients">
            <div className="hero-card-header">
              <div className="hero-icon patients-icon" style={{ padding: '15px', borderRadius: '50%', backgroundColor: 'var(--ocean-blue)' }}>
                {/* Icona Utente Paziente (Persona con croce medica) */}
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                  <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/>
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
                {/* Icona Ricerca Scientifica (Microscopio) */}
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white">
                  <path d="M10.55 7.34l2.12-2.12c.59-.59 1.54-.59 2.12 0l2.83 2.83c.59.59.59 1.54 0 2.12l-2.12 2.12-5.06-5.06zM7 11.24V14h2.76l6.19-6.19-2.76-2.76L7 11.24zm8.6-4.24l-1.41-1.41c-.2-.2-.51-.2-.71 0l-1.06 1.06 2.12 2.12 1.06-1.06c.2-.2.2-.51 0-.71zM3 21h18v-2H3v2zm4-4h10v-2H7v2z"/>
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