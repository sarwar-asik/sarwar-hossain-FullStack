import React, { useState } from "react";
import "./gpt.css";

const Slider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full h-3 bg-blue-200 rounded-lg appearance-none"
      />
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-600">0</span>
        <span className="text-sm text-gray-600">100</span>
      </div>
    </div>
  );
};

export default Slider;
