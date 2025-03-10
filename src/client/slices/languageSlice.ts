import { createSlice } from "@reduxjs/toolkit";
import LanguageManager from "../hooks/LanguageManager";
import i18n from "../utils/i18nNew";
import axios from "axios";
import { AppDispatch } from "../store/store"; // Dodaj ten import

const savedLanguage = LanguageManager.getDefaultLanguage();

const initialState = {
  language: savedLanguage || "en",
  availableLanguages: [],
};

const fetchTranslations = async (language: string) => {
  try {
    const response = await axios.get(`/api/translations/${language}`);
    return response.data as string[];
  } catch (error) {
    console.error(
      `[ERROR] Błąd podczas pobierania tłumaczeń dla języka ${language}:`,
      error,
    );
    return {};
  }
};

const fetchAvailableLanguages = async (): Promise<string[]> => {
  try {
    const response = await axios.get("/api/translations/languages");
    return response.data as string[];
  } catch (error) {
    console.error("[ERROR] Błąd podczas pobierania dostępnych języków:", error);
    return [];
  }
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      LanguageManager.setLanguage(action.payload);
      i18n.changeLanguage(action.payload);
    },
    setAvailableLanguages: (state, action) => {
      state.availableLanguages = action.payload;
    },
  },
});

export const { changeLanguage, setAvailableLanguages } = languageSlice.actions;

export const initializeLanguages = () => async (dispatch: AppDispatch) => {
  const languages: string[] = await fetchAvailableLanguages();
  dispatch(setAvailableLanguages(languages));
  for (const language of languages) {
    const translations = await fetchTranslations(language);
    i18n.addResourceBundle(language, "translation", translations, true, true);
  }
};

export default languageSlice.reducer;
