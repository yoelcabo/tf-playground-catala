import i18next from 'i18next';

// Import translations directly
import enTranslations from '../public/locales/en/translation.json';

i18next.init({
  lng: 'en', // Default language
  fallbackLng: 'en',
  debug: true,
  resources: {
    en: {
      translation: enTranslations
    }
  }
});

export default i18next;
