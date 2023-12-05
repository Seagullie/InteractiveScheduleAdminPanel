import ukrainianMessages from "ra-language-ukrainian";
import en from "ra-language-english";

import polyglotI18nProvider from "ra-i18n-polyglot";

const translations = { en, ua: ukrainianMessages };

export const i18nProvider = polyglotI18nProvider(
  (locale) => translations[locale],
  "ua",
  [
    { locale: "en", name: "English" },
    { locale: "ua", name: "Українська" },
  ]
);
