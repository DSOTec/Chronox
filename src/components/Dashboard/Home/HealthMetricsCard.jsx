import React from "react";

const HealthMetricsCard = ({ title, heartImg, heartrateImg, bpmValue, status, timeAgo }) => {
  return (
    <div className="bg-white rounded-[15px] w-full shadow-lg flex flex-col items-center justify-center p-4">
      <div className="flex gap-6 sm:gap-12 mb-6 sm:mb-10 justify-between">
        <h1 className="xl:text-[16px] md:text-[15px] text-[14px] font-semibold text-[#373737]">{title}</h1>
        <img className="w-[20px] h-[20px]" src={heartImg} alt="heart" />
      </div>
      <div className="flex justify-center mb-6 sm:mb-10">
        <img src={heartrateImg} alt="heartrate" />
      </div>
      <div className="flex justify-between">
        <p className="xl:text-[16px] md:text-[15px] text-[14px] text-[#24CDAF] font-medium">{bpmValue}</p>
        <p className="xl:text-[16px] md:text-[15px] text-[14px] text-[#373737] font-normal">{status}</p>
      </div>
      <div>
        <p className="xl:text-[14px] md:text-[13px] text-[12px] text-center text-[#636363]">{timeAgo}</p>
      </div>
    </div>
  );
};

export default HealthMetricsCard;
