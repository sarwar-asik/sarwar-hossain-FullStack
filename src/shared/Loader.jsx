import React from 'react';
import loaderImg from "../assets/icon/loaderSquare.gif"

const Loader = () => {
    return (
        <div>
            <img src={loaderImg}  className="h-[230px] w-[300px] mx-auto" alt="" />
        </div>
    );
};

export default Loader;