/* eslint-disable @next/next/no-img-element */
// import { Image } from "antd";
import Link from "next/link";
import React from "react";
import aiImg from "@/assets/services/database.jpg";
import DataImg from "@/assets/services/backend.jpg";
import NetworkingImg from "@/assets/services/web_security.jpg";
import Image from "next/image";
import author from "@/assets/professionalRemoveBg.png"

const BlogsPage = () => {
  const blogs = [
    {
      title: "Touch Event Handling in Node.js with EventEmitter",
      category: "Node js",
      to: 'https://www.linkedin.com/pulse/touch-event-handling-nodejs-eventemitter-sarwar-hossain-ttsic/?trackingId=nkaDuNeqGz6stuzRFbIX6g%3D%3D',
      img: 'https://media.licdn.com/dms/image/D5612AQG3CQGJNqN0LA/article-cover_image-shrink_720_1280/0/1711700015106?e=1717027200&v=beta&t=MrIfZXXxssafTizyi6XPwalE5A6b8e--iBqFuNOa1iQ',
      likes: 235,
      comments: 42,

      views: 1278,
      content:
        "EventEmitter class, a core module in Node.js that facilitates the management of events such as mouse clicks, keyboard button presses, and mouse Node.js provides an event-driven architecture, allowing developers to handle events asynchronously.",
      author: "Linkedin Articles",
      createdAt: "March 29, 2024",
      readingTime: "8 minutes",
      author_img: author,
    },
    {
      title: "Streamlining Real-Time: MERN's Journey with Socket.io",
      category: "Socket Io",
      img: 'https://media.licdn.com/dms/image/D5612AQErNBGszcHBYQ/article-cover_image-shrink_423_752/0/1711094752254?e=1717027200&v=beta&t=fJ76NVyoZpq0q-LtL4vT3vxTYA4Em3aEWMwobokMD30',
      to: 'https://www.linkedin.com/pulse/streamlining-real-time-merns-journey-socketio-sarwar-hossain-qnfac/?trackingId=fAvnnLqkn9%2BzfIZquSAbYw%3D%3D',
      likes: 198,
      comments: 31,
      views: 1037,
      content:
        "Are you considering incorporating real-time streaming into your MERN stack? Socket.io can provide you with a powerful solution that goes beyond basic pulling. With its ability to facilitate instant communication between your database and user interface, Socket.io is a valuable tool to consider. By using Socket.io, you can offer your users a dynamic experience that keeps them engaged and satisfied. We encourage you to try Socket.io in your MERN stack to enhance the functionality of your web applications.",
      author: "Linkedin Articles",
      createdAt: "March 22, 2024",
      readingTime: "12 minutes",
      author_img: author,
    },
    {
      title: "🔍 Exploring the Power of Mongoose ORM for No-SQL Databases 📊.",
      category: "Mongoose",
      img: 'https://media.licdn.com/dms/image/D4E12AQGf2YqJYxqflg/article-cover_image-shrink_720_1280/0/1710833299935?e=1717027200&v=beta&t=nuJhLDEWTBQ7OBRuG_gAkd4yzgtH_eD_uMA5zXHpVSU',
      to: "https://www.linkedin.com/pulse/exploring-power-mongoose-orm-no-sql-databases-sarwar-hossain-ngcke/?trackingId=9UTBJrDucfNwDg5rql2vjA%3D%3D",
      likes: 312,
      comments: 56,
      views: 1520,
      content:
        "Embracing Mongoose ORM for NoSQL databases provides endless possibilities. Here are some of the key features that make it a game-changer:",
      author: "Linkedin Articles",
      createdAt: "March 19, 2024",
      readingTime: "5 minutes",
      author_img: author,
    },
    {
      title: "🚀 Implementing Drag-and-Drop in Next.js without External Packages",
      category: "Next js",
      img: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fli6cfg5ell53e6knvg7w.png',
      to: "https://dev.to/sarwarasik/implementing-drag-and-drop-in-nextjs-without-external-packages-38c7",
      likes: 120,
      comments: 36,
      views: 420,
      content:
        "Ever wondered how to implement a drag-and-drop feature in your Next.js application without relying on external packages? Here's a quick guide to get you started",
      author: "Dev.to Articles",
      createdAt: "Feb 9 , 2024",
      readingTime: "8 minutes",
      author_img: author,
    },
    {
      title: "🚀 Tackling Next.js Hydration Errors: 10 Quick Tips",
      category: "Next js error handle",
      img: 'https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9x20kncouzks9yzvw74x.png',
      to: "https://dev.to/sarwarasik/tackling-nextjs-hydration-errors-10-quick-tips-jn5",
      likes: 150,
      comments: 89,
      views: 1413,
      content:
        "Ensure consistent HTML nesting between server and client renders to avoid Next.js hydration errors.",
      author: "Dev.to Articles",
      createdAt: "Feb 9 , 2024",
      readingTime: "8 minutes",
      author_img: author,
    },
  ];



  return (
    <div className="bg-seconda   text-white flex flex-col justify-center items-center w-full ">
      <section>
        <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              My Blogs
            </h1>
            <p className="font-normal  mt-2 text-[1em] text-center text-slate-400 mb-4">
              There are some my blogs those write about technology of today
              programming. <br />
              You can explore these to improve web idea.
            </p>
            <Link
              href="https://dev.to/sarwarasik"
              target="_blank"
              className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Go to insights
            </Link>
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* blogs */}

            {blogs?.map((item: any, i) => {
              const {
                title,
                category,
                img,
                likes,
                comments,
                views,
                content,
                author,
                createdAt,
                readingTime,
                author_img,
                to
              } = item;
              return (
                <div key={i + 1} className="w-full mx-auto">
                  <div className="transition-all duration-150 flex w-full px-4 py-6">
                    <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                      <div className="md:flex-shrink-0">
                        <img
                          width={200}
                          height={224}
                          src={img}
                          // preview={false}
                          alt="Blog Cover"
                          className="object-fill w-full rounded-lg rounded-b-none md:h-56"
                        />
                      </div>
                      <div className="flex items-center justify-between px-4 py-2 overflow-hidden">
                        <span className="text-xs font-medium text-blue-600 uppercase">
                          {category}
                        </span>
                        <div className="flex flex-row items-center">
                          <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                            <span>{views}k</span>
                          </div>

                          <div className="text-xs font-medium text-gray-500 flex flex-row items-center mr-2">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                              ></path>
                            </svg>
                            <span>{comments}</span>
                          </div>

                          <div className="text-xs font-medium text-gray-500 flex flex-row items-center">
                            <svg
                              className="w-4 h-4 mr-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              ></path>
                            </svg>
                            <span>{likes}</span>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300" />
                      <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto">
                        <Link href={to}
                          target="_blank" rel="noopener"
                          className="hover:underline no-underline ">
                          <h2 className="text-2xl font-bold tracking-normal text-gray-800 min-h-[5rem]">
                            {title.length > 48 ? `${title.substring(0, 48)}...` : title}
                          </h2>
                        </Link>
                      </div>
                      <hr className="border-gray-300" />
                      <p className="px-2 text-sm text-justify text-gray-500 my-3  min-h-[6rem]">
                        {content.length > 180 ? `${content.substring(0, 180)}...` : content} 
                      </p>
                      <hr className="border-gray-300" />
                      <section className="px-4 py-2 mt-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center flex-1">
                            <Image
                              className="object-cover  rounded-full"
                              src={author_img}
                              width={50}
                              height={50}
                              alt="Avatar"
                            />
                            <div className="flex flex-col mx-2">
                              <a
                                href=""
                                className="font-semibold text-gray-700 hover:underline"
                              >
                                {author}
                              </a>
                              <span className="mx-1 text-xs text-gray-600">
                                {createdAt}
                              </span>
                            </div>
                          </div>
                          <p className="mt-1 text-xs text-gray-600">
                            {readingTime} minutes read
                          </p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </div>
  );
};

export default BlogsPage;
