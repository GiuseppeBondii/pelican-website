import React from 'react';

const ForPatients = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Area Pazienti</h1>
          <p>Cos'è la PET PSMA e cosa significa partecipare allo studio PELICAN.</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container">
          
          <div className="text-box">
            <h3>1. Cos’è il PSMA?</h3>
            <p>Il PSMA (Prostate-Specific Membrane Antigen) è una proteina che si trova in quantità molto elevate sulla superficie delle cellule tumorali del carcinoma della prostata.</p>
            <p>Questo significa che il PSMA può essere utilizzato come una sorta di “bersaglio molecolare”: i radiofarmaci utilizzati negli esami PET possono legarsi al PSMA e renderne visibile la presenza nel corpo.</p>
            <p><strong>In altre parole:</strong></p>
            <ul>
              <li>Il PSMA è un marcatore molto specifico del tumore della prostata;</li>
              <li>Permette di localizzare il tumore anche quando è presente in piccole quantità;</li>
              <li>Consente di vedere la malattia in sedi non sempre valutabili con TC, RM o scintigrafia ossea.</li>
            </ul>
          </div>

          <div className="text-box">
            <h3>2. Cos’è una PET PSMA e cosa devo aspettarmi?</h3>
            <p>La PET/CT PSMA è un esame di imaging che combina due informazioni:</p>
            <ul>
              <li><strong>PET:</strong> Mostra come funziona il tessuto e dove si concentra il radiofarmaco legato al PSMA.</li>
              <li><strong>TC (TAC):</strong> Mostra la struttura anatomica del corpo.</li>
            </ul>
            <p>L’esame dura solitamente 60–90 minuti e si svolge in più fasi. Viene iniettata una quantità molto piccola di sostanza radioattiva, sicura e con un’esposizione paragonabile ad altre PET. Durante l'acquisizione, il lettino si muove lentamente e il paziente deve rimanere disteso e immobile. Non si avvertono dolore né fastidio.</p>
            <p><strong>Cosa NON comporta l’esame:</strong> Non provoca dolore, non richiede anestesia, non richiede preparazioni complesse e non lascia residui radioattivi pericolosi per la famiglia.</p>
          </div>

          <div className="text-box">
            <h3>3. Perché viene condotto lo studio PELICAN?</h3>
            <p>Lo studio PELICAN nasce perché oggi abbiamo molte nuove terapie efficaci per il carcinoma prostatico avanzato, ma non esiste ancora uno strumento preciso per capire in anticipo quali pazienti risponderanno meglio a una determinata terapia, quali hanno una malattia più aggressiva e quali potrebbero beneficiare di strategie terapeutiche personalizzate.</p>
            <p>La PET PSMA è molto precisa nel “vedere” il tumore, ma non sappiamo ancora se la quantità di malattia visibile può prevedere la risposta alla terapia. PELICAN vuole rispondere a queste domande studiando in modo prospettico e multicentrico oltre 1.300 pazienti in tutta Italia.</p>
          </div>

          <div className="text-box">
            <h3>4. Chi può partecipare?</h3>
            <div className="contact-grid">
              <div>
                <h4 style={{ color: 'var(--ocean-blue)' }}>Può partecipare chi:</h4>
                <ul>
                  <li>È un uomo con età ≥18 anni;</li>
                  <li>Ha una diagnosi di carcinoma della prostata;</li>
                  <li>Deve iniziare una nuova terapia sistemica (ormonale, chemio, PARP-inibitore, ecc.);</li>
                  <li>Esegue una PET PSMA prima di iniziare la terapia;</li>
                  <li>Firma il consenso informato.</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: 'var(--sunset-orange)' }}>Non può partecipare chi:</h4>
                <ul>
                  <li>Non può stare sdraiato immobile per la PET;</li>
                  <li>Ha un tumore prostatico con componente neuroendocrina importante;</li>
                  <li>Ha un altro tumore attivo (tranne i carcinomi cutanei non melanomatosi).</li>
                </ul>
              </div>
            </div>
            <p style={{ marginTop: '15px' }}><em>Nota: Questi criteri sono semplificati. Lo staff medico valuterà sempre l’idoneità del paziente.</em></p>
          </div>

          <div className="text-box">
            <h3>5. Cosa comporta partecipare allo studio?</h3>
            <p>Lo studio non modifica la tua terapia (che sarà scelta unicamente dal tuo medico secondo le linee guida). Osserva semplicemente i risultati nel tempo.</p>
            
            <div className="timeline">
              <div className="timeline-step">
                <h4>Step 1 – Valutazione iniziale</h4>
                <p>Il medico valuta l'idoneità, spiega lo studio in modo dettagliato e si firma il consenso informato.</p>
              </div>
              <div className="timeline-step">
                <h4>Step 2 – PET PSMA “baseline”</h4>
                <p>Prima di iniziare la terapia sistemica, si effettua una PET PSMA.</p>
              </div>
              <div className="timeline-step">
                <h4>Step 3 – Inizio della terapia sistemica</h4>
                <p>Il paziente inizia il trattamento scelto dal suo oncologo/urologo. Lo studio osserva, non modifica in alcun modo il trattamento clinico.</p>
              </div>
              <div className="timeline-step">
                <h4>Step 4 – Follow-up clinico</h4>
                <p>Per circa 24 mesi vengono raccolti valori di PSA, esami del sangue, esami radiologici, eventuali visite di controllo e informazioni sullo stato di salute.</p>
              </div>
              <div className="timeline-step">
                <h4>Step 5 – Eventuale PET PSMA di rivalutazione</h4>
                <p>A seconda del centro e della disponibilità, una PET PSMA può essere ripetuta alla fine del trattamento o se c’è il sospetto di progressione.</p>
              </div>
              <div className="timeline-step">
                <h4>Step 6 – Fine follow-up / Raccolta dati</h4>
                <p>Dopo almeno 24 mesi, i dati raccolti vengono analizzati in forma rigorosamente anonimizzata.</p>
              </div>
            </div>
          </div>

          <div className="text-box">
            <h3>6. Rischi, sicurezza e privacy</h3>
            <ul>
              <li><strong>Rischi connessi alla PET:</strong> Utilizza una bassa quantità di radioattività, i rischi sono considerati molto bassi. Si raccomanda di bere abbondantemente dopo l’esame e di evitare il contatto stretto con neonati e donne in gravidanza per alcune ore.</li>
              <li><strong>Sicurezza del trattamento:</strong> Lo studio NON modifica in alcun modo la terapia decisa dal tuo medico curante.</li>
              <li><strong>Privacy:</strong> Tutti i dati vengono raccolti in forma pseudonimizzata, caricati su una piattaforma sicura (REDCap) e analizzati nel massimo rispetto della privacy.</li>
              <li><strong>Partecipazione volontaria:</strong> Il paziente può ritirarsi dallo studio in qualsiasi momento, senza che questo abbia il minimo impatto sulle sue cure mediche. Non vi sono costi aggiuntivi.</li>
            </ul>
          </div>

          <div className="text-box">
            <h3>7. Domande Frequenti (FAQ)</h3>
            <div className="faq-grid">
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>La PET PSMA fa male?</h4>
                <p>No. L’esame è totalmente indolore.</p>
              </div>
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>È pericolosa la radioattività?</h4>
                <p>La quantità è bassa e paragonabile ad altre PET. I benefici clinici superano di gran lunga i rischi.</p>
              </div>
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>Devo rimanere in ospedale?</h4>
                <p>No, l’esame si svolge in regime ambulatoriale.</p>
              </div>
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>Lo studio cambia la mia terapia?</h4>
                <p>Assolutamente no. La terapia viene stabilita esclusivamente dal medico curante.</p>
              </div>
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>Posso ritirarmi dallo studio?</h4>
                <p>Sì, in qualsiasi momento e senza alcuna conseguenza sul tuo normale percorso di cura.</p>
              </div>
              <div className="faq-item">
                <h4 style={{ color: 'var(--ocean-blue)' }}>I miei dati sono al sicuro?</h4>
                <p>Sì, i dati vengono trattati in forma anonima e conservati su piattaforme digitali protette e sicure.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ForPatients;