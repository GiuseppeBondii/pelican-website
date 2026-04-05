import React from 'react';

const ProjectSummary = () => {
  return (
    <section className="section summary-section">
      <div className="container summary-content">
        <h2>Il Progetto</h2>
        <p className="summary-text">
          PELICAN è uno studio osservazionale, prospettico, multicentrico e no-profit. 
          L’arruolamento previsto è consecutivo, della durata di 6 anni, con un follow-up 
          minimo di 24 mesi per ogni paziente e una durata complessiva dello studio di 9 anni. 
          Nasce per determinare il valore prognostico dei parametri PET PSMA e identificare 
          pazienti con prognosi favorevole o sfavorevole in risposta alle nuove terapie sistemiche.
        </p>
        <div className="summary-link-container">
           <a href="https://www.clinicaltrials.gov/study/NCT07089550" target="_blank" rel="noreferrer" className="summary-link">
             Vedi lo studio su ClinicalTrials.gov (NCT07089550) ➔
           </a>
           <p className="ethics-approval">
             Lo studio è approvato dal Comitato Etico AVEC (737/2024/Oss/AOUBo).
           </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSummary;