import React from 'react';
import loaderImg from "../assets/icon/loaderSquare.gif"

const Loader = () => {
    return (
        <div>
            <img src={loaderImg}  className="h-[230px] w-[300px] mx-auto" alt="" />
            <h3 className='text-center font-bold text-text2'>Loading....</h3>
        </div>
    );
};

export default Loader;