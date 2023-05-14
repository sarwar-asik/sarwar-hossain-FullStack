import React from "react";
import feature1 from "../assets/fetures/feature1.png";
import feature2 from "../assets/fetures/feature2.png";
import feature3 from "../assets/fetures/feature3.png";

const Features = () => {
  const features = [
    {
      no: 1,
      name: "Web Designing",
      img: feature1,
      detail: "I Design Web site with CSS and CSS Framework  ",
      color: "#a2d9ff",
    },
    {
      no: 2,
      name: "Web Developing",
      img: feature2,
      detail: " Web Developing service is best  provided by me .",
      color: "#ED3833",
    },
    {
      no: 3,
      name: "Sell Web site",
      img: feature3,
      detail: "I have some created projects these are ready to sell .",
      color: "#F6B443",
    },
  ];
  return (
    <div className="my-8 px-[15px]">
      <header className="text-center">
        <h6 className="text-4xl font-bold font-serif "> My Services</h6>
        <h4 className="text-xl font-semibold font-mono">
          Best Client or Company Support
        </h4>

        <p className="font-normal lg:text-xl mt-2 sm:text-lg text-slate-500 mb-8">
          I try to best service to Client or buyer for them satisfied . <br />
          My every projects is impleament by my Skills
        </p>
      </header>
      <main className="my-4 grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3 mt-4 mb-5">
        {features.map((feature) => {
          const { name, img, detail, color } = feature;

          return (
            <div class="card text-start   shadow-2xl px-4 py-5 relative">
              <figures
                className={` h-[100px] w-[100px] text-center p-6 rounded-[10%] my-2`}
                style={{ backgroundColor: `${color}` }}
              >
                <img class="h-[70px] w-[70px]" src={img} alt="Title" />
              </figures>
              <h1 className="font-semibold mt-5 font-serif lg:text-4xl sm:text-2xl">{name}</h1>
              <p className="font-normal lg:text-xl mt-2 sm:text-sm text-slate-500 mb-2 ">
                {detail} <br /> Regularly I work with {name} <br />
              </p>
              <h6 className="text-slate-700"> See more ...</h6>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Features;
