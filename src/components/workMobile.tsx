import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import '@css/components/_work.scss';
import imageBkg from '@assets/work2.jpg';

import logo1 from '@assets/work/knowit.png';
import logo2 from '@assets/work/datalog.png';
import logo3 from '@assets/work/tre14.png';
import logo4 from '@assets/work/qwentes.png';
import logo5 from '@assets/work/rcs.png';
import logo6 from '@assets/work/fincons.png';
import logo7 from '@assets/work/accenture.png';
import TitlePageH2 from '@components/titlePageH2';

gsap.registerPlugin(MotionPathPlugin);

interface Props {
  title: string;
}

const WorkMobile: React.FC<Props> = ({ title }) => {

  const sectionRef = useRef<HTMLDivElement>(null); // Riferimento per il componente
  const lineRef = useRef<SVGLineElement>(null); // Riferimento per la linea SVG
  const [hasAnimated, setHasAnimated] = useState(false); // Stato per controllare se l'animazione è già avvenuta

  // Array che ora include i loghi insieme alle informazioni sulla società e l'anno
  const positions = [
    { year: '2001', society: 'Know IT', logo: logo1 },
    { year: '2003', society: 'Datalog', logo: logo2 },
    { year: '2008', society: 'Tre14', logo: logo3 },
    { year: '2010', society: 'Qwéntes Italia', logo: logo4 },
    { year: '2020', society: 'RCS Mediagroup', logo: logo5 },
    { year: '2022', society: 'Fincons Group', logo: logo6 },
    { year: '2025', society: 'Accenture', logo: logo7 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          // Quando il componente entra nella viewport
          animateDots();
          setHasAnimated(true); // Impostiamo il flag per evitare ripetizioni
        }
      });
    }, { threshold: 0.5 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Osserviamo il componente
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateDots = () => {
    if (lineRef.current && sectionRef.current) {
      const svgHeight = sectionRef.current.offsetHeight;

      const lineStartY = svgHeight * 0.1;
      const lineEndY = svgHeight * 0.9;
      const lineLength = lineEndY - lineStartY;
      const step = lineLength / (positions.length - 1);

      positions.forEach((_, index) => {
        const positionY = lineStartY + step * index;
        
        // Posizionamento del cerchio (rect) lungo la linea verticale
        gsap.set(`.dot${index}`, {
          y: 0,
        });

        // Posizionamento del logo (image) lungo la linea verticale
        gsap.set(`.image${index}`, {
          y: 0,
        });

        // Posizionamento del testo in orizzontale
        gsap.set(`.society${index}`, {
          y: positionY // iniziamo in alto
        });
        gsap.set(`.year${index}`, {
          y: positionY + 30 // iniziamo in alto
        });

        // Animazione del cercio (rect) lungo la linea verticale
        gsap.to([`.dot${index}`], {
          duration: 1,
          motionPath: {
            path: [
              { y: lineStartY },  
              { y: positionY }
            ],
            curviness: 0, 
          },
          
          delay: index * 0.5,
          opacity: 1,
          onComplete: () => {
            (document.querySelector(`.society${index}`) as HTMLElement)!.style.display = 'block';
            (document.querySelector(`.year${index}`) as HTMLElement)!.style.display = 'block';
          },
        });

        gsap.to([`.image${index}`], {
          duration: 1,
          motionPath: {
            path: [
              { y: lineStartY },  
              { y: positionY - 25 }
            ],
            curviness: 0, 
          },
          delay: index * 0.5,
          opacity: 1,
        });

        // Animazione del testo (society e year) orizzontalmente
        gsap.to(`.society${index}`, {
          duration: 1,
          delay: index * 0.5,
        });

        gsap.to(`.year${index}`, {
          duration: 1,
          delay: index * 0.5,
        });
        
      });
    }
  };

  return (
    <>
      <section ref={sectionRef} 
        className={title}
        style={{
          height: '100vh',
          backgroundImage: `url(${imageBkg})`, // Usa l'immagine importata
          backgroundSize: 'cover'
      }}
      >
        <TitlePageH2 title={title}></TitlePageH2>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh" className="motion-path">
          <line
            ref={lineRef}
            x1="50%" y1="0%" x2="50%" y2="100%" stroke="black" strokeWidth="3" />

          {positions.map((pos, index) => (
            <React.Fragment key={index}>
              <g>
                <rect
                  className={`dot${index}`}
                  x="48%"  // Posizione iniziale a sinistra
                  y="0%"
                  width="1rem"
                  height="1rem"
                  rx="3rem"  // Angoli arrotondati
                  ry="3rem"  // Angoli arrotondati
                  fill="#000000"
                  opacity="0"
                />
                <image
                  className={`image${index}`}
                  href={pos.logo}
                  x="25%"  // Posizione iniziale a sinistra
                  y="0%"
                  width="4rem"
                  height="4rem"
                  opacity="0"
                />
              </g>

              <text
                className={`society society${index}`}
                x="57%"
                style={{
                  fontSize: '1.2rem',
                  color: 'black',
                  textAlign: 'center',
                  display: 'none',
                }}
              >
                {pos.society}
              </text>
              <text
                className={`year year${index}`}
                x="57%"
                style={{
                  fontSize: '1.0rem',
                  color: 'black',
                  textAlign: 'center',
                  display: 'none',
                }}
              >
                {pos.year}
              </text>
            </React.Fragment>
          ))}
        </svg>
      </section>
    </>
  );
};

export default WorkMobile;
