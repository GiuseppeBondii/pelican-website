import React from 'react';
import data from '../../data/pelicanData.json'; // Assicurati che il percorso sia corretto

const ForPatients = () => {
  const { forPatients } = data; // Estraiamo il blocco dei pazienti dal JSON
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
          
          <div className="text-box">
            <h3>{sections.psma.title}</h3>
            {sections.psma.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <p><strong>In altre parole:</strong></p>
            <ul>
              {sections.psma.list.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Sezione 2 */}
          <div className="text-box">
            <h3>{sections.petPsma.title}</h3>
            {sections.petPsma.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            <ul>
              {sections.petPsma.list.map((item, i) => {
                const [boldStr, rest] = item.split(': ');
                return <li key={i}><strong>{boldStr}:</strong> {rest}</li>;
              })}
            </ul>
            <p>{sections.petPsma.conclusion}</p>
            <p><strong>{sections.petPsma.warning.split(': ')[0]}:</strong> {sections.petPsma.warning.split(': ')[1]}</p>
          </div>

          <div className="text-box">
            <h3>{sections.whyPelican.title}</h3>
            {sections.whyPelican.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="text-box">
            <h3>{sections.whoCanParticipate.title}</h3>
            <div className="contact-grid">
              <div>
                <h4 style={{ color: 'var(--ocean-blue)' }}>Può partecipare chi:</h4>
                <ul>
                  {sections.whoCanParticipate.inclusion.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--sunset-orange)' }}>Non può partecipare chi:</h4>
                <ul>
                  {sections.whoCanParticipate.exclusion.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '15px' }}><em>{sections.whoCanParticipate.note}</em></p>
          </div>

          {/* Sezione 5 (Timeline automatizzata) */}
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

          {/* Sezione 6 */}
          <div className="text-box">
            <h3>{sections.risksPrivacy.title}</h3>
            <ul>
              {sections.risksPrivacy.list.map((item, i) => {
                const [boldStr, rest] = item.split(': ');
                return <li key={i}><strong>{boldStr}:</strong> {rest}</li>;
              })}
            </ul>
          </div>

          {/* Sezione 7 (FAQ automatizzate) */}
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