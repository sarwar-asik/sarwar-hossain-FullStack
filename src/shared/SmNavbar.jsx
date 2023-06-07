import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SmNavbar = () => {
  const NavData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "SignUp",
      path: "/register",
    },

    {
      name: "Project",
      path: "/projects",
    },
  ];

  const activeClass =
    "bg-primary flex flex-col items-center text-white p-1 rounded shadow-inner ";

  const noActiveClass = `flex flex-col items-center p-1`;

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="bg-secondary   lg:hidden fixed bottom-0 right-0 left-0  mx-auto px-1  min-w-fit mt-10">
      {/* <section>
        <h3 className="text-[1.5rem] font-semibold font-serif">Sarwar Hossain</h3>
      </section> */}
      <section className=" flex gap-3 justify-between items-center font-serif font-[550] text-[0.8em] relative h-[64px] overflow-x-auto">
        <NavLink
          to="/projects"
          className={activeItem === "project" ? activeClass : noActiveClass}
          onClick={() => handleItemClick("project")}
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
              />
            </svg>
          </figure>
          <span>Project</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={activeItem === "contact" ? activeClass : noActiveClass}
          onClick={() => handleItemClick("contact")}
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
          </figure>
          <span>contact</span>
        </NavLink>

        <NavLink
          to="/"
          className={activeItem === "home" ? activeClass : noActiveClass}
          onClick={() => handleItemClick("home")}
        >
          <figure className={``}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </figure>
          <span className="">Home</span>
        </NavLink>

        <NavLink
        to='/about'
          className={activeItem === "about" ? activeClass : noActiveClass}
          onClick={() => handleItemClick("about")}
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
          </figure>
          <span>About</span>
        </NavLink>
        <NavLink
          to="/login"
          className={activeItem === "login" ? activeClass : noActiveClass}
          onClick={() => handleItemClick("login")}
        >
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </figure>
          <span>Login</span>
        </NavLink>
      </section>
    </div>
  );
};

export default SmNavbar;
