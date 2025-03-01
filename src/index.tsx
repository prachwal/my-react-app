import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import "./i18n"; // Importuj konfigurację i18n
import "./styles/App.css"; // Importuj style
import "./components/LanguageSwitcher/LanguageSwitcher.css"; // Importuj style dla LanguageSwitcher

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
} else {
  throw new Error("Root container not found");
}
