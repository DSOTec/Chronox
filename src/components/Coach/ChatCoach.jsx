import React from 'react'
import { FaStar } from "react-icons/fa";

const ChatCoach = ({ 
  name, 
  role, 
  image, 
  rating = 5, 
  buttonText = "Continue chat", 
  onButtonClick 
}) => {
  return (
    <div className="bg-[#eaf3f2] rounded-2xl flex flex-col md:flex-row items-center justify-between p-8 w-full min-h-[220px]">
      {/* Left: Image and Info */}
      <div className="flex items-center w-full md:w-auto">
        <img
          src={image}
          alt={name}
          className="w-30 h-30 rounded-full object-cover bg-[#393939] mr-8"
        />
        <div>
          <h2 className="text-xl font-bold text-[#373737] mb-2">{name}</h2>
          <p className="text-[16px] text-[#373737] mb-4">{role}</p>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-[#F6B545] text-[16px]" : "text-gray-300 text-2xl"}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Right: Button */}
      <button
        className="bg-[#23D1B4] text-white text-[14px] font-medium rounded-full px-14 py-5 mt-8 md:mt-0"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default ChatCoach