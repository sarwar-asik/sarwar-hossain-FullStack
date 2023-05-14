import React from 'react';
import Banner2 from './Banner2';
import ProfileBanner from './ProfileBanner';
import Project from './Project';
import Features from './Features';

const Home = () => {
    return (
        <div>
            <ProfileBanner/>
     
            <Banner2/>
            <Project></Project>
            <Features/>
        </div>
    );
};

export default Home;