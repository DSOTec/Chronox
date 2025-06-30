import React from "react";
import { FaPlus, FaTablets, FaCapsules } from "react-icons/fa";

const prescriptions = [
  {
    icon: <FaCapsules className="text-[#23D1B4] text-xl" />,
    name: "Vitamin D",
    dosage: "5mg-2x per day",
    link: "#"
  },
  {
    icon: <FaTablets className="text-[#23D1B4] text-xl" />,
    name: "Paracetamol",
    dosage: "500mg-3x per day",
    link: "#"
  }
];

const Prescription = () => (
  <div className="bg-white rounded-2xl p-4 sm:p-8 w-full max-w-lg mx-auto shadow">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#373737]">Current prescription</h2>
      <button className="bg-[#23D1B4] rounded-xl w-10 h-10 flex items-center justify-center text-white text-2xl hover:bg-[#1bb39b] transition">
        <FaPlus />
      </button>
    </div>
    <div className="flex flex-col gap-4">
      {prescriptions.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center bg-[#EAF3F2] rounded-2xl p-4 gap-4"
        >
          <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center">
            {item.icon}
          </div>
          <div>
            <a href={item.link} className="text-[#6B6BD6] text-lg font-medium hover:underline">
              {item.name}
            </a>
            <div className="text-[#232323] text-base">{item.dosage}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Prescription;