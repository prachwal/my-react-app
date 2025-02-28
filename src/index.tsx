import React from "react";
import { createRoot } from "react-dom/client"; // Nowa importowana funkcja
import App from "./components/App";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container); // Tworzenie roota
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Root container not found");
}
