import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
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

  return (
    <div>
      {isLoading ? (
        <MainLoader />
      ) : (
        <main className="lg:w-[98%] mx-auto  relative px- z-40 bg-bg1 ">
          <nav>
            <Navbar />
          </nav>
          <Outlet />
          <Footer />
          <section className="">
            <SmNavbar />
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
