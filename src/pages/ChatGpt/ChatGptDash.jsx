import React from "react";
import Slider from "./Slider";
import "./gpt.css"

const ChatGptDash = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">ChatGPT Slider</h1>
      <Slider />
    </div>
  );
};

export default ChatGptDash;
