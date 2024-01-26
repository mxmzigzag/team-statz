import type { FC, ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { useLocale } from "../hooks/useLocale";

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { messages, locale, defaultLocale } = useLocale();

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={messages}
    >
      {children}
    </IntlProvider>
  );
};
