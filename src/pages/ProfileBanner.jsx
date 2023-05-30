import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import profile from "../assets/fetures/professionalimg-removebg-preview.png";
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
      className="block lg:flex items-center justify-between  banner lg:mt-[7rem] pl-7 text-text1 pt-2 rounded-lg lg:rounded-tl-[36%]"
      style={{ backgroundImage:`url(${bgImage})`}}
    >
      <section className="lg:w-[%] mx-auto sm:w-full pt-3 pl-1">
        <h1 className="text-[3rem] font-bold font-serif "> Sarwar Hossain </h1>
        <h3 className="h-14 text-[22px] mt-3 font-semibold font-sans">{text1}</h3>
        <p className="text-text2 font-[300] lg:text-xl mt-2 sm:text-lg font-mono mb-8 ">
          I am a Front-end Developer working with <br /> passionate . My goal is
          achieve success by <br />
          Hard working .
        </p>
        <a
          href="https://drive.google.com/file/d/1j1D-pT8J5klHsF-SeSOyD1DkUF45kg0T/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="bg-slate-300 text-primary py-3 px-2 my-5 rounded-lg font-bold text-slate-7 hover:bg-[#4E6E81] hover:text-white shadow-inner  transition duration-500 ease-in-out"
        >
            My Resume
        </a>
      </section>
      <section className="w-full mx-auto bg-red-40 lg:-mt-[7.5rem]">
        <img src={profile} className="lg:w-[520px] sm:w-[90%] ml-auto h-[520px] rounded-t-[30%]" alt="" />
      </section>
    </div>
  );
};

export default ProfileBanner;
