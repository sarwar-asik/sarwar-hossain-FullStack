import React from "react";

import banner from "@/assets/professionalRemoveBg.png";
import Image from "next/image";

const HeaderPage = () => {
  return (
    <div>
      <div className="bg-primary text-white py-10 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                Sarwar Hossain
              </h1>
              <p className="text-lg lg:text-xl mb-4">
                Full Stack Web Developer
              </p>
              <p className=" mb-8">
                {" "}
                I am a Full Stack Developer working with <br /> passionate . My
                goal is achieve success by <br />
                Hard working .
              </p>
              <a
                href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-primary  px-6 py-3 rounded-md text-lg  transition duration-300 ease-in-out "
              >
                Download Resume
              </a>
            </div>

            <div className="text-center">
              <Image
                width={300}
                height={300}
                src={banner}
                alt="Your Image"
                className="max-w-full mx-auto rounded-[30%] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
