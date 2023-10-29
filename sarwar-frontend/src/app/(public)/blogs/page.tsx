import { Image } from "antd";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      title: "The Future of Artificial Intelligence",
      category: "AI programming",
      img: "https://buildfire.com/wp-content/uploads/2017/04/marketing-blogs-1200x900.jpg",
      likes: 235,
      comments: 42,
      views: 1278,
      content:
        "Artificial Intelligence (AI) is shaping the future in ways we couldn't have imagined a few decades ago...",
      author: "John Smith",
      createdAt: "2023-05-15",
      readingTime: "8 minutes",
      author_img:
        "https://lh3.googleusercontent.com/a/ACg8ocKhVGfwkn1rZok-dIAoABC3X0OmbkOwRiFbDZWwRKz89g=s360-c-no",
    },
    {
      title: "Blockchain and Its Impact on Finance",
      category: "Data Analysis",
      img: "https://www.constantcontact.com/blog/wp-content/uploads/2021/04/Social-4.jpg",
      likes: 198,
      comments: 31,
      views: 1037,
      content:
        "Blockchain technology has disrupted the financial sector, offering transparency, security, and decentralization...",
      author: "Sarah Johnson",
      createdAt: "2023-06-02",
      readingTime: "6 minutes",
      author_img:
        "https://lh3.googleusercontent.com/a/ACg8ocKhVGfwkn1rZok-dIAoABC3X0OmbkOwRiFbDZWwRKz89g=s360-c-no",
    },
    {
      title: "The Rise of 5G Technology",
      category: "Networking",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFEHly5nR5lxwYP3mqXBIXRVctFiTmhJsUi1TTD_wxp2SR7d1_OjN2XD1rbjccIhSp2Y&usqp=CAU",
      likes: 312,
      comments: 56,
      views: 1520,
      content:
        "5G technology is revolutionizing communication and connectivity, enabling faster data transfer and IoT applications...",
      author: "Michael Anderson",
      createdAt: "2023-06-20",
      readingTime: "7 minutes",
      author_img:
        "https://lh3.googleusercontent.com/a/ACg8ocKhVGfwkn1rZok-dIAoABC3X0OmbkOwRiFbDZWwRKz89g=s360-c-no",
    },
  ];

  return (
    <div className="bg-secondary   text-white flex flex-col justify-center items-center w-full ">
      <section>
        <section className="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              My Blogs
            </h1>
            <p className="font-normal  mt-2 text-[1em] text-center text-slate-500 mb-4">
              There are some my blogs those write about technology of today programming. <br />
              You can explore the blogs .
            </p>
            <a
              href="#"
              className="block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Go to insights
            </a>
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
                          src={img}
                          preview={false}
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
