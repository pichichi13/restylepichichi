import { useLanguage } from '@context/LanguageContext';
import flagItaly from '@assets/pichichihouse/IT.png';
import flagEnglish from '@assets/pichichihouse/EN.png';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flagContent">
      <button onClick={() => setLanguage('it')} disabled={language === 'it'}>
        <img className="flag" alt="Flag" src={flagItaly} />  
      </button>
      <button onClick={() => setLanguage('en')} disabled={language === 'en'}>
        <img className="flag" alt="Flag" src={flagEnglish} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;