import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en, fr } from './'

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: {
      'en-US': ['en'],
      'fr-FR': ['fr'],
      default: ['en'],
    },
    resources: {
      en: {
        home: en,
      },
      fr: {
        home: fr,
     },
    },
    debug: false,
  })

export default i18n