import React from "react";
import { Link } from "react-router-dom";
import myImg from "../assets/main/professional-removebg-preview.png";

const DrawerMain = ({ isOpen, toggleDrawer }) => {
  return (
    <main className="flex">
      {/* Left Drawer */}
      <div
        className={`w-[50%] lg:w-64 flex flex-col justify-between bg-primary px-2 pt-2 ${
          isOpen ? "translate-x-0" : "-translate-x-full "
        } transform transition-transform ease-in-out duration-500 fixed z-40 top-0 left-0 h-screen`}
      >
        {/* Drawer content */}

        <article className="flex justify-between">
          <section className="p-4 flex flex-col gpa-3 font-bold font-serif">
            <Link
              onClick={toggleDrawer}
              to="/about"
              className="text-text1 shadow-2xl py-2 "
            >
              {" "}
              About{" "}
            </Link>
            <Link
              onClick={toggleDrawer}
              to="/projects"
              className="text-text1 shadow-2xl py-2"
            >
              {" "}
              Project{" "}
            </Link>
            <Link
              onClick={toggleDrawer}
              to="/login"
              className="text-text1 shadow-2xl py-2"
            >
              {" "}
              Login{" "}
            </Link>
          </section>
          <div onClick={toggleDrawer} className="text-white ">
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </article>
        <footer className="">
          <img
            src={myImg}
            className="h-[90px] w-[80px] mx-auto rounded-full"
            alt=""
          />
          <h3 className="text-text2 font-mono text-center text-[1em]">
            Sarwar Hossain
          </h3>
        </footer>
      </div>
    </main>
  );
};

export default DrawerMain;
