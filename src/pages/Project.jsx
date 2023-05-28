import React from "react";
import useGetData from "../hooks/useGetData";
import Loader from "../shared/Loader";

const Project = () => {
    const [data] = useGetData(
      `https://sarwar-hossain-server.vercel.app/projectDetail`
    );
    // console.log(data);



    const allProjects = data;


    console.log(window.screenY,"from windossss");

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
            <div className="shadow-2xl p-2 ">
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
                  className="text-xl font-semibold font-mono bg-primary  py-1 px-3  rounded-lg text-slate-200  hover:bg-slate-300 shadow-xl   hover:text-primary  transition duration-500 ease-in-out"
                  href={project?.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Live site{" "}
                </a>
                <a
                  className="text-xl font-semibold font-mono bg-primary py-1 px-3  rounded-lg hover:text-primary text-slate-200 hover:bg-slate-300 shadow-xl  transition duration-500 ease-in-out"
                  href={project?.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Github{" "}
                </a>
              </div>
              <button
                onClick={() => handleClick(project)}
                className="w-full my-5 py-3 bg-slate-300 font-bold text-2xl  hover:bg-  hover:text-w"
              >
                Details
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
