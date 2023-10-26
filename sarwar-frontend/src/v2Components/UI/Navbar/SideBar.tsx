"use client";
import NavItems from "@/v2Components/const/NavItems";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex bg-primary text-white">
      <Sider
        // collapsible
        className="bg-primary  text-white"
        //   collapsed={collapsed}
        //   onCollapse={(value) => setCollapsed(value)}
        width={300}
        style={{
          overflow: "auto",
          height: "110vh",
          position: "sticky",
          zIndex: 40,
          left: 0,
          top: 0,
          bottom: 0,
          //   padding: "10px 0 0 0",
          padding: "10px 15px",
          textAlign: "left",
          // width: "70vw",
          // background: "red",
          // background:"",
        }}
      >
        <h2 className="my-5">Sarwar Img</h2>
        <Menu
          // theme="light"
          className="bg-primary text-white"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={NavItems("sidebar")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
