import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import NbpTable from "../components/NbpTable";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DaysSelector from "../components/DaysSelector";
import ErrorBoundary from "../components/ErrorBoundary"; // Nowy komponent do obsługi błędów
import { RootState } from "../store/store";
import { setDays } from "../slices/daysSlice"; // Nowy slice dla dni
import GoogleLoginComponent from "../components/GoogleLoginComponent"; // Import nowego komponentu
import "./App.scss";

/**
 * Główny komponent aplikacji
 */
const App: React.FC = () => {
  const { t } = useTranslation();
  const days = useSelector((state: RootState) => state.days.value);
  const dispatch = useDispatch();
  const clientId =
    "802826185441-kjjlcqbn5ftspjn2urv7jidhcvjk7543.apps.googleusercontent.com";

  // Zoptymalizowana funkcja zmiany dni z useCallback
  const handleDaysChange = useCallback(
    (newDays: number) => {
      dispatch(setDays(newDays));
    },
    [dispatch],
  );

  return (
    <ErrorBoundary>
      <div className="app-container">
        <div className="title-row">
          <h1>{t("My React App")}</h1>
        </div>
        <div className="controls-row">
          <LanguageSwitcher />
          <DaysSelector days={days} onDaysChange={handleDaysChange} />
          <Counter />
          <GoogleLoginComponent clientId={clientId} />
        </div>
        <div className="nbp-table-row">
          <NbpTable days={days} />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(App);
