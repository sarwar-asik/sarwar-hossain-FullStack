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
import "./header.css"


const HeaderPage = () => {
  const handleDownload = () => {
    const url = 'https://drive.google.com/uc?export=download&id=1VdC_Xs5PRx8cmZ05eruPrx4W0CInSBAd';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sarwarResume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="min-h-screen  flex flex-col justify-center">

      <section className="text-center space-y-4 z-10">
        {/* <ParticlesBg option={optionParticlesHeader} /> */}
        {/* /! card section */}
        {/* <div className="card duration-300 hover:-rotate-0 transform rotate-3d(1,-1,1,60deg) group border-sky-900 border-4 overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4 mx-auto">
          <div className="text-gray-50 bg-red-300">
            <span className="font-bold text-5xl">Junior</span>
            <p className="text-xs">Full Stack Developer</p>
          </div>
          <button onClick={handleDownload} className="duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
            Download CV
            <svg y="0" xmlns="http://www.w3.org/2000/svg" x="0" width="100" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" height="100" className="w-6 h-6 fill-current">
              <path fillRule="evenodd" d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"></path>
            </svg>
          </button>

          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-900"><path strokeWidth="5" strokeMiterlimit="10" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" data-name="layer1"></path></svg>

          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2 fill-gray-50 stroke-sky-700"><path strokeWidth="2" strokeMiterlimit="10" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" data-name="layer1"></path></svg>
        </div> */}

        <div className="card-container">
          <div className="title">
            <span className="font-bold">Fullstack</span>
          </div>
          <p className="subtitle">Web Developer</p>
          <button onClick={handleDownload} className="button">
            Dowload CV
            <svg className="icon icon-fill icon-stroke" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path data-name="layer1" d="M50.4 51 C40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path>
            </svg>
          </button>
          <svg className="icon group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>
          <svg className="icon group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>
        </div>
        {/* <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24px" width="24px"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / Download"> <path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#f1f1f1" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" id="Vector"></path> </g> </g></svg>
          Download
          <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
            Download
          </div>
        </button> */}

        <div className="mt-3">
          {/* </div> */}

          <h2 style={{ marginBottom: "0.75rem", fontSize: "3rem" }}>
            Hi, I am Sarwar Hossain {"<  />"}
          </h2>

          <p className="text-lg lg:text-xl font-mono">
            I am full stack web developer. I have Experience in Developing
            Websites, Web Applications .
            <br />
            Have been worked both Frontend and Backend Api integration .
          </p>


          <div className="socials-container mt-3">
            <Link target="_blank" href="https://www.linkedin.com/in/sarwar-asik" className="social linkedin">
              <LinkedinFilled
                // className="text-[2.8rem] text-slate-500 bg-white "
                style={{
                  fontSize: "2.8rem",
                  // color: "rgb(100 116 139)",
                  // background: "white",
                }}
              />
            </Link>

            <Link target="_blank" href="https://www.facebook.com/sarwarCoder" className="social facebook"
            ><svg height="1em" viewBox="0 0 320 512">
                <path
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path></svg></Link>

            <Link target="_blank" href="https://github.com/sarwar-asik" className="social google-plus">
              <GithubFilled
                // className="text-[2.8rem] text-slate-500 bg-white "
                style={{
                  fontSize: "2.8rem",
                  // color: "rgb(100 116 139)",
                  // background: "white",
                }}
              />
            </Link>

            <Link target="_blank" href="https://twitter.com/sarwar_asik" className="social instagram"
            >
              <TwitterCircleFilled
                // className="text-[2.8rem] text-slate-500 bg-white "
                style={{
                  fontSize: "2.8rem",

                }}
              />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HeaderPage;
