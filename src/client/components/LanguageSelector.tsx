import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeLanguages, changeLanguage } from "../slices/languageSlice";
import { AppDispatch } from "../store/store";
import { RootState } from "../store/store";

const LanguageSwitcher: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { language, availableLanguages } = useSelector(
    (state: RootState) => state.language,
  );

  useEffect(() => {
    dispatch(initializeLanguages());
  }, [dispatch]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(changeLanguage(event.target.value));
  };

  return (
    <select
      title="Select Language"
      value={language}
      onChange={handleLanguageChange}
    >
      {availableLanguages.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
