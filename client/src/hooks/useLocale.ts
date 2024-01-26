import { useState } from "react";

import { ELanguages } from "../components/Header/Header.types";

import enMessages from "../i18n/locales/en.json";
import uaMessages from "../i18n/locales/ua.json";
import ruMessages from "../i18n/locales/ru.json";

type IMessages = typeof enMessages;

const defaultLocale = ELanguages.en;

const translations = {
  en: enMessages,
  ua: uaMessages,
  ru: ruMessages,
};

export const useLocale = () => {
  const [locale, setLocale] = useState<ELanguages>(ELanguages.en);
  const [messages, setMessages] = useState<IMessages>();

  const onLocaleChange = (newLocale: ELanguages) => {
    setLocale(newLocale);
    setMessages(translations[newLocale]);
  };

  return {
    messages,
    defaultLocale,
    locale,
    changeLocale: onLocaleChange,
  };
};
