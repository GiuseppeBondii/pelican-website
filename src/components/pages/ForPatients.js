import React from 'react';
import data from '../../data/pelicanData.json'; // Assicurati che il percorso del JSON sia corretto

const ForPatients = () => {
  // Estraiamo la sezione forPatients e i suoi sottonodi dal JSON
  const { forPatients } = data;
  const { header, sections } = forPatients;

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">{header.title}</h1>
          <p>{header.subtitle}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          
          {/* Sezione 1: Cos'è il PSMA */}
          <div className="text-box">
            <h3>{sections.psma.title}</h3>
            {sections.psma.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p><strong>{sections.psma.listLabel}</strong></p>
            <ul>
              {sections.psma.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Sezione 2: Cos'è una PET PSMA */}
          <div className="text-box">
            <h3>{sections.petPsma.title}</h3>
            {sections.petPsma.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ul>
              {sections.petPsma.list.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.text}</li>
              ))}
            </ul>
            <p>{sections.petPsma.conclusion}</p>
            <p><strong>{sections.petPsma.warningLabel}</strong> {sections.petPsma.warningText}</p>
          </div>

          {/* Sezione 3: Perché viene condotto lo studio */}
          <div className="text-box">
            <h3>{sections.whyPelican.title}</h3>
            {sections.whyPelican.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Sezione 4: Chi può partecipare */}
          <div className="text-box">
            <h3>{sections.whoCanParticipate.title}</h3>
            <div className="contact-grid">
              <div>
                <h4 style={{ color: 'var(--ocean-blue)' }}>{sections.whoCanParticipate.inclusionLabel}</h4>
                <ul>
                  {sections.whoCanParticipate.inclusion.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--sunset-orange)' }}>{sections.whoCanParticipate.exclusionLabel}</h4>
                <ul>
                  {sections.whoCanParticipate.exclusion.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '15px' }}><em>{sections.whoCanParticipate.note}</em></p>
          </div>

          {/* Sezione 5: Cosa comporta partecipare (Timeline) */}
          <div className="text-box">
            <h3>{sections.timeline.title}</h3>
            <p>{sections.timeline.desc}</p>
            
            <div className="timeline">
              {sections.timeline.steps.map((step, index) => (
                <div key={index} className="timeline-step">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sezione 6: Rischi, sicurezza e privacy */}
          <div className="text-box">
            <h3>{sections.risksPrivacy.title}</h3>
            <ul>
              {sections.risksPrivacy.list.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.text}</li>
              ))}
            </ul>
          </div>

          {/* Sezione 7: FAQ */}
          <div className="text-box">
            <h3>{sections.faq.title}</h3>
            <div className="faq-grid">
              {sections.faq.items.map((item, index) => (
                <div key={index} className="faq-item">
                  <h4 style={{ color: 'var(--ocean-blue)' }}>{item.q}</h4>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ForPatients;