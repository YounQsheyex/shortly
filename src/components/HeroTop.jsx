import React from "react";
import illustration from "../assets/illustration-working.svg";

const HeroTop = () => {
  return (
    <div className="w-full lg:max-w-[1440px] mx-auto mt-10 p-10">
      <div className="w-full lg:w-[1024px] mx-auto flex flex-col-reverse  lg:flex lg:flex-row items-center gap-20 justify-between">
        <div>
          <h1 className="text-[40px] text-center lg:text-start lg:text-[50px] font-[700]">
            More than just shorter links
          </h1>
          <p className="font-[700]  text-[hsl(0,0%,75%)] text-center lg:text-start lg:text-[18px]">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button
            onClick={(e) => e.preventDefault()}
            className="w-[150px] mx-auto lg:mx-0 mt-10 bg-[hsl(180,66%,49%)] text-[18px] text-white   font-[700] p-2 rounded-[20px] cursor-pointer flex justify-center"
          >
            Get Started
          </button>
        </div>
        <div>
          <img src={illustration} alt="img working" />
        </div>
      </div>
    </div>
  );
};

export default HeroTop;
