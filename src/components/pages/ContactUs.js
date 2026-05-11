import React, { useState } from 'react';
import data from '../../data/pelicanData.json';

const ContactUs = () => {
  const { contactUs } = data;
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xdabkalg', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
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
          <h1 className="page-title">{contactUs.header.title}</h1>
          <p>{contactUs.header.subtitle}</p>
        </div>
      </header>

      <section className="content-section">
        <div className="container contact-grid">
          
          {/* Informazioni di Contatto */}
          <div className="text-box" style={{ marginBottom: 0 }}>
            <h3>{contactUs.coordination.title}</h3>
            <p><strong>{contactUs.coordination.piLabel}</strong> {contactUs.coordination.piName}</p>
            <p><strong>{contactUs.coordination.coPiLabel}</strong> {contactUs.coordination.coPiName}</p>
            <p><strong>{contactUs.coordination.pmLabel}</strong> {contactUs.coordination.pmName} (<a href={`mailto:${contactUs.coordination.pmEmail}`} style={{color: 'inherit', textDecoration: 'underline'}}>{contactUs.coordination.pmEmail}</a>)</p>
            <p><strong>{contactUs.coordination.locationLabel}</strong> {contactUs.coordination.location}</p>
            
            <h4 style={{ marginTop: '30px', color: 'var(--ocean-blue)' }}>{contactUs.patients.title}</h4>
            <p>{contactUs.patients.desc}</p>
            <p><strong>{contactUs.patients.emailLabel}</strong> {contactUs.patients.email}</p>

            <div style={{ marginTop: '30px', width: '100%', height: '200px', backgroundColor: 'var(--bg-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed #ccc', borderRadius: '8px' }}>
              <span style={{ color: '#888' }}>{contactUs.placeholders.imageTeam}</span>
            </div>
          </div>

          {/* Modulo di Contatto */}
          <div className="text-box" style={{ marginBottom: 0 }}>
            <h3>{contactUs.form.title}</h3>
            <p>{contactUs.form.desc}</p>
            <br />
            
            {status === 'success' ? (
              <div style={{ padding: '20px', backgroundColor: 'rgba(197, 224, 99, 0.2)', border: '2px solid var(--highlight-lime)', borderRadius: '12px', textAlign: 'center' }}>
                <h4 style={{ color: 'var(--ocean-blue)', marginBottom: '10px' }}>{contactUs.form.successTitle}</h4>
                <p style={{ margin: 0 }}>{contactUs.form.successDesc}</p>
                <button onClick={() => setStatus('')} className="btn-accent" style={{ marginTop: '15px' }}>{contactUs.form.btnAnother}</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder={contactUs.form.inputs.name} value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder={contactUs.form.inputs.email} value={formData.email} onChange={handleChange} required />
                <select name="topic" value={formData.topic} onChange={handleChange} style={{ padding: '15px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', fontFamily: 'inherit' }} required>
                  <option value="" disabled>{contactUs.form.select.default}</option>
                  <option value="patient">{contactUs.form.select.patient}</option>
                  <option value="researcher">{contactUs.form.select.researcher}</option>
                  <option value="other">{contactUs.form.select.other}</option>
                </select>
                <textarea name="message" placeholder={contactUs.form.inputs.message} value={formData.message} onChange={handleChange} required></textarea>
                
                {status === 'error' && (
                  <p style={{ color: 'var(--sunset-orange)', fontWeight: 'bold' }}>{contactUs.form.errorMsg}</p>
                )}

                <button type="submit" className="btn-accent" disabled={status === 'sending'}>
                  {status === 'sending' ? contactUs.form.buttons.sending : contactUs.form.buttons.submit}
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