import { ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#31ad31",
          colorInfo: "#31ad31",
          colorSuccess: "#31ad31",
          colorWarning: "#fa8c16",
          colorError: "#af0000",
          colorTextBase: "#1f1f1f",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
