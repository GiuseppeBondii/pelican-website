import React from 'react';

const Science = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Science (For Researchers)</h1>
          <p>Technical documentation and protocol guidelines for investigators.</p>
          <p>mi sono preso alcune libertà per completare un po la facciata della pagina, ovviamente da sistemare</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="text-box">
            <h3>Technical Documentation & Imaging</h3>
            <ul>
              <li><strong>Data Management:</strong> I dati clinici saranno raccolti mediante piattaforma REDCap (pseudonymized data and DICOM upload).</li>
              <li><strong>PET Parameters:</strong> Estrazione di parametri semiquantitativi, tra cui SUVmax, SUVmean, MTV (volume tumorale totale PSMA-positivo) e numero di lesioni. È prevista un'analisi centralizzata.</li>
              <li><strong>Radiotraccianti Ammessi:</strong> [68Ga]Ga-PSMA-11, [18F]-DCFPyL, [18F]-PSMA-1007, [18F]-rhPSMA-7.3, [18F]-JK-PSMA-7.</li>
              <li><strong>Statistical Model:</strong> L’analisi prevede correlazioni tra parametri PET e outcome clinici, con modelli predittivi e stratificazioni basate su tipo di terapia e carico tumorale.</li>
              <li><strong>Variables List:</strong> Full list of variables available from Protocol Version 1.1 (7 Oct 2025).</li>
            </ul>
          </div>

          <div className="text-box">
            <h3>Collateral & Exploratory Cohorts</h3>
            <ul>
              <li><strong>Dynamic PET:</strong> Analisi cinetiche del tracciante.</li>
              <li><strong>Conventional Imaging:</strong> Confronto PET vs scintigrafia ossea + TC.</li>
              <li><strong>SPECT/CT post-177Lu-PSMA:</strong> Studio della distribuzione del radiofarmaco.</li>
              <li><strong>Nadir PET:</strong> Valutazione PET baseline, nadir e fine trattamento/progressione.</li>
            </ul>
          </div>

          {/*<div className="text-box">
            <h3>Policies</h3>
            <p><strong>Authorship Policy:</strong> Detailed point system for contributions as defined in the official protocol.</p>
            
            <button className="btn-accent" style={{marginTop: '20px'}}>Access REDCap Platform</button>
          
          </div>*/}
        </div>
      </section>
    </div>
  );
};

export default Science;