import { useState, useEffect } from "react";
import enMessages from "../i18n/locales/en.json";

type IMessages = typeof enMessages;

const defaultLocale = "en";
const locale = "en"; // TODO: get from SM2 after integration

const translations = {
  en: enMessages,
};

export const useLocale = () => {
  const [messages, setMessages] = useState<IMessages>();

  useEffect(() => {
    // TODO: return back dynamic loading after integration with SM2
    // import(`@i18n/locales/${locale}.json`).then(({ default: messages }) => {
    //   setMessages(messages);
    // });

    const messages = translations[locale];
    setMessages(messages);
  }, []);

  return {
    messages,
    defaultLocale,
    locale,
  };
};
