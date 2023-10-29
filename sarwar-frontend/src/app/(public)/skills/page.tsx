import React from "react";

const SkillsPage = () => {
  return (
    <div>
      {/* <div className="container">
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
          <div className="flex flex-row-reverse md:contents">
            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w- bg-blue-800 pointer-events-none">aaa</div>
              </div>
              <div className="w-[4rem] h-[4rem] absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow">bbb</div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                facilis.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>

          <div className="flex flex-row-reverse md:contents">
            <div className="bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quaerat?
              </p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-blue-800 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
            </div>
            <div className="bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md">
              <h3 className="font-semibold text-lg mb-1">Lorem ipsum</h3>
              <p className="leading-tight text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                facilis.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="max-w-[80%]   lg:max-w-[80%] px-12 lg:px-3 mx-auto bg-red overflow-hidden z-40">
        {/* Day- 1*/}
        <div className="bg-green- flex flex-no-wrap lg:flex-row flex-row-reverse  justify-center pt-10 ">
          {/* content */}
          <section className="w-full lg:w-2/5 flex-none p-2 bg-blue-">
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              React{" "}
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Next js{" "}
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Redux
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              CSS
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Ant Design
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Tailwind CSS
            </h3>
          </section>

          <div className="w-1/5 sm:1/3 flex-none float-left bg-red- ">
            <div className="bg-primary p-1 h-full w-1 mx-auto">
              
              <button className="h-24 w-24 mt-20 bg-primary hover:bg-slate-200 hover:text-black text-white font-bold rounded-full -ml-12">
                Frontend Skills
              </button>
            </div>
          </div>

          <div className="w-2/5 flex-none p-2  hidden lg:block"></div>
        </div>
        {/* Day- 2*/}
        <div className="flex flex-no-wrap sm:flex-row-reverse1  justify-center">
          <div className="w-2/5 sm:2/3 flex-none p-2 hidden lg:block"></div>

          <div className="w-1/5 sm:1/3 flex-none float-left">
            <div className="bg-primary p-1 h-full w-1 mx-auto">
              <button className="h-24 w-24 mt-20 bg-primary hover:bg-slate-200 hover:text-black text-white font-bold rounded-full -ml-12">
                Backend Skills
              </button>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex-none p-2">
            {/* <div className="text-gray-700 float-left border-2 rounded border-green-200 bg-green-200 shadow-lg px-2"></div> */}

            <section className="w-full float-left border-2 rounded shadow-lg px-2">
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               Node js 
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               Express Js 
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Prisma ORM
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
                PostgreSQL
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               Mongoose
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               MongoDB 
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               TypeScript 
              </h3>
              <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
               JWT 
              </h3>
            </section>
          </div>
        </div>
        {/* Day- 3*/}
        <div className="flex flex-no-wrap lg:flex-row flex-row-reverse justify-center">
        <section className="w-full lg:w-2/5 flex-none p-2 bg-">
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Agile
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Figma 
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Vercel
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
            AWS
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
              Supebase
            </h3>
            <h3 className="p-3 text-[1.5rem] bg-slate-500 m-1 rounded text-center">
           Trello
            </h3>
          </section>

          <div className="w-1/5 sm:1/3 flex-none float-left">
            <div className="bg-primary p-1 h-full w-1 mx-auto">
            <button className="h-24 w-24 mt-20 bg-primary hover:bg-slate-200 hover:text-black text-white font-bold rounded-full -ml-12">
                Tools
              </button>
            </div>
          </div>

          <div className="w-2/5 flex-none p-2 hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
