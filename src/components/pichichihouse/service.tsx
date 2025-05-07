//https://icon-icons.com/ -> Sito per icone

import { useEffect } from 'react';
import SectionList from './sectionlist';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ariacondizionata from '../../assets/pichichihouse/servizi/ariacondizionata.png';

import microonde from '@assets/pichichihouse/servizi/microonde.png';
import forno from '@assets/pichichihouse/servizi/forno.png';
import lavatrice from '@assets/pichichihouse/servizi/lavatrice.png';
import lavastoviglie from '@assets/pichichihouse/servizi/lavastoviglie.png';
import tv from '@assets/pichichihouse/servizi/tv.png';
import wifi from '@assets/pichichihouse/servizi/wifi.png';
import macchinacaffe from '@assets/pichichihouse/servizi/macchinacaffe.png';

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


const houseItems = [
  { img: ariacondizionata, label: "Aria condizionata" },
  { img: microonde, label: "Forno a microonde" },
  { img: forno, label: "Forno" },
  { img: lavatrice, label: "Lavatrice" },
  { img: lavastoviglie, label: "Lavastoviglie" },
  { img: tv, label: "Smart TV" },
  { img: wifi, label: "WiFi" },
  { img: macchinacaffe, label: "Macchina del caffè" },
];

const transportItems = [
  { img: autobus, label: "Autobus (45 e 66)" },
  { img: tram, label: "Tram (27)" },
  { img: metropolitana, label: "Metropolitana (M4)" },
  { img: aereoporto, label: "Aereoporto (Linate)" },
];

const nearbyItems = [
  { img: market, label: "Market" },
  { img: restaurant, label: "Ristoranti" },
  { img: gelateria, label: "Gelateria" },
  { img: pub, label: "Pub/Birreria" },
  { img: barcaffe, label: "Bar/Caffè" },
  { img: areacani, label: "Area cani" },
  { img: lunapark, label: "Luna park" },
  { img: parcogiochi, label: "Parco giochi" },
  { img: chiesa, label: "Chiesa" },
];

const Service: React.FC = ({}) => {


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

      <SectionList title="Cosa trovi in casa" items={houseItems} animation="flip-left" background="services" />
      <SectionList title="Come muoverti" items={transportItems} animation="zoom-in" background="transport" />
      <SectionList title="Nelle vicinanze" items={nearbyItems} animation="slide-up" background="near" />
        
    </>
  )
}

export default Service
