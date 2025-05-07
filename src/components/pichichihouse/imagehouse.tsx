import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // CSS base di Swiper
//import 'swiper/css/effect-fade'; // CSS per l'effetto fade
import 'swiper/css/navigation'; // CSS per la navigazione
import 'swiper/css/pagination'; // CSS per la paginazione
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import pichichihouse1 from '@assets/pichichihouse/desktop/pichichihouse1.jpg';
import pichichihouse2 from '@assets/pichichihouse/desktop/pichichihouse2.jpg';
import pichichihouse3 from '@assets/pichichihouse/desktop/pichichihouse3.jpg';
import pichichihouse4 from '@assets/pichichihouse/desktop/pichichihouse4.jpg';
import pichichihouse5 from '@assets/pichichihouse/desktop/aereoportolinate.jpg';
import pichichihouse6 from '@assets/pichichihouse/desktop/duomodimilano.jpg';
import pichichihouse7 from '@assets/pichichihouse/desktop/studirai.jpg';
import pichichihouse8 from '@assets/pichichihouse/desktop/fabrique.jpg';
import pichichihouse9 from '@assets/pichichihouse/desktop/tram.jpg';
import pichichihouse10 from '@assets/pichichihouse/desktop/milanocoerina.jpg';
import pichichihouse11 from '@assets/pichichihouse/desktop/stazioneforlanini.jpg';
import pichichihouse12 from '@assets/pichichihouse/desktop/mappa_metropolitana.jpg';

import pichichihouse1Mobile from '@assets/pichichihouse/mobile/pichichihouse1Mobile.jpg';
import pichichihouse2Mobile from '@assets/pichichihouse/mobile/pichichihouse2Mobile.jpg';
import pichichihouse3Mobile from '@assets/pichichihouse/mobile/pichichihouse3Mobile.jpg';
import pichichihouse4Mobile from '@assets/pichichihouse/mobile/pichichihouse4Mobile.jpg';
import pichichihouse5Mobile from '@assets/pichichihouse/mobile/aereoportolinateMobile.jpg';
import pichichihouse6Mobile from '@assets/pichichihouse/mobile/duomodimilanoMobile.jpg';
import pichichihouse7Mobile from '@assets/pichichihouse/mobile/studiraiMobile.jpg';
import pichichihouse8Mobile from '@assets/pichichihouse/mobile/fabriqueMobile.jpg';
import pichichihouse9Mobile from '@assets/pichichihouse/mobile/tramMobile.jpg';
import pichichihouse10Mobile from '@assets/pichichihouse/mobile/milanocoerinaMobile.jpg';
import pichichihouse11Mobile from '@assets/pichichihouse/mobile/stazioneforlaniniMobile.jpg';
import pichichihouse12Mobile from '@assets/pichichihouse/mobile/mappa_metropolitanaMobile.jpg';

const CAROUSEL_IMAGES = [
  { 
    srcDesktop: pichichihouse1, 
    srcMobile: pichichihouse1Mobile,
    alt: 'Pichichi House' },
  { 
    srcDesktop: pichichihouse2, 
    srcMobile: pichichihouse2Mobile,
    alt: 'Pichichi House' 
  },
  { 
    srcDesktop: pichichihouse3,
    srcMobile: pichichihouse3Mobile, 
    alt: 'Pichichi House' 
  },
  { 
    srcDesktop: pichichihouse4,
    srcMobile: pichichihouse4Mobile,
    alt: 'Pichichi House' 
  },
  { 
    srcDesktop: pichichihouse6, 
    srcMobile: pichichihouse6Mobile,
    alt: 'Duomo di Milano' 
  },
  { 
    srcDesktop: pichichihouse10, 
    srcMobile: pichichihouse10Mobile,
    alt: 'Olimpiadi Milano Cortina 2026 - Arena Polifunzionale' 
  },
  { 
    srcDesktop: pichichihouse7, 
    srcMobile: pichichihouse7Mobile,
    alt: 'Studi RAI' 
  },
  { 
    srcDesktop: pichichihouse8, 
    srcMobile: pichichihouse8Mobile,
    alt: 'Fabrique' 
  },
  { 
    srcDesktop: pichichihouse5, 
    srcMobile: pichichihouse5Mobile,
    alt: 'Aereoporto di Linate' 
  },
  { 
    srcDesktop: pichichihouse9, 
    srcMobile: pichichihouse9Mobile,
    alt: 'Fermata del tram sotto casa' 
  },
  { 
    srcDesktop: pichichihouse11, 
    srcMobile: pichichihouse11Mobile,
    alt: 'Stazione Ferroviaria Forlanini' 
  },
  { 
    srcDesktop: pichichihouse12, 
    srcMobile: pichichihouse12Mobile,
    alt: 'Mappa della Metropolitana di Milano' 
  },
] as const;

const ImageHouse = React.memo(() => {
  return (
    <section className='imagecarousel'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        watchSlidesProgress={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {CAROUSEL_IMAGES.map((image, index) => (
          <SwiperSlide key={index}>
            <picture>
              <source media="(max-width: 1024px)" srcSet={image.srcMobile} />
              <source media="(min-width: 1025px)" srcSet={image.srcDesktop} />
              <img 
                src={image.srcDesktop} 
                alt={image.alt} 
                loading="lazy" 
                className="carousel-image" 
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
});

export default ImageHouse;
