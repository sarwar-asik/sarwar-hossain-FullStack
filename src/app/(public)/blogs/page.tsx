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
      title: "Building Scalable Web Applications with Next.js",
      category: "JavaScript Web Development",
      img: aiImg,
      likes: 235,
      comments: 42,
      views: 1278,
      content:
        "Next.js is a powerful framework for building server-side rendered React applications. Learn how to leverage its features for building scalable and efficient web applications.",
      author: "John Smith",
      createdAt: "2023-05-15",
      readingTime: "8 minutes",
      author_img: author,
    },
    {
      title: "State Management with Redux",
      category: "JavaScript Web Development",
      img: NetworkingImg,
      likes: 198,
      comments: 31,
      views: 1037,
      content:
        "Redux is a state management library commonly used in conjunction with React. Explore its principles and best practices for managing application state in complex web projects.",
      author: "Sarah Johnson",
      createdAt: "2023-06-02",
      readingTime: "6 minutes",
      author_img: author,
    },
    {
      title: "Building APIs with Node.js and MongoDB",
      category: "JavaScript Web Development",
      img: DataImg,
      likes: 312,
      comments: 56,
      views: 1520,
      content:
        "Node.js and MongoDB are a powerful combination for building scalable and efficient APIs. Learn how to create RESTful APIs and perform CRUD operations with Node.js and MongoDB.",
      author: "Michael Anderson",
      createdAt: "2023-06-20",
      readingTime: "7 minutes",
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
              } = item;
              return (
                <div key={i + 1} className="w-full mx-auto">
                  <div className="transition-all duration-150 flex w-full px-4 py-6">
                    <div className="flex flex-col items-stretch min-h-full pb-4 mb-6 transition-all duration-150 bg-white rounded-lg shadow-lg hover:shadow-2xl">
                      <div className="md:flex-shrink-0">
                        <Image
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
                        <a href="#" className="hover:underline no-underline">
                          <h2 className="text-2xl font-bold tracking-normal text-gray-800">
                            {title}
                          </h2>
                        </a>
                      </div>
                      <hr className="border-gray-300" />
                      <p className="px-2 text-sm text-justify text-gray-500">
                        {content}
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
