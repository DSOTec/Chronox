import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const Appointment = ({ date = "June 15, 2025", time = "9:00am - 10:00am", onJoin }) => {
  return (
    <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto shadow flex flex-col items-center">
      <h2 className="text-2xl font-bold text-[#232323] mb-4 text-center">Upcoming Appointment</h2>
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FaCalendarAlt className="text-[#23D1B4] text-xl" />
          <span className="text-base text-[#232323]">{date}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock className="text-[#23D1B4] text-xl" />
          <span className="text-base text-[#232323]">{time}</span>
        </div>
      </div>
      <button
        className="bg-[#23D1B4] text-white text-lg font-semibold rounded-full px-10 py-3 transition hover:bg-[#1bb39b] w-full max-w-xs"
        onClick={onJoin}
      >
        Join Appointment
      </button>
    </div>
  );
};

export default Appointment;