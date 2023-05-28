import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import SmNavbar from "../shared/SmNavbar";

const Main = () => {
  // console.log(window.innerWidth,"from windossss");

  return (
    <div className="lg:w-[95%] mx-auto  relative p-4 z-40 bg-bg1">
      <nav>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
      <section className="">
        <SmNavbar />
      </section>
    </div>
  );
};

export default Main;
