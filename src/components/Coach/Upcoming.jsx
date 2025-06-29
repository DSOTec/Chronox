import React from "react";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

function UpcomingSessionCard({ date = "June 15,2025", time = "9:00am-10:00am", onFeedback }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col items-center w-full max-w-[380px] shadow-md">
      <h2 className="text-xl font-bold text-[#373737] mb-6 text-center">Upcoming session</h2>
      <div className="flex items-center gap-4 mb-8">
        <FaCalendarAlt className="text-[#23D1B4] text-2xl" />
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-[#5A5A5A]">{date}</span>
        <FaClock className="text-[#23D1B4] text-2xl ml-4" />
        <span className="xl:text-[14px] md:text-[13px] text-[12px] text-[#5A5A5A]">{time}</span>
      </div>
      <button className="w-full bg-[#23D1B4] text-white text-[16px] font-semibold rounded-full p-4 focus:outline-none" onClick={onFeedback}>
        Give feedback
      </button>
    </div>
  );
}

const Upcoming = () => {
  return (
    <div>
      <UpcomingSessionCard />
    </div>
  );
};

export default Upcoming;
