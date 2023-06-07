import React from "react";
import { useLocation } from "react-router-dom";
import BackRoutes from "../shared/BackRoutes/BackRoutes";

const DetailsProjects = () => {
  const { state } = useLocation();

  const { name, time, image1, image2, image3, tech, live, source, img } = state;
  // console.log(state, "form");
  // if (name === "Used Car Depo") {
  //   image1 = "https://i.ibb.co/4sWMBr4/usedCars.png";
  //   image2 = "https://i.ibb.co/NLnjkm5/car2.png";
  // }
  // else if (name===""){
  //   image2="https://i.ibb.co/x6q19zT/car1.png"
  // }

  const location = useLocation();
  // console.log(location);
  console.log(image1, image2);

  return (
    <main className="container mx-auto py-3 my-4">
      <BackRoutes key={"Details"} path={location?.pathname}></BackRoutes>
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
        className={`min-h-[80vh] bg-[url(https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-120467.jpg?w=1060&t=st=1686119131~exp=1686119731~hmac=c973ecba66e2d56aa929e358ee16f9a4f84f1525c0b3332ef59ffa690cd2aacb)] flex justify-center items-center  bg-no-repeat bg-cover bg-fixed`}
      ></section>

      <div 
      className="my-3 text-center py-3"
       data-aos="flip-left"
      //  data-aos-easing="linear"
       data-aos-duration="2000" 
      
      >
        <h2 className="text-text1 font-serif">Project Name : {name}</h2>
        <p className="text-text2 ">
          Created :<span className="font-mono"> {time}</span>
        </p>
      </div>

      {/*  */}

      <section
        className={`min-h-[60vh] flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/blue-print-with-laptop-copy-space_23-2148393177.jpg?w=996&t=st=1686119252~exp=1686119852~hmac=655cc15af1cc48788af1e8c0abf7ca96a924fe78f7417f176d186705873ad00b)] bg-no-repeat bg-cover bg-fixed mt-3`}
      ></section>
     <footer
       data-aos="flip-right"
       data-aos-easing="linear"
       data-aos-duration="1200"
     >
     <div 
      className="my-3 text-center py-3"
    
      >
        <h2 className="text-text1 font-serif">Used Technology 🎶🎶🎶 : </h2>
        <p
        
         className="text-text2  flex  justify-center gap-2 mt-2">
          {tech.map((item, i) => {
            return (
              <div key={i}>
                <img
                  className="h-[40px] w-[40px] rounded-[100%]"
                  src={item}
                  alt=""
                />
              </div>
            );
          })}
        </p>
      </div>
      <div className="my-3 text-center py-3 mt-2">
        <h2 className="text-text1 font-serif">More Details 👉🏾👉🏾 </h2>
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
     </footer>
    </main>
  );
};

export default DetailsProjects;
