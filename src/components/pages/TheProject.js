import React from 'react';
import data from '../../data/pelicanData.json';

const TheProject = () => {
  const { theProject } = data;

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">{theProject.header.title}</h1>
          <p>{theProject.header.subtitle}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="text-box">
            <h3>{theProject.intro.title}</h3>
            {theProject.intro.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <div className="text-box" style={{ borderLeft: '6px solid var(--highlight-lime)' }}>
            <h3>{theProject.funding.title}</h3>
            {/* Usiamo dangerouslySetInnerHTML per permettere il render del tag <strong> presente nel JSON */}
            {theProject.funding.paragraphs.map((p, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: p }}></p>
            ))}
          </div>

          <div className="text-box">
            <h3>{theProject.design.title}</h3>
            {theProject.design.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
            
            <div style={{ margin: '30px 0', padding: '40px', border: '2px dashed var(--highlight-lime)', textAlign: 'center', backgroundColor: 'var(--sand)', borderRadius: '8px' }}>
                <p style={{ color: 'var(--ocean-blue)', fontWeight: 'bold' }}><em>{theProject.design.flowchartPlaceholder}</em></p>
            </div>

            <p><strong>{theProject.design.ethicsLabel}</strong> {theProject.design.ethicsText}</p>
            <a href="https://www.clinicaltrials.gov/study/NCT07089550" target="_blank" rel="noreferrer" className="summary-link">{theProject.design.linkText}</a>
          </div>

          <div className="text-box">
            <h3>{theProject.objectives.title}</h3>
            <h4 style={{ color: 'var(--ocean-blue)' }}>{theProject.objectives.primaryTitle}</h4>
            <p>{theProject.objectives.primaryDesc}</p>
            
            <h4 style={{ color: 'var(--ocean-blue)', marginTop: '20px' }}>{theProject.objectives.secondaryTitle}</h4>
            <ul>
              {theProject.objectives.secondaryList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="text-box">
            <h3>{theProject.population.title}</h3>
            <div className="contact-grid">
              <div>
                <h4 style={{ color: 'var(--ocean-blue)' }}>{theProject.population.inclusion.title}</h4>
                <ul>
                  {theProject.population.inclusion.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--sunset-orange)' }}>{theProject.population.exclusion.title}</h4>
                <ul>
                  {theProject.population.exclusion.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheProject;