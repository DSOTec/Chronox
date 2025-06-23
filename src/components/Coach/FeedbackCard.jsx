import React from "react";

function FeedbackCard() {
  return (
    <div className="bg-white rounded-2xl p-8 flex flex-col items-center w-[350px] shadow-md">
      <h2 className="text-2xl font-bold text-[#373737] mb-3 text-center">
        Give feedback
      </h2>
      <p className="text-lg text-gray-500 mb-8 text-center">
        Share your review about your current health coach
      </p>
      <button className="bg-[#23D1B4] text-white text-xl font-semibold rounded-full px-12 py-3 focus:outline-none">
        Give feedback
      </button>
    </div>
  );
}

export default FeedbackCard;