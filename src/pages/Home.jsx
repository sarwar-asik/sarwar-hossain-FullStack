import React from "react";
import Banner2 from "./Banner2";
import ProfileBanner from "./ProfileBanner";
import Project from "./Project";
import Features from "./Features";
import useTitle from "../hooks/useTitle";
import Experience from "./Experience/Experience";
import ContactMe from "./ContactMe";
import ChatGptDash from "./ChatGpt/ChatGptDash";
import Footer from "../shared/Footer";

const Home = () => {
  useTitle("Home");
  return (
    <div className="">
      <ProfileBanner />
      {/* <ChatGptDash></ChatGptDash> */}
      <Banner2 />
      <Project></Project>
      <Features />
      <ContactMe/>
      <Experience />
      <Footer></Footer>
    </div>
  );
};

export default Home;
