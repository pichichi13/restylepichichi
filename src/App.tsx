//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import useDeviceType from '../src/utils/useDeviceType';  // Importiamo il custom hook

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

function App() {
  //const [count, setCount] = useState(0)
  
  const isMobile = useDeviceType(); // Mi restituisce se sono su mobile o desktop
  //console.log(isMobile);

  return (
    <>
      <HelmetProvider>

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
