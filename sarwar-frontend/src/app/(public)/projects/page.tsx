import React from "react";
import { Image } from "antd";

const Projects = async () => {
  const res = await fetch("https://sarwarserver.vercel.app/api/v2/projects");
  const data = await res.json();
//   console.log(data);
  const allProjects = data?.data;
  return (
    <div>
      <div className=" lg:my-10 px-1" style={{ overflow: "hidden" }}>
        <h1 className="text-text1 text-5xl my-5 font-bold font-serif ">
            
          My Projects ,
        </h1>
        <p className="font-normal lg:text-xl mt-2 sm:text-lg  mb-8">
            
          There are some my projects those I created recently. <br />
          You can explore my projects click by live  
        </p>
        {allProjects?.length < 1 && <h2>Loading .......</h2>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {allProjects?.map((project: any) => {
            // console.log(project);
            return (
              <div
                className="shadow-2xl p-2 "
                key={project?.name}
              
              >
          
                  <Image
                    src={project?.img}
                    // width={"250px"}
                    className="h-[25rem] w-[24rem]  mx-auto rounded-lg"
                    alt=""
                  />
          
                <h1 className="text-3xl font-bold  text-center mt-2 text-text1 font-serif">
                  {project?.name}
                </h1>
                <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                  <a
                    className="text-xl font-semibold font-mono bg-primary  py-1 px-3  rounded-lg text-slate-200  hover:bg-slate-300 shadow-xl   hover:text-primary  transition duration-500 ease-in-out cursor-alias"
                    href={project?.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                      
                    Live site  
                  </a>
                  <a
                    className="text-xl font-semibold font-mono bg-primary py-1 px-3  rounded-lg hover:text-primary text-slate-200 hover:bg-slate-300 shadow-xl  transition duration-500 ease-in-out cursor-alias"
                    href={project?.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                      
                    Github  
                  </a>
                </div>
                <button className="w-full my-5 py-4 bg-slate-300 font-bold text-[1.3rem]  hover:bg-  hover:text-w  rounded-tl-[100%] rounded-tr-[2%] rounded-bl-[2%] rounded-br-[100%] cursor-help">
                  Details
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center text-[1rem] font-[500] bg-primary rounded text-text1 px-3 py-3  w-[90%]   mt-2 rounded-br-[50%] rounded-bl-[50%] mx-auto cursor-pointer ">
          See All
        </div>
      </div>
    </div>
  );
};

export default Projects;
