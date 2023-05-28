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
    <div className="my-8 px-[15px] ">
      <header className="text-center">
        <h6 className="text-text1 text-4xl font-bold font-serif "> My Services</h6>
        <h4 className="text-text1 text-xl font-semibold font-mono">
          Best Client or Company Support
        </h4>

        <p className="text-text2 font-normal lg:text-xl mt-2 sm:text-lg  mb-8">
          I try to best service to Client or buyer for them satisfied . <br />
          My every projects is implement by my Skills
        </p>
      </header>
      <main className="my-4 grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3 mt-4 mb-5">
        {features?.map((feature) => {
          const { name, img, detail, color } = feature;

          return (
            <div
              className={`text-start  bg-slate-300 rounded-md  shadow-2xl px-4 py-5 relative `}
              key={name}
            >
              {/* <figure className="bg-slate-300 rounded-xl py-3 h-[100px] pl-2">
            </figure> */}
              <img
                src={img}
                className="h-[100px] px-3 w-[120px] float-left"
                alt=""
              />
              <p className="font-normal text-[1em] font-mono mt-2 text-slate-600 mb-2 px-2">
                {detail} Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Alias atque magnam nostrum corrupti ex facilis quae
                repellendus repudiandae blanditiis numquam!
                {/* <h1 className="font-semibold mt-5 font-serif text-[1.4em]">{name}</h1> */}
                {/* {detail} <br /> Regularly I work with {name} <br /> */}
              </p>
              <h6 className="text-slate-400 "> See more ...</h6>
            </div>
          );
        })}


      </main>
 

    </div>
  );
};

export default Features;
