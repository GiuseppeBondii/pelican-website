import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
const Science = () => {
  const { data } = useContext(LanguageContext);

  const { science } = data;

  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">{science.header.title}</h1>
          <p>{science.header.subtitle}</p>
          <p>{science.header.disclaimer}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          
          {/* Sezione Documentazione Tecnica */}
          <div className="text-box">
            <h3>{science.techDocs.title}</h3>
            <ul>
              {science.techDocs.list.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.text}</li>
              ))}
            </ul>
          </div>

          {/* Sezione Coorti Collaterali */}
          <div className="text-box">
            <h3>{science.collateral.title}</h3>
            <ul>
              {science.collateral.list.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.text}</li>
              ))}
            </ul>
          </div>

          {/* NUOVA SEZIONE: Publication Rules & Authorship Policy */}
          <div className="text-box" style={{ borderLeft: '6px solid var(--sunset-orange)' }}>
            <h3>{science.policies.title}</h3>
            <ul>
              {science.policies.list.map((item, index) => (
                <li key={index}><strong>{item.label}:</strong> {item.text}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Science;