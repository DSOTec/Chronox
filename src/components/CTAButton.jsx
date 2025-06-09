import React from "react";

const CTAButton = ({ btnText = "Get started", className = "" }) => {
  return (
    <a
      href="/get-started"
      className={`font-semibold xl:text-[18px] lg:text-[16px] text-[14px] bg-[#24CDAF] text-white px-8 py-2 rounded-[30px] hover:bg-[#009B8C] transition ${className}`}
    >
      {btnText}
    </a>
  );
};

export default CTAButton;
