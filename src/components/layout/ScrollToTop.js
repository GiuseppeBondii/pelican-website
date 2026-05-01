import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // useLocation ci permette di leggere l'URL attuale
  const { pathname } = useLocation();

  useEffect(() => {
    // Ogni volta che il pathname cambia, scrolla istantaneamente alle coordinate X:0, Y:0
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Non renderizza nulla a schermo
};

export default ScrollToTop;