import React from "react";

const BlogsPage = () => {
  const blogs =[1,2,3]
  return (
    <div className="bg-secondary   text-white flex flex-col justify-center items-center w-full ">
      <section>
        <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h2 className="mr-10 text-4xl font-bold leading-none md:text-5xl">
              My Blogs 
            </h2>
            <a
              href="#"
              className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Go to insights
            </a>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           
{/* blogs */}
           
           {
            blogs?.map((item:any,i)=>{
              return  <div key={i+1} className="w-full mx-auto">
              <img
                src="https://source.unsplash.com/7JX0-bfiuxQ/400x300"
                alt="Card img"
                className="object-cover object-center w-full h-48"
              />
              <div className="flex flex-grow">
                <div
                  className="triangle"
                  style={{
                    width: "0",
                    height: "0",
                    borderStyle: "solid",
                    borderWidth: "0 20px 20px 0",
                    borderColor: "transparent #1a202c transparent transparent",
                  }}
                ></div>
                <div className="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                  <div>
                    <a
                      href="#"
                      className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
                    >
                      Intellectual Capital
                    </a>
                    <a
                      href="#"
                      className="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
                    >
                      5 Things To Do About Rain
                    </a>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ratione, neque. Eius, ea possimus.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            })
           }

           
          </div>
        </section>
      </section>
    </div>
  );
};

export default BlogsPage;
