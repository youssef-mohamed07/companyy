// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

// Get the stored language from local storage or default to 'en'
const storedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: storedLanguage, // Use the stored language or default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
