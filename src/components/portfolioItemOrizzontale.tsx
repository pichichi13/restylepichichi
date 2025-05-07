
import React, { } from 'react';
import '@css/components/_portfolioOrizzontale.scss';

interface props {
  name: string;
  image: string;
}

const PortfolioItemOrizzontale: React.FC<props> = ({ name, image  }) => {
  
  return (
    <>
      <img src={image} alt={name} className="portfolio-img" />
      <div className="portfolio-content">
        <h3>{name}</h3>
      </div>
    </>
  )
}

export default PortfolioItemOrizzontale
