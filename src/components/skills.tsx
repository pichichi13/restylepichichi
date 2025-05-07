import React, { useEffect, useState } from 'react';
import '@css/components/_skills.scss';
import TitlePageH2 from '@components/titlePageH2';
import imageBkg from '@assets/skills.png';
import ImageSkills from '@components/imageSkills';
import { gsap } from 'gsap';

// Import static delle immagini
import logoCss from '@assets/skills/logo_css3.png';
import logoHtml from '@assets/skills/logo_html5.png';
import logoJs from '@assets/skills/logo_js.png';
import logoNode from '@assets/skills/logo_node.png';
import logoReact from '@assets/skills/logo_react.png';
import logoTailwind from '@assets/skills/logo_tailwind.png';
import logoNpm from '@assets/skills/logo_npm.png';
import logoResponsive from '@assets/skills/logo_responsive.png';
import logoReactNative from '@assets/skills/logo_react_native.png';
import logoGit from '@assets/skills/logo_git.png';
import logoIonic from '@assets/skills/logo_ionic.png';
import logoSass from '@assets/skills/logo_sass.png';
import logoPhotoshop from '@assets/skills/logo_photoshop.png';




interface props {
  title: string;
}

const skillsData = [
  {
    "path": logoCss,
    "name": "css3",
  },
  {
    "path": logoHtml,
    "name": "html5",
  },
  {
    "path": logoJs,
    "name": "js",
  },
  {
    "path": logoNode,
    "name": "node",
  },
  {
    "path": logoReact,
    "name": "react",
  },
  {
    "path": logoTailwind,
    "name": "tailwind",
  },
  {
    "path": logoNpm,
    "name": "npm",
  },
  {
    "path": logoResponsive,
    "name": "responsive",
  },
  {
    "path": logoReactNative,
    "name": "reactnative",
  },
  {
    "path": logoGit,
    "name": "git",
  },
  {
    "path": logoIonic,
    "name": "ionic",
  },
  {
    "path": logoSass,
    "name": "sass",
  },
  {
    "path": logoPhotoshop,
    "name": "photoshop",
  }
] 

const Skills: React.FC<props> = ({ title }) => {

   // Caricamento dinamico delle immagini
    //const [images, setImages] = useState<{ [key: string]: string }>({});
    const [visibleImages, setVisibleImages] = useState<number[]>([]);
  
    /*useEffect(() => {
      // Funzione per caricare dinamicamente le immagini
      const loadImages = async () => {
        const loadedImages: { [key: string]: string } = {};
  
        for (const item of skillsData) {
          try {
            const image = await import(`@assets/skills/${item.path}`);
            loadedImages[item.path] = image.default;
          } catch (error) {
            console.error(`Immagine non trovata: ${item.path}`);
          }
        }
  
        setImages(loadedImages);
      };
  
      loadImages();
    }, []);*/

    // Uso di IntersectionObserver per determinare quando un'immagine entra nella viewport
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-id'));

          if (entry.isIntersecting && !visibleImages.includes(index)) {
            // Aggiungi l'immagine alla lista dei visibili
            setVisibleImages((prev) => [...prev, index]);
            //console.log("dentro a skill");
            // Animazione in entrata (scale 0 → scale 1)
            gsap.to(entry.target, {
              scale: 1,
              opacity: 1,
              duration: 0.5,
              ease: 'power2.out',
              delay: Math.random() * 0.5, // Ritardo casuale
            });
          } else if (!entry.isIntersecting) {
            //console.log("fuori da skill");
            //console.log("Fuori ");
            // Rimuovi l'immagine dalla lista
            setVisibleImages((prev) => prev.filter((id) => id !== index));

            // Animazione di uscita (scale 1 → scale 0)
            gsap.to(entry.target, {
              scale: 0,
              opacity: 0,
              duration: 0.5,
              ease: 'power2.in',
            });
          }
        });
      }, { threshold: 0.1 });

      // Osserva tutte le immagini
      document.querySelectorAll('.skills-image').forEach((img) => observer.observe(img));

      return () => observer.disconnect();
    }, []);




  return (
    <>
      <section className={title}>
        <TitlePageH2 title={title}></TitlePageH2>      
        <img src={imageBkg} alt={title} className="mac" 
          style={{
            width:"100%",
            height:"auto"
          }}  
        />
        

        {skillsData.map((item, index) => (
            
            <ImageSkills
              key={index}
              path={item.path}
              //path={images[item.path]}
              name={item.name}
            />
          
        ))}
      </section>
    </>
  )
}

export default Skills
