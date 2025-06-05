import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Hilal.gov.pk",
            contactUs: "Contact Us",
            home: "Home"
            // add all your keys here
        }
    },
    ur: {
        translation: {
            welcome: "ہلال ڈاٹ کام میں خوش آمدید",
            contactUs: "ہم سے رابطہ کریں",
            home: 'ہوم'
            // add urdu translations here
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en', // default language
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // react already safes from xss
        }
    });

export default i18n;
