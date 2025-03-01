import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageManager from "./utils/LanguageManager";

import { ResourceLanguage } from "i18next";

interface TranslationResource extends ResourceLanguage {
  name: string;
  translation: {
    Loading: string;
    "No data available": string;
    Previous: string;
    Next: string;
    Page: string;
    of: string;
    Currency: string;
    Code: string;
    "Exchange Rate": string;
    "Choose language": string;
  };
}

export const resources: Record<string, TranslationResource> = {
  en: {
    name: "English",
    translation: {
      Loading: "Loading...",
      "No data available": "No data available",
      Previous: "Previous",
      Next: "Next",
      Page: "Page",
      of: "of",
      Currency: "Currency",
      Code: "Code",
      "Exchange Rate": "Exchange Rate",
      "Choose language": "Choose language",
    },
  },
  pl: {
    name: "Polski",
    translation: {
      Loading: "Ładowanie...",
      "No data available": "Brak danych",
      Previous: "Poprzednia",
      Next: "Następna",
      Page: "Strona",
      of: "z",
      Currency: "Waluta",
      Code: "Kod",
      "Exchange Rate": "Kurs wymiany",
      "Choose language": "Wybierz język",
    },
  },
  es: {
    name: "Español",
    translation: {
      Loading: "Cargando...",
      "No data available": "No hay datos disponibles",
      Previous: "Anterior",
      Next: "Siguiente",
      Page: "Página",
      of: "de",
      Currency: "Moneda",
      Code: "Código",
      "Exchange Rate": "Tipo de cambio",
      "Choose language": "Elige idioma",
    },
  },
  fr: {
    name: "Français",
    translation: {
      Loading: "Chargement...",
      "No data available": "Pas de données disponibles",
      Previous: "Précédent",
      Next: "Suivant",
      Page: "Page",
      of: "de",
      Currency: "Devise",
      Code: "Code",
      "Exchange Rate": "Taux de change",
      "Choose language": "Choisir la langue",
    },
  },
  de: {
    name: "Deutsch",
    translation: {
      Loading: "Laden...",
      "No data available": "Keine Daten verfügbar",
      Previous: "Vorherige",
      Next: "Nächste",
      Page: "Seite",
      of: "von",
      Currency: "Währung",
      Code: "Code",
      "Exchange Rate": "Wechselkurs",
      "Choose language": "Sprache wählen",
    },
  },
  it: {
    name: "Italiano",
    translation: {
      Loading: "Caricamento...",
      "No data available": "Nessun dato disponibile",
      Previous: "Precedente",
      Next: "Successivo",
      Page: "Pagina",
      of: "di",
      Currency: "Valuta",
      Code: "Codice",
      "Exchange Rate": "Tasso di cambio",
      "Choose language": "Scegli la lingua",
    },
  },
  ru: {
    name: "Русский",
    translation: {
      Loading: "Загрузка...",
      "No data available": "Нет доступных данных",
      Previous: "Предыдущая",
      Next: "Следующая",
      Page: "Страница",
      of: "из",
      Currency: "Валюта",
      Code: "Код",
      "Exchange Rate": "Обменный курс",
      "Choose language": "Выберите язык",
    },
  },
  zh: {
    name: "中文",
    translation: {
      Loading: "加载中...",
      "No data available": "没有可用数据",
      Previous: "上一页",
      Next: "下一页",
      Page: "页",
      of: "的",
      Currency: "货币",
      Code: "代码",
      "Exchange Rate": "汇率",
      "Choose language": "选择语言",
    },
  },
  ja: {
    name: "日本語",
    translation: {
      Loading: "読み込み中...",
      "No data available": "利用可能なデータがありません",
      Previous: "前",
      Next: "次",
      Page: "ページ",
      of: "の",
      Currency: "通貨",
      Code: "コード",
      "Exchange Rate": "為替レート",
      "Choose language": "言語を選択",
    },
  },
  ko: {
    name: "한국어",
    translation: {
      Loading: "로딩 중...",
      "No data available": "사용 가능한 데이터가 없습니다",
      Previous: "이전",
      Next: "다음",
      Page: "페이지",
      of: "의",
      Currency: "통화",
      Code: "코드",
      "Exchange Rate": "환율",
      "Choose language": "언어 선택",
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

export default i18n;
