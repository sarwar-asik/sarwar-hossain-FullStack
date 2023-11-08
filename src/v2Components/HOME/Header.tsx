"use client";
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
import ParticlesBg from "../UI/Particles";
import { optionParticlesHeader } from "../const/particles/optionParticlesHeader";


const HeaderPage = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center">
      <section className="text-center space-y-4 z-10">
        <ParticlesBg option={optionParticlesHeader} />
        <h2 style={{ marginBottom: "0.75rem", fontSize: "3rem" }}>
          Hi, I am Sarwar Hossain {"<  />"}
        </h2>
        <p style={{ marginBottom: "0.75rem", fontSize: "1.2rem" }}>
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
            <FacebookFilled
              // className="text-[2.8rem] text-slate-500 bg-white "
              style={{
                fontSize: "2.8rem",
                color: "rgb(100 116 139)",
                background: "white",
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <LinkedinFilled
              // className="text-[2.8rem] text-slate-500 bg-white "
              style={{
                fontSize: "2.8rem",
                color: "rgb(100 116 139)",
                background: "white",
              }}
            />
          </Link>
          <Link
            href="https://github.com/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <GithubFilled
              // className="text-[2.8rem] text-slate-500 bg-white "
              style={{
                fontSize: "2.8rem",
                color: "rgb(100 116 139)",
                background: "white",
              }}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sarwar-asik"
            target="_blank"
            className="no-underline "
          >
            <TwitterCircleFilled
              // className="text-[2.8rem] text-slate-500 bg-white "
              style={{
                fontSize: "2.8rem",
                color: "rgb(100 116 139)",
                background: "white",
              }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
