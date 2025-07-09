// i18nForTests.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const i18nForTests = i18n.createInstance();

i18nForTests.use(initReactI18next).init({
  lng: "ru",
  fallbackLng: "ru",
  debug: false,
  interpolation: { escapeValue: false },
  resources: {
    ru: {
      translation: {
        // можно добавить минимальные ключи для тестов или оставить пустым
      },
    },
    en: {
      translation: {},
    },
  },
});

export default i18nForTests;
