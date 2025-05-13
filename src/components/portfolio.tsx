import React, { useState } from 'react';
import '@css/components/_portfolio.scss';
import imageBkg from '../assets/portfolio/portfolio.png';
import PortfolioOrizzontale from '@components/portfolioOrizzontale';
import PortfolioVerticale from '@components/portfolioVerticale';
import TitlePageH2 from '@components/titlePageH2';
import useDeviceType from '@utils/useDeviceType';  // Importiamo il custom hook


interface props {
  title: string;
}


const portfolio: React.FC<props> = ({ title }) => {
  
  const isMobile = useDeviceType(); // Mi restituisce se sono su mobile o desktop

  // Stato per tenere traccia della visualizzazione attiva
  const [view, setView] = useState('verticale'); // Default è orizzontale

  // Funzione per cambiare la vista
  const handleViewChange = (viewType:string) => {
    setView(viewType);
  };

  return (
    <section className={title}  
      style={{
      backgroundImage: `url(${imageBkg})`, // Usa l'immagine importata
      backgroundSize: view === 'vertical' ? 'cover' : 'contain', // A seconda della visualizzazione orizzontale o verticale
      height: view === 'vertical' ? '100%' : 'auto'
      }}
    >
      <TitlePageH2 title={title}></TitlePageH2>
      
      {!isMobile && (
        <div className="button-container">
          <button 
            onClick={() => handleViewChange('orizzontale')}
            className={view === 'orizzontale' ? 'active' : ''}
          >
            Vista orizzontale
          </button>
          <button 
            onClick={() => handleViewChange('verticale')}
            className={view === 'verticale' ? 'active' : ''}
          >
            Vista verticale
          </button>
        </div>    
      )}

      {/* Mostra il componente in base alla selezione */}
      {view === 'orizzontale' ? <PortfolioOrizzontale /> : <PortfolioVerticale />} 
    </section>
  );
};

export default portfolio;