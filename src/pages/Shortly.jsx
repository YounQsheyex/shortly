import React from "react";
import Navbar from "../components/Navbar";
import HeroTop from "../components/HeroTop";
import HeroDown from "../components/HeroDown";
import GetStared from "../components/GetStared";
import Footer from "../components/Footer";

const Shortly = () => {
  return (
    <div>
      <Navbar />
      <HeroTop />
      <HeroDown />
      <GetStared />
      <Footer />
    </div>
  );
};

export default Shortly;
