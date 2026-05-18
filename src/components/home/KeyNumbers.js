import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
const KeyNumbers = () => {
  const { data } = useContext(LanguageContext);
  const { keyNumbers } = data.home;

  return (
    <section className="section numbers-section">
      <div className="container">
        <h2>{keyNumbers.title}</h2>
        <div className="numbers-grid">
          {keyNumbers.items.map((item, index) => (
            <div key={index} className="number-card">
              <h3 className="number-value">{item.value}</h3>
              <p className="number-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyNumbers;