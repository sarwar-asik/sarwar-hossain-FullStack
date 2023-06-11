import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({toggleDrawer} ) => {
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
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const activeClass = "bg-primary text-white font-bold rounded p-2 font-serif";
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="hidden sm:hidden md:flex lg:flex bg-secondary py-2  justify-between  px-5 rounded-b-lg">
      <section>
        <NavLink to="/" className="text-[1.6rem] font-semibold font-serif">
          Sarwar Hossain
        </NavLink>
      </section>
      <section className=" flex gap-3 justify-around font-serif font-[600] text-[1em]">
        {NavData?.map((item) => {
          return (
            <div key={item?.name}>
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
         <div
        className={`${activeItem === "feature"?activeClass:"" } font-serif font-[600] text-[1em]`}  
        onClick={() => {
          handleItemClick("feature");
          toggleDrawer();
        }}
       > Features </div>

      

      </section>
    </div>
  );
};

export default Navbar;