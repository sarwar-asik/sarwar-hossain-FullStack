import React, { useEffect, useState } from 'react';

const ToTop = () => {
    
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
    return (
        <div
        className={`scroll-to-top ${
          isVisible ? "visible" : "hidden"
        } h-[5rem] font-bold text-blue-500 fixed right-7  bottom-[4rem]  flex flex-col items-center justify-center z-30 transition-opacity duration-1000`}
      >
        <button onClick={scrollToTop}>Go to Top</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    );
};

export default ToTop;