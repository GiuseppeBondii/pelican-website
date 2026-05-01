import React, { useState } from 'react';

const ContactUs = () => {
  // 1. Creiamo lo stato per salvare i dati inseriti nel form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: ''
  });

  // 2. Creiamo lo stato per gestire il bottone e i messaggi di successo/errore
  const [status, setStatus] = useState(''); // può essere: '', 'sending', 'success', 'error'

  // 3. Funzione per aggiornare i dati mentre l'utente scrive
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 4. Funzione che scatta quando si clicca "Invia"
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // SOSTITUISCI L'URL QUI SOTTO CON QUELLO CHE TI DA FORMSPREE
      const response = await fetch('https://formspree.io/f/xdabkalg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        // Resetta il form dopo l'invio
        setFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
            
            <h4 style={{ marginTop: '30px', color: 'var(--ocean-blue)' }}>Per i Pazienti</h4>
            <p>Hai domande sullo studio o vuoi sapere se puoi partecipare?</p>
            <p><strong>Email:</strong> info@pelicanproject.it</p>

            {/* Placeholder immagine team */}
            <div style={{ marginTop: '30px', width: '100%', height: '200px', backgroundColor: 'var(--bg-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #ccc', borderRadius: '8px' }}>
              <span style={{ color: '#888' }}>[ Qui ci andrebbe la foto del team come da linea guida ]</span>
            </div>
          </div>

          {/* Modulo di Contatto */}
          <div className="text-box" style={{ marginBottom: 0 }}>
            <h3>Invia un messaggio</h3>
            <p>Compila il modulo sottostante, ti risponderemo il prima possibile.</p>
            <br />
            
            {status === 'success' ? (
              <div style={{ padding: '20px', backgroundColor: 'rgba(197, 224, 99, 0.2)', border: '2px solid var(--highlight-lime)', borderRadius: '12px', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--ocean-blue)', marginBottom: '10px' }}>Messaggio inviato con successo!</h4>
                <p style={{ margin: 0 }}>Grazie per averci contattato. Il team riceverà la tua richiesta a breve.</p>
                <button onClick={() => setStatus('')} className="btn-accent" style={{ marginTop: '15px' }}>Invia un altro messaggio</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nome e Cognome" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Indirizzo Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
                <select 
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  style={{ padding: '15px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', fontFamily: 'inherit' }}
                  required
                >
                  <option value="" disabled>Seleziona l'argomento...</option>
                  <option value="patient">Sono un paziente / familiare</option>
                  <option value="researcher">Sono un ricercatore / medico</option>
                  <option value="other">Altro</option>
                </select>
                <textarea 
                  name="message"
                  placeholder="Scrivi qui il tuo messaggio..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                
                {status === 'error' && (
                  <p style={{ color: 'var(--sunset-orange)', fontWeight: 'bold' }}>Si è verificato un errore. Riprova più tardi.</p>
                )}

                <button type="submit" className="btn-accent" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Invio in corso...' : 'Invia Messaggio'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactUs;


//50 submissions/mo.
//https://formspree.io/f/xdabkalg