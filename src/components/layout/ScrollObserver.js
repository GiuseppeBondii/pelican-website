import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollObserver = () => {
  const location = useLocation();

  useEffect(() => {
    // Creiamo l'osservatore
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Se la card entra nello schermo...
        if (entry.isIntersecting) {
          // Aggiungi la classe che fa partire l'animazione!
          entry.target.classList.add('is-visible');
          // Smetti di osservare questa card (l'animazione parte una volta sola)
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15 // Fa partire l'animazione quando la card è visibile al 15%
    });

    // Aspettiamo un attimo che React carichi la pagina, poi cerchiamo tutte le card
    setTimeout(() => {
      const elements = document.querySelectorAll('.text-box, .number-card, .news-card, .timeline-step, .faq-item');
      elements.forEach(el => observer.observe(el));
    }, 100);

    // Pulizia
    return () => observer.disconnect();
    
  }, [location.pathname]); // Si riavvia automaticamente ogni volta che cambi pagina dal menù

  return null; // È un componente "fantasma", lavora solo dietro le quinte
};

export default ScrollObserver;