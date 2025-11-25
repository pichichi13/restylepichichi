//https://icon-icons.com/ -> Sito per icone

import { useEffect } from 'react';
import SectionList from './sectionlist';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useT } from '@hooks/useT';


import ariacondizionata from '@assets/pichichihouse/servizi/ariacondizionata.png';
import microonde from '@assets/pichichihouse/servizi/microonde.png';
import forno from '@assets/pichichihouse/servizi/forno.png';
import lavatrice from '@assets/pichichihouse/servizi/lavatrice.png';
import lavastoviglie from '@assets/pichichihouse/servizi/lavastoviglie.png';
import tv from '@assets/pichichihouse/servizi/tv.png';
import wifi from '@assets/pichichihouse/servizi/wifi.png';
import macchinacaffe from '@assets/pichichihouse/servizi/macchinacaffe.png';
import phone from '@assets/pichichihouse/servizi/phone.png';
import ferrodastiro from '@assets/pichichihouse/servizi/ferrodastiro.png';


import autobus from '@assets/pichichihouse/servizi/autobus.png';
import tram from '@assets/pichichihouse/servizi/tram.png';
import metropolitana from '@assets/pichichihouse/servizi/metropolitana.png';
import aereoporto from '@assets/pichichihouse/servizi/aereoporto.png';

import market from '@assets/pichichihouse/servizi/market.png';
import restaurant from '@assets/pichichihouse/servizi/restaurant.png';
import gelateria from '@assets/pichichihouse/servizi/gelateria.png';
import pub from '@assets/pichichihouse/servizi/pub.png';
import barcaffe from '@assets/pichichihouse/servizi/barcaffe.png';
import areacani from '@assets/pichichihouse/servizi/areacani.png';
import lunapark from '@assets/pichichihouse/servizi/lunapark.png';
import parcogiochi from '@assets/pichichihouse/servizi/parcogiochi.png';
import chiesa from '@assets/pichichihouse/servizi/chiesa.png';



const Service: React.FC = ({}) => {

  const t = useT();

  const houseItems = [
    { img: ariacondizionata, label: t('services1') },
    { img: microonde, label: t('services2') },
    { img: forno, label: t('services3') },
    { img: lavatrice, label: t('services4') },
    { img: lavastoviglie, label: t('services5') },
    { img: tv, label: t('services6') },
    { img: wifi, label: t('services7') },
    { img: macchinacaffe, label: t('services8') },
    { img: phone, label: t('services9') },
    { img: ferrodastiro, label: t('services10') },
  ];

  const transportItems = [
    { img: autobus, label: t('move1') },
    { img: tram, label: t('move2') },
    { img: metropolitana, label: t('move3') },
    { img: aereoporto, label: t('move4') },
  ];

  const nearbyItems = [
    { img: market, label: t('near1') },
    { img: restaurant, label: t('near2') },
    { img: gelateria, label: t('near3') },
    { img: pub, label: t('near4') },
    { img: barcaffe, label: t('near5') },
    { img: areacani, label: t('near6') },
    { img: lunapark, label: t('near7') },
    { img: parcogiochi, label: t('near8') },
    { img: chiesa, label: t('near9') },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 100,
      mirror: true,
    });
  
    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);


  
  return (
    <>
    
      <SectionList title={t('services_title')} items={houseItems} animation="flip-left" background="services" />
      <SectionList title={t('move_title')} items={transportItems} animation="zoom-in" background="transport" />
      <SectionList title={t('near_title')} items={nearbyItems} animation="slide-up" background="near" />
        
    </>
  )
}

export default Service
