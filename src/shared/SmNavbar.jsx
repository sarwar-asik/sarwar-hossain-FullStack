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
    "bg-[#0e2a47] text-white font-bold rounded p-2 font-serif";

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="bg-slate-300 py-3  px-3">
      {/* <section>
        <h3 className="text-[1.5rem] font-semibold font-serif">Sarwar Hossain</h3>
      </section> */}
      <section className=" flex gap-3 justify-between font-serif">
        {/* {NavData?.map((item) => {
          return (
            <div>
              <NavLink
              className={activeItem === item?.name ?activeClass:""}
              onClick={()=>handleItemClick(item.name)}
               to={item?.path}>{item?.name}</NavLink>
            </div>
          );
        })} */}
        <div className="">
          <NavLink>Project</NavLink>
        </div>

        <div className="">
          <NavLink>Blogs</NavLink>
        </div>

        <div className="">
          <NavLink ><p className="bg-blue-500 h-[30px] w-[50px] rounded">
            </p></NavLink>
        </div>
        <div className="">
          <NavLink>About</NavLink>
        </div>
        <div className="">
          <NavLink>Login</NavLink>
        </div>
      </section>
    </div>
  );
};

export default SmNavbar;
