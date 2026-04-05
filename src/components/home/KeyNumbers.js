import React from 'react';

const KeyNumbers = () => {
  const numbers = [
    { value: '1300+', label: 'Target Pazienti' },
    { value: '9 Anni', label: 'Durata Complessiva' },
    { value: '24 Mesi', label: 'Follow-up Minimo' },
    { value: '4', label: 'Centri Partecipanti' }
  ];

  return (
    <section className="section numbers-section">
      <div className="container">
        <h2>Numeri Chiave</h2>
        <div className="numbers-grid">
          {numbers.map((item, index) => (
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