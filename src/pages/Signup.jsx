import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/main/bg1.svg";
import useTitle from "../hooks/useTitle";
import gIcon from "../assets/icon/googleLogo.jpg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SignUp = () => {
  useTitle("SignUp");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast(` Sign up the ${data?.email}`)
  };

  return (
    <div className="relative  mx-auto mt-3">
      <img
        src={bgImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      {/* <p  className="bg-[#0e2a47] absolute inset-0 object-cover w-full h-full"></p> */}
      <div className="absolute inset-0 object-cover bg-primary w-full h-full"></div>
      <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
          className="absolute inset-x-0 bottom-0 text-white"
          viewBox="0 0 1160 163"
        >
          <path
            fill="currentColor"
            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
          />
        </svg>
        <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 f text-4xl font-bold font-serif tracking-tight text-white sm:text-4xl sm:leading-none">
                Sign Up <br /> To contact Me
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-[16px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
            </div>
            {/* start  form */}
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-4xl font-bold text-center sm:mb-6 sm:text-4xl">
                  Sign up
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      {...register("name")}
                      placeholder="John"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="name"
                      name="name"
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      E-mail
                    </label>
                    <input
                      {...register("email")}
                      placeholder="john.doe@example.org"
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="password"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      {...register("password")}
                      placeholder="john.doe@example.org"
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>

                  {/* {
                        isError && <span className="text-red-500 font-mono ">{error}</span>
                      } */}
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-400 bg-primary text-white hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                    >
                      Sign Up
                    </button>
                  </div>
                  <p className="text-xs font-[400] font-mono text-gray-600 sm:text-sm">
                    Already Sign Up ?
                    <Link to="/login"> Log in , please ....</Link>
                  </p>
                </form>
                <button
                  //   onClick={handleGoogleLogin}
                  className="bg-slate-200 mt-2 w-full  py-3 font-bold font-serif rounded flex justify-evenly items-center"
                >
                  <img
                    className="h-[36px] w-[70px] rounded-md "
                    src={gIcon}
                    alt=""
                  />
                  <span> Google Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
