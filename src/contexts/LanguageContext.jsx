import React, { createContext, useState, useEffect, useContext } from 'react';

    const LanguageContext = createContext();

    export const useLanguage = () => useContext(LanguageContext);

    export const LanguageProvider = ({ children }) => {
      const [language, setLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage ? storedLanguage : 'en';
      });

      useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
      }, [language]);

      const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'tr' : 'en'));
      };
      
      const setLang = (lang) => {
        if (lang === 'en' || lang === 'tr') {
          setLanguage(lang);
        }
      }

      return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLang }}>
          {children}
        </LanguageContext.Provider>
      );
    };