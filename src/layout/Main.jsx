import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import SmNavbar from "../shared/SmNavbar";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";
import { ToastContainer } from "react-toastify";
import ToTop from "../shared/ToTop";
import MainLoader from "../shared/MainLoader";

const Main = () => {
  // console.log(window.innerWidth,"from windoss");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4600);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isLoading ? (
        <MainLoader />
      ) : (
        <main className="lg:w-[98%] mx-auto  relative px- z-40 bg-bg1 ">
          <nav>



     
       {/* ---- drawer start ---- */}
       <div className="flex">
          {/* Left Drawer */}
           <div
           
            className={`w-[50%] lg:w-64 flex justify-between bg-primary px-2 pt-2 ${
              isOpen ? 'translate-x-0' : '-translate-x-full '
            } transform transition-transform ease-in-out duration-500 fixed z-40 top-0 left-0 h-screen`}
          >
            {/* Drawer content */}
            
                  <section className="p-4 flex flex-col gpa-3 font-bold font-serif">
                    <Link onClick={toggleDrawer} to='/about' className="text-text1 shadow-2xl py-2 "> About </Link>
                    <Link onClick={toggleDrawer} to='/projects' className="text-text1 shadow-2xl py-2"> Project </Link>
                    <Link onClick={toggleDrawer} to='/login' className="text-text1 shadow-2xl py-2"> Login </Link>
                    
                  </section>
                  <div onClick={toggleDrawer} className="">✖</div>
           </div>
      </div>

            <Navbar toggleDrawer={toggleDrawer} key={2222}/>
          </nav>
        <section onClick={()=>setIsOpen(false)} className={`${isOpen && "opacity-[0.5] transition-opacity ease-in duration-700"}`}>
        <Outlet />
        </section>
          <Footer />
          <section className="">
            <SmNavbar toggleDrawer={toggleDrawer} key={1111} />
          </section>

          <ToTop />

          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </main>
      )}
    </div>
  );
};

export default Main;
