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

const Work: React.FC<Props> = ({ title }) => {

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
      const svgWidth = sectionRef.current.offsetWidth;

      const lineStartX = svgWidth * 0.1;
      const lineEndX = svgWidth * 0.9;
      const lineLength = lineEndX - lineStartX;
      const step = lineLength / (positions.length - 1);

      positions.forEach((_, index) => {
        const positionX = lineStartX + step * index;
        
        //Posizionamento del testo
        gsap.set(`.society${index}`, {
          x: positionX,
        });
        //Posizionamento dell'anno
        gsap.set(`.year${index}`, {
          x: positionX,
        });
        
        // Posizionamento della linea verticale
        gsap.set(`.line${index}`, {
          x: positionX,
          opacity: 0  
        });



        gsap.to(`.dot${index}`, {
          duration: 1,
          motionPath: {
            path: [
              { x: lineStartX },  
              { x: positionX } 
            ],
            curviness: 0, 
          },
          delay: index * 0.5,
          opacity: 1,
          onComplete: () => {
            (document.querySelector(`.society${index}`) as HTMLElement)!.style.display = 'block';
            (document.querySelector(`.year${index}`) as HTMLElement)!.style.display = 'block';
            (document.querySelector(`.line${index}`) as HTMLElement)!.style.opacity = '1';
          },
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
            x1="5%" y1="50%" x2="95%" y2="50%" stroke="black" strokeWidth="3" />

          {positions.map((pos, index) => (
            <React.Fragment key={index}>
              <g>
                <rect
                  className={`dot${index}`}
                  x="0%"
                  y="45%"
                  width="6rem"
                  height="6rem"
                  rx="3rem"  // Angoli arrotondati
                  ry="3rem"  // Angoli arrotondati
                  fill="#CCD1E5"
                  opacity="0"
                />
                <image
                  className={`dot${index}`}
                  href={pos.logo}
                  x="0%"
                  y="45%"
                  width="6rem"
                  height="6rem"
                  opacity="0"
                />
              </g>

              {/* Linea verticale tra il logo e il testo */}
              <line
                className={`line${index}`} 
                x1="50"
                x2="50"
                y1={index % 2 === 0 ? "43%" : "57%"}
                y2={index % 2 === 0 ? "33%" : "65%"}
                stroke="black" 
                strokeWidth="2"
              />

              <text
                className={`society society${index}`}
                x="0%"
                y={index % 2 === 0 ? "25%" : "70%"}
                style={{
                  fontSize: '1.8rem',
                  color: 'black',
                  textAlign: 'center',
                  display: 'none',
                  fontWeight:'bold',
                }}
              >
                {pos.society}
              </text>
              <text
                className={`year year${index}`}
                x="0%"
                y={index % 2 === 0 ? "30%" : "75%"}
                style={{
                  fontSize: '1.0rem',
                  color: 'black',
                  textAlign: 'center',
                  display: 'none',
                  fontWeight:'bold',
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

export default Work;
