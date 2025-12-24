import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/banner.png"
        alt="Banner"
        width={1550}
        height={400}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
};

export default Banner;
