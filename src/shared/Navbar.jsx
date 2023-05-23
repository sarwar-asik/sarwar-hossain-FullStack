import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
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
    "bg-[#0e2a47] text-white font-bold rounded p-2 font-serif";
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="hidden lg:flex bg-slate-300 py-4  justify-between px-3 px-5 rounded">
      <section>
        <NavLink to="/" className="text-[1.6rem] font-semibold font-serif">
          Sarwar Hossain
        </NavLink>
      </section>
      <section className=" flex gap-3 justify-around font-serif font-[600] text-[1em]">
        {NavData?.map((item) => {
          return (
            <div>
              <NavLink
                className={activeItem === item?.name ? activeClass : ""}
                onClick={() => handleItemClick(item.name)}
                to={item?.path}
              >
                {item?.name}
              </NavLink>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Navbar;
