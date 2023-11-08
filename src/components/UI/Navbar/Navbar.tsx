"use client";
// import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import SideBar from "./Sidebar";
import NavItems from "@/components/const/NavItems";
import Link from "next/link";

const { Header } = Layout;

const Navbar = () => {
  const [top, setTop] = useState(false);

  const toggleVisibility = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 15) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <nav>
      <Header
        className={`  px-3 rounded-b-lg ${
          top
            ? "bg-secondary text-white  backdrop-blur-xl"
            : "bg-primary text-white"
        } w-full fixed top-0 z-10  flex justify-between items-center`}
      >
        <Link className="text-xl text-white font-serif" href="/">Sarwar</Link>
        <section className="flex justify-between lg:hidden">
          <SideBar items={NavItems("sidebar")}></SideBar>
        </section>
     
        <Menu
          className={`hidden  lg:flex  ${
            top
              ? "bg-secondary text-white backdrop-blur-xl"
              : "bg-primary text-white"
          } `}
          defaultSelectedKeys={["1"]}
          mode="horizontal"
          items={NavItems("nav")}
          disabledOverflow
        />
      </Header>
    </nav>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), {
//   ssr: false,
// });

export default Navbar;
