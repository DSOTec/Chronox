import React from "react";

const SmallFeatureCard = ({ icon, title, subText }) => {
  return (
    <div className="w-full xl:max-w-[290px] sm:max-w-[48%] flex flex-col gap-2 border border-[#24CDAF] md:rounded-[15px] rounded-[10px] md:py-6 py-4 md:px-4 px-3 bg-[#E4FFFA]">
      <img src={icon} alt="Icon" className="xl:w-[40px] md:w-[35px] w-[30px] " />
      <h3 className="xl:text-[24px] md:text-[21px] text-[18px] font-semibold">{title}</h3>
      <p className="text-gray-700 xl:text-[15px] md:text-[14px] text-[13px]">{subText}</p>
    </div>
  );
};

export default SmallFeatureCard;
