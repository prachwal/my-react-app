import React from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./app/App";
import "./utils/i18n"; // Zakładam, że masz konfigurację i18n
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
