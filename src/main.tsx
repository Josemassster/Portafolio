import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import es from "./assets/i18n/es.json";
import en from "./assets/i18n/en.json";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "devicon/devicon.min.css";
import "./styles/theme.css";

i18next.use(initReactI18next).init({
  lng: "es",
  interpolation: { escapeValue: false },
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
