import React from "react";
import logo from "../assets/logo.svg";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div
      onClick={(e) => e.preventDefault()}
      className="w-sm lg:w-[1440px] mx-auto"
    >
      <nav>
        <div className="w-full lg:w-[1024px] lg:mx-auto p-5 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div>
              <a href="#">
                <img src={logo} alt="logo image" />
              </a>
            </div>

            {/* large screen */}
            <div className="hidden lg:flex items-center gap-10 font-[700] text-[hsl(257,7%,63%)] text-[14px] cursor-pointer">
              <a href="">Features</a>
              <a href=""> Pricing</a>
              <a href="">Resources</a>
            </div>
          </div>
          {/* small screen */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className=" m-1 lg:hidden">
              <GrMenu size={40} />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-[hsl(257,27%,26%)] rounded-box z-5 w-[325px] h-[400px] p-2 shadow-sm rounded-lg "
            >
              <li>
                <div className="flex flex-col items-center gap-10 font-[700] text-white text-[22px] cursor-pointer p-5">
                  <a href="">Features</a>
                  <a href=""> Pricing</a>
                  <a href="">Resources</a>
                </div>
              </li>
              <hr className="border-1.5 border-white " />
              <li>
                <div className="flex flex-col items-center gap-7 p-2 font-[700] text-[22px] text-white">
                  <div>
                    <a href=""> Login</a>
                  </div>
                  <div>
                    <button className="w-[300px] bg-[hsl(180,66%,49%)] text-white rounded-[20px] p-1 cursor-pointer">
                      Sign Up
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex items-center gap-7 p-2 font-[700] text-[14px] text-[hsl(257,7%,63%)]">
            <div>
              <a href=""> Login</a>
            </div>
            <div>
              <button className="w-[120px] bg-[hsl(180,66%,49%)] text-white rounded-[20px] p-1 cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
