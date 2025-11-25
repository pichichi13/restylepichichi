import { translations } from '@translations/translations';
import { useLanguage } from '@context/LanguageContext';

export const useT = () => {
  const { language } = useLanguage();
  return (key: keyof typeof translations['it']) => translations[language][key];
};