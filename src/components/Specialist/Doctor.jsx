import React from "react";
import { FaStar } from "react-icons/fa";

const Doctor = ({
  image,
  name,
  specialty,
  rating = 4,
  buttonText = "Message",
  onButtonClick,
}) => (
  <div className="bg-[#eaf3f2] rounded-2xl flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 w-full max-w-2xl shadow">
    {/* Left: Image and Info */}
    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
      <img
        src={image}
        alt={name}
        className="w-20 h-20 rounded-full object-cover bg-[#393939] mr-4"
      />
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-[#232323] mb-1">{name}</h2>
        <p className="text-[#6B6BD6] text-lg mb-2">{specialty}</p>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < rating
                  ? "text-[#F6B545] text-xl"
                  : "text-[#F6B545] text-xl opacity-30"
              }
            />
          ))}
        </div>
      </div>
    </div>
    {/* Right: Button */}
    <button
      className="bg-[#23D1B4] text-white text-lg font-semibold rounded-full px-10 py-3 shadow"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
);

export default Doctor;