import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS base di Swiper
//import 'swiper/css/effect-fade'; // CSS per l'effetto fade
import 'swiper/css/navigation'; // CSS per la navigazione
import 'swiper/css/pagination'; // CSS per la paginazione

import { useT } from '@hooks/useT';

import { EffectFade, Navigation, Pagination, Keyboard } from 'swiper/modules';

import pichichihouse1Desktop from '@assets/pichichihouse/desktop/pichichi1.jpg';
import pichichihouse2Desktop from '@assets/pichichihouse/desktop/pichichi2.jpg';
import pichichihouse3Desktop from '@assets/pichichihouse/desktop/pichichi3.jpg';
import pichichihouse4Desktop from '@assets/pichichihouse/desktop/pichichi4.jpg';
import pichichihouse5Desktop from '@assets/pichichihouse/desktop/pichichi5.jpg';
import pichichihouse6Desktop from '@assets/pichichihouse/desktop/pichichi6.jpg';
import pichichihouse7Desktop from '@assets/pichichihouse/desktop/pichichi7.jpg';
import pichichihouse8Desktop from '@assets/pichichihouse/desktop/pichichi8.jpg';
import pichichihouse9Desktop from '@assets/pichichihouse/desktop/pichichi9.jpg';
import pichichihouse10Desktop from '@assets/pichichihouse/desktop/pichichi10.jpg';
import pichichihouse11Desktop from '@assets/pichichihouse/desktop/pichichi11.jpg';
import pichichihouse12Desktop from '@assets/pichichihouse/desktop/pichichi12.jpg';
import pichichihouse13Desktop from '@assets/pichichihouse/desktop/pichichi13.jpg';
import pichichihouse14Desktop from '@assets/pichichihouse/desktop/pichichi14.jpg';
import pichichihouse15Desktop from '@assets/pichichihouse/desktop/pichichi15.jpg';
import pichichihouse16Desktop from '@assets/pichichihouse/desktop/pichichi16.jpg';
import pichichihouse17Desktop from '@assets/pichichihouse/desktop/pichichi17.jpg';
import pichichihouse18Desktop from '@assets/pichichihouse/desktop/pichichi18.jpg';
import pichichihouse19Desktop from '@assets/pichichihouse/desktop/pichichi19.jpg';
import pichichihouse20Desktop from '@assets/pichichihouse/desktop/aereoportolinate.jpg';
import pichichihouse21Desktop from '@assets/pichichihouse/desktop/duomodimilano.jpg';
import pichichihouse22Desktop from '@assets/pichichihouse/desktop/studirai.jpg';
import pichichihouse23Desktop from '@assets/pichichihouse/desktop/fabrique.jpg';
import pichichihouse24Desktop from '@assets/pichichihouse/desktop/tram.jpg';
import pichichihouse25Desktop from '@assets/pichichihouse/desktop/milanocoerina.jpg';
import pichichihouse26Desktop from '@assets/pichichihouse/desktop/stazioneforlanini.jpg';
import pichichihouse27Desktop from '@assets/pichichihouse/desktop/mappa_metropolitana.jpg';

import pichichihouse1Mobile from '@assets/pichichihouse/mobile/pichichi1.jpg';
import pichichihouse2Mobile from '@assets/pichichihouse/mobile/pichichi2.jpg';
import pichichihouse3Mobile from '@assets/pichichihouse/mobile/pichichi3.jpg';
import pichichihouse4Mobile from '@assets/pichichihouse/mobile/pichichi4.jpg';
import pichichihouse5Mobile from '@assets/pichichihouse/mobile/pichichi5.jpg';
import pichichihouse6Mobile from '@assets/pichichihouse/mobile/pichichi6.jpg';
import pichichihouse7Mobile from '@assets/pichichihouse/mobile/pichichi7.jpg';
import pichichihouse8Mobile from '@assets/pichichihouse/mobile/pichichi8.jpg';
import pichichihouse9Mobile from '@assets/pichichihouse/mobile/pichichi9.jpg';
import pichichihouse10Mobile from '@assets/pichichihouse/mobile/pichichi10.jpg';
import pichichihouse11Mobile from '@assets/pichichihouse/mobile/pichichi11.jpg';
import pichichihouse12Mobile from '@assets/pichichihouse/mobile/pichichi12.jpg';
import pichichihouse13Mobile from '@assets/pichichihouse/mobile/pichichi13.jpg';
import pichichihouse14Mobile from '@assets/pichichihouse/mobile/pichichi14.jpg';
import pichichihouse15Mobile from '@assets/pichichihouse/mobile/pichichi15.jpg';
import pichichihouse16Mobile from '@assets/pichichihouse/mobile/pichichi16.jpg';
import pichichihouse17Mobile from '@assets/pichichihouse/mobile/pichichi17.jpg';
import pichichihouse18Mobile from '@assets/pichichihouse/mobile/pichichi18.jpg';
import pichichihouse19Mobile from '@assets/pichichihouse/mobile/pichichi19.jpg';
import pichichihouse20Mobile from '@assets/pichichihouse/mobile/aereoportolinateMobile.jpg';
import pichichihouse21Mobile from '@assets/pichichihouse/mobile/duomodimilanoMobile.jpg';
import pichichihouse22Mobile from '@assets/pichichihouse/mobile/studiraiMobile.jpg';
import pichichihouse23Mobile from '@assets/pichichihouse/mobile/fabriqueMobile.jpg';
import pichichihouse24Mobile from '@assets/pichichihouse/mobile/tramMobile.jpg';
import pichichihouse25Mobile from '@assets/pichichihouse/mobile/milanocoerinaMobile.jpg';
import pichichihouse26Mobile from '@assets/pichichihouse/mobile/stazioneforlaniniMobile.jpg';
import pichichihouse27Mobile from '@assets/pichichihouse/mobile/mappa_metropolitanaMobile.jpg';



const altTexts = [
  'Pichichi House - Welcome',
  'Pichichi House - Entrata',
  'Pichichi House - Sala',
  'Pichichi House - Sala',
  'Pichichi House - Cucina e Sala',
  'Pichichi House - Cucina e Sala',
  'Pichichi House - Cucina',
  'Pichichi House - Cucina',
  'Pichichi House - Camera Matrimoniale',
  'Pichichi House - Camera Matrimoniale',
  'Pichichi House - Bagno e Doccia',
  'Pichichi House - Bagno e Lavandino',
  'Pichichi House - Bagno e Specchio',
  'Pichichi House - Macchinetta del caffè',
  'Pichichi House - Entrata',
  'Pichichi House - Balcone',
  'Pichichi House - Balcone',
  'Pichichi House - Esterno',
  'Pichichi House - Locandina',
  'Aereoporto di Linate',
  'Duomo di Milano',
  'Studi RAI',
  'Fabrique',
  'Fermata del tram sotto casa',
  'Olimpiadi Milano Cortina 2026 - Arena Polifunzionale',
  'Stazione Ferroviaria Forlanini',
  'Mappa della Metropolitana di Milano'
];


const ImageHouse = React.memo(() => {
  
  
  const t = useT();

  const images = [
    { desktop: pichichihouse1Desktop, mobile: pichichihouse1Mobile, caption: '' },
    { desktop: pichichihouse2Desktop, mobile: pichichihouse2Mobile, caption: '' },
    { desktop: pichichihouse3Desktop, mobile: pichichihouse3Mobile, caption: '' },
    { desktop: pichichihouse4Desktop, mobile: pichichihouse4Mobile, caption: '' },
    { desktop: pichichihouse5Desktop, mobile: pichichihouse5Mobile, caption: '' },
    { desktop: pichichihouse6Desktop, mobile: pichichihouse6Mobile, caption: '' },
    { desktop: pichichihouse7Desktop, mobile: pichichihouse7Mobile, caption: '' },
    { desktop: pichichihouse8Desktop, mobile: pichichihouse8Mobile, caption: '' },
    { desktop: pichichihouse9Desktop, mobile: pichichihouse9Mobile, caption: '' },
    { desktop: pichichihouse10Desktop, mobile: pichichihouse10Mobile, caption: '' },
    { desktop: pichichihouse11Desktop, mobile: pichichihouse11Mobile, caption: '' },
    { desktop: pichichihouse12Desktop, mobile: pichichihouse12Mobile, caption: '' },
    { desktop: pichichihouse13Desktop, mobile: pichichihouse13Mobile, caption: '' },
    { desktop: pichichihouse14Desktop, mobile: pichichihouse14Mobile, caption: '' },
    { desktop: pichichihouse15Desktop, mobile: pichichihouse15Mobile, caption: '' },
    { desktop: pichichihouse16Desktop, mobile: pichichihouse16Mobile, caption: '' },
    { desktop: pichichihouse17Desktop, mobile: pichichihouse17Mobile, caption: '' },
    { desktop: pichichihouse18Desktop, mobile: pichichihouse18Mobile, caption: '' },
    { desktop: pichichihouse19Desktop, mobile: pichichihouse19Mobile, caption: '' },
    { desktop: pichichihouse20Desktop, mobile: pichichihouse20Mobile, caption: t('imageaereoporto') },
    { desktop: pichichihouse21Desktop, mobile: pichichihouse21Mobile, caption: t('imageduomo') },
    { desktop: pichichihouse22Desktop, mobile: pichichihouse22Mobile, caption: t('imagestudirai') },
    { desktop: pichichihouse23Desktop, mobile: pichichihouse23Mobile, caption: t('imagefabrique') },
    { desktop: pichichihouse24Desktop, mobile: pichichihouse24Mobile, caption: t('imagetram') },
    { desktop: pichichihouse25Desktop, mobile: pichichihouse25Mobile, caption: t('imagearena') },
    { desktop: pichichihouse26Desktop, mobile: pichichihouse26Mobile, caption: t('imagestazione') },
    { desktop: pichichihouse27Desktop, mobile: pichichihouse27Mobile, caption: '' },
  ];

  const CAROUSEL_IMAGES = images.map((img, index) => ({
    srcDesktop: img.desktop,
    srcMobile: img.mobile,
    caption: img.caption,
    alt: altTexts[index],
  }));

  return (
    <section className='imagecarousel'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        watchSlidesProgress={true}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Keyboard]}
        className="mySwiper"
      >
        {CAROUSEL_IMAGES.map((image, index) => (
          <SwiperSlide key={index} className={`item_${index}`}>
            <picture>
              <source media="(max-width: 1024px)" srcSet={image.srcMobile} />
              <source media="(min-width: 1025px)" srcSet={image.srcDesktop} />
              <img 
                src={image.srcDesktop} 
                alt={image.alt} 
                loading="lazy" 
                className="carousel-image" 
              />
              {image.caption && (
                <span className="caption">{image.caption}</span>
              )}
              
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default ImageHouse;
