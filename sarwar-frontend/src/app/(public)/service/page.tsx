"use client";
import React from "react";
import banner from "@/assets/professionalRemoveBg.png";
import Image from "next/image";
import "./service.css";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

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
      img: "https://example.com/web-development-image.jpg",
      details:
        "Building custom web applications tailored to your specific business needs using the latest web technologies and frameworks.",
    },
    {
      id: 2,
      name: "Frontend Development",
      img: "https://example.com/frontend-development-image.jpg",
      details:
        "Creating responsive and user-friendly user interfaces with HTML, CSS, and JavaScript, ensuring an exceptional user experience.",
    },
    {
      id: 3,
      name: "Backend Development",
      img: "https://example.com/backend-development-image.jpg",
      details:
        "Developing server-side applications and APIs, handling data storage, user authentication, and ensuring the security of your web services.",
    },
    {
      id: 4,
      name: "Database Design and Management",
      img: "https://example.com/database-design-image.jpg",
      details:
        "Designing efficient and scalable database systems, optimizing queries, and managing your data using SQL and NoSQL databases.",
    },
    {
      id: 5,
      name: "Mobile-Friendly Websites",
      img: "https://example.com/mobile-website-image.jpg",
      details:
        "Adapting your web applications to be mobile-friendly, ensuring they work seamlessly on various devices and screen sizes.",
    },
    {
      id: 6,
      name: "E-commerce Solutions",
      img: "https://example.com/ecommerce-solutions-image.jpg",
      details:
        "Creating online shopping platforms with secure payment gateways, product catalog management, and order processing.",
    },
    {
      id: 7,
      name: "Web Security and Testing",
      img: "https://example.com/web-security-image.jpg",
      details:
        "Implementing security measures, performing regular testing, and ensuring protection against common web vulnerabilities.",
    },
  ];

  return (


    <div className="">
      {/* <h1>My Service </h1> */}
      <h2 className="text-center text-[2rem] px-3 mt-5">My Services </h2>
      <div className="wrapper ">
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
                          src={banner}
                          alt="service-1"
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
    </div>
  );
};

export default About;
