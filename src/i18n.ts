import i18next from 'i18next';

// Import translations directly
import enTranslations from '../public/locales/en/translation.json';
import caTranslations from '../public/locales/ca/translation.json';
import esTranslations from '../public/locales/es/translation.json';

i18next.init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: enTranslations
    },
    ca: {
      translation: caTranslations
    },
    es: {
      translation: esTranslations
    }
  }
});

export default i18next;
