import React from "react";

const Button = ({ children = "Appointment history", onClick }) => (
  <button
    className="bg-[#23D1B4] text-white text-xl font-normal rounded-full px-8 py-2 w-full max-w-xs"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;