import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">PELICAN Project</h3>
            <p className="footer-text">
              Studio osservazionale, prospettico, multicentrico e no-profit.<br />
              Valutazione del ruolo della PET PSMA nella risposta alle terapie sistemiche del carcinoma prostatico.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">Contatti Rapidi</h4>
            <p className="footer-text">
              <strong>Centro Coordinatore:</strong> Bologna<br />
              <strong>PI:</strong> Dr. Andrea Farolfi<br />
              <strong>Email Pazienti:</strong> info@pelicanproject.it
            </p>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} PELICAN Research. Tutti i diritti riservati. <br />
            Approvato dal Comitato Etico AVEC (737/2024/Oss/AOUBo).
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;