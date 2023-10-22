import React from "react";
import hero2 from "@/assets/hero2.png";
import Image from "next/image";
// import { Image } from "antd";

const Stack = () => {
  // console.log(hero2);
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
    <div className="block lg:flex items-cente gap-5 my-5 px-2 rounded-b-full">
      <section className="lg:w-[45%]">
        <Image
          height={250}
          width={200}
          src={hero2}
          className="lg:h-[32rem] rounded-r-[1%] w-full"
          alt=""
        />
      </section>
      <section className="lg:w-[65%] ">
        <h2 className="text-[2.5rem]  font-bold font-serif">
          Development Categories
        </h2>
        <p className="font-normal text-[1rem] mt-2  text-text2 mb-8">
          On this Modern world I am trying to update myself to the update world
          . As a educated person my profession is connect with digital
          technology .
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10   px-2">
          {data?.map((item) => (
            <button
              key={item?.name}
              className="shadow-2xl px-2 py-4 rounded-br-[100%] rounded-bl-[100%] font-mono"
            >
              {item?.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stack;
