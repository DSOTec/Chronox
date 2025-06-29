import React from "react";
import { FaStar } from "react-icons/fa";

const ChatCoach = ({ name, role, image, rating = 5, buttonText = "Continue chat", onButtonClick }) => {
  return (
    <div className="bg-[#eaf3f2] rounded-2xl flex max-lg:flex-col items-center justify-between gap-4 p-4 w-full min-h-[220px]">
      {/* Left: Image and Info */}
      <div className="flex items-center w-full gap-4 md:w-auto">
        <img src={image} alt={name} className="md:w-30 md:h-30 sm:w-20 sm:h-20 w-16 h-16 rounded-full object-cover bg-[#393939]" />
        <div>
          <h2 className="xl:text-[20px] md:text-[18px] text-[16px] font-bold text-[#373737] mb-2">{name}</h2>
          <p className="xl:text-[16px] md:text-[15px] text-[14px] text-[#373737] mb-4">{role}</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating ? "text-[#F6B545] text-[16px]" : "text-gray-300 text-2xl"} />
            ))}
          </div>
        </div>
      </div>
      {/* Right: Button */}
      <button className="bg-[#23D1B4] text-white text-[14px] text-nowrap font-medium rounded-full w-full max-w-[300px] p-4 mt-8 md:mt-0" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ChatCoach;
