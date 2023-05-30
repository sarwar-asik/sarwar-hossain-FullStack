import React from "react";
import { useLocation } from "react-router-dom";
import BackRoutes from "../shared/BackRoutes/BackRoutes";

const DetailsProjects = () => {
  const { state } = useLocation();

  const { name, time, image1, image2, image3, tech, live, source, img } = state;
  console.log(state, "form");
  return (
    <main className="container mx-auto py-3 my-4">
        <BackRoutes></BackRoutes>
      <h2 className="text-[1.8rem] my-3 font-serif font-bold text-text1 text-center">
        {" "}
        Project Details{" "}
      </h2>

      <div className="">
        <h1 className="py-6 px-4 text-text2 text-center bg-primary font-bold text-[1.3rem]  hover:bg-  hover:text-w  rounded-tl-[50%] rounded-tr-[2%] rounded-bl-[2%] rounded-br-[46%]">
          {name}
        </h1>
      </div>

      <section
        className={`min-h-[80vh] flex justify-center items-center bg-[url(${image1})] bg-no-repeat bg-cover bg-fixed`}
      ></section>

      <div className="my-3 text-center py-3">
        <h2 className="text-text1 font-serif">Project Name : {name}</h2>
        <p className="text-text2 ">
          Created :<span className="font-mono"> {time}</span>
        </p>
      </div>

      {/*  */}

      <section
        className={`min-h-[60vh] flex justify-center items-center bg-[url(${image2})] bg-no-repeat bg-cover bg-fixed mt-3`}
      ></section>
      <div className="my-3 text-center py-3">
        <h2 className="text-text1 font-serif">Used Technology 🎶🎶🎶 : </h2>
        <p className="text-text2  flex  justify-center gap-2 mt-2">
          {tech.map(item=>{
            return<div>
                <img className="h-[40px] w-[40px] rounded-[100%]" src={item} alt="" />
            </div>

          })}
        </p>
        
      </div>
      <div className="my-3 text-center py-3 mt-2">
        <h2 className="text-text1 font-serif">More Details  👉🏾👉🏾 </h2>
        <p className="text-text2  flex  justify-center gap-2 mt-2">
        <a
                  className="text-xl font-semibold font-mono bg-primary  py-1 px-3  rounded-lg text-slate-200  hover:bg-slate-300 shadow-xl   hover:text-primary  transition duration-500 ease-in-out"
                  href={live}
                  target="_blank"
                  rel="noreferrer"
                >
             
                  Live site
                </a>
                <a
                  className="text-xl font-semibold font-mono bg-primary py-1 px-3  rounded-lg hover:text-primary text-slate-200 hover:bg-slate-300 shadow-xl  transition duration-500 ease-in-out"
                  href={source}
                  target="_blank"
                  rel="noreferrer"
                >
             
                  Github
                </a>
        </p>

      </div>
    </main>
  );
};

export default DetailsProjects;
