import  { createContext, useContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '../i18n/español/es.json';
import en from '../i18n/ingles/en.json';

i18n.use(initReactI18next).init({
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
});

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    setLanguage(storedLanguage || 'es');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
