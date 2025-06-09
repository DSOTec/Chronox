import React from "react";
import { Link } from "react-router-dom"; // Adjust based on your routing library
import ChronoxLogo from "../../src/assets/logos/ChronoxLogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="max-page-width md:h-[100px] h-[70px] bg-[#E4FFFA] md:px-8 px-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] flex justify-center items-center bg-white rounded-full border border-[#86ebd8]">
          <img src={ChronoxLogo} alt="Chronox Logo" className="w-[32px] max-md:w-[24px] " />
        </div>
        <span className="xl:text-[32px] lg:text-[28px] text-[22px] font-bold text-[#1A1A1A]">Chronox</span>
      </div>
      <div className="w-full xl:max-w-[450px] max-w-[420px] max-lg:hidden lg:flex justify-between items-center mx-10 ">
        <Link to="/" className="font-semibold text-[#000] hover:text-[#24CDAF]">
          Home
        </Link>
        <Link to="/about" className="text-[#686868] hover:text-[#24CDAF] text-nowrap">
          About Us
        </Link>
        <Link to="/features" className="text-[#686868] hover:text-[#24CDAF]">
          Features
        </Link>
        <Link to="/pricing" className="text-[#686868] hover:text-[#24CDAF] text-nowrap">
          Pricing
        </Link>
      </div>
      <div className="Raleway max-lg:hidden lg:flex items-center space-x-6">
        <Link to="/login" className="text-[20px] text-[#344054] font-bold hover:text-[#24CDAF] text-nowrap">
          Log In
        </Link>
        <Link to="/download" className="bg-[#24CDAF] text-white text-[20px] font-medium px-8 py-3 rounded-[30px] hover:bg-[#009B8C] text-nowrap transition">
          Download App
        </Link>
      </div>
      <div className="hidden max-lg:block">
        <CgMenuRightAlt className="text-[34px]" />
      </div>
    </nav>
  );
};

export default Navbar;
