import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importa tus traducciones
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";

// Definí las traducciones
const resources = {
  en: { translation: translationEN },
  es: { translation: translationES },
};

i18n
  .use(initReactI18next) // Integración con React
  .init({
    resources,
    fallbackLng: "es", // idioma por defecto
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
  });

export default i18n;
