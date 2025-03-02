import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import store from "./store/store";
import { HelmetProvider, Helmet } from "react-helmet-async"; // Importujemy HelmetProvider i Helmet
import "./utils/i18nNew"; // Importujemy konfigurację i18n
import { useTranslation } from "react-i18next"; // Importujemy hook useTranslation

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const RootComponent = () => {
  const { t, i18n } = useTranslation();

  return (
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider>
          <Helmet>
            <title>{t("Title")}</title>
            <meta name="description" content={t("Description") ?? ""} />
            <html lang={i18n.language} />
          </Helmet>
          <App />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  );
};

root.render(<RootComponent />);
