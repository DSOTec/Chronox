import React from "react";
import heroImage from "../../assets/images/heroFitnessImage.jpg";
import PersonIcon from "../../assets/icons/PersonIcon.svg";
import GroupIcon from "../../assets/icons/GroupIcon.svg";
import DownloadIcon from "../../assets/icons/DownloadIcon.svg";

const HeroSection = () => {
  return (
    <section className="max-page-width Raleway bg-[#E4FFFA] flex flex-col md:flex-row items-center justify-between md:px-6 px-4 pt-10">
      <div className="md:w-1/2">
        <h1 className="leading-[1.2] xl:text-[48px] md:text-[36px] text-[28px] text-[#1A1A1A] font-bold mb-4">
          Take Control of your Health,
          <span className="text-[#269782]">
            <br className="md:max-2xl:hidden" /> Smarter & Simpler
          </span>
        </h1>
        <p className="w-full max-w-[600px] text-[#636363] xl:text-[18px] lg:text-[16px] text-[14px] mb-6">
          Chronox helps you track your vital health data, consult with trusted experts, and manage your medications — all in one simple platform built for your daily
          routine
        </p>
        <div className="flex space-x-4">
          <a
            href="/get-started"
            className="font-semibold xl:text-[18px] lg:text-[16px] text-[14px] bg-[#24CDAF] text-white px-8 py-2 rounded-[30px] hover:bg-[#009B8C] transition"
          >
            Get started
          </a>
          <a
            href="/contact"
            className="font-semibold xl:text-[18px] lg:text-[16px] text-[14px] text-[#24CDAF] px-8 py-2 rounded-[30px] hover:bg-[#c9fff5] transition border border-[#24CDAF]"
          >
            Contact us
          </a>
        </div>
        <div className="w-full xl:mt-26 mt-16">
          <div className="w-full max-w-[500px] flex md:justify-between gap-6 max-sm:flex-wrap space-x-4">
            <div className="flex items-center gap-3">
              <img src={PersonIcon} alt="" />
              <div className="xl:text-[24px] lg:text-[20px] text-[18px]">
                <p className="font-semibold">5000+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Users</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={GroupIcon} alt="" />
              <div className="xl:text-[24px] lg:text-[20px] text-[18px]">
                <p className="font-semibold">300+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Partners</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={DownloadIcon} alt="" />
              <div className="xl:text-[24px] lg:text-[20px] text-[18px]">
                <p className="font-semibold">3000+</p>
                <p className="font-medium text-gray-500 xl:text-[14px] lg:text-[12px] text-[10px]">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:max-w-[600px] md:max-w-[500px] max-w-[400px]  md:w-1/2 mt-6 md:mt-0">
        <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg max-sm:opacity-30" />
      </div>
    </section>
  );
};

export default HeroSection;
