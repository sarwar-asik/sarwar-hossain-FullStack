import React from "react";

import banner from "@/assets/professionalRemoveBg.png";

import {
  FacebookFilled,
  FacebookOutlined,
  GithubFilled,
  LinkedinFilled,
  LinkedinOutlined,
  TwitterCircleFilled,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const HeaderPage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center">
      <section className="text-center space-y-4">
        <h2 className="text-[3rem] font-[900]">
          Hi, I am Sarwar Hossain {"<  />"}
        </h2>
        <p className=" text-slate-500 text-[1.1rem] ">
          I am full stack web developer. I have Experience in Developing
          Websites, Web Applications .
          <br />
          Have been worked both Frontend and Backend Api integration .
        </p>

        <div className="py-3 flex gap-5 justify-center bg-red-40">
          <Link
            href="https://www.facebook.com/profile.php?id=100087624802395"
            target="_blank"
            className="no-underline "
          >
            <FacebookFilled className="text-[2.8rem] text-slate-500 bg-white " />
          </Link>
          <Link
            href="www.linkedin.com/in/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <LinkedinFilled className="text-[2.8rem] text-slate-500 bg-white " />
          </Link>
          <Link
            href="https://github.com/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <GithubFilled className="text-[2.8rem] text-slate-500 bg-white rounded-full" />
          </Link>
          <Link
            href="www.linkedin.com/in/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <TwitterCircleFilled className="text-[2.8rem] text-slate-500 bg-white rounded-full" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
