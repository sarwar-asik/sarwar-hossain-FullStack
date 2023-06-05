import React from "react";
import hero2 from "../assets/main/hero2.png";

const Banner2 = () => {
  const data = [
    {
      name: "Frontend Development",
      details: "",
    },
    {
        name: "Backend Service",
        details: "",
    },
    {
        name: "MERN Stack Developing",
      details: "",
    },
  ];
  return (
    <div className="block lg:flex items-center gap-5 my-5 px-2 rounded-b-full"
    data-aos="fade-up"
    data-aos-anchor-placement="center-bottom"
    data-aos-duration="1500"
    >
      <section className="lg:w-[45%]">
        <img src={hero2} className="lg:h-[32rem] rounded-r-[1%]" alt="" />
      </section>
      <section className="lg:w-[65%] mt-5">
        <h2 className="text-[2.5rem] text-text1 font-bold font-serif">
          {" "}
          Development Categories
        </h2>
        <p className="font-normal text-[1rem] mt-2  text-text2 mb-8">
          On this Modern world I am trying to update myself to the update world
          . As a educated person my profession is connect with digital
          technology .
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 text-slate-700  px-2">
          {data?.map((item) => (
            <button
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="2000"
              key={item?.name}
              className="bg-primary text-text1 shadow-2xl px-2 py-4 rounded-br-[100%] rounded-bl-[100%] font-mono"
            >
              {item?.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner2;
