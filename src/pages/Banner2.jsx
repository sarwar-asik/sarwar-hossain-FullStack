import React from 'react';
import hero2 from "../assets/main/hero2.png"

const Banner2 = () => {
    return (
        <div className='block lg:flex items-center gap-5 my-10 '>
            <section className='Lg:w-[35%]'>
                <img src={hero2} className="lg:h-[32rem]" alt="" />
            </section>
            <section className='lg:w-[65%] mt-5'>
                <h2 className='text-5xl text-text1 font-bold font-serif'> Web Development </h2>
                <p className='font-normal lg:text-xl mt-2 sm:text-lg text-text2 mb-8'>On this Modern world I am trying to update myself to the update world . As a educated person my profession is connect with digital technology .</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 text-slate-700">
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'> Frontend Developing</button>
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'>MERN Stack Developing</button>
                <button className='bg-slate-50 shadow-2xl p-2 font-mono'>Backend Service</button>
                </div>
            </section>
        </div>
    );
};

export default Banner2;