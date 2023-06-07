import React from "react";
import feature1 from "../assets/fetures/feature1.png";
import feature2 from "../assets/fetures/feature2.png";
import feature3 from "../assets/fetures/feature3.png";
import feature4 from "../assets/fetures/feature2.png";

const Features = () => {
  const features = [
    {
      no: 1,
      name: "Business Site",
      img: feature1,
      detail: "I Develop Business Web site with CSS and CSS Framework ",
      color: "#a2d9ff",
    },
    {
      no: 2,
      name: "Personal Portfolio",
      img: feature2,
      detail: " Backend Development service is best  provided by me .",
      color: "#ED3833",
    },
    {
      no: 3,
      name: "Management Website",
      img: feature3,
      detail: "I have some created Management Website projects these are ready to sell .",
      color: "#F6B443",
    },
    {
      no: 2,
      name: "Company site",
      img: feature4,
      detail: "Developed Company site Also service is best  provided by me .",
      color: "#ED3833",
    }
  ];
  return (
    <div className="lg:my-8 px-[15px] ">
      <header className="text-center ">
        <h6 className="text-text1 text-4xl font-bold font-serif ">
          {" "}
          My Services
        </h6>
        <h4 className="text-text1 text-xl font-semibold font-mono">
          Best Client or Company Support
        </h4>

        <p className="text-text2 font-normal text-[0.9rem] mt-2   mb-8">
          I try to best service to Client or buyer for them satisfied . <br />
          My every projects is implement by my Skills
        </p>
      </header>
      <main className="my-4 grid grid-cols-1 gap-[36px] md:grid-cols-2 lg:grid-cols-2  ">
        {features?.map((feature) => {
          const { name, img, detail, color } = feature;
          return (
            <div
              className={`text-start mt-4 bg-slate-300  rounded-tr-[16%] rounded-r  shadow-2xl px-7 py-10 relative `}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={name}
            >
              {/* <figure className="bg-slate-300 rounded-xl py-3 h-[100px] pl-2">
            </figure> */}
             <aside className="flex gap-12">
             <img
                src={img}
                className="h-[90px] px-3 w-[100px] -mt-[5rem] bg-primary rounded
                translate-x-0 transition duration-1000 ease-in-out hover:translate-x-10"
                alt=""
              />
              <span className="-mt-3 text-primary font-serif">{name}</span>
             </aside>

              <p className="font-normal text-[0.8em] font-mono mt-2 text-slate-600 mb-2 ">
                {detail} Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
                {/* <h1 className="font-semibold mt-5 font-serif text-[1.4em]">{name}</h1> */}
                {/* {detail} <br /> Regularly I work with {name} <br /> */}
              </p>
              <h6 className="text-slate-500 text-[0.6em]"> See more ...</h6>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Features;
