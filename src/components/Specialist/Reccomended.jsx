import React from "react";
import { FaStar } from "react-icons/fa";
import doctorImg from "../../assets/Dashboard/Specialist/docImg.png"; // Update with your actual image path

const Reccomended = () => (
  <div className="bg-white rounded-2xl p-4 sm:p-8 w-full max-w-lg mx-auto shadow border border-[#23D1B4]">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#373737] mb-6">Recommended specialist</h2>
    <div className="bg-[#EAF3F2] rounded-2xl p-4 flex flex-col items-center sm:flex-row sm:items-center gap-4">
      <img
        src={doctorImg}
        alt="Dr. Felicia Amah"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1 flex flex-col items-center sm:items-start">
        <h3 className="text-xl font-bold text-[#232323]">Dr. Felicia Amah</h3>
        <p className="text-[#6B6BD6] text-lg mb-2">Endocrinologist</p>
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#F6B545] text-xl" />
          ))}
        </div>
        <button className="bg-[#23D1B4] text-white text-xl font-semibold rounded-full px-10 py-3 w-full sm:w-auto">
          Book appointment
        </button>
      </div>
    </div>
  </div>
);

export default Reccomended;