import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageHouse from '@components/pichichihouse/imagehouse'
import Service from '@components/pichichihouse/service'
import Milan from '@components/pichichihouse/milan'
import banner from '@assets/pichichihouse/bannersmall.png';
import mail from '@assets/pichichihouse/mail.png';
import mappa from '@assets/pichichihouse/mappa.png';


// Importa eventuali stili
import '@css/pichichihouse/pichichihouse.scss'

const PichichiHouse = () => {
  return (
    <div className="pichichihouse">
      <div className='bannertop'>
        <img className="banner" alt="Banner" src={banner} />
        <div className="description">
          <h1>PICHICHI HOUSE</h1>
          <div className="contact">
            <a href="mailto:piccininno.donatella@gmail.com"><img className="mail" alt="Scrivimi" src={mail} /></a>
            <a target="_blank" href="https://maps.app.goo.gl/fQNYEkHt2erctyrA7"><img className="mappa" alt="Dove siamo" src={mappa} /></a>
          </div>
        </div>
      </div>
        <ImageHouse></ImageHouse>
        <Service></Service>
        <Milan></Milan>
    </div>
  );
};

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <PichichiHouse />
    </React.StrictMode>
  );
} else {
  console.error("Elemento con id 'root' non trovato!");
}
