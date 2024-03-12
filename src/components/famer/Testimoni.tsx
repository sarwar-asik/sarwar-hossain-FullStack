import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import TestimonialSlide from "./TestomonialSlide";

type Testimonial = {
  name: string;
  img: string; // Replace with actual image URL
  rating: number;
  details: string;
  time: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
}) => {
  const [keenSlider, setKeenSlider] = useState<any | null>(null);

  const handlePreviousClick = () => {
    keenSlider?.prev();
  };

  const handleNextClick = () => {
    keenSlider?.next();
  };

  useEffect(() => {
    if (!keenSlider) {
      const slider = new KeenSlider("#keen-slider", {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      });
      setKeenSlider(slider);
    }
  }, [keenSlider]);

  return (
    <section className="bg-sec text-white ">
      <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-[3rem] xl:py-24 bg-red-20 ml-">
        <div className="grid grid-cols-1 gap-8  lg:grid-cols-3 lg:items-center lg:gap-16 lg:mt- min-h-screen">
          <div className="max-w-lg text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-[2rem] font-bold tracking-tight sm:text-4xl">
              How is the client satisfying ?
            </h2>

            <p className="mt-4 text-slate-400">
              After servicing my best support my client have given the
              testimonial
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4 lg:pl-2">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                onClick={handlePreviousClick}
                className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                onClick={handleNextClick}
                className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className=" lg:col-span-2 lg:mx-0  min-h-full">
            <div id="keen-slider" className="keen-slider">
              {testimonials.map((testimonial) => (
                <TestimonialSlide
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            onClick={handlePreviousClick}
            aria-label="Previous slide"
            id="keen-slider-previous-desktop"
            className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={handleNextClick}
            aria-label="Next slide"
            id="keen-slider-next-desktop"
            className="rounded-full border border-secondary p-3 text-secondary transition hover:bg-secondary hover:text-white"
          >
            <svg
              className="h-5 w-5 rtl:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
