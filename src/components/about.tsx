import '@css/components/_about.scss';
import imageBkg from '@assets/about.jpg';
//import imageProfile from '@assets/profilo.png';
import imageProfile from '@assets/profilo_def1.png';
import { RiScrollToBottomFill } from "react-icons/ri";
import logo_html5 from '@assets/logo_html5.png';
import logo_css3 from '@assets/logo_css3.png';
import logo_js from '@assets/logo_js.png';
import logo_react from '@assets/logo_react.png';
import logo_node from '@assets/logo_node.png';
import logo_tailwind from '@assets/logo_tailwind.png';

interface props {
    title: string;
}

const About: React.FC<props> = ({ title }) => {
  
    /*const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);*/
  
  return (
    <>
      
      <section className={title}
         style={{
            height: '100vh',
            backgroundImage: `url(${imageBkg})`, // Usa l'immagine importata
            backgroundSize: 'cover'
        }}   
      >
        <div className='profile'>
            <img className="imgprofile" src={imageProfile} alt="Profile" />
            <div className='loghi'>
                <img className="logo logo_html5 logo-1" src={logo_html5} alt="Logo html5" />
                <img className="logo logo_css3 logo-2" src={logo_css3} alt="Logo css3" />
                <img className="logo logo_js logo-3" src={logo_js} alt="Logo js" />
                <img className="logo logo_react logo-4" src={logo_react} alt="Logo react" />
                <img className="logo logo_node logo-5" src={logo_node} alt="Logo node" />
                <img className="logo logo_tailwind logo-6" src={logo_tailwind} alt="Logo node" />
                <div className='logo logo_altro logo-7'><span>.</span><span>.</span><span>.</span></div>
            </div>
        </div>
        <div className='info'>
            <div className='title name'>Donatella Piccininno</div>
            <div className='job subtitle'>Web developer</div>
            {/*<a href='mailto:piccininno.donatella@gmail.com' className='calltoaction'>  
              <img src={imageContact} width="150" height="150" alt="Contact us" />
              <span>Hai domande?<br></br>Scrivimi!</span>
            </a>*/}
        </div>
        <RiScrollToBottomFill className='scroll_down' size={50} color="white" /> 
      </section>
     
    </>
  )
}

export default About
