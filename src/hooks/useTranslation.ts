import { useLanguage } from '../contexts/LanguageContext';
import fr from '../locales/fr.json';
import en from '../locales/en.json';

const translations = { fr, en } as const;

export const useTranslation = () => {
  const { language, toggleLanguage, setLanguage } = useLanguage();
  const t = translations[language];
  return { t, language, toggleLanguage, setLanguage };
};
