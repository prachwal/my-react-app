import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./utils/i18n"; // Importuj konfigurację i18n

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  throw new Error("Root container not found");
}
