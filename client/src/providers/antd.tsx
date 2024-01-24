import { ConfigProvider } from "antd";
import type { FC, ReactNode } from "react";

export const AntdProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7dce94",
          colorInfo: "#7dce94",
          colorSuccess: "#7dce94",
          colorWarning: "#fa8c16",
          colorError: "#ff5e6c",
          colorTextBase: "#1f1f1f",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
