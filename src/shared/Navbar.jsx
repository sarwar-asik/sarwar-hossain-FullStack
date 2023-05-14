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

  const activeClass = "bg-[#0e2a47] text-white font-bold rounded p-2 font-serif";

  const [activeItem, setActiveItem] = useState('home');
  
  const handleItemClick = (item) => {
    setActiveItem(item);
  }
  return (
    <div className="hidden lg:flex bg-slate-300 py-3  justify-between px-3">
      <section>
        <h3 className="text-[1.5rem] font-semibold font-serif">Sarwar Hossain</h3>
      </section>
      <section className=" flex gap-3 justify-between font-serif">
        {NavData?.map((item) => {
          return (
            <div>
              <NavLink
              className={activeItem === item?.name ?activeClass:""}
              onClick={()=>handleItemClick(item.name)}
               to={item?.path}>{item?.name}</NavLink>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Navbar;
