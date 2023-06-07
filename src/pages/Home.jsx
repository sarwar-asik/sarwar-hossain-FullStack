import React from "react";
import Banner2 from "./Banner2";
import ProfileBanner from "./ProfileBanner";
import Project from "./Project";
import Features from "./Features";
import useTitle from "../hooks/useTitle";
import Experience from "./Experience/Experience";
import ContactMe from "./ContactMe";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <ProfileBanner />

      <Banner2 />
      <Project></Project>
      <Features />
      <ContactMe/>
      <Experience />
    </div>
  );
};

export default Home;