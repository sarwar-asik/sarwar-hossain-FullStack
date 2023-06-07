import React from "react";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import fb from "../assets/icon/fbIcon.png";
import linkedIn from "../assets/icon/LinkedINIcon.png";
import twitter from "../assets/icon/Twiiter.png";

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("sent your message");
    if (data) {
      reset();
    }
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12 block lg:flex justify-between shadow border-2 my-5 border-separate border-primary"
    data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1200"
    
    >
      <section>
        <h3 className=" text-text1 text-[2em] font-bold font-serif">
          {" "}
          Reach Me,{" "}
        </h3>
        <p className="text-text2 text-[16px] font-mono mt-2 mb-3">
          You can contact with me for any query about me . With my Social media{" "}
          and Contact form . I am glad to your to your message
        </p>
        <div className="flex gap-5">
          <a
            href="https://web.facebook.com/people/Sarwar-Asik/pfbid02sgLP9m9SYR6PCtejfmX5uE8pA55pGXmRpnmmX7boQwMi78Xmdt2VTt1sMNL4wMGMl/"
            target="_blanck"
          >
            <img
              className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
              src={fb}
              alt="facebook"
            />
          </a>
          <a
            href="https://bd.linkedin.com/in/sarwar-hossain-a29660257"
            target="_blanck"
          >
            <img
              className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
              src={linkedIn}
              alt="linkedIn"
            />
          </a>
          <a href="https://twitter.com/sarwar_asik">
            <img
              className="rounded-[7px] h-[30px] w-[30px] shadow-2xl"
              src={twitter}
              alt="Twitter"
            />
          </a>
        </div>
      </section>
      <section className="py-3 lg:px-[40px] lg:w-[80%] ">
        <h1 className="mb-3 lg:mt-1 mt-4 text-[2rem] font-bold font-serif text-primary ">
          Send Message
        </h1>
        <form
          className="font-serif"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="text-text1">
            <label htmlFor="" className=" my-2 ">
              Type Your Gmail
            </label>
            <input
              type="email"
              {...register("email")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
              placeholder="Your gmail"
            />
          </div>
          <div className=""></div>
          <div className="mt-5 text-text1">
            <label htmlFor="" className=" my-2 ">
              Your Message
            </label>
            <textarea
              type="email"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("message")}
              required
              placeholder="Your Message"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-primary lg:px-5 px-3 py-2 text-[18px] rounded text-white font-bold "
              value="Send Message"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
