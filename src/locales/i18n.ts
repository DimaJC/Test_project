import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEN from './en/common.json';
import commonUK from './uk/common.json';

const resources = {
  en: {
    common: commonEN,
  },
  uk: {
    common: commonUK,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en-US',
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
