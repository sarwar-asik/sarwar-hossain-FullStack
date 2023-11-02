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
            colorPrimary: "#023047",
            borderRadius: 2,
            

            // Alias Token
            colorBgContainer: "#f6ffed",
            
          },
        
        }}
      >
        {children}
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
