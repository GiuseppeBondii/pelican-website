import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
const Footer = () => {
  const { data } = useContext(LanguageContext);
  const { footer } = data; 

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-content">
          <div className="footer-column">
            <h3 className="footer-title">{footer.title}</h3>
            <p className="footer-text">{footer.txt_1}</p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-title">{footer.title_contacts}</h4>
            <p 
              className="footer-text"
              dangerouslySetInnerHTML={{ __html: footer.txt_2 }} 
            />
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © {new Date().getFullYear()} <span dangerouslySetInnerHTML={{ __html: footer.txt_3 }} />
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;