import React, { useState } from "react";
import { Provider } from "react-redux";
import { useTranslation } from "react-i18next";
import store from "./store";
import Counter from "../components/Counter";
import NbpTable from "../components/NbpTable";
import LanguageSwitcher from "../components/LanguageSwitcher";
import DaysSelector from "../components/DaysSelector";
import "./App.css"; // Importuj style

const App: React.FC = () => {
  const { t } = useTranslation();
  const [days, setDays] = useState(10);

  return (
    <React.StrictMode>
      <Provider store={store}>
        <div className="app-container">
          <div className="title-row">
            <h1>{t("My React App")}</h1>
          </div>
          <div className="controls-row">
            <LanguageSwitcher />
            <DaysSelector days={days} onDaysChange={setDays} />
            <Counter />
          </div>
          <div className="nbp-table-row">
            <NbpTable days={days} />
          </div>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
