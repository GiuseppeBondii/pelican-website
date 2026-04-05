import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <header className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p>Mettiti in contatto con il team di coordinamento.</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container contact-grid">
          
          {/* Informazioni di Contatto */}
          <div className="text-box" style={{ marginBottom: 0 }}>
            <h3>Coordinamento Studio</h3>
            <p><strong>Study Coordinator (PI):</strong> Dr. Andrea Farolfi</p>
            <p><strong>Vice-Coordinator:</strong> Dr. Andrea Di Giorgio</p>
            <p><strong>Sede:</strong> Bologna, Italia</p>
            
            <h4 style={{ marginTop: '30px', color: 'var(--accent-orange)' }}>Per i Pazienti</h4>
            <p>Hai domande sullo studio o vuoi sapere se puoi partecipare?</p>
            <p><strong>Email:</strong> info@pelicanproject.it</p>

            {/* Placeholder immagine team */}
            <div style={{ marginTop: '30px', width: '100%', height: '200px', backgroundColor: 'var(--bg-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #ccc', borderRadius: '8px' }}>
              <span style={{ color: '#888' }}>[ Qui ci andrebbe la foto del team come da liena guida ]</span>
            </div>
          </div>

          {/* Modulo di Contatto */}
          <div className="text-box" style={{ marginBottom: 0 }}>
            <h3>Invia un messaggio </h3>
            {/*TODO*/}
            <p>questo l ho aggiunto a mia discrzione, se si vuole utilizzare realmente arrangio un modo di farlo funzionare verso una mail prefissata</p>
            <br />
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Nome e Cognome" required />
              <input type="email" placeholder="Indirizzo Email" required />
              <select style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '4px', fontFamily: 'inherit' }}>
                <option value="">Seleziona l'argomento...</option>
                <option value="patient">Sono un paziente / familiare</option>
                <option value="researcher">Sono un ricercatore / medico</option>
                <option value="other">Altro</option>
              </select>
              <textarea placeholder="Scrivi qui il tuo messaggio..." required></textarea>
              <button type="submit" className="btn-accent">Invia Messaggio</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;