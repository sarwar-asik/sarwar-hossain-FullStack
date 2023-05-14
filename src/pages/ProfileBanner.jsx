import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profile from "../assets/main/professional-removebg-preview.png";
import bgImage from "../assets/main/bg1.svg";
import "../pages/pages.css"

const ProfileBanner = () => {
  const [text1] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Developer",
      "MERN Stack Developer",
      "React Developer",
    ],
    loop: 200,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div
      className="block lg:flex items-center justify-between  banner mt-4 pl-7 text-white pt-2 rounded-lg"
      style={{ backgroundImage:`url(${bgImage})`}}
    >
      <section className="lg:w-[%] mx-auto sm:w-full ">
        <h1 className="text-5xl font-bold font-serif "> Sarwar Hossain </h1>
        <h3 className="h-14 text-[22px] mt-3 font-semibold font-sans">{text1}</h3>
        <p className="font-[300] lg:text-xl mt-2 sm:text-lg font-mono mb-8">
          I am a Front-end Developer working with <br /> passionate . My goal is
          achieve success by <br />
          Hard working .
        </p>
        <a
          href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-[hsla(201,78%,33%,1)] text-white py-3 px-2 my-5 rounded-lg font-bold text-slate-7 hover:bg-[#4E6E81] hover:text-white"
        >
            My Resume
        </a>
      </section>
      <section className="w-full mx-auto">
        <img src={profile} className="lg:w-[520px] sm:[90%] ml-auto h-[500px]" alt="" />
      </section>
    </div>
  );
};

export default ProfileBanner;
