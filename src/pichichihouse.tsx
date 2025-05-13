import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageHouse from '@components/pichichihouse/imagehouse'
import Service from '@components/pichichihouse/service'
import Milan from '@components/pichichihouse/milan'
import banner from '@assets/pichichihouse/bannersmall.png';
import mail from '@assets/pichichihouse/mail.png';
import mappa from '@assets/pichichihouse/mappa.png';
import imageProfile from '@assets/donatellapiccininnosocial.png';
import { HelmetProvider } from "react-helmet-async";
import HelmetComponent from "@components/helmetComponent";


// Importa eventuali stili
import '@css/pichichihouse/pichichihouse.scss'

const PichichiHouse = () => {
  return (
    <>
     <HelmetProvider>
        <HelmetComponent 
          title="Pichichi House, bilocale in Affitto a Milano, Via Mecenate" 
          description="Pichichi House: scopri il nostro bilocale in affitto a Milano, a soli 20 minuti dal centro. Situato in via Mecenate, ben servito dai mezzi pubblici. Perfetto per affitti brevi ma anche per soggiorni più lunghi. Comodo, moderno e con balcone!" 
          keywords="pichichi house, bilocale in affitto Milano, affitto breve Milano, affitto medio a Milano, appartamento Milano, via Mecenate, affitti brevi, affitti medi, soggiorno Milano, Airbnb Milano, Booking Milano, vacanze Milano, soggiorno in centro Milano, bilocale arredato, balcone, comodo, tutti i comfort, grazioso, luminoso, accogliente" 
          ogtitle="Pichichi House, bilocale in Affitto a Milano, Via Mecenate" 
          ogdescription="Pichichi House: scopri il nostro bilocale in affitto a Milano, a soli 20 minuti dal centro. Situato in via Mecenate, ben servito dai mezzi pubblici. Perfetto per affitti brevi ma anche per soggiorni più lunghi. Comodo, moderno e con balcone!" 
          ogimage={imageProfile} />


        <div className="pichichihouse">
          <div className='bannertop'>
            <img className="banner" alt="Banner" src={banner} />
            <div className="description">
              <div className='title'>PICHICHI HOUSE</div>
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
      </HelmetProvider>
    </>
    
    
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
