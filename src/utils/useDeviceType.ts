import { useState, useEffect } from 'react';

const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Verifica che la dimensione della finestra venga registrata correttamente
      const isMobileDevice = window.innerWidth <= 768;
      if (isMobile !== isMobileDevice) {
        console.log('Resize:', isMobileDevice); // Log per debug
        setIsMobile(isMobileDevice);
      }
    };

    // Inizializza la dimensione corretta al caricamento
    handleResize();

    // Aggiungi l'evento di resize
    window.addEventListener('resize', handleResize);

    // Pulizia del listener quando il componente viene smontato
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]); // Effettua il check solo quando lo stato isMobile cambia

  return isMobile;
};

export default useDeviceType;