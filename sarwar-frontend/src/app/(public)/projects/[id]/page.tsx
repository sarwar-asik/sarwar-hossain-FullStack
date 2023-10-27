import React from "react";

const ProjectDetailsPage = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  console.log(id);

  const response = await fetch(
    `https://sarwarserver.vercel.app/api/v2/projects/${id}`
  );
  const { data } = await response.json();
  console.log(data);
  const { name, time, tech, live, source, img, photo } = data;

  //   console.log(photo);
  const img1 = photo[0];
  //   console.log(img1,"asdf");

  return (
    <div className="text-white">
      <div className="">
        <h1 className="py-6 px-4 text-white text-center bg-primary font-bold text-[1.3rem]  hover:bg-  hover:text-w   ">
          {name}
        </h1>
      </div>
      <section
        className={`min-h-[80vh] bg-[url("https://img.freepik.com/free-photo/project-management-planning-development-message-box-notification-graphic_53876-120467.jpg?w=1060&t=st=1686119131~exp=1686119731~hmac=c973ecba66e2d56aa929e358ee16f9a4f84f1525c0b3332ef59ffa690cd2aacb")] flex justify-center items-center  bg-no-repeat bg-cover bg-fixed`}
        
      ></section>

      <div className="my-3 text-center py-3">
        <h2 className="text-text1 font-serif">Project Name : {name}</h2>
        <p className="text-text2 ">
          Created :<span className="font-mono"> {time}</span>
        </p>
      </div>

      {/*  */}

      <section
        className={`min-h-[60vh] flex justify-center items-center bg-[url(https://img.freepik.com/free-photo/blue-print-with-laptop-copy-space_23-2148393177.jpg?w=996&t=st=1686119252~exp=1686119852~hmac=655cc15af1cc48788af1e8c0abf7ca96a924fe78f7417f176d186705873ad00b)] bg-no-repeat bg-cover bg-fixed mt-3`}
      ></section>
    </div>
  );
};

export default ProjectDetailsPage;
