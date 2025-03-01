import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { resources } from "../../i18n";
import LanguageManager from "../../utils/LanguageManager";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = LanguageManager.getDefaultLanguage();
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    LanguageManager.setLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select">{t("Choose language")}:</label>
      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
      >
        {Object.keys(resources).map((lng) => (
          <option key={lng} value={lng}>
            {resources[lng].name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
