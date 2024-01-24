import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AntdProvider } from "./providers/antd.tsx";
import { LanguageProvider } from "./providers/language.tsx";
import App from "./App.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AntdProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AntdProvider>
    </BrowserRouter>
  </React.StrictMode>
);
