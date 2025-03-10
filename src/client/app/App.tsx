import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import Counter from "../components/Counter";
import NbpTable from "../components/NbpTable";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DaysSelector from "../components/DaysSelector";
import ErrorBoundary from "../components/ErrorBoundary"; // Nowy komponent do obsługi błędów
import GoogleLoginComponent from "../components/GoogleLoginComponent"; // Import nowego komponentu
import ExampleData from "../components/ExampleData"; // Import nowego komponentu
import LanguageManager from "../hooks/LanguageManager"; // Import LanguageManager
import { fetchAndSetTranslations } from "../slices/languageSlice"; // Import changeLanguage i fetchTranslations
import "./App.scss";

/**
 * Główny komponent aplikacji
 */
const App: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const clientId =
    "802826185441-kjjlcqbn5ftspjn2urv7jidhcvjk7543.apps.googleusercontent.com";
  const [days, setDays] = useState<number>(10); // Initialize with a default value

  // Zoptymalizowana funkcja zmiany dni z useCallback

  useEffect(() => {
    const initializeLanguage = async () => {
      const newLanguage = LanguageManager.getDefaultLanguage();
      dispatch(fetchAndSetTranslations(newLanguage));
    };
    initializeLanguage();
  }, [dispatch]);

  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="title-row">
          <h1>{t("My React App")}</h1>
        </div>
        <div className="controls-row">
          <LanguageSwitcher />
          <DaysSelector days={days} onDaysChange={setDays} />{" "}
          {/* Pass setDays directly */}
          <Counter />
          <GoogleLoginComponent clientId={clientId} />
        </div>
        <div className="nbp-table-row">
          <NbpTable days={days} /> {/* Pass days to NbpTable */}
        </div>
        <ExampleData />
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(App);
