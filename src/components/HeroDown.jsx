import React from "react";
import { statistics } from "../../data";

const HeroDown = () => {
  return (
    <div className="w-full lg:w-full mx-auto p-10 mt-40 bg-gray-300 ">
      <div className="relative w-full lg:w-[1024px] mx-auto lg:relative">
        <div className="absolute w-[330px] mx-auto lg:mx-0 lg:w-[1024px] h-[150px] p-5 lg:p-10 bgshort rounded-lg lg:absolute -top-80 ">
          <form className="flex flex-col lg:flex lg:flex-row items-center justify-center gap-2 lg:gap-3 lg:p-2">
            <input
              type="text"
              placeholder="Shorten a link here..."
              className="bg-white w-full lg:w-[70%] h-[50px] rounded-lg lg:rounded-2xl px-5 placeholder:font-[700]"
            />
            <button className="w-full lg:w-[20%] h-[50px] bg-[hsl(180,66%,49%)] text-[18px] text-white font-[700] rounded-lg lg:rounded-2xl">
              Shorten it!
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center mx-auto mt-50 ">
          <h1 className="font-[700] text-[25px] lg:text-[40px] text-[hsl(260,8%,14%)]">
            Advanced Statistics
          </h1>
          <p className="text-[18px] w-full lg:w-[510px] text-center text-[hsl(257,7%,63%)]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="mt-20 flex flex-col lg:flex lg:flex-row gap-20 lg:gap-5 relative">
          {statistics.map((items, index) => {
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-5 w-full lg:w-[500px] relative top-[${
                  index * 70
                }px] left-[${index * 50}px] z-[${index}]`}
              >
                <div className="flex items-center justify-center rounded-full w-[80px] h-[80px]  bg-[hsl(257,27%,26%)] mb-2 absolute -top-10 left-27 lg:left-5">
                  <img
                    src={items.icon}
                    alt="img"
                    className="object-contain w-[50px] h-[50px]"
                  />
                </div>
                <div className="w-full lg:w-[200px] mt-15">
                  <h1 className="font-[700] text-[18px] text-center lg:text-start">
                    {items.title}
                  </h1>
                </div>
                <div className="w-full lg:w-[330px] my-7">
                  <p className="text-[18px] text-[hsl(257,7%,63%)]">
                    {items.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroDown;
