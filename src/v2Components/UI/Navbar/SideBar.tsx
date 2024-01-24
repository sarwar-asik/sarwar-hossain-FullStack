"use client";
import NavItems from "@/v2Components/const/NavItems";
import banner from "@/assets/professionalRemoveBg.png";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="hidden lg:flex">
      <Sider
        // collapsible
        className="bg-primary "
        //   collapsed={collapsed}
        //   onCollapse={(value) => setCollapsed(value)}
        width={300}
        style={{
          overflow: "auto",
          height: "110vh",
          // position: "fixed",
          zIndex: 40,
          left: 0,
          top: 0,
          bottom: 0,
          //   padding: "10px 0 0 0",
          padding: "10px 15px",
          textAlign: "left",
          overflowY: "hidden",
          // width: "70vw",
          // background: "red",
          // background:"",
        }}
      >
        {/* <h2 className="my-5">Sarwar Img</h2> */}
      <Link href="/" className="bg-red-40 flex justify-center py-7">
      <Image
          className="text-center w-[12rem] rounded-full mx-auto p-2"
          style={{
            border:"6px solid #252734"
          }}
          height={100}
          width={100}
          src={banner}
          alt="banner"
        />
      </Link>

        <Menu
          // theme="light"
          className="bg-primary text-white mt-10 font-[700]"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={NavItems("sidebar")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
