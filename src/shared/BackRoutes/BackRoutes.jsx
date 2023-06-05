import React from "react";
import { useNavigate } from "react-router-dom";

const BackRoutes = ({path}) => {
  const navigate = useNavigate();
  return (
    <div className="my-2 min-h-[30vh] bg-primary py-3  px-2 rounded">
    
      <div
        onClick={() => navigate(-1)}
        className="flex text-text1 font-bold cursor-grabbing"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <p>Back Previous</p>
      </div>

      <section>
        <h3 className="text-text2 font-semibold font-mono text-center">{path}</h3>
      </section>


    </div>
  );
};

export default BackRoutes;
