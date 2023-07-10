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
import DrawerMain from "../shared/DrawerMain";

const Main = () => {
  // console.log(window.innerWidth,"from windoss");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 4300);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      
        <main className="lg:w-[98%] mx-auto  relative px- z-40  ">
          <nav>



     
       {/* ---- drawer start ---- */}
     <DrawerMain toggleDrawer={toggleDrawer} isOpen={isOpen} key={1234e1234} ></DrawerMain>


            <Navbar toggleDrawer={toggleDrawer} key={2222}/>
          </nav>
          {isLoading ? <MainLoader></MainLoader> :
          <section onClick={()=>setIsOpen(false)} className={`${isOpen && "opacity-[0.5] transition-opacity ease-in duration-700"} w-full absolute top-[4.9rem] bg-bg1`}>
          <Outlet />
          </section>

          }
        
        {/* <footer className="
       
        ">

          <Footer />
        </footer> */}
        {/* <Footer></Footer> */}
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
     
    </div>
  );
};

export default Main;
