import React from "react";
import Link from "next/link";
import { GithubFilled, LinkOutlined } from "@ant-design/icons";

const Projects = async () => {
  const res = await fetch("https://sarwarserver.vercel.app/api/v2/projects", {
    cache: "no-cache",
  });
  const data = await res.json();
  //   console.log(data);
  const allProjects = data?.data;
  // console.log(allProjects,"p");
  return (
    <div>
      <div className="px-1 bg-secondary text-white">
        {allProjects?.length < 1 && <h2>Loading .......</h2>}

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              My Portfolio
            </h1>
            <p className="font-normal  mt-2 text-[1em] text-center text-slate-500 mb-8">
              There are some my projects those I created recently. <br />
              You can explore my projects click by live
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2  gap mt-8 lg:grid-cols-3">
              {allProjects?.map((item: any, i: number) => {
                // console.log(item);
                const { img, name, time, source, live } = item;
                return (
                  <div
                    key={i}
                    className="overflow-hidden bg-cover rounded-lg cursor-pointer mx-auto h-[20rem] w-full lg:w-[22rem] group mt-3"
                    style={{
                      backgroundImage: `url(${img})`,
                      // width:"28rem",
                    }}
                  >
                    <div className="w-full px-8 py-4 overflow-hidden  backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                      <h2 className="mt-4 text-[2rem] font-semibold text-gray-800 capitalize dark:text-white">
                        {name}
                      </h2>
                      <p className="mt-2 text-[0.6rem] tracking-wider text-slate-100 uppercase ">
                        created : {time}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 px-3  items-center  w-full h-full  py-2 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                      <div className="bg-red- flex gap-5  justify-around items-center w-full mx-auto mt-5">
                        <Link
                          className="text-blue-300 font-mono "
                          href={live}
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          <LinkOutlined className="text-2xl font-bold" />
                        </Link>
                        <Link
                          className="text-blue-300 font-mono "
                          href={source}
                          target="_blank"
                        >
                          <GithubFilled className="text-2xl font-bold" />
                        </Link>
                      </div>
                      <Link
                        href={`/projects/${item?._id}`}
                        className="no-underline text-xl mt-12 text-white  font-bold bg-slate-600 p-2  rounded-md"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
