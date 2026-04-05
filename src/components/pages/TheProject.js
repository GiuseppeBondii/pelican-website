import React from 'react';

const TheProject = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">The Project</h1>
          <p>Dettagli scientifici e struttura dello studio PELICAN (Protocollo V1.1)</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          <div className="text-box">
            <h3>1. Introduction</h3>
            <p>Il carcinoma della prostata rappresenta la seconda neoplasia più frequente nell’uomo e una delle principali cause di mortalità oncologica a livello globale. Negli ultimi anni, l’introduzione di nuovi trattamenti sistemici – tra cui inibitori del recettore degli androgeni (abiraterone, enzalutamide, apalutamide, darolutamide), chemioterapia (docetaxel, cabazitaxel), PARP inibitori e radioligand therapy con 177Lu-PSMA-617 – ha modificato profondamente la gestione terapeutica dei pazienti affetti da malattia avanzata.</p>
            <p>La valutazione accurata della risposta a tali terapie rimane però una sfida clinica. Gli strumenti tradizionali presentano limiti importanti: il PSA sierico può essere inattendibile in diversi scenari clinici (es. flare, malattia a bassa secrezione, metastasi viscerali), mentre l’imaging convenzionale (TC, RM, scintigrafia ossea) spesso mostra sensibilità e specificità insufficienti.</p>
            <p>La PET con traccianti diretti contro il PSMA ha mostrato invece un’elevata accuratezza diagnostica nella stadiazione e recidiva del carcinoma prostatico. Tuttavia, il suo ruolo nella valutazione della risposta alle terapie sistemiche, sebbene promettente, non è ancora stato definito in modo prospettico. Anche i criteri recentemente proposti (PPP, RECIP 1.0) necessitano di validazione.</p>
          </div>

          <div className="text-box">
            <h3>2. Study Design</h3>
            <p>PELICAN è uno studio osservazionale, prospettico, multicentrico e no-profit. L’arruolamento previsto è consecutivo, della durata di 6 anni, con un follow-up minimo di 24 mesi per ogni paziente e una durata complessiva dello studio di 9 anni.</p>
            <p>Le decisioni terapeutiche rimangono completamente indipendenti dallo studio: i pazienti saranno trattati secondo le linee guida internazionali EAU–EANM–ESTRO–ESUR–SIOG.</p>
            
            <div style={{ margin: '30px 0', padding: '40px', border: '2px dashed var(--highlight-lime)', textAlign: 'center', backgroundColor: 'var(--sand)', borderRadius: '8px' }}>
                <p style={{ color: 'var(--ocean-blue)', fontWeight: 'bold' }}><em>[Qua ho capito ci dovrebbe andare lo Study Design Flowchart]</em></p>
            </div>

            <p><strong>Approvazione Etica:</strong> Lo studio è approvato dal Comitato Etico AVEC (737/2024/Oss/AOUBo).</p>
            <a href="https://www.clinicaltrials.gov/study/NCT07089550" target="_blank" rel="noreferrer" className="summary-link">View on ClinicalTrials.gov ➔</a>
          </div>

          <div className="text-box">
            <h3>3. Objectives</h3>
            <h4 style={{ color: 'var(--ocean-blue)' }}>Primary Objective</h4>
            <p>Determinare il valore prognostico dei parametri PET PSMA (numero lesioni, volume tumorale totale, SUVmax, SUVmean) per identificare pazienti con prognosi favorevole vs sfavorevole in termini di sopravvivenza a 24 mesi.</p>
            
            <h4 style={{ color: 'var(--ocean-blue)', marginTop: '20px' }}>Secondary Objectives</h4>
            <ul>
              <li>Identificare fattori predittivi di risposta.</li>
              <li>Analizzare bPFS, rPFS e OS a 24 mesi.</li>
              <li>Valutare volume tumorale PSMA-positivo e SUV come biomarcatori prognostici/predittivi.</li>
            </ul>
          </div>

          <div className="text-box">
            <h3>4. Study Population</h3>
            <div className="contact-grid">
              <div>
                <h4 style={{ color: 'var(--ocean-blue)' }}>Inclusione</h4>
                <ul>
                  <li>Sesso maschile ≥18 anni.</li>
                  <li>Diagnosi istologica di carcinoma prostatico.</li>
                  <li>Indicazione a una nuova linea di terapia sistemica.</li>
                  <li>Esecuzione di PET PSMA pre-trattamento.</li>
                  <li>Consenso informato.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--sunset-orange)' }}>Esclusione</h4>
                <ul>
                  <li>Impossibilità a mantenere posizione supina.</li>
                  <li>Componente neuroendocrina significativa.</li>
                  <li>Altra neoplasia concomitante (escluso carcinoma cutaneo non melanomatoso).</li>
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