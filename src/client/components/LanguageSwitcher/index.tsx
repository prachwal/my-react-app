import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { changeLanguage } from "../../slices/languageSlice";
import "./style.scss";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const {
    language,
    availableLanguages,
  }: {
    language: string;
    availableLanguages: { code: string; name: string }[];
  } = useAppSelector((state) => state.language);

  useEffect(() => {
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [language, i18n]);

  const handleChangeLanguage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newLanguage = event.target.value;
    dispatch(changeLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">{t("Choose language")}:</label>
      <select
        id="language-select"
        onChange={handleChangeLanguage}
        value={language}
      >
        {availableLanguages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {lng.name || lng.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
