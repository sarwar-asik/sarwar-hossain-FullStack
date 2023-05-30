import React from "react";
import useGetData from "../hooks/useGetData";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";

const Project = () => {
    const [data] = useGetData(
      `https://sarwar-hossain-server.vercel.app/projectDetail`
    );
    // console.log(data);


    const navigate = useNavigate()


    const allProjects = data;



  //   console.log(data, "from data");
  return (
    <div className=" my-10 w-[95%] mx-auto" style={{ overflow: "hidden" }}>
      <h1 className="text-text1 text-5xl my-5 font-bold font-serif "> My Projects ,</h1>
      <p className="font-normal lg:text-xl mt-2 sm:text-lg text-slate-500 mb-8">
        {" "}
        There are some my projects those I created recently. <br />
        You can explore my projects click by live{" "}
      </p>
      {
        allProjects.length<1 &&
        <Loader/>
      }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {allProjects?.map((project) => {
          // console.log(project);
          return (
            <div className="shadow-2xl p-2 " key={project?.name}>
              <figure className="">
                <img
                  src={project?.img}
                  className="h-[32rem]  w-full mx-auto rounded-lg"
                  alt=""
                />
              </figure>
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
                  {" "}
                  Live site{" "}
                </a>
                <a
                  className="text-xl font-semibold font-mono bg-primary py-1 px-3  rounded-lg hover:text-primary text-slate-200 hover:bg-slate-300 shadow-xl  transition duration-500 ease-in-out cursor-alias"
                  href={project?.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
              <button
                onClick={() => navigate(`/projectsDetails/${project?.name}`,{state:project})}
                className="w-full my-5 py-4 bg-slate-300 font-bold text-[1.3rem]  hover:bg-  hover:text-w  rounded-tl-[100%] rounded-tr-[2%] rounded-bl-[2%] rounded-br-[100%] cursor-help"
              >
                Details
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center text-[1rem] font-[500] bg-primary rounded text-text1 px-3 py-3  w-[90%]   mt-2 rounded-br-[50%] rounded-bl-[50%] mx-auto cursor-pointer ">See All</div>
    </div>
  );
};

export default Project;
