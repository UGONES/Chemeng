import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./lang/en.json";
import du from "./lang/du.json";
import fr from "./lang/fr.json";
import ru from "./lang/ru.json";
import zh from "./lang/zh-CN.json";
import ar from "./lang/ar.json";
import ja from "./lang/ja.json";
import hi from "./lang/hi.json";
import pt from "./lang/pt.json";
import es from "./lang/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      du: { translation: du },
      fr: { translation: fr },
      ru: { translation: ru },
      hi: { translation: hi },
      es: { translation: es },
      ja: { translation: ja },
      pt: { translation:pt },
      "zh-CN": { translation: zh },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
