import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import SmNavbar from "../shared/SmNavbar";

const Main = () => {
  return (
    <div className="lg:w-[95%] mx-auto  relative p-4 z-40">
      <nav>
        <Navbar />
       
      </nav>
      <Outlet />
      <Footer />
      <section className="lg:hidden fixed bottom-0 min-w-ful w-[87%] ">
      <SmNavbar/>
      </section>
    </div>
  );
};

export default Main;
