import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
const FriendLinks = () => {
  const { data } = useContext(LanguageContext);

  const linksData = data.links; 

  if (!linksData || !linksData.links) {
    return (
      <div className="page-transition">
        <div className="page-header">
          <div className="container">
            {/* Utilizzo optional chaining per evitare crash se linksData è null */}
            <h1 className="page-title">{linksData?.title || 'Links'}</h1>
          </div>
        </div>
        <div className="section content-section">
          <div className="container">
            <div className="text-box">
              <p>{linksData?.fallbackText || 'Dati non disponibili.'}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { title, subtitle, links } = linksData;

  const formatName = (key) => {
    const result = key.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
  };

  return (
    <div className="page-transition">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="section content-section">
        <div className="container">
          
          <div className="faq-grid">
            {Object.entries(links).map(([key, url]) => (
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={key}
                className="faq-item" 
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <h4>{formatName(key)}</h4>
                <p style={{ color: 'var(--ocean-blue)', fontSize: '0.9rem', wordBreak: 'break-all', opacity: 0.8 }}>
                  {url}
                </p>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default FriendLinks;