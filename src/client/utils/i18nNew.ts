import { initReactI18next } from "react-i18next";
import LanguageManager from "../hooks/LanguageManager";
import i18n from "i18next";

const resources = {};

const savedLanguage = LanguageManager.getDefaultLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Użyj języka zapisanego w localStorage jako domyślnego języka
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  initImmediate: false,
  react: {
    useSuspense: false,
  },
});

export default i18n;
