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
    "bg-[#0e2a47] text-white rounded shadow-2xl items-center  py-3";

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="bg-slate-300  px-2">
      {/* <section>
        <h3 className="text-[1.5rem] font-semibold font-serif">Sarwar Hossain</h3>
      </section> */}
      <section className=" flex gap-3 justify-between items-center font-serif font-[550] text-[0.8em] relative h-[50px]">
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
         <NavLink to='/projects'>
        <div
          className={activeItem === "project" ? activeClass : ""}
          onClick={() => handleItemClick("project")}
        >
         Project
        </div>
        </NavLink>

        <NavLink>
        <div
          className={activeItem === "blogs" ? activeClass : ""}
          onClick={() => handleItemClick("blogs")}
        >
        Blogs
        </div>
        </NavLink>

        <div
        
          className={activeItem === "home" ? "  -mt-[24px] px-1 border-[#0e2a47] border-2 rounded-t-[15px]" : "absolute top-[-30px] right-[225px]  px-1 "}
          onClick={() => handleItemClick("home")}
        >
          <NavLink
          to="/"
          >
            <p className="bg-[#0e2a47] h-[44px] w-[50px] rounded-t-[15px]"></p>
            <span>Home</span>
          </NavLink>
        </div>
        <div
          className={activeItem === "about" ? activeClass : ""}
          onClick={() => handleItemClick("about")}
        >
          <NavLink>About</NavLink>
        </div>
       <NavLink to='/login'>
       <div
          className={activeItem === "login" ? activeClass : ""}
          onClick={() => handleItemClick("login")}
        >
          Login
          
        </div>
       </NavLink>
      </section>
    </div>
  );
};

export default SmNavbar;
