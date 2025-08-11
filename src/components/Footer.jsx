import React from "react";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import pinterest from "../assets/icon-pinterest.svg";
import instagram from "../assets/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="w-full lg:w-[1440px] mx-auto bg-[hsl(260,8%,14%)]">
      <div className="w-full lg:w-[1024px] mx-auto p-10">
        <div
          onClick={(e) => e.preventDefault()}
          className="lg:grid lg:grid-cols-12 text-[hsl(0,0%,75%)]  mt-6"
        >
          <div className="col-span-4">
            <div className="text-center lg:text-start">
              <h1 className="text-white text-[30px] font-[700]">Shortly</h1>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-center lg:text-start mt-5 lg:mt-0 ">
              <div className="mb-2">
                <h1 className="text-white font-[700] text-[18px]">Features</h1>
              </div>
              <div className="flex flex-col gap-2 my-3 text-[12px]">
                <a href="">Link Shortening</a>
                <a href="">Branded Links</a>
                <a href="">Analytics</a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col text-center lg:text-start items-center lg:items-start mt-5 lg:mt-0 ">
              <div className="mb-2">
                <h1 className="text-white font-[700] text-[18px]">Resources</h1>
              </div>
              <div className="flex flex-col gap-2 my-3 text-[12px]">
                <a href="">Blog</a>
                <a href="">Developers</a>
                <a href="">Support</a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-center lg:text-start mt-5 lg:mt-0 ">
              <div className="mb-2">
                <h1 className="text-white font-[700] text-[18px]">Company</h1>
              </div>
              <div className="flex flex-col gap-2 my-3 text-[12px]">
                <a href="">About</a>
                <a href="">Our Team</a>
                <a href="">Careers</a>
                <a href="">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex  justify-center items-center gap-5  ">
              <a href="#" className="cursor-pointer">
                <img src={facebook} alt="" />
              </a>
              <a href="#" className="cursor-pointer">
                <img src={twitter} alt="" />
              </a>
              <a href="#" className="cursor-pointer">
                <img src={pinterest} alt="" />
              </a>
              <a href="#" className="cursor-pointer">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
