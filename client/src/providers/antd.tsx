import { ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00d000",
          colorInfo: "#00d000",
          colorSuccess: "#00d000",
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
