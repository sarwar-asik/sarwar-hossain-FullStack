import React, { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import TestimonialSlide from './TestomonialSlide';

type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};


const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  let keenSlider = new KeenSlider('#keen-slider', {
    loop: true,
    slides: {
      origin: 'center',
      perView: 1.25,
      spacing: 16,
    },
   
    breakpoints: {
      '(min-width: 1024px)': {
        slides: {
          origin: 'center', // Adjust as needed
          perView: 1.5,     // Adjust as needed
          spacing: 32,      // Adjust as needed
        },
      },
    },
  });

  // let keenSlider: KeenSlider | undefined;

  const handlePreviousClick = () => {
    keenSlider?.prev();
  };

  const handleNextClick = () => {
    keenSlider?.next();
  };

  useEffect(() => {
    keenSlider 
  }, [handleNextClick,handlePreviousClick]);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don t just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis
              illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                onClick={handlePreviousClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                aria-label="Next slide"

                id="keen-slider-next-desktop"
                onClick={handleNextClick}
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
              >
                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              {testimonials.map((testimonial) => (
                <TestimonialSlide key={testimonial.id} testimonial={testimonial}  />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
        <button
        onClick={handlePreviousClick}
        aria-label="Previous slide"
        id="keen-slider-previous-desktop"
        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-5 w-5 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={handleNextClick}
        aria-label="Next slide"
        id="keen-slider-next-desktop"
        className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
      >
        <svg
          className="h-5 w-5 rtl:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </button>
        </div>
      </div>
    </section>
  );
};


export default TestimonialsSection