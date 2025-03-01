import React from "react";
import { useTranslation } from "react-i18next";
import { resources } from "../i18n";
import "../styles/LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
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
