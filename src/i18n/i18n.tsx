import React, { createContext, useContext, useState } from "react";
import es from "./es";
import en from "./en";

type Lang = "es" | "en";

const translations: Record<Lang, any> = {
  es,
  en,
};

const I18nContext = createContext({
  lang: "es" as Lang,
  setLang: (l: Lang) => {},
  t: (key: string) => "",
});

function resolve(obj: any, path: string) {
  return path
    .split(".")
    .reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLang] = useState<Lang>("es");

  const t = (key: string) => {
    const val = resolve(translations[lang], key);
    return val !== undefined ? val : key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

export default I18nContext;
