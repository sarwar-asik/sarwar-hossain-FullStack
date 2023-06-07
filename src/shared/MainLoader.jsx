import React from 'react';
import mainLoader from "../assets/icon/mainLoader1.gif"

const MainLoader = () => {

    return (
        <div className='w-au h-full mt-24 mx-auto'>
            <img src={mainLoader} className='w-[200px] h-[150px] mx-auto' alt="" />
            <h3 className='text-center text-[1.3rem] text-primary font-extrabold font-serif'>Welcome in <br /> <span className='text-blue-400'>Sarwar Hossain</span> Portfolio</h3>
        </div>
    );
};

export default MainLoader;