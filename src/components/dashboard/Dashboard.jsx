import React from "react";
import Image from "next/image";
import triangle from "/public/Assets/triangle.png";
import homepic from "/public/Assets/home-pic.png";

export const Dashboard = () => {
  return (
    <div>
      <div className="bg-black">
        <Image className="w-[35px] h-[35px]" src={triangle} alt="triangle" />
        <div>
          <Image className="w-[18px] h-[18px]" src={homepic} alt="home-pic" />
        </div>
      </div>
    </div>
  );
};
