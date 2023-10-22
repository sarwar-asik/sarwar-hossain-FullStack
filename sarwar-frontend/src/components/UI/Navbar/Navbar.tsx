"use client";
import dynamic from "next/dynamic";
import React from "react";
import { Layout, Menu } from "antd";
import SideBar from "./Sidebar";
import NavItems from "@/components/const/NavItems";

const { Header } = Layout;

const Navbar = () => {
  return (
    <div>
      <Header className="bg-white text-black shadow-xl lg:px-2 px-1 flex justify-between">
      <h2>Sarwar</h2>
        <div className="flex justify-between items-center gap-2">
          <section className="flex justify-between lg:hidden">
            <SideBar items={NavItems("sidebar")}></SideBar>
          
          </section>
          
        </div>
        <Menu
          className="hidden lg:flex"
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          items={NavItems("nav")}
          disabledOverflow
        />
     
      </Header>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), {
  ssr: false,
});
