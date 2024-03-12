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
    <div className="hidden lg:flex ">
      <Sider
        // collapsible
        className="bg-primary "
        //   collapsed={collapsed}
        //   onCollapse={(value) => setCollapsed(value)}
        width={300}
        style={{
          overflow: "auto",
          height: "110vh",
          position: "fixed",
          zIndex: 60,
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
          // position: "static",
          // top: 0
        }}
      >
        {/* <svg
          className="absolute inset-0 w-full h-full text-white"
      
          preserveAspectRatio="none"
          viewBox="0 0 309 800"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z"
          />
        </svg> */}
        {/* <h2 className="my-5">Sarwar Img</h2> */}
        <Link href="/" className="bg-red-4 flex justify-center py-7 mt-7 border-b-4 border-gray-500">
          <Image
            className="text-center w-[12rem] rounded-full mx-auto p-2"
            style={{
              border: "6px solid #252734"
            }}
            height={100}
            width={100}
            src={banner}
            alt="banner"
          />
        </Link>

        <Menu
          // theme="light"
          className="bg-primary text-white mt-10 font-[800]"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={NavItems("sidebar")}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
