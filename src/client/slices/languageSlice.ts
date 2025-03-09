import { createSlice } from "@reduxjs/toolkit";
import LanguageManager from "../hooks/LanguageManager";
import { resources } from "../utils/i18nNew";

const savedLanguage = LanguageManager.getDefaultLanguage();

type ResourcesType = typeof resources;
type TranslationType = {
  defaultName?: string;
  [key: string]: string | number | boolean | object | undefined;
};

const initialState = {
  language: savedLanguage || "en",
  availableLanguages: Object.keys(resources).map((lng) => ({
    code: lng,
    name: (resources as ResourcesType)[lng as keyof ResourcesType].translation
      ? (
          (resources as ResourcesType)[lng as keyof ResourcesType]
            .translation as TranslationType
        ).defaultName || lng
      : lng,
    lng,
  })),
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      LanguageManager.setLanguage(action.payload);
    },
  },
});

export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
