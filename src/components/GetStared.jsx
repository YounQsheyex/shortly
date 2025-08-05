import React from "react";

const GetStared = () => {
  return (
    <div className="getstarted w-full lg:w-full  bg-[hsl(257,27%,26%)] mx-auto h-[250px]">
      <div className="w-full lg:w-[1024px] mx-auto p-15 text-center flex flex-col items-center">
        <h1 className="text-white text-[23px] lg:text-[50px] font-[700]">
          Boost your links today
        </h1>
        <button className="w-[150px] mt-5 bg-[hsl(180,66%,49%)] text-[18px] text-white font-[700] p-2 rounded-[20px] cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStared;
