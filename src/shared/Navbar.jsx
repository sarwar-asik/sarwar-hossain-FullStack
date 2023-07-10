import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ toggleDrawer }) => {
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

  const activeClass = "bg-slate-400 text-white font-bold rounded p-2 font-serif";
  const [activeItem, setActiveItem] = useState("home");
  const [top,setTop] = useState(true)

  const toggleVisibility = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 15) {
      setTop(false)
    } else {
      setTop(true)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={`hidden sm:hidden w-full fixed ${top && 'bg-primary text-whit'} top-0 backdrop-blur-xl  z-10 text-slate-400 md:flex lg:flex bg-secon py-4  justify-between  px-5 rounded-b-lg `}>
      <section>
        <NavLink to="/" className="text-[1.6rem] font-semibold font-serif">
          Sarwar Hossain
        </NavLink>
      </section>
      <section className=" flex gap-3 justify-around font-serif font-[600] text-[1.2em]">
        {NavData?.map((item) => {
          return (
            <div key={item?.name} className="">
              <NavLink
                className={`${activeItem === item?.name ? activeClass : ""} rounded-lg p-2 shadow-xl`}
                onClick={() => handleItemClick(item.name)}
                to={item?.path}
              >
                {item?.name}
              </NavLink>
            </div>
          );
        })}
        <div
          className={`${activeItem === 'feature' ? activeClass : ""} p-2 rounded-lg h-[40px] -mt-[5px] shadow-xl`}
          onClick={() => {
            handleItemClick("feature");
            toggleDrawer();
          }}
        >
          {" "}
          Features{" "}
        </div>
      </section>
    </div>
  );
};

export default Navbar;
