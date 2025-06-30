import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const daysShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const calendarDays = [
  [28, 29, 30, 1, 2, 3, 4],
  [5, 6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25],
  [26, 27, 28, 29, 30, 31, 1],
];

const Calender = () => (
  <div className="bg-white rounded-2xl p-6 sm:p-10 w-full max-w-xl mx-auto">
    {/* Header */}
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <div className="bg-[#EAF3F2] rounded-xl w-14 h-14 flex items-center justify-center">
          <FaCalendarAlt className="text-[#23D1B4] text-3xl" />
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-[#232323]">May 2025</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-[#232323] bg-[#EAF3F2] rounded-full w-10 h-10 flex items-center justify-center">
          <IoIosArrowBack className="text-2xl" />
        </button>
        <button className="text-[#232323] bg-[#EAF3F2] rounded-full w-10 h-10 flex items-center justify-center">
          <IoIosArrowForward className="text-2xl" />
        </button>
      </div>
    </div>
    {/* Days of week */}
    <div className="grid grid-cols-7 gap-4 mb-4">
      {daysShort.map((day) => (
        <div key={day} className="text-center text-lg font-semibold text-[#373737]">{day}</div>
      ))}
    </div>
    {/* Calendar days */}
    <div className="grid grid-cols-7 gap-4">
      {calendarDays.flat().map((day, idx) => (
        <div
          key={idx}
          className={`flex items-center justify-center w-12 h-12 rounded-full
            ${day === 15 ? "bg-[#23D1B4] text-white" : "bg-[#EAF3F2] text-[#232323]"}
            text-lg font-medium`}
        >
          {day}
        </div>
      ))}
    </div>
  </div>
);

export default Calender;