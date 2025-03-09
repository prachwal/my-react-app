import { initReactI18next } from "react-i18next";
import LanguageManager from "../hooks/LanguageManager";

import i18n from "i18next";
import enTranslation from "../locales/en/translation.json";
import plTranslation from "../locales/pl/translation.json";
import esTranslation from "../locales/es/translation.json";
import frTranslation from "../locales/fr/translation.json";
import deTranslation from "../locales/de/translation.json";
import itTranslation from "../locales/it/translation.json";
import ruTranslation from "../locales/ru/translation.json";
import zhTranslation from "../locales/zh/translation.json";
import jaTranslation from "../locales/ja/translation.json";
import koTranslation from "../locales/ko/translation.json";

const resources = {
  en: {
    translation: {
      ...enTranslation,
      defaultName: "English",
    },
  },
  pl: {
    translation: {
      ...plTranslation,
      defaultName: "Polski",
    },
  },
  es: {
    translation: {
      ...esTranslation,
      defaultName: "Español",
    },
  },
  fr: {
    translation: {
      ...frTranslation,
      defaultName: "Français",
    },
  },
  de: {
    translation: {
      ...deTranslation,
      defaultName: "Deutsch",
    },
  },
  it: {
    translation: {
      ...itTranslation,
      defaultName: "Italiano",
    },
  },
  ru: {
    translation: {
      ...ruTranslation,
      defaultName: "Русский",
    },
  },
  zh: {
    translation: {
      ...zhTranslation,
      defaultName: "中文",
    },
  },
  ja: {
    translation: {
      ...jaTranslation,
      defaultName: "日本語",
    },
  },
  ko: {
    translation: {
      ...koTranslation,
      defaultName: "한국어",
    },
  },
};

const savedLanguage = LanguageManager.getDefaultLanguage();

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Użyj języka zapisanego w localStorage jako domyślnego języka
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export { resources };

export default i18n;
