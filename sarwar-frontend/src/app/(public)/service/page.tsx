"use client";
import React from "react";

import Image from "next/image";
import "./service.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import webImg from "@/assets/services/web-Developer.jpg";
import frontendImg from "@/assets/services/frontend.jpg";
import backendImg from "@/assets/services/backend.jpg";
import databaseImg from "@/assets/services/database.jpg";
import eCommerceImg from "@/assets/services/e-commerce.jpg";
import mobileImg from "@/assets/services/mobile_friendly.jpg";
import webSecurityImg from "@/assets/services/web_security.jpg";
import ParticlesBg from "@/v2Components/UI/Particles";
import { optionParticlesService } from "@/v2Components/const/particles/optionParticlesService";
import { optionParticlesHeader } from "@/v2Components/const/particles/optionParticlesHeader";

const About = () => {
  const carousel: KeenSliderPlugin = (slider) => {
    const z = 300;
    function rotate() {
      const deg = 360 * slider.track.details.progress;
      slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
    }
    slider.on("created", () => {
      const deg = 360 / slider.slides.length;
      slider.slides.forEach((element, idx) => {
        element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
      });
      rotate();
    });
    slider.on("detailsChanged", rotate);
  };

  const [sliderRef] = useKeenSlider<any>(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );

  const servicesData = [
    {
      id: 1,
      name: "Web Application Development",
      img: webImg,
      details:
        "Building custom web applications tailored to your specific business needs using the latest web technologies and frameworks.",
    },
    {
      id: 2,
      name: "Frontend Development",
      img: frontendImg,
      details:
        "Creating responsive and user-friendly user interfaces with HTML, CSS, and JavaScript, ensuring an exceptional user experience.",
    },
    {
      id: 3,
      name: "Backend Development",
      img: backendImg,
      details:
        "Developing server-side applications and APIs, handling data storage, user authentication, and ensuring the security of your web services.",
    },
    {
      id: 4,
      name: "Database Design and Management",
      img: databaseImg,
      details:
        "Designing efficient and scalable database systems, optimizing queries, and managing your data using SQL and NoSQL databases.",
    },
    {
      id: 5,
      name: "Mobile-Friendly Websites",
      img: mobileImg,
      details:
        "Adapting your web applications to be mobile-friendly, ensuring they work seamlessly on various devices and screen sizes.",
    },
    {
      id: 6,
      name: "E-commerce Solutions",
      img: eCommerceImg,
      details:
        "Creating online shopping platforms with secure payment gateways, product catalog management, and order processing.",
    },
    {
      id: 7,
      name: "Web Security and Testing",
      img: webSecurityImg,
      details:
        "Implementing security measures, performing regular testing, and ensuring protection against common web vulnerabilities.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
        {/* <ParticlesBg option={optionParticlesService} /> */}
      <section className="z-40 relative">

        {/* <ParticlesBg option={optionParticlesHeader} /> */}
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white mt-5">
          My Services [spine the cards 👇🏾]
        </h1>
        <p className="font-normal  mt-2 text-[1em] text-center text-slate-400 mb-2">
          There are some my services those I am expertise. <br />
          You can connect with to get the best.
        </p>
        <div className="wrapper bg-red- z-10">
          <div className="scene bg-blue-">
            <div className="carousel keen-slider bg-red-" ref={sliderRef}>
              {servicesData?.map((item: any, i: number) => {
                return (
                  <div key={i + 1} className={`carousel__cell number-slide1`}>
                    <div className="flex  p-6 w-full bg-gray-200 shadow-lg rounded-lg overflow-hidden mx-auto">
                      <div
                        className="relative flex flex-col items-center justify-around p-4 mr-4 w-[28rem] h-[25rem] rounded-2xl "
                        style={{ transform: "translate(0px, 0px)", opacity: 1 }}
                      >
                        <div
                          className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl -rotate-2 "
                          style={{ zIndex: -1 }}
                        ></div>
                        <div
                          className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-primary rounded-xl rotate-2 "
                          style={{ zIndex: -1 }}
                        ></div>
                        <div
                          className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white rounded-xl "
                          style={{ zIndex: -1 }}
                        ></div>
                        <h3 className="z-10 p-2 text-2xl mt-2 font-semibold text-primary">
                          {item?.name}
                        </h3>
                        <div className="z-10 p-2 text-primary">
                          <Image
                            height={96}
                            width={96}
                            src={item?.img}
                            alt="service-img"
                          />
                        </div>
                        <div className="z-10 p-2 text-sm text-center text-gray-500">
                          {item?.details}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
