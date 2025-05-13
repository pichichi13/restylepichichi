//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import useDeviceType from '@utils/useDeviceType';  // Importiamo il custom hook

import '@css/main.scss'  // Importa il file SCSS
import About from '@components/about'
import Skills from '@components/skills'
import Work from '@components/work'
import WorkMobile from '@components/workMobile'
import Hobbies from '@components/hobbies'
import '@css/_fonts.scss';
import Portfolio from '@components/portfolio';
import StickyTop from '@components/stickyTop';
import { HelmetProvider } from "react-helmet-async";
import HelmetComponent from "@components/helmetComponent";

function App() {
  //const [count, setCount] = useState(0)
  
  const isMobile = useDeviceType(); // Mi restituisce se sono su mobile o desktop
  //console.log(isMobile);

  return (
    <>
      <HelmetProvider>
        
        <HelmetComponent title="Donatella Piccininno - Frontend Developer" description="Sono Donatella, una Frontend Developer da più di 20 anni. Programmo principalmente in HTML5 e CSS3, 
        ma conosco vari linguaggi di programmazione come React. Cerco di dare ai miei siti web una grafica accattivante ma senza trascurare la user
        interface e la parte di responsive design. Sono abituata a lavorare sia in team che in autonomia. Non ho paura di confrontarmi o chiedere aiuto
        ai miei colleghi e sono altrettanto contenta di poter aiutare gli altri in caso di neccesità." keywords="Frontend Developer, Frontend, Developer, Programmatrice, Siti, Siti web, HTML5, CSS3, React, React Native, Tailwind,
        Node, NPM, Git, Codice, Responsive Design, Responsive, Smartphone, Tablet, User Interface, UX" ogtitle="Donatella Piccininno - Frontend Developer" ogdescription="Sono Donatella, una Frontend Developer da più di 20 anni. Programmo principalmente in HTML5 e CSS3, 
        ma conosco vari linguaggi di programmazione come React. Cerco di dare ai miei siti web una grafica accattivante ma senza trascurare la user
        interface e la parte di responsive design. Sono abituata a lavorare sia in team che in autonomia. Non ho paura di confrontarmi o chiedere aiuto
        ai miei colleghi e sono altrettanto contenta di poter aiutare gli altri in caso di neccesità." ogimage="/path-to-image.jpg" />

        <StickyTop></StickyTop>
      
        <About title="about"></About>
        <Skills title="skills"></Skills>
        {!isMobile && (
          <Work title="career"></Work>
        )}

        {isMobile && (
          <WorkMobile title="career"></WorkMobile>
        )}
        <Portfolio title="portfolio"></Portfolio>
        <Hobbies title="hobbies"></Hobbies>
      
    
      </HelmetProvider>
    </>
  )
}

export default App
