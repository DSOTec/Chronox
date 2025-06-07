import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/LandingPage/HeroSection";
import LearnMore from "../components/LandingPage/LearnMore";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-col md:max-h-[860px] bg-[#E4FFFA]">
        <Navbar />
        <HeroSection />
      </div>
      <LearnMore />
    </div>
  );
};

export default LandingPage;
