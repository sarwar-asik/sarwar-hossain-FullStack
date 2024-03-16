"use client";

import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "red",
            borderRadius: 2,


            // Alias Token
            colorBgContainer: "#f6ffed",
            // colorBorderBg: 'white',

          },

        }}
      >
        {children}
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
