"use client";

import { Image, Rate } from "antd";

type Testimonial = {
  name: string;
  img: string; // Replace with actual image URL
  rating: number;
  details: string;
  time: string;
};
type TestimonialSlideProps = {
  testimonial: Testimonial;
};

const TestimonialSlide: React.FC<TestimonialSlideProps> = ({ testimonial }) => {
  return (
    <div className="keen-slider__slide mt- bg-blue-300 ">
      <div className=" bg-slate-500 text-black">
        <div className="w-[16rem] h-[14rem] bg-secondary p-4 mx-auto ">
          <Image
            alt="profile"
            src={testimonial?.img}
            className="min-w-[16rem] min-h-[14rem]"
          />
        </div>

        <div className="px-8 pb-2 pt-5 bg-secondary rounded-lg shadow ">
          <div className="text-center">
            <p className="text-[1.6rem] mt-3 text-white font-semibold">{testimonial?.name}</p>
            <p className="text-[1em] font-mono text-slate-500 ">{testimonial?.time}</p>
            <p className="py-4 mx-auto font-light text-slate-400 text-md w-60 ">
             {testimonial?.details}
            </p>
          </div>
          <div className="flex items-center justify-between w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200">
            <Rate count={5} defaultValue={testimonial?.rating} disabled />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide;
