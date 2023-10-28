import React from "react";
import banner from "@/assets/professionalRemoveBg.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-secondar   px- text-white flex flex-col justify-center items-center">
      <div className="block lg:flex   gap-5 items-center px-1  lg:mt-[11rem] ">
        <section className="w-full lg:w-[55%] mx-auto  pl-5 space-y-3">
          <h2 className="text-[2.3rem] font-semibold">Who am I?</h2>
          <p className="text-[1.2rem] text-slate-500">
            I am Sarwar Hossain, a full-stack web developer with experience in
            developing websites, web applications both frontend and backend
            development.
          </p>
          <div className="mt-10">
            <h3 className="text-[1.1rem] font-[500] my-4">Details:</h3>
            <ul className="mt-2 list-disc list-inside space-y-3">
              <li>
                <strong>Full Name:</strong> Sarwar Hossain
              </li>
              <li>
                <strong>Age:</strong> 24 Years
              </li>
              <li>
                <strong>Nationality:</strong> BanglaDesh
              </li>
              <li>
                <strong>Languages:</strong> English, Bangla
              </li>
              <li>
                <strong>Address:</strong> Chattagram , Bangladesh
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
            </ul>
          </div>
        </section>
        <section className="w-full lg:w-[45%] mx-auto ">
          <Image
            //   height={300}
            //   width={300}
            src={banner} // Add your image source
            alt="Sarwar Smith"
            className="w-[100%]"
          />
        </section>
      </div>
    </div>
  );
};

export default About;
