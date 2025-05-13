import imageContact from '@assets/work2.png';
import imageCV from '@assets/cv1.png';
import imageLinkedin from '@assets/linkedin.png';

const StickyTop = () => {
  return (
    <>
       <div className='top_info'>
        <a target="_blank" href="https://www.linkedin.com/in/donatella-piccininno-00271624/"><img className="linkedin" src={imageLinkedin} alt="Linkedin" /></a>
        <a href="mailto:piccininno.donatella@gmail.com"><img src={imageContact} alt="Contact us" /></a>
        <a href="/CV.pdf" download>
          <img className="cv" src={imageCV} alt="Download CV" />
        </a>
      </div>
    </>
  )
}

export default StickyTop
