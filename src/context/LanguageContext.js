import React, { createContext, useState, useEffect } from 'react';
import dataIta from '../data/PelicanDataIta.json';
import dataEng from '../data/PelicanDataEng.json';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Controlla se l'utente aveva già scelto una lingua in precedenza, altrimenti usa l'italiano di default
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('pelican_lang');
    return savedLanguage ? savedLanguage : 'ita';
  });

  // Seleziona il JSON corrispondente
  const data = language === 'ita' ? dataIta : dataEng;

  // Funzione per cambiare lingua
  const toggleLanguage = () => {
    const newLang = language === 'ita' ? 'eng' : 'ita';
    setLanguage(newLang);
    localStorage.setItem('pelican_lang', newLang); // Salva la preferenza nel browser
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};