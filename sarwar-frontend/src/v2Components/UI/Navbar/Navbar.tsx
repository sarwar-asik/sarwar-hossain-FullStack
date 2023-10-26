"use client";
import React from "react";
import { Layout } from "antd";
import Link from "next/link";
import SideDrawer from "./SideDrawer";
import NavItems from "@/v2Components/const/NavItems";
const { Header } = Layout;

const Navbar = () => {
  return (
    <nav className="mb-[10rem]">
      <Header
        className={`bg-primary text-white  px-3 w-full sticky top-0 z-10  flex lg:hidden justify-between items-center `}
      >
        <h2></h2>
        <section className="flex justify-between lg:hidden">
          <SideDrawer items={NavItems("sidebar")}></SideDrawer>
        </section>
      </Header>
    </nav>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), {
//   ssr: false,
// });

export default Navbar;
