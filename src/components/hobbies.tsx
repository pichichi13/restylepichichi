import { useEffect } from 'react';
import 'aos/dist/aos.css';
import '@css/components/_hobbies.scss';
import TitlePageH2 from '@components/titlePageH2';
import ImageHobbies from '@components/imageHobbies';
//import imageBkg from '@assets/hobbies.png';
import { gsap } from 'gsap';

// Import static delle immagini
import calcio from '@assets/hobbies/calcio5.png';
import moto from '@assets/hobbies/moto3.png';
import snow from '@assets/hobbies/snow.png';


interface props {
  title: string;
}

// Array di immagini e relative descrizioni
const hobbiesData = [
  {
    "name": "Calcio",
    "path": calcio,
    "description": "Calcio",

  },
  {
    "name": "Calcio",
    "path": moto,
    "description": "Moto",
  },
  {
    "name": "Snow",
    "path": snow,
    "description": "Snowboard",
  },
  /*{
    "name": "Mamma",
    "path": mamma,
    "description": "Dedicarmi il più possibile alle mie figlie",
  }*/
];

const Hobbies: React.FC<props> = ({ title }) => {
  
  // Caricamento dinamico delle immagini
  /*const [images, setImages] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: { [key: string]: string } = {};

      for (const item of hobbiesData) {
        // Usa import dinamico per caricare ogni immagine
        try {
          const image = await import(`../assets/hobbies/${item.path}`);
          loadedImages[item.path] = image.default;
        } catch (error) {
          console.error(`Immagine non trovata: ${item.path}`);
        }
      }

      setImages(loadedImages);
    };

    loadImages();
  }, []);*/  
  
  // Uso di IntersectionObserver per determinare quando si entra nella viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         // Quando il componente entra nella viewport
         //console.log("DENTRO HOBBIES"); 
         // Animazione in entrata (scale 0 → scale 1)
         gsap.to(entry.target, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
          delay: Math.random() * 0.5, // Ritardo casuale
        }); 
        }else{
          //console.log("FUORI DA HOBBIES");
          // Animazione di uscita (scale 1 → scale 0)
          gsap.to(entry.target, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          });
        }
      });
    }, { threshold: 0.5 });

    // Osserva tutte le immagini
    document.querySelectorAll('.images-gallery').forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <section className={title}>
        <TitlePageH2 title={title}></TitlePageH2>

        <div className="images-gallery"> 

          {hobbiesData.map((item, index) => (
            
              <ImageHobbies
                key={index}
                path={item.path}
                description={item.description}
                name={item.name}
              />
            
          ))}
       
        </div>
      </section>
     
    </>
  )
}

export default Hobbies
