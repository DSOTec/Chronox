import React from "react";

function FeedbackCard() {
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-8 flex flex-col items-center w-full max-w-xs sm:max-w-sm shadow-md">
      <div className="flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold text-[#373737] mb-3 text-center">
          Give feedback
        </h2>
        <p className="text-[15px] sm:text-[16px] text-gray-500 mb-8 text-center">
          Share your review about your current health coach
        </p>
        <button className="bg-[#23D1B4] text-white text-base sm:text-[18px] font-semibold rounded-full px-8 sm:px-12 py-3 focus:outline-none">
          Give feedback
        </button>
      </div>
    </div>
  );
}

export default FeedbackCard;