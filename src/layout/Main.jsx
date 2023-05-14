import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='lg:w-[95%] mx-auto'>
        
            <Outlet/>
        </div>
    );
};

export default Main;