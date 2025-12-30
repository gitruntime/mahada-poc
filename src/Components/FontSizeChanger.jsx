import React, { useState, useEffect } from "react";

const FontSizeChanger = () => {
  const [fontSize, setFontSize] = useState(16); // default font size in px

  // Update the font size of the whole website
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div className="flex items-center gap-[3px]">
      <button
        className="w-[22px] h-[22px] border border-[#212529] rounded-md text-[10px] cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all"
        onClick={() => setFontSize((prev) => Math.max(prev - 1, 10))} // minimum 10px
      >
        A-
      </button>
      <button
        className="w-[30px] h-[22px] bg-[#198754] rounded-md text-[10px] text-white cursor-pointer hover:bg-green-600 hover:scale-105 transition-all"
        onClick={() => setFontSize(16)} // reset to default
      >
        A
      </button>
      <button
        className="w-[22px] h-[22px] border border-[#212529] rounded-md text-[10px] cursor-pointer hover:bg-gray-200 hover:scale-105 transition-all"
        onClick={() => setFontSize((prev) => Math.min(prev + 1, 24))} // maximum 24px
      >
        A+
      </button>
    </div>
  );
};

export default FontSizeChanger;
