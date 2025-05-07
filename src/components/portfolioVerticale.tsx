import React, { useEffect } from 'react';
import '@css/components/_portfolioVerticale.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioItemVerticale from '@components/portfolioItemVerticale';

// Import static delle immagini
import mediaset from '@assets/portfolio/mediasetinfinity.png';
import santoni from '@assets/portfolio/santoni.png';
import etro from '@assets/portfolio/etro.png';
import valextra from '@assets/portfolio/valextra.png';
import gazzetta from '@assets/portfolio/gazzetta.jpg';
import elezioni from '@assets/portfolio/elezioni.jpg';
import europei from '@assets/portfolio/europei.jpg';
import gazzettafannews from '@assets/portfolio/gazzettafannews.jpg';
import giroitalia from '@assets/portfolio/giroitalia.jpg';
import olimpiadi from '@assets/portfolio/olimpiadi.jpg';
import paralimpiadi from '@assets/portfolio/paralimpiadi.jpg';
import passionemotori from '@assets/portfolio/passionemotori.jpg';
import corriere from '@assets/portfolio/corriere.jpg';
import cucina from '@assets/portfolio/cucina.jpg';
import economiapro from '@assets/portfolio/economiapro.jpg';
import videocorriere from '@assets/portfolio/videocorriere.jpg';
import alcovadoge from '@assets/portfolio/alcova_doge.jpg';
import amazonia from '@assets/portfolio/amazonia.jpg';
import annapolis from '@assets/portfolio/annapolis.jpg';
import arrivederciroma from '@assets/portfolio/arrivederciroma.jpg';
import astoria from '@assets/portfolio/astoria.jpg';
import bollina from '@assets/portfolio/bollina.jpg';
import borgo from '@assets/portfolio/borgo.jpg';
import brandoli from '@assets/portfolio/brandoli.jpg';
import clap from '@assets/portfolio/clap.jpg';
import donprestige from '@assets/portfolio/don_prestige.jpg';
import dupre from '@assets/portfolio/dupre.jpg';
import figlidibacco from '@assets/portfolio/figlibacco.jpg';
import gallodoro from '@assets/portfolio/gallodoro.jpg';
import leano from '@assets/portfolio/leano.jpg';
import lovely from '@assets/portfolio/lovely.jpg';
import manin from '@assets/portfolio/manin.jpg';
import marmorata from '@assets/portfolio/marmorata.jpg';
import miraparque from '@assets/portfolio/miraparque.jpg';
import mostyn from '@assets/portfolio/mostyn.jpg';
import royalgarden from '@assets/portfolio/royalgarden.jpg';
import semiramide from '@assets/portfolio/semiramide.jpg';
import valdelrei from '@assets/portfolio/valdelrei.jpg';
import models from '@assets/portfolio/1000models.jpg';
import anfima from '@assets/portfolio/anfima.jpg';
import bikestaff from '@assets/portfolio/bikestaff.jpg';
import cucinaprofessionale from '@assets/portfolio/cucinaprofessionale.jpg';
import donlisander from '@assets/portfolio/donlisander.jpg';
import eritalia from '@assets/portfolio/eritalia.jpg';
import futuredrive from '@assets/portfolio/futuredrive.jpg';
import giannidallaglio from '@assets/portfolio/giannidallaglio.jpg';
import kraftfoods from '@assets/portfolio/kraftfoods.jpg';
import matricola from '@assets/portfolio/matricola.jpg';
import photofoyer from '@assets/portfolio/photofoyer.jpg';
import plinioilgiovane from '@assets/portfolio/plinioilgiovane.jpg';
import realcasa from '@assets/portfolio/realcasa.jpg';
import solom from '@assets/portfolio/solom.jpg';
import somefi from '@assets/portfolio/somefi.jpg';
import tre14 from '@assets/portfolio/tre14.jpg';

const portfolioData = [
  {
    "name": "Mediaset Infinity",
    "image": mediaset
  },
  {
    "name": "Santoni",
    "image": santoni
  },
  {
    "name": "Etro",
    "image": etro
  },
  {
    "name": "Valextra",
    "image": valextra
  },
  {
    "name": "La Gazzetta dello Sport",
    "image": gazzetta
  },
  {
    "name": "Gazzetta dello Sport - Speciale Elezioni 2013",
    "image": elezioni
  },
  {
    "name": "Gazzetta dello Sport - Speciale Europei 2012",
    "image": europei
  },{
    "name": "Gazzetta Fan News",
    "image": gazzettafannews
  },
  {
    "name": "Gazzetta dello Sport - Speciale Giro d'Italia 2013",
    "image": giroitalia
  },
  {
    "name": "Gazzetta dello Sport - Speciale Olimpiadi 2012",
    "image": olimpiadi
  },
  {
    "name": "Gazzetta dello Sport - Speciale Paralimpiadi 2012",
    "image": paralimpiadi
  },
  {
    "name": "Gazzetta dello Sport - Speciale Passione Motori",
    "image": passionemotori
  },
  {
    "name": "Corriere della Sera",
    "image": corriere
  },
  {
    "name": "Corriere Cucina",
    "image": cucina
  },
  {
    "name": "Corriere - Economia Pro",
    "image": economiapro
  },
  {
    "name": "Video Corriere",
    "image": videocorriere
  },
  {
    "name": "Hotel Alcova Doge",
    "image": alcovadoge
  },
  {
    "name": "Hotel Amazonia",
    "image": amazonia
  },
  {
    "name": "Hotel Annapolis",
    "image": annapolis
  },
  {
    "name": "Hotel Arrivederci Roma",
    "image": arrivederciroma
  },
  {
    "name": "Hotel Astoria",
    "image": astoria
  },
  {
    "name": "Hotel Bollina",
    "image": bollina
  },
  {
    "name": "Hotel Borgo",
    "image": borgo
  },
  {
    "name": "Hotel Brandoli",
    "image": brandoli
  },
  {
    "name": "Hotel Clap",
    "image": clap
  },
  {
    "name": "Hotel Don Prestige",
    "image": donprestige
  },
  {
    "name": "Hotel Du Pre",
    "image": dupre
  },
  {
    "name": "Hotel Figli di Bacco",
    "image": figlidibacco
  },
  {
    "name": "Hotel Gallo d'Oro",
    "image": gallodoro
  },
  {
    "name": "Hotel Leano",
    "image": leano
  },
  {
    "name": "Hotel Lovely",
    "image": lovely
  },
  {
    "name": "Hotel Manin",
    "image": manin
  },
  {
    "name": "Hotel Marmorata",
    "image": marmorata
  },
  {
    "name": "Hotel Miraparque",
    "image": miraparque
  },
  {
    "name": "Hotel Mostyn",
    "image": mostyn
  },
  {
    "name": "Hotel Royal Garden",
    "image": royalgarden
  },
  {
    "name": "Hotel Semiramide",
    "image": semiramide
  },
  {
    "name": "Hotel Val del Rei",
    "image": valdelrei
  },
  {
    "name": "1000Models",
    "image": models
  },
  {
    "name": "Anfima",
    "image": anfima
  },
  {
    "name": "Bikestaff",
    "image": bikestaff
  },
  {
    "name": "Cucina Professionale",
    "image": cucinaprofessionale
  },
  {
    "name": "Don Lisander",
    "image": donlisander
  },
  {
    "name": "Eritalia",
    "image": eritalia
  },
  {
    "name": "Future Drive",
    "image": futuredrive
  },
  {
    "name": "Gianni Dall'Aglio",
    "image": giannidallaglio
  },
  {
    "name": "Kraft Foods Italia",
    "image": kraftfoods
  },
  {
    "name": "Pub Matricola",
    "image": matricola
  },
  {
    "name": "Photofoyer",
    "image": photofoyer
  },
  {
    "name": "Plinio il Giovane",
    "image": plinioilgiovane
  },
  {
    "name": "Real Casa",
    "image": realcasa
  },
  {
    "name": "Solom",
    "image": solom
  },
  {
    "name": "Somefi",
    "image": somefi
  },
  {
    "name": "Tre 14 S.r.l.",
    "image": tre14
  }
];

const portfolioVerticale: React.FC = ({  }) => {
  // Caricamento dinamico delle immagini
  //const [images, setImages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Funzione per caricare dinamicamente le immagini
    /*const loadImages = async () => {
      const loadedImages: { [key: string]: string } = {};

      for (const item of portfolioData) {
        try {
          const image = await import(`@assets/portfolio/${item.image}`);
          loadedImages[item.image] = image.default;
        } catch (error) {
          console.error(`Immagine non trovata: ${item.image}`);
        }
      }

      setImages(loadedImages);
    };

    loadImages();*/

    // Inizializza AOS quando il componente viene montato
    AOS.init({
      duration: 1200,   // Durata animazione
      once: false,      // Animazione eseguita tutte le volte
      
    });

    // Rimuovi l'inizializzazione AOS se necessario
    return () => {
      AOS.refresh();
    };
  }, []); // Questo useEffect si esegue solo al montaggio del componente

  // Array di effetti AOS, da applicare ciclicamente ad ogni immagine
  const aosEffects = [
    'fade-up', 'fade-down', 'fade-left', 'fade-right',
    'zoom-in', 'zoom-out', 'flip-left', 'flip-right',
    'slide-up', 'slide-down', 'flip-vertical', 'flip-horizontal'
  ];

  return (  
      <div className="portfolio-container-aos">
        {portfolioData.map((item, index) => {
          // Seleziona un effetto AOS diverso per ogni immagine
          const aosEffect = aosEffects[index % aosEffects.length];  // Cicla sugli effetti


          return (
            <div
              key={index}
              className="portfolio-item"
              data-aos={aosEffect}  // Applicazione dell'effetto AOS
              data-aos-offset="200"  // Imposta l'offset a 200px
            >
              <PortfolioItemVerticale
                image={item.image}
                name={item.name}
              />
            </div>
          );
        })}
      </div>
  );
};

export default portfolioVerticale;