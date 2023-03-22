import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <h2> This is main</h2>
            <Outlet/>
        </div>
    );
};

export default Main;